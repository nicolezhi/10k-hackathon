#!/usr/bin/env python3
"""Local static server that also saves new creatives into people.js."""

import json
import re
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
    if not name or not city or not roles or not ID_RE.fullmatch(record_id):
        raise ValueError("Name, city, role, and id are required.")
    preferred = data.get("preferred") or ""
    if not isinstance(preferred, str):
        preferred = ""
    images = data.get("images") if isinstance(data.get("images"), list) else []
    return {
        "id": record_id,
        "name": name,
        "city": city,
        "also": strings(data.get("also")),
        "roles": roles,
        "secondary": strings(data.get("secondary")),
        "genres": strings(data.get("genres")),
        "tenk": False,
        "instagram": str(data.get("instagram") or ""),
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


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

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
