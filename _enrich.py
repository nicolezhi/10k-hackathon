#!/usr/bin/env python3
"""Fill roster cards from the Google Doc cities and public Instagram embeds."""

import json
import re
import ssl
import time
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path("/Users/nicolezhi/Desktop/Warner ETA/hackathon10k")
DOC = ROOT / ".roster.html"
PEOPLE_JS = ROOT / "people.js"
PHOTOS = ROOT / "photos"

UA = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
CTX = ssl.create_default_context()

ROLE_WORDS = (
    "photograph",
    "videograph",
    "director",
    "model",
    "assistant",
    "stylist",
    "gaffer",
    "lighting",
    "casting",
    "makeup",
    "choreograph",
    "graphic",
    "animator",
    "colorist",
    "editor",
    " dp",
    "dps",
)

REGION_CITY = {
    "nyc": "New York",
    "la": "Los Angeles",
    "chicago": "Chicago",
    "boston": "Boston",
    "austin": "Austin",
    "minneapolis": "Minneapolis",
    "england": "England",
    "ireland": "Ireland",
    "paris": "Paris",
    "madrid": "Madrid",
    "barcelona": "Barcelona",
    "glasgow": "Glasgow",
    "germany": "Germany",
    "denmark": "Denmark",
    "netherlands": "Netherlands",
    "switzerland": "Switzerland",
    "belguim": "Brussels",
    "belgium": "Brussels",
    "czech republic": "Czech Republic",
    "norway": "Norway",
    "poland": "Poland",
    "finland": "Finland",
    "sweden": "Sweden",
    "portagul": "Portugal",
    "portugal": "Portugal",
    "sydney, australia": "Sydney",
    "mexico city": "Mexico City",
    "accra, ghana": "Accra",
    "everywhere": "Remote",
}

PLACE_IN_NAME = [
    ("south shore", None),
    ("london", "London"),
    ("brighton", "Brighton"),
    ("bristol", "Bristol"),
    ("brum", "Birmingham"),
    ("birmingham", "Birmingham"),
    ("galway", "Galway"),
    ("cologne", "Cologne"),
    ("copenhagen", "Copenhagen"),
    ("bergen", "Bergen"),
    ("oslo", "Oslo"),
    ("warsaw", "Warsaw"),
    ("helsinki", "Helsinki"),
    ("varberg", "Varberg"),
    ("porto", "Porto"),
    ("sydney", "Sydney"),
    ("mexico city", "Mexico City"),
    ("accra", "Accra"),
]

GENRE_PHRASE = {
    "Portrait": "portraits",
    "Concert": "concerts",
    "Events": "events",
    "Product": "product",
    "Club": "club portraits",
    "Lo-fi": "lo-fi work",
    "Film": "film portraits",
    "Fashion": "fashion",
    "Sports": "sports",
    "Music video": "music videos",
    "Album covers": "album covers",
}

ROLE_PHRASE = {
    "Photographer": "photographer",
    "Videographer / DP": "director of photography",
    "Director": "director",
    "Stylist": "stylist",
    "MUA": "makeup artist",
    "Gaffer": "gaffer",
    "Editor": "editor",
    "Model": "model",
    "Assistant": "assistant",
    "Casting director": "casting director",
    "Choreographer": "choreographer",
    "Graphic designer": "graphic designer",
    "Animator": "animator",
    "Colorist": "colorist",
}

MAKES_ROLES = {
    "Photographer",
    "Videographer / DP",
    "Director",
    "Graphic designer",
    "Animator",
    "Editor",
    "Colorist",
}

SKIP_HOSTS = (
    "instagram.com",
    "facebook.com",
    "fb.com",
    "fb.me",
    "twitter.com",
    "x.com",
    "tiktok.com",
    "youtube.com",
    "youtu.be",
    "threads.net",
    "google.com",
    "gstatic.com",
    "cdninstagram.com",
    "spotify.com",
    "music.apple.com",
    "apple.co",
)

EMAIL_RE = re.compile(r"[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}", re.I)
URL_RE = re.compile(r"https?://[^\s)>\]]+", re.I)
PHONE_RE = re.compile(r"(?:\+\d{1,3}[\s.\-]?)?(?:\(\d{3}\)|\d{3})[\s.\-]\d{3}[\s.\-]\d{4}")


def handle_from_href(href):
    href = href.replace("&amp;", "&")
    query = urllib.parse.parse_qs(urllib.parse.urlparse(href).query).get("q", [""])[0]
    query = urllib.parse.unquote(query)
    match = re.search(r"instagram\.com/([^/?#]+)", query, re.I)
    if not match:
        return None
    user = urllib.parse.unquote(match.group(1)).strip().strip("/")
    if not user or user.lower() in {"p", "reel", "reels", "stories", "explore"}:
        return None
    return user


class DocParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.lines = [[]]

    def _break(self):
        if self.lines[-1]:
            self.lines.append([])

    def handle_starttag(self, tag, attrs):
        if tag in {"p", "li", "h1", "h2", "h3", "tr"}:
            self._break()
        if tag == "br":
            self._break()
        if tag == "a":
            handle = handle_from_href(dict(attrs).get("href") or "")
            if handle:
                self.lines[-1].append(("ig", handle))

    def handle_endtag(self, tag):
        if tag in {"p", "li", "h1", "h2", "div", "tr"}:
            self._break()

    def handle_data(self, data):
        text = " ".join(data.split())
        if text:
            self.lines[-1].append(("t", text))


def is_role(label):
    low = f" {label.lower()} "
    return any(word in low for word in ROLE_WORDS)


def place_in_text(text):
    low = text.lower()
    for key, city in PLACE_IN_NAME:
        if key in low and city:
            return city
    return None


def region_city(region):
    return REGION_CITY.get(region.strip().lower(), region.strip())


def parse_doc(path):
    parser = DocParser()
    parser.feed(path.read_text(errors="ignore"))
    region = ""
    role = ""
    found = {}
    for parts in parser.lines:
        texts = [value for kind, value in parts if kind == "t"]
        handles = []
        for kind, value in parts:
            if kind == "ig" and value not in handles:
                handles.append(value)
        line = " ".join(texts).strip()
        if not line and not handles:
            continue
        if line.endswith(":") and not handles:
            label = line[:-1].strip()
            if is_role(label):
                role = label
            elif not label.startswith("("):
                region = label
                role = ""
            continue
        if line.startswith("(") or "check those" in line.lower():
            continue
        if not handles and not role:
            continue
        core = re.sub(r"\([^)]*\)", " ", line)
        core = re.sub(r"\s*[-–:]\s*(#\s*\+\s*)?(IG|Ig)?\s*$", "", core).strip(" -:")
        specific = ""
        if "," in core:
            specific = place_in_text(core.split(",", 1)[1]) or ""
        city = specific or (region_city(region) if region else "")
        for handle in handles or [""]:
            if not handle:
                continue
            key = handle.lower()
            bucket = found.setdefault(key, [])
            if city and city not in bucket:
                bucket.append(city)
    return found


def join_phrase(items):
    items = [item for item in items if item]
    if not items:
        return ""
    if len(items) == 1:
        return items[0]
    if len(items) == 2:
        return f"{items[0]} and {items[1]}"
    return ", ".join(items[:-1]) + f", and {items[-1]}"


def make_bio(person, city):
    genres = []
    for genre in person.get("genres") or []:
        phrase = GENRE_PHRASE.get(genre, genre.lower())
        if phrase not in genres:
            genres.append(phrase)
    place = f" in {city}" if city and city != "Remote" else ""
    if genres and any(role in MAKES_ROLES for role in person.get("roles") or []):
        return f"Makes {join_phrase(genres)}{place}."
    roles = []
    for role in person.get("roles") or []:
        phrase = ROLE_PHRASE.get(role, role.lower())
        if phrase not in roles:
            roles.append(phrase)
    if not roles:
        return ""
    subject = join_phrase(roles)
    subject = subject[:1].upper() + subject[1:]
    if place:
        return f"{subject} based{place}."
    return f"{subject}."


def fetch(url, referer=None, timeout=25):
    headers = {"User-Agent": UA, "Accept-Language": "en-US,en;q=0.9"}
    if referer:
        headers["Referer"] = referer
    request = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(request, timeout=timeout, context=CTX) as response:
        return response.read(), response.headers.get("Content-Type", "")


def parse_embed(html):
    match = re.search(r'"contextJSON":"(.*?)"\}\]\]', html)
    if not match:
        return None
    payload = json.loads(json.loads(f'"{match.group(1)}"'))
    context = payload.get("context") or {}
    shots = []
    emails = []
    sites = []
    phones = []
    for item in context.get("graphql_media") or []:
        media = item.get("shortcode_media") or {}
        url = None
        children = (media.get("edge_sidecar_to_children") or {}).get("edges") or []
        for child in children:
            node = child.get("node") or {}
            if not node.get("is_video") and node.get("display_url"):
                url = node["display_url"]
                break
        if not url and not media.get("is_video"):
            url = media.get("display_url")
        if not url:
            url = media.get("display_url")
        if url:
            shots.append(url)
        for edge in (media.get("edge_media_to_caption") or {}).get("edges") or []:
            text = (edge.get("node") or {}).get("text") or ""
            emails.extend(EMAIL_RE.findall(text))
            for raw in URL_RE.findall(text):
                clean = raw.rstrip(".,)")
                host = urllib.parse.urlparse(clean).netloc.lower().lstrip("www.")
                if host and not any(skip in host for skip in SKIP_HOSTS):
                    sites.append(clean)
            phones.extend(PHONE_RE.findall(text))
    avatar = context.get("profile_pic_url") or ""
    avatar = re.sub(r"stp=dst-jpg_s\d+x\d+", "stp=dst-jpg_s320x320", avatar)
    return {
        "avatar": avatar,
        "images": shots[:3],
        "email": emails[0] if emails else "",
        "portfolio": sites[0] if sites else "",
        "phone": re.sub(r"\s+", " ", phones[0]).strip() if phones else "",
        "private": False,
    }


def safe_handle(handle):
    return re.sub(r"[^A-Za-z0-9._-]", "_", handle)


def save_image(url, dest):
    if dest.exists() and dest.stat().st_size > 800:
        return True
    dest.parent.mkdir(parents=True, exist_ok=True)
    try:
        data, content_type = fetch(url, referer="https://www.instagram.com/")
    except Exception:
        return False
    if len(data) < 800 or data[:1] not in (b"\xff", b"\x89", b"R"):
        if not content_type.startswith("image/") and not data.startswith(b"\xff\xd8") and not data.startswith(b"\x89PNG"):
            return False
    dest.write_bytes(data)
    return True


def enrich_handle(handle):
    url = f"https://www.instagram.com/{urllib.parse.quote(handle)}/embed/"
    last_error = ""
    for attempt in range(3):
        try:
            body, _ = fetch(url)
            parsed = parse_embed(body.decode("utf-8", "ignore"))
            if parsed:
                return handle, parsed, ""
            last_error = "no profile"
        except Exception as error:
            last_error = str(error)
        time.sleep(0.6 * (attempt + 1))
    return handle, None, last_error


def main():
    cities_by_handle = parse_doc(DOC)
    raw = PEOPLE_JS.read_text()
    blob = raw[raw.index("[") : raw.rindex("]") + 1]
    blob = re.sub(r",(\s*)]", r"\1]", blob)
    people = json.loads(blob)
    by_handle = {}
    for person in people:
        handle = (person.get("instagram") or "").strip()
        if not handle:
            continue
        by_handle.setdefault(handle.lower(), []).append(person)
        listed = cities_by_handle.get(handle.lower()) or []
        if listed:
            person["city"] = listed[0]
            extra = [city for city in listed[1:] if city != listed[0]]
            person["also"] = extra

    handles = sorted(by_handle)
    print(f"handles {len(handles)} doc matches {sum(1 for h in handles if h in cities_by_handle)}")
    missing_doc = [h for h in handles if h not in cities_by_handle]
    extra_doc = [h for h in cities_by_handle if h not in by_handle]
    print("missing from doc", missing_doc)
    print("doc handles not on roster", extra_doc)

    results = {}
    with ThreadPoolExecutor(max_workers=6) as pool:
        futures = [pool.submit(enrich_handle, handle) for handle in handles]
        done = 0
        for future in as_completed(futures):
            handle, parsed, error = future.result()
            done += 1
            results[handle] = (parsed, error)
            if done % 10 == 0 or done == len(handles):
                ok = sum(1 for value, _ in results.values() if value)
                print(f"fetched {done}/{len(handles)} ok {ok}", flush=True)

    saved = 0
    failed = []
    for handle, (parsed, error) in results.items():
        if not parsed:
            failed.append((handle, error))
            continue
        folder = PHOTOS / safe_handle(handle)
        avatar_path = ""
        if parsed["avatar"] and save_image(parsed["avatar"], folder / "avatar.jpg"):
            avatar_path = f"photos/{safe_handle(handle)}/avatar.jpg"
            saved += 1
        image_paths = []
        for index, url in enumerate(parsed["images"], start=1):
            dest = folder / f"{index}.jpg"
            if save_image(url, dest):
                image_paths.append(f"photos/{safe_handle(handle)}/{index}.jpg")
                saved += 1
        for person in by_handle[handle]:
            if avatar_path:
                person["avatar"] = avatar_path
            if image_paths:
                person["images"] = image_paths
            if parsed["email"] and not person.get("email"):
                person["email"] = parsed["email"]
            if parsed["portfolio"] and not person.get("portfolio"):
                person["portfolio"] = parsed["portfolio"]
            if parsed["phone"] and not person.get("phone"):
                person["phone"] = parsed["phone"]
            person["bio"] = make_bio(person, person.get("city") or "")

    for person in people:
        if not person.get("bio"):
            person["bio"] = make_bio(person, person.get("city") or "")

    lines = ["const PEOPLE = ["]
    for index, person in enumerate(people):
        comma = "," if index < len(people) - 1 else ""
        lines.append(json.dumps(person, ensure_ascii=False, separators=(",", ":")) + comma)
    lines.append("];")
    lines.append("")
    PEOPLE_JS.write_text("\n".join(lines))
    print(f"saved images {saved}")
    print(f"failed {len(failed)}")
    for handle, error in failed[:20]:
        print(" FAIL", handle, error)
    cities = sorted({person.get("city") for person in people if person.get("city")})
    print("cities", ", ".join(cities))
    with_photos = sum(1 for person in people if person.get("images"))
    with_avatar = sum(1 for person in people if person.get("avatar"))
    with_mail = sum(1 for person in people if person.get("email"))
    with_site = sum(1 for person in people if person.get("portfolio"))
    with_phone = sum(1 for person in people if person.get("phone"))
    print(f"avatars {with_avatar} photos {with_photos} email {with_mail} site {with_site} phone {with_phone}")


if __name__ == "__main__":
    main()
