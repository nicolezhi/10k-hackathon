#!/usr/bin/env python3
"""Local static server that also saves new creatives into people.js."""

import http.cookiejar
import json
import re
import ssl
import urllib.parse
import urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PEOPLE = ROOT / "people.js"
ID_RE = re.compile(r"^[a-z0-9-]{1,80}$")


def strings(value):
    if not isinstance(value, list):
        return []
    return [item for item in value if isinstance(item, str) and item.strip()]


def clean_record(data):
    if not isinstance(data, dict):
        raise ValueError("Expected an object.")
    name = str(data.get("name") or "").strip()
    city = str(data.get("city") or "").strip()
    roles = strings(data.get("roles"))
    record_id = str(data.get("id") or "").strip()
    instagram = str(data.get("instagram") or "").strip().lstrip("@")
    if not name or not ID_RE.fullmatch(record_id):
        raise ValueError("Name and id are required.")
    if not instagram and (not city or not roles):
        raise ValueError("Name, city, role, and id are required.")
    preferred = data.get("preferred") or ""
    if not isinstance(preferred, str):
        preferred = ""
    images = data.get("images") if isinstance(data.get("images"), list) else []
    record = {
        "id": record_id,
        "name": name,
        "city": city,
        "also": strings(data.get("also")),
        "roles": roles,
        "secondary": strings(data.get("secondary")),
        "genres": strings(data.get("genres")),
        "tenk": False,
        "instagram": instagram,
        "email": str(data.get("email") or ""),
        "phone": str(data.get("phone") or ""),
        "preferred": preferred,
        "referredBy": "",
        "rate": "",
        "compensation": "",
        "portfolio": str(data.get("portfolio") or ""),
        "bio": str(data.get("bio") or ""),
        "past": [],
        "avatar": str(data.get("avatar") or ""),
        "images": images,
    }
    if "workedWith" in data:
        record["workedWith"] = data.get("workedWith") is True
    return record


def insert_person(record):
    text = PEOPLE.read_text()
    needle = f'"id":"{record["id"]}"'
    if needle in text:
        return False
    end = text.rfind("\n];")
    if end < 0:
        raise ValueError("people.js is not a roster array.")
    head = text[:end].rstrip()
    tail = text[end:]
    if not head.endswith(","):
        head += ","
    line = "\n  " + json.dumps(record, ensure_ascii=False, separators=(",", ":"))
    PEOPLE.write_text(head + line + tail)
    return True


HANDLE_RE = re.compile(r"^[A-Za-z0-9._]{1,30}$")
EMAIL_RE = re.compile(r"[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}", re.I)
URL_RE = re.compile(r"https?://[^\s)>\]]+", re.I)
PHONE_RE = re.compile(r"(?:\+\d{1,3}[\s.\-]?)?(?:\(\d{3}\)|\d{3})[\s.\-]\d{3}[\s.\-]\d{4}")
SKIP_HOSTS = (
    "instagram.com",
    "facebook.com",
    "fb.com",
    "twitter.com",
    "x.com",
    "tiktok.com",
    "youtube.com",
    "youtu.be",
    "threads.net",
    "google.com",
    "cdninstagram.com",
    "spotify.com",
)
ROLE_CUES = (
    ("graphic designer", "Graphic designer"),
    ("graphic design", "Graphic designer"),
    ("videographer", "Videographer / DP"),
    ("cinematographer", "Videographer / DP"),
    ("director of photography", "Videographer / DP"),
    ("music video", "Videographer / DP"),
    ("photographer", "Photographer"),
    ("photography", "Photographer"),
    ("stylist", "Stylist"),
    ("model", "Model"),
)
GENRE_CUES = {
    "Photographer": (("concert", "Concert"), ("event", "Events"), ("portrait", "Portrait")),
    "Videographer / DP": (("music video", "Music video"), ("concert", "Concert"), ("event", "Events"), ("portrait", "Portrait")),
    "Stylist": (("hair", "Hair"), ("wardrobe", "Wardrobe")),
}
THEME_CUES = (
    ("music video", "music videos"),
    ("campaign", "campaign stills"),
    ("concert", "concerts"),
    ("portrait", "portraits"),
    ("fashion", "fashion"),
    ("editorial", "editorial"),
    ("wedding", "weddings"),
)
CITY_CUES = (
    ("los angeles", "Los Angeles"),
    ("new york", "New York"),
    ("brooklyn", "New York"),
    ("manhattan", "New York"),
    ("nyc", "New York"),
    ("atlanta", "Atlanta"),
    ("london", "London"),
    ("memphis", "Memphis"),
    ("brussels", "Brussels"),
    ("paris", "Paris"),
    ("cologne", "Cologne"),
    ("chicago", "Chicago"),
    ("boston", "Boston"),
    ("austin", "Austin"),
    ("minneapolis", "Minneapolis"),
    ("brighton", "Brighton"),
    ("bristol", "Bristol"),
    ("birmingham", "Birmingham"),
    ("galway", "Galway"),
    ("ireland", "Ireland"),
    ("madrid", "Madrid"),
    ("barcelona", "Barcelona"),
    ("glasgow", "Glasgow"),
    ("germany", "Germany"),
    ("copenhagen", "Copenhagen"),
    ("denmark", "Denmark"),
    ("netherlands", "Netherlands"),
    ("switzerland", "Switzerland"),
    ("czech republic", "Czech Republic"),
    ("bergen", "Bergen"),
    ("oslo", "Oslo"),
    ("warsaw", "Warsaw"),
    ("helsinki", "Helsinki"),
    ("finland", "Finland"),
    ("sweden", "Sweden"),
    ("varberg", "Varberg"),
    ("porto", "Porto"),
    ("portugal", "Portugal"),
    ("sydney", "Sydney"),
    ("mexico city", "Mexico City"),
    ("accra", "Accra"),
)
ROLE_PHRASE = {
    "Photographer": "photographer",
    "Videographer / DP": "videographer",
    "Stylist": "stylist",
    "Model": "model",
    "Graphic designer": "graphic designer",
}


def join_phrase(items):
    items = [item for item in items if item]
    if not items:
        return ""
    if len(items) == 1:
        return items[0]
    if len(items) == 2:
        return f"{items[0]} and {items[1]}"
    return ", ".join(items[:-1]) + f", and {items[-1]}"


def suggest_bio(name, roles, city, themes):
    who = name.strip() or "This creative"
    phrases = [ROLE_PHRASE[role] for role in roles if role in ROLE_PHRASE]
    if len(phrases) >= 2:
        role_text = f"{phrases[0]} and {phrases[1]}"
    else:
        role_text = phrases[0] if phrases else ""
    place = f" based in {city}" if city else ""
    if role_text:
        line = f"{who} is a {role_text}{place}."
    elif place:
        line = f"{who} is{place}."
    else:
        line = f"{who} shares work on Instagram."
    if themes:
        line += f" Recent work includes {join_phrase(themes)}."
    return line


def cue_count(text, needle):
    return len(re.findall(rf"(?<![a-z]){re.escape(needle)}s?(?![a-z])", text))


def ranked(text, cues):
    found = []
    for needle, label in cues:
        if cue_count(text, needle) and label not in found:
            found.append(label)
    return found


def city_from_bio(text):
    low = (text or "").lower()
    found = []
    for needle, label in CITY_CUES:
        match = re.search(rf"(?<![a-z]){re.escape(needle)}s?(?![a-z])", low)
        if match:
            found.append((match.start(), -len(needle), label))
    if not found:
        return ""
    found.sort()
    return found[0][2]


def clean_site(raw):
    raw = str(raw or "").strip().rstrip(".,);]")
    if not raw or "@" in raw.split("/", 1)[0]:
        return ""
    if raw.lower().startswith("www."):
        raw = "https://" + raw
    elif not raw.lower().startswith("http"):
        raw = "https://" + raw
    parsed = urllib.parse.urlparse(raw)
    host = parsed.netloc.lower().lstrip("www.")
    if not host or "." not in host or any(skip in host for skip in SKIP_HOSTS):
        return ""
    return raw


def portfolio_from_bio(text):
    found = []
    blob = text or ""
    candidates = URL_RE.findall(blob)
    candidates += re.findall(r"(?<![\w@/])((?:[a-z0-9-]+\.)+[a-z]{2,}(?:/[^\s<>]*)?)", blob, re.I)
    for raw in candidates:
        site = clean_site(raw)
        if site and site not in found:
            found.append(site)
    return found[0] if found else ""


def biography_from_html(html):
    decoder = json.JSONDecoder()
    index = 0
    marker = '"biography":'
    while True:
        found = html.find(marker, index)
        if found < 0:
            return ""
        try:
            value, end = decoder.raw_decode(html, found + len(marker))
        except json.JSONDecodeError:
            index = found + len(marker)
            continue
        if isinstance(value, str) and value.strip():
            return value.strip()
        index = end


def fetch_profile_details(handle):
    url = f"https://www.instagram.com/{urllib.parse.quote(handle)}/"
    cookies = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(
        urllib.request.HTTPCookieProcessor(cookies),
        urllib.request.HTTPSHandler(context=ssl.create_default_context()),
    )
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
            "Accept-Language": "en",
        },
    )
    try:
        with opener.open(request, timeout=12) as response:
            html = response.read().decode("utf-8", "ignore")
    except Exception:
        return {"biography": "", "portfolio": ""}
    biography = biography_from_html(html)
    portfolio = portfolio_from_bio(biography)
    found = re.search(
        r'"queryID":"(\d+)","variables":\{"id":"(\d+)".{0,400}?"queryName":"PolarisLoggedOutMobileProfileRootQuery"',
        html,
    )
    lsd = re.search(r'"LSD",\[\],\{"token":"([^"]+)"', html)
    if not found or not lsd:
        return {"biography": biography, "portfolio": portfolio}
    variables = {
        "id": found.group(2),
        "is_crawler": True,
        "location_id": None,
        "shared_entity_id": found.group(2),
        "shid": None,
        "should_enable_highlights_tray": False,
        "should_include_related_media": False,
        "should_show_bio_links_for_crawler": True,
        "should_show_threads_badge": False,
        "skip_dialog": False,
    }
    csrf = next((cookie.value for cookie in cookies if cookie.name == "csrftoken"), "")
    body = urllib.parse.urlencode({
        "av": "0",
        "__user": "0",
        "__a": "1",
        "fb_api_caller_class": "RelayModern",
        "fb_api_req_friendly_name": "PolarisLoggedOutMobileProfileRootQuery",
        "variables": json.dumps(variables),
        "server_timestamps": "true",
        "doc_id": found.group(1),
        "lsd": lsd.group(1),
    }).encode()
    follow = urllib.request.Request(
        "https://www.instagram.com/api/graphql",
        data=body,
        headers={
            "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-CSRFToken": csrf,
            "X-FB-LSD": lsd.group(1),
            "X-IG-App-ID": "936619743392459",
            "Referer": url,
            "Accept": "*/*",
        },
    )
    try:
        with opener.open(follow, timeout=12) as response:
            payload = json.loads(response.read().decode("utf-8", "ignore"))
    except Exception:
        return {"biography": biography, "portfolio": portfolio}
    user = ((payload.get("data") or {}).get("xig_user_by_igid_v2")) or {}
    if isinstance(user.get("biography"), str) and user["biography"].strip():
        biography = user["biography"].strip()
    for link in user.get("bio_links") or []:
        if not isinstance(link, dict):
            continue
        site = clean_site(link.get("url") or "")
        if site:
            portfolio = site
            break
    if not portfolio:
        portfolio = portfolio_from_bio(biography)
    return {"biography": biography, "portfolio": portfolio}


def lookup_profile(handle):
    url = f"https://www.instagram.com/{urllib.parse.quote(handle)}/embed/"
    request = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0", "Accept-Language": "en-US,en;q=0.9"},
    )
    with urllib.request.urlopen(request, timeout=12, context=ssl.create_default_context()) as response:
        html = response.read().decode("utf-8", "ignore")
    match = re.search(r'"contextJSON":"(.*?)"\}\]\]', html)
    if not match:
        raise ValueError("no profile")
    payload = json.loads(json.loads(f'"{match.group(1)}"'))
    context = payload.get("context") or {}
    captions = []
    images = []
    emails = []
    phones = []
    for item in context.get("graphql_media") or []:
        media = item.get("shortcode_media") or {}
        src = media.get("display_url") or ""
        shortcode = media.get("shortcode") or ""
        if src:
            images.append({
                "src": src,
                "href": f"https://www.instagram.com/p/{shortcode}/" if shortcode else "",
            })
        for edge in (media.get("edge_media_to_caption") or {}).get("edges") or []:
            text = (edge.get("node") or {}).get("text") or ""
            if text:
                captions.append(text)
            emails.extend(EMAIL_RE.findall(text))
            phones.extend(PHONE_RE.findall(text))
    profile = fetch_profile_details(handle)
    biography = profile["biography"]
    blob = "\n".join(captions).lower()
    roles = ranked(blob, ROLE_CUES)
    city = city_from_bio(biography)
    genres = []
    if roles:
        for needle, label in GENRE_CUES.get(roles[0], ()):
            if needle in blob and label not in genres:
                genres.append(label)
    secondary_genres = []
    if len(roles) > 1:
        for needle, label in GENRE_CUES.get(roles[1], ()):
            if needle in blob and label not in secondary_genres:
                secondary_genres.append(label)
    themes = ranked(blob, THEME_CUES)[:3]
    name = str(context.get("full_name") or "").strip()
    return {
        "ok": True,
        "name": name,
        "instagram": handle,
        "city": city,
        "role": roles[0] if roles else "",
        "genres": genres,
        "secondary": roles[1] if len(roles) > 1 else "",
        "secondaryGenres": secondary_genres,
        "bio": suggest_bio(name, roles[:2], city, themes),
        "email": emails[0] if emails else "",
        "phone": re.sub(r"\s+", " ", phones[0]).strip() if phones else "",
        "portfolio": profile["portfolio"],
        "avatar": context.get("profile_pic_url") or "",
        "images": images[:6],
    }


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

    def json_response(self, status, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        path = self.path.split("?", 1)[0]
        if path != "/api/instagram":
            super().do_GET()
            return
        query = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
        handle = (query.get("handle") or [""])[0].strip().lstrip("@")
        if not HANDLE_RE.fullmatch(handle):
            self.json_response(400, {"ok": False, "error": "Enter an Instagram profile link."})
            return
        try:
            self.json_response(200, lookup_profile(handle))
        except Exception:
            self.json_response(404, {"ok": False, "error": "Couldn't read that profile."})

    def do_POST(self):
        if self.path.split("?", 1)[0] != "/api/people":
            self.send_error(404)
            return
        length = int(self.headers.get("Content-Length") or 0)
        raw = self.rfile.read(length) if length else b""
        try:
            record = clean_record(json.loads(raw.decode("utf-8")))
            created = insert_person(record)
        except (ValueError, json.JSONDecodeError, OSError) as error:
            body = json.dumps({"ok": False, "error": str(error)}).encode("utf-8")
            self.send_response(400)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        body = json.dumps({"ok": True, "created": created}).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    import os

    os.chdir(ROOT)
    ThreadingHTTPServer(("127.0.0.1", 8080), Handler).serve_forever()
