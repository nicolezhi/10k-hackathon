const ROLES = [
  { name: "Photographer", icon: "photo_camera", line: "Stills, portraits, and the day of the shoot", tint: "#e7f0fb" },
  { name: "Videographer / DP", icon: "videocam", line: "Camera, coverage, and the moving image", tint: "#fde8ea" },
  { name: "Director", icon: "movie", line: "Calls the shots and shapes the piece", tint: "#f3e8fb" },
  { name: "Stylist", icon: "checkroom", line: "Wardrobe, looks, and what goes on camera", tint: "#fde8f3" },
  { name: "Set designer", icon: "chair", line: "Builds the room the shoot lives in", tint: "#f8efe4" },
  { name: "MUA", icon: "brush", line: "Makeup, glam, and the face on camera", tint: "#fdecef" },
  { name: "Gaffer", icon: "lightbulb", line: "Lights the set and sets the mood", tint: "#fff4d6" },
  { name: "Editor", icon: "content_cut", line: "Cuts the footage into the finished piece", tint: "#e7f6ee" },
  { name: "Designer", icon: "palette", line: "Graphics, layouts, and the look of it", tint: "#e7f3ff" },
  { name: "Animator", icon: "animation", line: "Motion, type, and things that move", tint: "#f4e9ff" },
  { name: "Model", icon: "person", line: "On camera for the shoot", tint: "#fdecef" },
  { name: "Assistant", icon: "badge", line: "Supports the photographer on set", tint: "#eef2f6" },
  { name: "Casting director", icon: "recent_actors", line: "Finds the faces for the piece", tint: "#f3e8fb" },
  { name: "Choreographer", icon: "directions_run", line: "Movement and performance", tint: "#fff4d6" },
  { name: "Graphic designer", icon: "draw", line: "Covers, layouts, and graphics", tint: "#e7f3ff" },
  { name: "Colorist", icon: "contrast", line: "Color for the finished picture", tint: "#f8efe4" },
];

const CITIES = [
  { name: "Los Angeles", icon: "wb_sunny", line: "Music and fashion days on the west coast", tint: "#fff4d6", place: "Los Angeles, CA", at: [34.0522, -118.2437] },
  { name: "New York", icon: "apartment", line: "Fashion, editorial, and set days", tint: "#e7f0fb", place: "New York, NY", at: [40.7128, -74.006] },
  { name: "Atlanta", icon: "park", line: "The deeper bench next to Memphis", tint: "#e7f6ee", place: "Atlanta, GA", at: [33.749, -84.388] },
  { name: "London", icon: "account_balance", line: "Crews for a UK shoot", tint: "#f3e8fb", place: "London, UK", at: [51.5074, -0.1278] },
  { name: "Memphis", icon: "music_note", line: "A thinner market. Atlanta is close", tint: "#fde8ea", place: "Memphis, TN", at: [35.1495, -90.049] },
  { name: "Brussels", icon: "location_city", line: "Paris and Cologne are a short trip", tint: "#f8efe4", place: "Brussels, BE", at: [50.8503, 4.3517] },
  { name: "Paris", icon: "museum", line: "Film and fashion, close to Brussels", tint: "#fde8f3", place: "Paris, FR", at: [48.8566, 2.3522] },
  { name: "Cologne", icon: "church", line: "Lighting and crew, close to Brussels and Paris", tint: "#e7f3ff", place: "Cologne, DE", at: [50.9375, 6.9603] },
  { name: "Remote", icon: "public", line: "Anywhere. Editors, designers, and animators", tint: "#eef2f6", place: "Remote", at: null },
];

const NEARBY = {
  Memphis: ["Atlanta"],
  Atlanta: ["Memphis"],
  Brussels: ["Paris", "Cologne"],
  Paris: ["Brussels", "Cologne"],
  Cologne: ["Brussels", "Paris"],
};

const NEARBY_NOTE = {
  Brussels: "Paris and Cologne are less than 2 hours from Brussels. Check those too.",
  Paris: "Brussels and Cologne are close enough to check for the same shoot.",
  Cologne: "Brussels and Paris are close enough to check for the same shoot.",
  Memphis: "Memphis is a thin market. Atlanta is the next place this roster has depth.",
  Atlanta: "If Atlanta is short, Memphis is the other city already on this list.",
};

function person(id, name, city, also, roles, genres, tenk, extra) {
  return { id, name, city, also, roles, genres, tenk, ...extra };
}

const STOPWORDS = new Set([
  "a", "an", "the", "in", "on", "for", "of", "and", "or", "to", "with",
  "who", "are", "top", "like", "near", "me", "we", "need", "asap",
  "creators", "creator", "talent", "freelancer", "freelancers", "people",
  "someone", "shoot", "shoots", "based",
]);

const PHRASES = [
  ["new york", "new york"],
  ["nyc", "new york"],
  ["los angeles", "los angeles"],
  ["film photography", "film photography"],
  ["set design", "set designer"],
  ["production design", "set designer"],
  ["director of photography", "dp"],
  ["videographer", "dp"],
  ["make-up", "mua"],
  ["makeup", "mua"],
  ["wardrobe", "stylist"],
];

const WORD_ALIASES = {
  ny: "new york",
  la: "los angeles",
  atl: "atlanta",
  ldn: "london",
  anywhere: "remote",
  dp: "dp",
  photographer: "photographer",
  photo: "photographer",
  stylist: "stylist",
  mua: "mua",
  gaffer: "gaffer",
  lighting: "gaffer",
  editor: "editor",
  designer: "designer",
  animator: "animator",
  director: "director",
  unpaid: "unpaid",
  trade: "trade",
  promo: "promo",
};

const state = {
  query: "",
  city: "",
  extraCities: [],
  roles: [],
  genres: [],
  tenk: false,
  profile: "",
};

let skipUrl = false;

function blob(record) {
  const past = (record.past || []).map((item) => `${item.artist} ${item.project} ${item.role}`).join(" ");
  return [
    record.name,
    record.city,
    ...(record.also || []),
    ...record.roles,
    ...record.genres,
    record.bio,
    record.instagram,
    record.compensation,
    record.rate,
    record.referredBy,
    past,
    record.tenk ? "10k" : "",
  ]
    .join(" ")
    .toLowerCase();
}

function tokensFrom(query) {
  let text = query.toLowerCase();
  PHRASES.forEach(([from, to]) => {
    text = text.replaceAll(from, to);
  });
  const raw = text
    .split(/[^a-z0-9+]+/)
    .filter(Boolean)
    .map((token) => WORD_ALIASES[token] || token);
  const useful = raw.filter((token) => !STOPWORDS.has(token));
  return useful.length ? useful : [];
}

function matchesQuery(record, tokens) {
  if (!tokens.length) return true;
  const haystack = blob(record);
  return tokens.every((token) => haystack.includes(token));
}

function activeCities() {
  return [state.city, ...state.extraCities].filter(Boolean);
}

function filteredPeople() {
  const tokens = tokensFrom(state.query);
  const cities = activeCities();
  return PEOPLE.filter((record) => {
    if (cities.length && !cities.includes(record.city)) return false;
    if (state.roles.length && !state.roles.some((role) => record.roles.includes(role))) return false;
    if (state.genres.length && !state.genres.some((genre) => record.genres.includes(genre))) return false;
    if (state.tenk && !record.tenk) return false;
    return matchesQuery(record, tokens);
  });
}

function hitLine(record) {
  const tokens = tokensFrom(state.query);
  if (!tokens.length) return "";
  for (const project of record.past || []) {
    const line = `${project.role} for ${project.artist}`;
    const found = tokens.some((token) => `${line} ${project.project}`.toLowerCase().includes(token));
    if (found) return line;
  }
  return "";
}

function summaryText(list) {
  if (!isResultsPage()) return PEOPLE.length ? "Ready for the next shoot." : "";
  const parts = [];
  if (state.roles.length) parts.push(state.roles.join(", "));
  const cities = activeCities();
  if (cities.length) parts.push(cities.join(" and "));
  if (state.genres.length) parts.push(state.genres.join(", "));
  if (state.tenk) parts.push("10K projects");
  if (state.query.trim()) parts.push(`“${state.query.trim()}”`);
  if (!parts.length) return PEOPLE.length ? "Everyone on the roster." : "";
  return parts.join(" · ");
}

function initials(name) {
  const parts = name.replace(/[,&]/g, " ").split(/\s+/).filter(Boolean);
  if (!parts.length) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function avatarHtml(record, className) {
  if (record.avatar) return `<img class="${className}" src="${escapeHtml(record.avatar)}" alt="" />`;
  return `<span class="${className} avatar-fallback">${escapeHtml(initials(record.name))}</span>`;
}

function instagramIcon() {
  return `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg>`;
}

function externalControl(className, label, href, inner) {
  if (href) {
    return `<a class="${className}" href="${escapeHtml(href)}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(label)}">${inner}</a>`;
  }
  return `<span class="${className}" aria-label="${escapeHtml(label)}">${inner}</span>`;
}

function pluralRole(role, count) {
  if (count === 1) return role;
  if (role === "MUA") return "MUAs";
  return role.endsWith("s") ? role : `${role}s`;
}

function resultsHeading(list) {
  const noun = state.roles.length === 1 ? pluralRole(state.roles[0], list.length) : list.length === 1 ? "creative" : "creatives";
  const place = state.city || activeCities().join(" and ");
  return place ? `${list.length} ${noun} in ${place}` : `${list.length} ${noun}`;
}

function cityRecord(name) {
  return CITIES.find((city) => city.name === name);
}

function tinyIcon(path) {
  return `<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">${path}</svg>`;
}

function renderMapResults(list) {
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const title = document.getElementById("results-title");
  if (title) title.textContent = resultsHeading(list);
  document.getElementById("summary").textContent = "Hover a card to find them on the map. Click the card to open their profile.";
  document.getElementById("count").textContent = "";
  empty.hidden = list.length !== 0;
  empty.textContent = PEOPLE.length ? "No one matches that yet." : "No creatives on the roster yet.";
  grid.innerHTML = "";

  list.forEach((record) => {
    const card = document.createElement("article");
    card.className = "result-card";
    card.tabIndex = 0;
    card.dataset.id = record.id;
    const city = cityRecord(record.city);
    const avatar = record.avatar || (record.images || []).find(Boolean) || "";
    const tags = (record.genres || []).join(" · ");
    const instagramHref = record.instagram ? `https://instagram.com/${record.instagram}` : "";
    const phoneHref = record.phone ? `tel:${record.phone}` : "";
    const mailHref = record.email ? `mailto:${record.email}` : "";
    card.innerHTML = `
      ${avatarHtml(record, "result-card_avatar")}
      <div class="result-card_body">
        <h3>${escapeHtml(record.name)}</h3>
        <p>${escapeHtml(record.roles.join(" · "))}</p>
        ${record.city ? `<p>${escapeHtml(city?.place || record.city)}</p>` : ""}
        ${tags ? `<p class="result-card_tags">${escapeHtml(tags)}</p>` : ""}
        <div class="result-card_icons">
          ${externalControl("mini-btn", "Instagram", instagramHref, tinyIcon('<rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="16.6" cy="7.4" r="0.9" fill="currentColor"/>'))}
          ${externalControl("mini-btn", "Portfolio", record.portfolio || "", tinyIcon('<circle cx="12" cy="12" r="7.2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 8.4v7.2M8.4 12h7.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'))}
          ${externalControl("mini-btn", "Phone", phoneHref, tinyIcon('<path d="M8 5.5h2.2l1 2.4-1.4 1.1a9 9 0 0 0 4.2 4.2l1.1-1.4 2.4 1V15a1.4 1.4 0 0 1-1.5 1.4A11.4 11.4 0 0 1 6.6 7 1.4 1.4 0 0 1 8 5.5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>'))}
          ${externalControl("mini-btn", "Email", mailHref, tinyIcon('<rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M5 7.5 12 12.5 19 7.5" fill="none" stroke="currentColor" stroke-width="1.7"/>'))}
        </div>
      </div>
    `;
    const open = () => openProfile(record.id);
    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      open();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") open();
    });
    card.addEventListener("mouseenter", () => highlightPin(record.id, true));
    card.addEventListener("mouseleave", () => highlightPin(record.id, false));
    grid.appendChild(card);
  });

  renderNearby(list);
  syncMap(list);
}

function renderNearby(list) {
  const nearby = document.getElementById("nearby");
  const suggestions = state.city ? NEARBY[state.city] || [] : [];
  const unused = suggestions.filter((city) => !state.extraCities.includes(city));
  if (state.city && list.length < 3 && unused.length && NEARBY_NOTE[state.city]) {
    nearby.hidden = false;
    nearby.innerHTML = "";
    nearby.append(document.createTextNode(NEARBY_NOTE[state.city]));
    const button = document.createElement("button");
    button.type = "button";
    button.className = "text-button";
    button.textContent = `Also show ${unused.join(" and ")}`;
    button.addEventListener("click", () => {
      state.extraCities = unused;
      render({ url: "replace" });
    });
    nearby.append(button);
  } else {
    nearby.hidden = true;
    nearby.innerHTML = "";
  }
}

let resultMap = null;
const resultMarkers = new Map();

function pinPoint(record, indexInCity, cityCount) {
  const city = cityRecord(record.city);
  if (!city?.at) return null;
  if (cityCount < 2) return city.at;
  const angle = (indexInCity / cityCount) * Math.PI * 2;
  return [city.at[0] + Math.sin(angle) * 0.035, city.at[1] + Math.cos(angle) * 0.045];
}

function syncMap(list) {
  const mount = document.getElementById("map");
  if (!mount || typeof L === "undefined") return;
  if (!resultMap) {
    resultMap = L.map(mount, { zoomControl: false, scrollWheelZoom: true });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
      maxZoom: 18,
    }).addTo(resultMap);
    L.control.zoom({ position: "topright" }).addTo(resultMap);
  }
  resultMarkers.forEach((marker) => marker.remove());
  resultMarkers.clear();
  const counts = {};
  list.forEach((record) => {
    counts[record.city] = (counts[record.city] || 0) + 1;
  });
  const seen = {};
  const points = [];
  list.forEach((record) => {
    const indexInCity = seen[record.city] || 0;
    seen[record.city] = indexInCity + 1;
    const point = pinPoint(record, indexInCity, counts[record.city] || 1);
    if (!point) return;
    const avatar = record.avatar || (record.images || []).find(Boolean) || "";
    const icon = L.divIcon({
      className: "map-pin",
      html: avatar ? `<img src="${escapeHtml(avatar)}" alt="" />` : `<span>${escapeHtml(initials(record.name))}</span>`,
      iconSize: [46, 46],
      iconAnchor: [23, 23],
    });
    const marker = L.marker(point, { icon, zIndexOffset: indexInCity }).addTo(resultMap);
    marker.on("click", () => openProfile(record.id));
    resultMarkers.set(record.id, marker);
    points.push(point);
  });
  const focus = state.city ? cityRecord(state.city)?.at : null;
  if (points.length === 1) resultMap.setView(points[0], 11);
  else if (points.length) resultMap.fitBounds(points, { padding: [48, 48], maxZoom: 11 });
  else if (focus) resultMap.setView(focus, 11);
  else resultMap.setView([39.5, -98.35], 4);
  requestAnimationFrame(() => resultMap.invalidateSize());
}

function highlightPin(id, on) {
  const marker = resultMarkers.get(id);
  const element = marker?.getElement();
  if (!element) return;
  element.classList.toggle("is-hot", on);
  marker.setZIndexOffset(on ? 1000 : 0);
}

function renderResults(list) {
  if (isResultsPage()) {
    renderMapResults(list);
    return;
  }
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  document.getElementById("summary").textContent = summaryText(list);
  document.getElementById("count").textContent = list.length === 1 ? "1 creative" : `${list.length} creatives`;
  empty.hidden = list.length !== 0;
  empty.textContent = PEOPLE.length ? "No one matches that yet." : "No creatives on the roster yet.";
  grid.innerHTML = "";

  list.forEach((record) => {
    const card = document.createElement("article");
    card.className = "card";
    const shots = (record.images || []).filter(Boolean).slice(0, 3);
    const instagramHref = record.instagram ? `https://instagram.com/${record.instagram}` : "";
    card.innerHTML = `
      <header class="card_top">
        ${avatarHtml(record, "card_avatar")}
        <div class="card_id">
          <h3>${escapeHtml(record.name)}</h3>
          <p class="card_roles">${escapeHtml(record.roles.join(" · "))}</p>
        </div>
      </header>
      ${shots.length ? `<div class="card_shots">${shots.map((src) => `<img src="${escapeHtml(src)}" alt="" />`).join("")}</div>` : ""}
      <div class="card_actions">
        ${externalControl("icon-btn", "Instagram", instagramHref, instagramIcon())}
        ${externalControl("pill-btn", "Portfolio", record.portfolio || "", "Portfolio")}
      </div>
      <button class="card_contact" type="button">Contact</button>
    `;
    card.querySelector(".card_contact").addEventListener("click", () => openProfile(record.id));
    grid.appendChild(card);
  });

  renderNearby(list);
}

function contactRows(record) {
  const rows = [];
  if (record.instagram) {
    rows.push({ key: "instagram", label: "Instagram", value: `@${record.instagram}`, action: "Open", href: `https://instagram.com/${record.instagram}` });
  }
  if (record.email) rows.push({ key: "email", label: "Email", value: record.email, action: "Copy" });
  if (record.phone) rows.push({ key: "phone", label: "Phone", value: record.phone, action: "Copy" });
  rows.sort((a, b) => (a.key === record.preferred ? -1 : b.key === record.preferred ? 1 : 0));
  return rows;
}

function introText(record) {
  const place = !record.city ? "for this shoot" : record.city === "Remote" ? "for a remote job" : `in ${record.city}`;
  return `Hi ${record.name.split(" ")[0]} — this is the 10K team. We have a ${record.roles[0].toLowerCase()} need ${place}, and your work looks like a fit. Are you free to talk timing and rate?`;
}

function renderProfile() {
  const root = document.getElementById("profile");
  const record = PEOPLE.find((item) => item.id === state.profile);
  document.body.dataset.view = record ? "profile" : "home";
  if (!record) {
    root.hidden = true;
    root.innerHTML = "";
    document.title = isResultsPage() ? "Search · 10K Roster" : "10K Roster";
    return;
  }

  root.hidden = false;
  document.title = `${record.name} · 10K Roster`;
  const projects = (record.past || []).length
    ? record.past
        .map(
          (item) =>
            `<div class="project"><strong>${escapeHtml(item.project)}</strong><span>${escapeHtml(item.role)}</span><span>${escapeHtml(item.artist)}</span></div>`
        )
        .join("")
    : "<p>No 10K projects on file yet.</p>";
  const also = (record.also || []).length ? ` Also works in ${record.also.join(", ")}.` : "";
  const place = record.city ? `${escapeHtml(record.city)}.${escapeHtml(also)}` : "";

  root.innerHTML = `
    <a class="back" href="#results">${isResultsPage() ? "Back to results" : "Back to roster"}</a>
    <header class="profile_head">
      <h1>${escapeHtml(record.name)}</h1>
      ${place ? `<p>${place}</p>` : ""}
      <ul class="tags">
        ${[...record.roles, ...(record.genres || [])].map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
        ${record.tenk ? '<li class="mark">10K</li>' : ""}
      </ul>
      ${record.referredBy ? `<p>Referred by ${escapeHtml(record.referredBy)}.</p>` : ""}
    </header>
    <div class="profile_layout">
      <div>
        <div class="work_grid">
          ${(record.images || []).map((src) => `<img src="${escapeHtml(src)}" alt="" onerror="this.remove()" />`).join("")}
        </div>
        <div class="links">
          ${record.portfolio ? `<a href="${escapeHtml(record.portfolio)}" target="_blank" rel="noreferrer">Portfolio</a>` : ""}
          ${record.instagram ? `<a href="https://instagram.com/${escapeHtml(record.instagram)}" target="_blank" rel="noreferrer">Instagram</a>` : ""}
        </div>
      </div>
      <div>
        <section>
          <h2>Past 10K projects</h2>
          ${projects}
        </section>
        ${record.compensation ? `<section><h2>Compensation notes</h2><p>${escapeHtml(record.compensation)}</p></section>` : ""}
        <section>
          <h2>Contact</h2>
          <div class="contact" id="contact"></div>
          <label class="sr" for="intro">Intro message</label>
          <textarea class="intro" id="intro" rows="4"></textarea>
          <button class="text-button" type="button" id="copy-intro">Copy intro message</button>
        </section>
      </div>
    </div>
  `;

  root.querySelector(".back").addEventListener("click", (event) => {
    event.preventDefault();
    closeProfile();
  });

  const contact = root.querySelector("#contact");
  contactRows(record).forEach((row) => {
    const line = document.createElement("div");
    line.className = "contact_row";
    const copy = document.createElement("div");
    copy.innerHTML = `<strong>${row.label}${row.key === record.preferred ? ' <span class="preferred">Preferred</span>' : ""}</strong>`;
    copy.append(document.createTextNode(row.value));
    const button = document.createElement("button");
    button.type = "button";
    button.className = "text-button";
    button.textContent = row.action;
    button.addEventListener("click", async () => {
      if (row.href) {
        window.open(row.href, "_blank", "noopener");
        return;
      }
      try {
        await navigator.clipboard.writeText(row.value);
        button.textContent = "Copied";
      } catch {
        button.textContent = "Select to copy";
      }
      setTimeout(() => {
        button.textContent = row.action;
      }, 1200);
    });
    line.append(copy, button);
    contact.append(line);
  });

  const intro = root.querySelector("#intro");
  intro.value = introText(record);
  root.querySelector("#copy-intro").addEventListener("click", async () => {
    const button = root.querySelector("#copy-intro");
    try {
      await navigator.clipboard.writeText(intro.value);
      button.textContent = "Copied";
    } catch {
      intro.focus();
      intro.select();
      button.textContent = "Select to copy";
    }
    setTimeout(() => {
      button.textContent = "Copy intro message";
    }, 1200);
  });
  window.scrollTo(0, 0);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

let openPanel = "";

function whereLabel() {
  const cities = activeCities().map((city) => (city === "Remote" ? "Remote / anywhere" : city));
  if (!cities.length) return "Search cities";
  if (cities.length === 1) return cities[0];
  return `${cities[0]} +${cities.length - 1}`;
}

function whoLabel() {
  if (!state.roles.length) return "Add a role";
  if (state.roles.length === 1) return state.roles[0];
  return `${state.roles[0]} +${state.roles.length - 1}`;
}

function pickButton(item, pressed) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "pick";
  button.setAttribute("aria-pressed", pressed ? "true" : "false");
  button.innerHTML = `
    <span class="pick-mark" style="--tint:${item.tint}" aria-hidden="true">
      <span class="material-symbols-outlined">${item.icon}</span>
    </span>
    <span class="pick-copy">
      <span class="pick-name">${escapeHtml(item.name)}</span>
      <span class="pick-line">${escapeHtml(item.line)}</span>
    </span>
  `;
  return button;
}

function renderWhereOptions() {
  const filter = document.getElementById("where-filter").value.trim().toLowerCase();
  const container = document.getElementById("where-options");
  const cities = CITIES.filter((city) => {
    if (!filter) return true;
    return `${city.name} ${city.line}`.toLowerCase().includes(filter);
  });
  container.innerHTML = "";
  if (!cities.length) {
    const empty = document.createElement("p");
    empty.className = "pick-empty";
    empty.textContent = "No city matches that.";
    container.append(empty);
    return;
  }
  cities.forEach((city) => {
    const button = pickButton(city, activeCities().includes(city.name));
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      state.city = state.city === city.name ? "" : city.name;
      state.extraCities = [];
      openPanel = "";
      document.getElementById("where-filter").value = "";
      render();
    });
    container.append(button);
  });
}

function renderWhoOptions() {
  const container = document.getElementById("who-options");
  container.innerHTML = "";
  ROLES.forEach((role) => {
    const button = pickButton(role, state.roles.includes(role.name));
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      state.roles = state.roles.includes(role.name)
        ? state.roles.filter((item) => item !== role.name)
        : [...state.roles, role.name];
      render();
    });
    container.append(button);
  });
}

function paintSearch() {
  const whereValue = document.getElementById("where-value");
  const whoValue = document.getElementById("who-value");
  whereValue.textContent = whereLabel();
  whoValue.textContent = whoLabel();
  whereValue.classList.toggle("is-set", Boolean(activeCities().length));
  whoValue.classList.toggle("is-set", state.roles.length > 0);
  document.getElementById("airbnb").dataset.open = openPanel;
  document.getElementById("where-panel").hidden = openPanel !== "where";
  document.getElementById("who-panel").hidden = openPanel !== "who";
  document.getElementById("where-segment").setAttribute("aria-expanded", String(openPanel === "where"));
  document.getElementById("who-segment").setAttribute("aria-expanded", String(openPanel === "who"));
  const clear = document.getElementById("where-clear");
  if (clear) clear.hidden = !state.city;
  renderWhereOptions();
  renderWhoOptions();
}

function setPanel(name) {
  openPanel = openPanel === name ? "" : name;
  paintSearch();
  if (openPanel === "where") document.getElementById("where-filter").focus();
}

function syncControls() {
  paintSearch();
}

function isResultsPage() {
  return document.body.dataset.page === "results";
}

function resultsQuery() {
  const params = new URLSearchParams();
  if (state.query) params.set("q", state.query);
  if (state.city) params.set("city", state.city);
  if (state.extraCities.length) params.set("near", state.extraCities.join(","));
  if (state.roles.length) params.set("roles", state.roles.join(","));
  if (state.genres.length) params.set("genres", state.genres.join(","));
  if (state.tenk) params.set("tenk", "1");
  const query = params.toString();
  return `results.html${query ? `?${query}` : ""}`;
}

function render(options = {}) {
  syncControls();
  if (!state.profile) renderResults(isResultsPage() ? filteredPeople() : PEOPLE);
  renderProfile();
  if (!skipUrl) {
    if (isResultsPage()) writeUrl(options.url || "replace");
    else if (state.profile || new URLSearchParams(location.search).has("person")) writeUrl(options.url || "replace");
  }
}

function writeUrl(mode) {
  const params = new URLSearchParams();
  if (state.query) params.set("q", state.query);
  if (state.city) params.set("city", state.city);
  if (state.extraCities.length) params.set("near", state.extraCities.join(","));
  if (state.roles.length) params.set("roles", state.roles.join(","));
  if (state.genres.length) params.set("genres", state.genres.join(","));
  if (state.tenk) params.set("tenk", "1");
  if (state.profile) params.set("person", state.profile);
  const next = `${location.pathname}${params.toString() ? `?${params}` : ""}`;
  if (next === `${location.pathname}${location.search}`) return;
  if (mode === "push") history.pushState(null, "", next);
  else history.replaceState(null, "", next);
}

function readUrl() {
  const params = new URLSearchParams(location.search);
  state.query = params.get("q") || "";
  state.city = params.get("city") || "";
  state.extraCities = (params.get("near") || "").split(",").filter(Boolean);
  state.roles = (params.get("roles") || "").split(",").filter(Boolean);
  state.genres = (params.get("genres") || "").split(",").filter(Boolean);
  state.tenk = params.get("tenk") === "1";
  state.profile = params.get("person") || "";
}

function openProfile(id) {
  state.profile = id;
  render({ url: "push" });
}

function closeProfile() {
  const canGoBack = new URLSearchParams(location.search).has("person") && history.length > 1;
  state.profile = "";
  if (canGoBack) history.back();
  else render({ url: "replace" });
}

function bind() {
  document.getElementById("where-segment").addEventListener("click", () => setPanel("where"));
  document.getElementById("who-segment").addEventListener("click", () => setPanel("who"));
  const clearWhere = document.getElementById("where-clear");
  if (clearWhere) {
    clearWhere.addEventListener("click", (event) => {
      event.stopPropagation();
      state.city = "";
      state.extraCities = [];
      render();
    });
  }
  document.getElementById("where-filter").addEventListener("input", () => renderWhereOptions());
  document.addEventListener("click", (event) => {
    if (openPanel && !document.getElementById("airbnb").contains(event.target)) {
      openPanel = "";
      paintSearch();
    }
  });
  document.getElementById("search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const typed = document.getElementById("where-filter").value.trim().toLowerCase();
    if (typed) {
      const match = CITIES.find((city) => `${city.name} ${city.line}`.toLowerCase().includes(typed));
      if (match) {
        state.city = match.name;
        state.extraCities = [];
      }
    }
    state.profile = "";
    openPanel = "";
    document.getElementById("where-filter").value = "";
    if (!isResultsPage()) {
      location.href = resultsQuery();
      return;
    }
    render();
  });
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href") || "";
      if (!href.startsWith("#")) return;
      const id = href.slice(1);
      if (state.profile) {
        event.preventDefault();
        state.profile = "";
        render({ url: "push" });
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  window.addEventListener("popstate", () => {
    skipUrl = true;
    readUrl();
    render();
    skipUrl = false;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (document.getElementById("project-modal") && !document.getElementById("project-modal").hidden) return;
    if (openPanel) {
      openPanel = "";
      paintSearch();
      return;
    }
    if (state.profile) closeProfile();
  });
}

PEOPLE.forEach((record) => {
  record.images = record.images || [];
});

bind();
readUrl();
render({ url: "replace" });
if (typeof initProjects === "function") initProjects({ people: PEOPLE, openProfile });
