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

const FILTER_ORDER = [
  "Photographer",
  "Videographer / DP",
  "Graphic designer",
  "Model",
  "Stylist",
  "MUA",
  "Casting director",
  "Choreographer",
  "Animator",
];

const FILTER_COPY = {
  Photographer: ["Photography", "All photography"],
  "Videographer / DP": ["Videography", "All videography"],
  "Graphic designer": ["Graphic design", "All graphic design"],
};

const state = {
  query: "",
  city: "",
  extraCities: [],
  roles: [],
  genres: [],
  roleGenres: {},
  genresScoped: false,
  tenk: false,
  profile: "",
};

let resultsView = "list";
let openFilterRole = "";

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
    if (state.roles.length) {
      const hit = state.roles.some((role) => {
        if (!record.roles.includes(role)) return false;
        const picked = state.roleGenres[role] || [];
        if (!picked.length) return true;
        return picked.some((genre) => (record.genres || []).includes(genre));
      });
      if (!hit) return false;
    }
    if (!state.genresScoped && state.genres.length && !state.genres.some((genre) => (record.genres || []).includes(genre))) return false;
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
  if (!isResultsPage()) return "";
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

function profileLink(label, href) {
  if (!href) return `<span>${label}</span>`;
  return `<a href="${escapeHtml(href)}" target="_blank" rel="noreferrer">${label}</a>`;
}

function profileLinksHtml(record) {
  return `<div class="links">
    ${profileLink("Instagram", record.instagram ? `https://instagram.com/${record.instagram}` : "")}
    ${profileLink("Portfolio", record.portfolio || "")}
    ${profileLink("Email", record.email ? `mailto:${record.email}` : "")}
    ${profileLink("Phone", record.phone ? `tel:${record.phone}` : "")}
  </div>`;
}

function workGridHtml(record) {
  const items = (record.images || [])
    .map((item) => (typeof item === "string" ? { src: item, href: "" } : item))
    .filter((item) => item && item.src)
    .slice(0, 6);
  if (!items.length) return "";
  return `<div class="work_grid">${items
    .map((item) => {
      const img = `<img src="${escapeHtml(item.src)}" alt="" />`;
      return item.href
        ? `<a href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">${img}</a>`
        : img;
    })
    .join("")}</div>`;
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

function copyControl(label, value, copied, inner) {
  if (!value) return `<span class="roster-icon is-empty" aria-label="${escapeHtml(label)}">${inner}</span>`;
  return `<button type="button" class="roster-icon copy-icon" data-copy="${escapeHtml(value)}" data-copied="${escapeHtml(copied)}" aria-label="${escapeHtml(label)}">${inner}<span class="copy-tip" role="tooltip">${escapeHtml(value)}</span></button>`;
}

function copyContact(button) {
  const value = button.dataset.copy || "";
  const tip = button.querySelector(".copy-tip");
  const done = () => {
    if (tip) tip.textContent = button.dataset.copied || "Copied";
    button.classList.add("is-copied");
    window.clearTimeout(button._copyTimer);
    button._copyTimer = window.setTimeout(() => {
      if (tip) tip.textContent = value;
      button.classList.remove("is-copied");
    }, 1600);
  };
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(value).then(done).catch(() => {
      fallbackCopy(value);
      done();
    });
    return;
  }
  fallbackCopy(value);
  done();
}

function fallbackCopy(value) {
  const area = document.createElement("textarea");
  area.value = value;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.left = "-9999px";
  document.body.append(area);
  area.select();
  document.execCommand("copy");
  area.remove();
}

document.addEventListener("click", (event) => {
  const button = event.target.closest(".copy-icon");
  if (!button) return;
  event.preventDefault();
  event.stopPropagation();
  copyContact(button);
}, true);

function pluralRole(role, count) {
  if (count === 1) return role;
  if (role === "MUA") return "MUAs";
  return role.endsWith("s") ? role : `${role}s`;
}

function resultsHeading(list) {
  const count = list.length;
  const labels = [
    ...state.roles.map((role) => pluralRole(role, count)),
    ...state.genres,
  ];
  const who = labels.length ? labels.join(", ") : count === 1 ? "creative" : "creatives";
  const cities = activeCities();
  const place = cities.length ? joinPhrase(cities) : "";
  return place ? `${count} ${who} in ${place}` : `${count} ${who}`;
}

function cityRecord(name) {
  return CITIES.find((city) => city.name === name);
}

function cityMatches(city, filter) {
  if (!filter) return true;
  const aliases = {
    "New York": "nyc ny",
    "Los Angeles": "la",
    Atlanta: "atl",
    London: "ldn",
  };
  return `${city.name} ${city.place || ""} ${city.line} ${aliases[city.name] || ""}`.toLowerCase().includes(filter);
}

function tinyIcon(path) {
  return `<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">${path}</svg>`;
}

function joinPhrase(items) {
  if (items.length <= 1) return items[0] || "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function cardBio(record) {
  if (record.bio) return record.bio;
  const place = record.city && record.city !== "Remote" ? ` in ${record.city}` : "";
  const phrases = {
    Portrait: "portraits",
    Concert: "concerts",
    Events: "events",
    Product: "product",
    Club: "club portraits",
    "Lo-fi": "lo-fi work",
    Film: "film portraits",
    Fashion: "fashion",
    Sports: "sports",
    "Music video": "music videos",
    "Album covers": "album covers",
  };
  const genres = [];
  (record.genres || []).forEach((genre) => {
    const phrase = phrases[genre] || String(genre).toLowerCase();
    if (!genres.includes(phrase)) genres.push(phrase);
  });
  const makes = new Set(["Photographer", "Videographer / DP", "Director", "Graphic designer", "Animator", "Editor", "Colorist"]);
  if (genres.length && (record.roles || []).some((role) => makes.has(role))) {
    return `Makes ${joinPhrase(genres)}${place}.`;
  }
  const role = (record.roles || [])[0] || "Creative";
  return place ? `${role} based${place}.` : `${role}.`;
}

function instagramShots(record) {
  return (record.images || [])
    .map((item) => (typeof item === "string" ? { src: item, href: "" } : item))
    .filter((item) => item && item.src)
    .slice(0, 3);
}

const CONTACT_PATHS = {
  instagram:
    '<rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="16.6" cy="7.4" r="0.9" fill="currentColor"/>',
  portfolio:
    '<circle cx="12" cy="12" r="7.4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M4.6 12h14.8M12 4.6c2 2.2 3 4.7 3 7.4s-1 5.2-3 7.4c-2-2.2-3-4.7-3-7.4s1-5.2 3-7.4z" fill="none" stroke="currentColor" stroke-width="1.7"/>',
  phone:
    '<path d="M8 5.5h2.2l1 2.4-1.4 1.1a9 9 0 0 0 4.2 4.2l1.1-1.4 2.4 1V15a1.4 1.4 0 0 1-1.5 1.4A11.4 11.4 0 0 1 6.6 7 1.4 1.4 0 0 1 8 5.5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  email:
    '<rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M5 7.5 12 12.5 19 7.5" fill="none" stroke="currentColor" stroke-width="1.7"/>',
};

function rosterCardHtml(record) {
  const city = cityRecord(record.city);
  const instagramHref = record.instagram ? `https://instagram.com/${record.instagram}` : "";
  return `
    ${avatarHtml(record, "result-card_avatar")}
    <div class="result-card_body">
      <h3>${escapeHtml(record.name)}</h3>
      <p class="result-card_role">${escapeHtml(record.roles.join(" · "))}</p>
      ${record.city ? `<p>${escapeHtml(city?.place || record.city)}</p>` : ""}
      <div class="result-card_icons">
        ${externalControl("roster-icon", "Instagram", instagramHref, tinyIcon(CONTACT_PATHS.instagram))}
        ${copyControl("Portfolio", record.portfolio || "", "Copied portfolio link", tinyIcon(CONTACT_PATHS.portfolio))}
        ${copyControl("Phone", record.phone || "", "Copied phone number", tinyIcon(CONTACT_PATHS.phone))}
        ${copyControl("Email", record.email || "", "Copied email", tinyIcon(CONTACT_PATHS.email))}
      </div>
    </div>
  `;
}

function renderMapResults(list) {
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const title = document.getElementById("results-title");
  if (title) title.textContent = resultsHeading(list);
  document.getElementById("summary").textContent =
    resultsView === "map"
      ? "Hover a card to find them on the map. Click the card to open their profile."
      : summaryText(list);
  document.getElementById("count").textContent = "";
  empty.hidden = list.length !== 0;
  empty.textContent = PEOPLE.length ? "No one matches that yet." : "No creatives on the roster yet.";
  grid.innerHTML = "";

  list.forEach((record) => {
    const card = document.createElement("article");
    card.className = "result-card";
    card.tabIndex = 0;
    card.dataset.id = record.id;
    card.innerHTML = rosterCardHtml(record);
    const open = () => openProfile(record.id);
    card.addEventListener("click", (event) => {
      if (event.target.closest("a, .copy-icon")) return;
      open();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.target.closest("a, .copy-icon")) open();
    });
    card.addEventListener("mouseenter", () => highlightPin(record.id, true));
    card.addEventListener("mouseleave", () => highlightPin(record.id, false));
    grid.appendChild(card);
  });

  renderNearby(list);
  if (document.getElementById("map")) syncMap(list);
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
let resultClusters = null;
const resultMarkers = new Map();

function showcasePoint(record, index, total) {
  const cols = Math.max(1, Math.ceil(Math.sqrt(Math.max(total, 1) * 1.7)));
  const rows = Math.max(1, Math.ceil(total / cols));
  const col = index % cols;
  const row = Math.floor(index / cols);
  let hash = 2166136261;
  for (let i = 0; i < record.id.length; i += 1) {
    hash ^= record.id.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const jx = (((hash >>> 0) % 1000) / 1000 - 0.5) * 0.7;
  const jy = (((hash >>> 8) % 1000) / 1000 - 0.5) * 0.7;
  return [40.87 - ((row + 0.5 + jy) / rows) * 0.25, -74.08 + ((col + 0.5 + jx) / cols) * 0.42];
}

function pinPoint(record, indexInCity, cityCount) {
  const city = cityRecord(record.city);
  if (!city?.at) return showcasePoint(record, indexInCity, cityCount);
  if (cityCount < 2) return city.at;
  if (cityCount > 12) return showcasePoint(record, indexInCity, cityCount);
  const angle = (indexInCity / cityCount) * Math.PI * 2;
  return [city.at[0] + Math.sin(angle) * 0.035, city.at[1] + Math.cos(angle) * 0.045];
}

function mapPopup(record) {
  const instagramHref = record.instagram ? `https://instagram.com/${record.instagram}` : "";
  const phoneHref = record.phone ? `tel:${record.phone}` : "";
  const mailHref = record.email ? `mailto:${record.email}` : "";
  const shots = instagramShots(record)
    .map((item) => {
      const href = item.href || instagramHref;
      const img = `<img src="${escapeHtml(item.src)}" alt="" />`;
      return href
        ? `<a class="roster-pop_shot" href="${escapeHtml(href)}" target="_blank" rel="noreferrer">${img}</a>`
        : img;
    })
    .join("");
  return `
    <div class="roster-pop">
      <button class="roster-pop_close" type="button" aria-label="Close">
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
      <div class="roster-pop_head">
        ${avatarHtml(record, "roster-pop_avatar")}
        <div>
          <h3>${escapeHtml(record.name)}</h3>
          <p>${escapeHtml(record.roles.join(" · "))}</p>
        </div>
      </div>
      ${shots ? `<div class="roster-pop_shots">${shots}</div>` : ""}
      <p class="roster-pop_bio">${escapeHtml(cardBio(record))}</p>
      <div class="roster-pop_icons">
        ${externalControl("roster-pop_icon", "Instagram", instagramHref, tinyIcon(CONTACT_PATHS.instagram))}
        ${externalControl("roster-pop_icon", "Portfolio", record.portfolio || "", tinyIcon(CONTACT_PATHS.portfolio))}
        ${externalControl("roster-pop_icon", "Phone", phoneHref, tinyIcon(CONTACT_PATHS.phone))}
        ${externalControl("roster-pop_icon", "Email", mailHref, tinyIcon(CONTACT_PATHS.email))}
      </div>
    </div>
  `;
}

function pinIcon(record) {
  const avatar = record.avatar || (record.images || []).find(Boolean) || "";
  const face = avatar
    ? `<img src="${escapeHtml(avatar)}" alt="" />`
    : `<span>${escapeHtml(initials(record.name))}</span>`;
  return L.divIcon({
    className: "map-pin",
    html: `<div class="map-pin-face">${face}</div>`,
    iconSize: [46, 58],
    iconAnchor: [23, 54],
  });
}

function syncMap(list) {
  const mount = document.getElementById("map");
  if (!mount || typeof L === "undefined") return;
  if (!resultMap) {
    resultMap = L.map(mount, { zoomControl: false, scrollWheelZoom: true });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
      maxZoom: 19,
    }).addTo(resultMap);
    L.control.zoom({ position: "topright" }).addTo(resultMap);
    resultMap.getContainer().addEventListener("click", (event) => {
      if (!event.target.closest(".roster-pop_close")) return;
      event.preventDefault();
      resultMap.closePopup();
    });
    if (typeof L.markerClusterGroup === "function") {
      resultClusters = L.markerClusterGroup({
        showCoverageOnHover: false,
        maxClusterRadius: 24,
        spiderfyOnMaxZoom: true,
        iconCreateFunction(cluster) {
          return L.divIcon({
            className: "map-cluster",
            html: `<div class="map-cluster-face"><span>${cluster.getChildCount()}</span></div>`,
            iconSize: [46, 58],
            iconAnchor: [23, 54],
          });
        },
      });
      resultMap.addLayer(resultClusters);
    }
  }
  if (resultClusters) resultClusters.clearLayers();
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
    const marker = L.marker(point, { icon: pinIcon(record), zIndexOffset: indexInCity });
    marker.bindPopup(mapPopup(record), {
      className: "map-card",
      closeButton: false,
      autoPan: true,
      keepInView: true,
      autoPanPaddingTopLeft: [24, 24],
      autoPanPaddingBottomRight: [24, 96],
      offset: [0, -78],
      maxWidth: 380,
      minWidth: 340,
    });
    marker.on("popupopen", () => {
      resultMarkers.forEach((item, id) => {
        item.getElement()?.classList.toggle("is-selected", id === record.id);
        if (id === record.id) item.setZIndexOffset(1000);
      });
    });
    marker.on("popupclose", () => {
      marker.getElement()?.classList.remove("is-selected");
      marker.setZIndexOffset(0);
    });
    if (resultClusters) resultClusters.addLayer(marker);
    else marker.addTo(resultMap);
    resultMarkers.set(record.id, marker);
    points.push(point);
  });
  const focus = state.city ? cityRecord(state.city)?.at : null;
  if (points.length === 1) resultMap.setView(points[0], 12);
  else if (!state.city && points.length > 24) resultMap.setView([40.748, -73.985], 12);
  else if (points.length) resultMap.fitBounds(points, { padding: [36, 36], maxZoom: 12 });
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
  if (!grid) return;
  const city = nearbyCity();
  const nearby = city ? list.filter((record) => record.city === city) : list;
  const empty = document.getElementById("empty");
  document.getElementById("summary").textContent = summaryText(nearby);
  document.getElementById("count").textContent = nearby.length === 1 ? "1 creative" : `${nearby.length} creatives`;
  const more = document.getElementById("nearby-more");
  if (more) more.href = city ? `results.html?city=${encodeURIComponent(city)}` : "results.html";
  empty.hidden = nearby.length !== 0;
  empty.textContent = PEOPLE.length ? "No one matches that yet." : "No creatives on the roster yet.";
  grid.innerHTML = "";

  nearby.forEach((record) => {
    const card = document.createElement("article");
    card.className = "result-card";
    card.tabIndex = 0;
    card.innerHTML = rosterCardHtml(record);
    const open = () => openProfile(record.id);
    card.addEventListener("click", (event) => {
      if (event.target.closest("a, .copy-icon")) return;
      open();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.target.closest("a, .copy-icon")) open();
    });
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
  if (!root) return;
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
  const city = cityRecord(record.city);
  const place = city?.place || record.city || "";
  const also = (record.also || []).length ? `Also works in ${record.also.join(", ")}.` : "";
  const genreLabel = { Concert: "Concerts" };
  const genres = [...(record.genres || [])].sort((a, b) => a.localeCompare(b)).map((genre) => genreLabel[genre] || genre);
  const roleLine = [...(record.roles || []), genres.join("/")].filter(Boolean).join(", ");
  const instagramHref = record.instagram ? `https://instagram.com/${record.instagram}` : "";

  root.innerHTML = `
    <a class="back" href="#results"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M15 5.5 8.5 12 15 18.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span>${isResultsPage() ? "Back to results" : "Back to roster"}</span></a>
    <header class="profile_head">
      ${avatarHtml(record, "profile_avatar")}
      <div class="profile_id">
      <h1>${escapeHtml(record.name)}</h1>
      ${roleLine ? `<p class="profile_role">${escapeHtml(roleLine)}</p>` : ""}
      ${place ? `<p class="profile_place">${escapeHtml(place)}</p>` : ""}
      </div>
      <div class="profile_icons">
        ${externalControl("roster-icon", "Instagram", instagramHref, tinyIcon(CONTACT_PATHS.instagram))}
        ${copyControl("Phone", record.phone || "", "Copied phone number", tinyIcon(CONTACT_PATHS.phone))}
        ${copyControl("Email", record.email || "", "Copied email", tinyIcon(CONTACT_PATHS.email))}
        ${copyControl("Portfolio", record.portfolio || "", "Copied portfolio link", tinyIcon(CONTACT_PATHS.portfolio))}
      </div>
    </header>
    ${also ? `<p class="profile_also">${escapeHtml(also)}</p>` : ""}
    ${record.referredBy ? `<p>Referred by ${escapeHtml(record.referredBy)}.</p>` : ""}
    <div class="profile_layout">
      <div>
        ${workGridHtml(record)}
      </div>
      <div>
        <section>
          <h2>Past 10K projects</h2>
          ${projects}
        </section>
        ${record.compensation ? `<section><h2>Compensation notes</h2><p>${escapeHtml(record.compensation)}</p></section>` : ""}
        <section>
          <h2>Contact</h2>
          <label class="sr" for="intro">Intro message</label>
          <div class="intro-shell">
            <button class="intro-copy" type="button" id="copy-intro" aria-label="Copy intro message">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
            </button>
            <textarea class="intro" id="intro" rows="4"></textarea>
          </div>
        </section>
      </div>
    </div>
  `;

  root.querySelector(".back").addEventListener("click", (event) => {
    event.preventDefault();
    closeProfile();
  });

  const intro = root.querySelector("#intro");
  intro.value = introText(record);
  const copyIntro = root.querySelector("#copy-intro");
  const copyIcon = copyIntro.innerHTML;
  const copiedIcon = `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M5 12.5 9.5 17 19 7.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  copyIntro.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(intro.value);
      copyIntro.innerHTML = copiedIcon;
      copyIntro.setAttribute("aria-label", "Copied");
    } catch {
      intro.focus();
      intro.select();
      copyIntro.setAttribute("aria-label", "Select the message to copy");
    }
    setTimeout(() => {
      copyIntro.innerHTML = copyIcon;
      copyIntro.setAttribute("aria-label", "Copy intro message");
    }, 1600);
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
let openWhoRole = "";
let whoSubTimer = 0;

function cancelHideWhoSub() {
  window.clearTimeout(whoSubTimer);
}

function scheduleHideWhoSub() {
  cancelHideWhoSub();
  whoSubTimer = window.setTimeout(() => {
    const panel = document.getElementById("who-panel");
    const sub = document.getElementById("who-sub");
    if (panel?.matches(":hover") || sub?.matches(":hover")) return;
    showWhoSub("");
  }, 350);
}

function whereLabel() {
  const cities = activeCities().map((city) => (city === "Remote" ? "Remote / anywhere" : city));
  if (!cities.length) return "Search cities";
  if (cities.length === 1) return cities[0];
  return `${cities[0]} +${cities.length - 1}`;
}

function whoDetail(role) {
  const picked = state.roleGenres[role] || [];
  if (picked.length === 1) return `${picked[0]} ${role.toLowerCase()}`;
  if (picked.length > 1) return `${picked[0]} +${picked.length - 1}`;
  return role;
}

function whoLabel() {
  if (!state.roles.length) return "Search roles";
  const label = whoDetail(state.roles[0]);
  if (state.roles.length === 1) return label;
  return `${label} +${state.roles.length - 1}`;
}

function cityAbbrev(city) {
  if (city.name === "Remote") return "RM";
  const code = String(city.place || "").split(", ")[1];
  return code || city.name.slice(0, 2).toUpperCase();
}

const ROLE_ICONS = {
  Photographer:
    '<path d="M8.2 9.2h2l.8-1.4h1.9l.8 1.4h2.1a1.5 1.5 0 0 1 1.5 1.5v5.3a1.5 1.5 0 0 1-1.5 1.5H8.2a1.5 1.5 0 0 1-1.5-1.5v-5.3a1.5 1.5 0 0 1 1.5-1.5z"/><circle cx="12" cy="13.1" r="2.1"/>',
  "Videographer / DP":
    '<rect x="3.5" y="7.5" width="12" height="9" rx="1.6"/><path d="M15.5 11.2 20.2 8.8v6.4l-4.7-2.4z"/>',
  Director: '<path d="M8 7.2 10.2 9H20v8.2H4V9h3.2L8 7.2z"/><path d="M4 9.2 8.2 6.4h4.2L9.8 9.2"/>',
  Stylist: '<path d="M12 8.2a3.2 3.2 0 0 1 3.2 3.2l-1.1 7.2h-4.2L8.8 11.4A3.2 3.2 0 0 1 12 8.2z"/><path d="M12 8.2V5.6"/>',
  "Set designer": '<path d="M6 10.5h12v2.2H6z"/><path d="M7.2 12.7v5.2M16.8 12.7v5.2M4.8 17.9h14.4"/>',
  MUA: '<path d="M15.8 5.6 8.2 18.4"/><path d="M14.2 5.2c1.3.2 2.2 1.2 2.2 1.2M7.2 16.6l-1.4 2.2h3.2"/>',
  Gaffer: '<path d="M9 15.2a3.6 3.6 0 1 1 6 0"/><path d="M9.4 15.2h5.2v1.4H9.4zM10 18.2h4M10.6 19.6h2.8"/>',
  Editor: '<circle cx="7.2" cy="8.2" r="2"/><circle cx="16.8" cy="15.8" r="2"/><path d="M8.8 9.6 15.2 14.4M9.4 16.6 6.2 19M17.8 7.4 14.6 4.8"/>',
  Designer: '<path d="M14.8 4.8 19.2 9.2 9.4 19H5v-4.4L14.8 4.8z"/><path d="M13 6.6 17.4 11"/>',
  Animator: '<rect x="4" y="6" width="11" height="12" rx="1.4"/><path d="M15 9.2h3.2v7.2H15"/><path d="M8.6 10.2 12.4 12.4 8.6 14.6z"/>',
  Model: '<circle cx="12" cy="7.4" r="2.2"/><path d="M7.6 19.2v-2.2a4.4 4.4 0 0 1 8.8 0v2.2"/>',
  Assistant: '<rect x="7" y="4.8" width="10" height="14.4" rx="1.4"/><path d="M9.2 9h5.6M9.2 12.2h5.6M9.2 15.4h3.4"/>',
  "Casting director": '<circle cx="9" cy="8" r="2"/><circle cx="15.6" cy="8.6" r="1.7"/><path d="M5.4 18.2v-1.6a3.6 3.6 0 0 1 7.2 0v1.6M13.2 18.2v-1.2a3 3 0 0 1 5.2-2"/>',
  Choreographer: '<circle cx="14.2" cy="5.8" r="1.6"/><path d="M13.2 8.2 10.2 12.2l2.6 1.4-1.6 5.2M10.2 12.2 7.2 10.4M12.8 13.6l3.6-1.2 2 3.2"/>',
  "Graphic designer": '<rect x="4.5" y="6" width="10.5" height="12" rx="1.2"/><path d="M13.2 15.6 19.2 9.6l-2.2-2.2-6 6"/>',
  Colorist: '<circle cx="12" cy="12" r="6.2"/><path d="M12 5.8v12.4"/>',
};

function roleIcon(name) {
  const body = ROLE_ICONS[name] || ROLE_ICONS.Assistant;
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${body}</svg>`;
}

function pickButton(item, pressed) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "pick";
  button.setAttribute("aria-pressed", pressed ? "true" : "false");
  const mark = item.place
    ? `<span class="pick-abbr">${escapeHtml(cityAbbrev(item))}</span>`
    : `<span class="pick-glyph">${roleIcon(item.name)}</span>`;
  button.innerHTML = `
    ${mark}
    <span class="pick-copy">
      <span class="pick-name">${escapeHtml(item.name)}</span>
    </span>
  `;
  return button;
}

function renderWhereOptions() {
  const filter = document.getElementById("where-filter").value.trim().toLowerCase();
  const container = document.getElementById("where-options");
  const cities = CITIES.filter((city) => {
    if (!filter) return true;
    return cityMatches(city, filter);
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

function genresForRole(role) {
  const item = filterMenu().find((entry) => entry.role === role);
  return item ? item.genres : [];
}

function showWhoSub(role) {
  cancelHideWhoSub();
  openWhoRole = role || "";
  paintWhoSub();
  document.querySelectorAll("#who-options .pick").forEach((button) => {
    button.classList.toggle("is-open", button.dataset.role === openWhoRole);
  });
}

function paintWhoSub() {
  const sub = document.getElementById("who-sub");
  if (!sub) return;
  const genres = openWhoRole ? genresForRole(openWhoRole) : [];
  if (!genres.length) {
    sub.hidden = true;
    sub.innerHTML = "";
    return;
  }
  const allOn = roleIsAll(openWhoRole);
  const picked = state.roleGenres[openWhoRole] || [];
  const rows = [
    { label: filterAllLabel(openWhoRole), checked: allOn, genre: "" },
    ...genres.map((genre) => ({ label: genre, checked: !allOn && picked.includes(genre), genre })),
  ];
  sub.hidden = false;
  sub.innerHTML = rows
    .map(
      (row) => `<button class="filter-sub_row" type="button" role="menuitemcheckbox" aria-checked="${row.checked}" data-genre="${escapeHtml(row.genre)}">
        ${checkHtml()}
        <span class="filter-row_label">${escapeHtml(row.label)}</span>
      </button>`
    )
    .join("");
  sub.querySelectorAll(".filter-sub_row").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!button.dataset.genre) toggleAllRole(openWhoRole);
      else toggleRoleGenre(openWhoRole, button.dataset.genre);
    });
  });
  const row = [...document.querySelectorAll("#who-options .pick")].find((button) => button.dataset.role === openWhoRole);
  alignSubmenu(sub, row, 10);
}

function renderWhoOptions() {
  const container = document.getElementById("who-options");
  if (!container) return;
  container.innerHTML = "";
  ROLES.forEach((role) => {
    const genres = genresForRole(role.name);
    const button = pickButton(role, state.roles.includes(role.name));
    button.dataset.role = role.name;
    if (genres.length) {
      button.classList.toggle("is-open", openWhoRole === role.name);
      button.insertAdjacentHTML(
        "beforeend",
        `<span class="pick-chevron" aria-hidden="true"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M6 3.5 10.5 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`
      );
      button.addEventListener("mouseenter", () => showWhoSub(role.name));
    } else {
      button.addEventListener("mouseenter", () => showWhoSub(""));
    }
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (genres.length) showWhoSub(role.name);
      if (genres.length) toggleAllRole(role.name);
      else toggleFlatRole(role.name);
    });
    container.append(button);
  });
  paintWhoSub();
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
  if (openPanel !== "who") openWhoRole = "";
  if (openPanel) {
    setFiltersOpen(false);
    setLocationOpen(false);
  }
  paintSearch();
  if (openPanel === "where") document.getElementById("where-filter").focus();
}

function filtersOpen() {
  const panel = document.getElementById("filters-panel");
  return Boolean(panel && !panel.hidden);
}

function closeRolePanel() {
  const panel = document.getElementById("filters-panel");
  const toggle = document.getElementById("filters-toggle");
  if (!panel || !toggle) return;
  panel.hidden = true;
  toggle.setAttribute("aria-expanded", "false");
  showFilterSub("");
}

function closeLocationPanel() {
  const panel = document.getElementById("location-panel");
  const toggle = document.getElementById("location-toggle");
  if (!panel || !toggle) return;
  panel.hidden = true;
  toggle.setAttribute("aria-expanded", "false");
}

function setFiltersOpen(open) {
  const panel = document.getElementById("filters-panel");
  const toggle = document.getElementById("filters-toggle");
  if (!panel || !toggle) return;
  if (open) closeLocationPanel();
  panel.hidden = !open;
  toggle.setAttribute("aria-expanded", String(open));
  if (!open) showFilterSub("");
}

function locationOpen() {
  const panel = document.getElementById("location-panel");
  return Boolean(panel && !panel.hidden);
}

function setLocationOpen(open) {
  const panel = document.getElementById("location-panel");
  const toggle = document.getElementById("location-toggle");
  if (!panel || !toggle) return;
  if (open) closeRolePanel();
  panel.hidden = !open;
  toggle.setAttribute("aria-expanded", String(open));
  if (open) document.getElementById("location-filter")?.focus();
}

function filterLabel(role) {
  return (FILTER_COPY[role] && FILTER_COPY[role][0]) || role;
}

function filterAllLabel(role) {
  return (FILTER_COPY[role] && FILTER_COPY[role][1]) || `All ${filterLabel(role).toLowerCase()}`;
}

function filterMenu() {
  const used = new Set(PEOPLE.flatMap((record) => record.roles));
  const ordered = [
    ...FILTER_ORDER.filter((role) => used.has(role)),
    ...ROLES.map((role) => role.name).filter((role) => used.has(role) && !FILTER_ORDER.includes(role)),
  ];
  return ordered.map((role) => {
    const genres = new Set();
    PEOPLE.forEach((record) => {
      if (!record.roles.includes(role)) return;
      (record.genres || []).forEach((genre) => genres.add(genre));
    });
    return {
      role,
      label: filterLabel(role),
      all: filterAllLabel(role),
      genres: [...genres].sort((a, b) => a.localeCompare(b)),
    };
  });
}

function checkHtml() {
  return `<span class="filter-check" aria-hidden="true"><svg viewBox="0 0 16 16" width="12" height="12"><path d="M3.2 8.2 6.4 11.4 12.8 4.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;
}

function roleIsAll(role) {
  return state.roles.includes(role) && !(state.roleGenres[role] || []).length;
}

function syncScopedGenres() {
  state.genres = Object.values(state.roleGenres).flat();
  state.genresScoped = state.genres.length > 0;
}

function activeFilterCount() {
  let count = 0;
  state.roles.forEach((role) => {
    const picked = state.roleGenres[role] || [];
    count += picked.length || 1;
  });
  if (!state.genresScoped) count += state.genres.length;
  return count;
}

function toggleAllRole(role) {
  if (roleIsAll(role)) {
    state.roles = state.roles.filter((item) => item !== role);
    delete state.roleGenres[role];
  } else {
    if (!state.roles.includes(role)) state.roles = [...state.roles, role];
    state.roleGenres[role] = [];
  }
  syncScopedGenres();
  render();
}

function toggleRoleGenre(role, genre) {
  const current = roleIsAll(role) ? [] : state.roleGenres[role] || [];
  const next = current.includes(genre) ? current.filter((item) => item !== genre) : [...current, genre];
  if (!next.length) {
    state.roles = state.roles.filter((item) => item !== role);
    delete state.roleGenres[role];
  } else {
    if (!state.roles.includes(role)) state.roles = [...state.roles, role];
    state.roleGenres[role] = next;
  }
  syncScopedGenres();
  render();
}

function toggleFlatRole(role) {
  if (state.roles.includes(role)) {
    state.roles = state.roles.filter((item) => item !== role);
    delete state.roleGenres[role];
  } else {
    state.roles = [...state.roles, role];
    state.roleGenres[role] = [];
  }
  syncScopedGenres();
  render();
}

function nearbyCity() {
  if (state.city) return state.city;
  const counts = new Map();
  PEOPLE.forEach((record) => {
    if (!record.city) return;
    counts.set(record.city, (counts.get(record.city) || 0) + 1);
  });
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || "";
}

function setCities(cities) {
  const unique = [];
  cities.forEach((city) => {
    if (city && !unique.includes(city)) unique.push(city);
  });
  state.city = unique[0] || "";
  state.extraCities = unique.slice(1);
}

function toggleLocation(city) {
  if (!city) setCities([]);
  else {
    const current = activeCities();
    setCities(current.includes(city) ? current.filter((item) => item !== city) : [...current, city]);
  }
  render();
}

function paintLocation() {
  const menu = document.getElementById("location-menu");
  const toggle = document.getElementById("location-toggle");
  if (!menu || !toggle) return;
  const query = (document.getElementById("location-filter")?.value || "").trim().toLowerCase();
  const picked = activeCities();
  const cities = CITIES.filter((city) => cityMatches(city, query));
  const rows = [
    ...(query ? [] : [{ label: "All locations", city: "", checked: !picked.length }]),
    ...cities.map((city) => ({ label: city.place, city: city.name, checked: picked.includes(city.name) })),
  ];
  menu.innerHTML = rows.length
    ? rows
        .map(
          (row) => `<button class="filter-row" type="button" role="menuitemcheckbox" aria-checked="${row.checked}" data-city="${escapeHtml(row.city)}">
        ${checkHtml()}
        <span class="filter-row_label">${escapeHtml(row.label)}</span>
      </button>`
        )
        .join("")
    : `<p class="location-empty">No cities match.</p>`;
  menu.querySelectorAll(".filter-row").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleLocation(button.dataset.city || "");
    });
  });
  const badge = document.getElementById("location-count");
  const count = activeCities().length;
  if (badge) {
    badge.hidden = !count;
    const num = badge.querySelector(".tool-pill_num");
    if (num) num.textContent = count ? String(count) : "";
  }
  toggle.classList.toggle("is-on", count > 0);
}

function paintFilterSub() {
  const sub = document.getElementById("filters-sub");
  if (!sub) return;
  const item = filterMenu().find((entry) => entry.role === openFilterRole && entry.genres.length);
  if (!item) {
    sub.hidden = true;
    sub.innerHTML = "";
    return;
  }
  sub.hidden = false;
  sub.setAttribute("aria-label", item.label);
  const allOn = roleIsAll(item.role);
  const picked = state.roleGenres[item.role] || [];
  const rows = [
    { label: item.all, checked: allOn, genre: "" },
    ...item.genres.map((genre) => ({ label: genre, checked: !allOn && picked.includes(genre), genre })),
  ];
  sub.innerHTML = rows
    .map(
      (row) => `<button class="filter-sub_row" type="button" role="menuitemcheckbox" aria-checked="${row.checked}" data-genre="${escapeHtml(row.genre)}">
        ${checkHtml()}
        <span class="filter-row_label">${escapeHtml(row.label)}</span>
      </button>`
    )
    .join("");
  sub.querySelectorAll(".filter-sub_row").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!button.dataset.genre) toggleAllRole(item.role);
      else toggleRoleGenre(item.role, button.dataset.genre);
    });
  });
  placeFilterSub(sub);
}

function placeFilterSub(sub) {
  const row = [...document.querySelectorAll("#filters-menu .filter-row")].find((button) => button.dataset.role === openFilterRole);
  alignSubmenu(sub, row, 8);
}

function alignSubmenu(sub, row, gap) {
  sub.style.left = "";
  sub.style.right = "";
  if (!row || !sub.offsetParent || (sub.id === "who-sub" && window.matchMedia("(max-width: 800px)").matches)) {
    sub.style.top = "";
    return;
  }
  const top = row.getBoundingClientRect().top - sub.offsetParent.getBoundingClientRect().top;
  sub.style.top = `${top}px`;
  requestAnimationFrame(() => {
    if (sub.hidden) return;
    const rect = sub.getBoundingClientRect();
    if (rect.right > window.innerWidth - 12) {
      sub.style.left = "auto";
      sub.style.right = `calc(100% + ${gap}px)`;
    }
    const overflow = rect.bottom - (window.innerHeight - 12);
    if (overflow > 0) {
      const current = parseFloat(sub.style.top) || 0;
      sub.style.top = `${Math.max(8, current - overflow)}px`;
    }
  });
}

function paintFilters() {
  const toggle = document.getElementById("filters-toggle");
  if (!toggle) return;
  document.querySelectorAll("#filters-menu .filter-row").forEach((button) => {
    const role = button.dataset.role;
    const genres = (button.dataset.genres || "").split("|").filter(Boolean);
    const picked = state.roleGenres[role] || [];
    button.classList.toggle("is-open", role === openFilterRole && genres.length > 0);
    if (button.hasAttribute("aria-checked")) {
      button.setAttribute("aria-checked", String(state.roles.includes(role) && !picked.length));
    }
    if (genres.length) button.setAttribute("aria-expanded", String(role === openFilterRole));
  });
  paintFilterSub();
  const count = activeFilterCount();
  const badge = document.getElementById("filters-count");
  if (badge) {
    badge.hidden = count === 0;
    const num = badge.querySelector(".tool-pill_num");
    if (num) num.textContent = count ? String(count) : "";
  }
  toggle.classList.toggle("is-on", count > 0);
}

function showFilterSub(role) {
  openFilterRole = role || "";
  paintFilters();
}

function buildFilters() {
  const menu = document.getElementById("filters-menu");
  if (!menu) return;
  if (!menu.dataset.ready) {
    menu.dataset.ready = "1";
    const panel = document.getElementById("filters-panel");
    panel.addEventListener("mouseleave", (event) => {
      if (panel.contains(event.relatedTarget)) return;
      showFilterSub("");
    });
  }
  menu.innerHTML = "";
  filterMenu().forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-row";
    button.dataset.role = item.role;
    button.dataset.genres = item.genres.join("|");
    if (item.genres.length) {
      button.setAttribute("aria-haspopup", "menu");
      button.setAttribute("aria-expanded", "false");
      button.innerHTML = `<span class="filter-row_label">${escapeHtml(item.label)}</span><span class="filter-row_chevron" aria-hidden="true"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M6 3.5 10.5 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;
    } else {
      button.setAttribute("role", "menuitemcheckbox");
      button.setAttribute("aria-checked", "false");
      button.innerHTML = `${checkHtml()}<span class="filter-row_label">${escapeHtml(item.label)}</span>`;
    }
    button.addEventListener("mouseenter", () => showFilterSub(item.genres.length ? item.role : ""));
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (item.genres.length) showFilterSub(item.role);
      else toggleFlatRole(item.role);
    });
    menu.append(button);
  });
}

function setResultsView(view) {
  if (view !== "map" && view !== "list") return;
  const scroller = document.querySelector(".results");
  const savedTop = resultsView === "map" ? scroller?.scrollTop || 0 : window.scrollY;
  resultsView = view;
  const page = document.querySelector(".results-page");
  if (page) page.dataset.resultsView = view;
  document.querySelectorAll(".view-toggle_btn").forEach((button) => {
    const on = button.dataset.view === view;
    button.classList.toggle("is-on", on);
    button.setAttribute("aria-pressed", String(on));
  });
  const summary = document.getElementById("summary");
  if (summary && isResultsPage()) {
    const list = filteredPeople();
    summary.textContent =
      view === "list" ? summaryText(list) : "Hover a card to find them on the map. Click the card to open their profile.";
  }
  requestAnimationFrame(() => {
    if (view === "list") window.scrollTo(0, savedTop);
    else if (scroller) scroller.scrollTop = savedTop;
    if (view === "map" && resultMap) {
      resultMap.invalidateSize();
      syncMap(filteredPeople());
    }
  });
}

function clearLocation() {
  state.city = "";
  state.extraCities = [];
  const field = document.getElementById("location-filter");
  if (field) field.value = "";
  render();
}

function clearRoles() {
  state.roles = [];
  state.roleGenres = {};
  state.genres = [];
  state.genresScoped = false;
  render();
}

function syncControls() {
  paintSearch();
  paintFilters();
  paintLocation();
}

function isResultsPage() {
  return document.body.dataset.page === "results";
}

function resultsQuery() {
  const params = new URLSearchParams();
  if (state.query) params.set("q", state.query);
  if (state.city) params.set("city", state.city);
  if (state.extraCities.length) params.set("near", state.extraCities.join(","));
  writeFilterParams(params);
  if (state.tenk) params.set("tenk", "1");
  params.set("view", "map");
  const query = params.toString();
  return `results.html?${query}`;
}

function writeFilterParams(params) {
  if (state.roles.length) params.set("roles", state.roles.join(","));
  if (state.genresScoped) {
    const parts = [];
    Object.entries(state.roleGenres).forEach(([role, genres]) => {
      genres.forEach((genre) => parts.push(`${role}:${genre}`));
    });
    if (parts.length) params.set("genres", parts.join(","));
  } else if (state.genres.length) {
    params.set("genres", state.genres.join(","));
  }
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
  writeFilterParams(params);
  if (state.tenk) params.set("tenk", "1");
  if (resultsView === "map") params.set("view", "map");
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
  state.roleGenres = {};
  state.genresScoped = false;
  const rawGenres = (params.get("genres") || "").split(",").filter(Boolean);
  if (rawGenres.some((part) => part.includes(":"))) {
    state.genresScoped = true;
    rawGenres.forEach((part) => {
      const splitAt = part.indexOf(":");
      const role = part.slice(0, splitAt);
      const genre = part.slice(splitAt + 1);
      if (!role || !genre) return;
      if (!state.roles.includes(role)) state.roles.push(role);
      if (!state.roleGenres[role]) state.roleGenres[role] = [];
      state.roleGenres[role].push(genre);
    });
    state.genres = Object.values(state.roleGenres).flat();
  } else {
    state.genres = rawGenres;
  }
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
  buildFilters();
  const filtersToggle = document.getElementById("filters-toggle");
  if (filtersToggle) {
    filtersToggle.addEventListener("click", () => {
      const next = !filtersOpen();
      setFiltersOpen(next);
      if (next) {
        openPanel = "";
        paintSearch();
      }
    });
  }
  const locationToggle = document.getElementById("location-toggle");
  if (locationToggle) {
    locationToggle.addEventListener("click", () => {
      const next = !locationOpen();
      setLocationOpen(next);
      if (next) {
        openPanel = "";
        openWhoRole = "";
        paintSearch();
      }
    });
  }
  document.getElementById("location-count")?.addEventListener("click", (event) => {
    if (!activeCities().length) return;
    event.stopPropagation();
    event.preventDefault();
    clearLocation();
  });
  document.getElementById("filters-count")?.addEventListener("click", (event) => {
    if (!activeFilterCount()) return;
    event.stopPropagation();
    event.preventDefault();
    clearRoles();
  });
  const locationFilter = document.getElementById("location-filter");
  if (locationFilter) {
    locationFilter.addEventListener("input", () => paintLocation());
    locationFilter.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      const query = locationFilter.value.trim().toLowerCase();
      const match = CITIES.find((city) => cityMatches(city, query));
      if (match) {
        setCities([...activeCities(), match.name]);
        render();
      }
    });
  }
  document.querySelectorAll(".view-toggle_btn").forEach((button) => {
    button.addEventListener("click", () => {
      setResultsView(button.dataset.view);
      if (isResultsPage()) writeUrl("replace");
    });
  });
  document.getElementById("where-segment").addEventListener("click", () => setPanel("where"));
  document.getElementById("who-segment").addEventListener("click", () => setPanel("who"));
  const whoPanel = document.getElementById("who-panel");
  const whoSub = document.getElementById("who-sub");
  if (whoPanel) {
    whoPanel.addEventListener("mouseenter", cancelHideWhoSub);
    whoPanel.addEventListener("mouseleave", (event) => {
      if (event.relatedTarget && whoPanel.contains(event.relatedTarget)) return;
      scheduleHideWhoSub();
    });
  }
  if (whoSub) whoSub.addEventListener("mouseenter", cancelHideWhoSub);
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
      openWhoRole = "";
      paintSearch();
    }
    const wrap = document.getElementById("filter-wrap");
    if (wrap && filtersOpen() && !wrap.contains(event.target)) setFiltersOpen(false);
    const locationWrap = document.getElementById("location-wrap");
    if (locationWrap && locationOpen() && !locationWrap.contains(event.target)) setLocationOpen(false);
  });
  document.getElementById("search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const typed = document.getElementById("where-filter").value.trim().toLowerCase();
    if (typed) {
      const match = CITIES.find((city) => cityMatches(city, typed));
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
    setResultsView("map");
    render({ url: "push" });
  });
  document.querySelectorAll(".nav-menu a, .nav-links a").forEach((link) => {
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
    if (addDialogOpen()) {
      setAddOpen(false);
      return;
    }
    if (locationOpen()) {
      const field = document.getElementById("location-filter");
      if (field && field.value && document.activeElement === field) {
        field.value = "";
        paintLocation();
        return;
      }
      setLocationOpen(false);
      return;
    }
    if (filtersOpen()) {
      setFiltersOpen(false);
      return;
    }
    if (openPanel) {
      openPanel = "";
      paintSearch();
      return;
    }
    if (state.profile) closeProfile();
  });
}

const ADDED_KEY = "10k-added-people";

function readAddedPeople() {
  try {
    const parsed = JSON.parse(localStorage.getItem(ADDED_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function loadAddedPeople() {
  const saved = readAddedPeople();
  const kept = saved.filter((record) => !/^nicole(\s|$)/i.test(String(record?.name || "").trim()));
  if (kept.length !== saved.length) localStorage.setItem(ADDED_KEY, JSON.stringify(kept));
  kept
    .slice()
    .reverse()
    .forEach((record) => {
      if (!record || !record.id || !record.name || PEOPLE.some((item) => item.id === record.id)) return;
      record.roles = record.roles || [];
      record.genres = record.genres || [];
      record.also = record.also || [];
      record.images = record.images || [];
      record.past = record.past || [];
      PEOPLE.unshift(record);
    });
}

function rememberPerson(record) {
  const added = readAddedPeople().filter((item) => item.id !== record.id);
  added.unshift(record);
  localStorage.setItem(ADDED_KEY, JSON.stringify(added));
}

function rosterId(name) {
  const base = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "creative";
  let id = base;
  let n = 2;
  while (PEOPLE.some((item) => item.id === id)) {
    id = `${base}-${n}`;
    n += 1;
  }
  return id;
}

function cleanHandle(value) {
  let handle = value.trim();
  const fromUrl = handle.match(/instagram\.com\/([^/?#]+)/i);
  if (fromUrl) handle = fromUrl[1];
  return handle.replace(/^@/, "").replace(/\/$/, "");
}

function cleanUrl(value) {
  const raw = value.trim();
  if (!raw) return "";
  if (/^https?:\/\//i.test(raw)) return raw;
  return `https://${raw}`;
}

function checkedValues(name) {
  return [...document.querySelectorAll(`#add-form input[name="${name}"]:checked`)].map((input) => input.value);
}

function fillAddForm() {
  const city = document.getElementById("add-city");
  city.innerHTML = `<option value="">Select a city</option>${CITIES.map((item) => `<option value="${escapeHtml(item.name)}">${escapeHtml(item.place || item.name)}</option>`).join("")}`;
  const roles = document.getElementById("add-roles");
  roles.innerHTML = ROLES.map(
    (role) => `<label class="add-check"><input type="checkbox" name="add-role" value="${escapeHtml(role.name)}" /><span>${escapeHtml(role.name)}</span></label>`
  ).join("");
  const genres = [...new Set(PEOPLE.flatMap((record) => record.genres || []))].sort((a, b) => a.localeCompare(b));
  document.getElementById("add-genres").innerHTML = genres
    .map((genre) => `<label class="add-check"><input type="checkbox" name="add-genre" value="${escapeHtml(genre)}" /><span>${escapeHtml(genre)}</span></label>`)
    .join("");
}

function addDialogOpen() {
  const dialog = document.getElementById("add-dialog");
  return Boolean(dialog && !dialog.hidden);
}

function setAddOpen(open) {
  const dialog = document.getElementById("add-dialog");
  if (!dialog) return;
  dialog.hidden = !open;
  document.body.classList.toggle("add-open", open);
  if (!open) {
    document.getElementById("add-roster")?.focus();
    return;
  }
  setFiltersOpen(false);
  setLocationOpen(false);
  openPanel = "";
  paintSearch();
  fillAddForm();
  document.getElementById("add-form").reset();
  document.getElementById("add-error").textContent = "";
  document.getElementById("add-name").focus();
}

function addPersonFromForm() {
  const name = document.getElementById("add-name").value.trim();
  const city = document.getElementById("add-city").value;
  const roles = checkedValues("add-role");
  const genres = checkedValues("add-genre");
  const instagram = cleanHandle(document.getElementById("add-instagram").value);
  const email = document.getElementById("add-email").value.trim();
  const phone = document.getElementById("add-phone").value.trim();
  const portfolio = cleanUrl(document.getElementById("add-portfolio").value);
  const preferred = document.querySelector('#add-form input[name="preferred"]:checked')?.value || "";
  const error = document.getElementById("add-error");
  if (!name) {
    error.textContent = "Add a name.";
    document.getElementById("add-name").focus();
    return;
  }
  if (!city) {
    error.textContent = "Choose a city.";
    document.getElementById("add-city").focus();
    return;
  }
  if (!roles.length) {
    error.textContent = "Choose at least one role.";
    return;
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    error.textContent = "Enter a valid email.";
    document.getElementById("add-email").focus();
    return;
  }
  if (phone && phone.replace(/\D/g, "").length < 7) {
    error.textContent = "Enter a phone number.";
    document.getElementById("add-phone").focus();
    return;
  }
  if (!instagram && !email && !phone && !portfolio) {
    error.textContent = "Add Instagram, email, phone, or a portfolio.";
    document.getElementById("add-instagram").focus();
    return;
  }
  const contact = { instagram, email, phone };
  if (preferred && !contact[preferred]) {
    error.textContent = "Preferred contact needs a value.";
    return;
  }
  const record = person(rosterId(name), name, city, [], roles, genres, false, {
    instagram,
    email,
    phone,
    preferred: preferred || ["instagram", "email", "phone"].find((key) => contact[key]) || "",
    referredBy: "",
    rate: "",
    compensation: "",
    portfolio,
    bio: "",
    past: [],
    avatar: "",
    images: [],
  });
  PEOPLE.unshift(record);
  rememberPerson(record);
  if (!filteredPeople().some((item) => item.id === record.id)) {
    state.roles = [];
    state.genres = [];
    state.roleGenres = {};
    state.genresScoped = false;
    state.city = "";
    state.extraCities = [];
  }
  buildFilters();
  setAddOpen(false);
  render({ url: "push" });
  window.scrollTo(0, 0);
}

function bindAddRoster() {
  const button = document.getElementById("add-roster");
  const dialog = document.getElementById("add-dialog");
  if (!button || !dialog) return;
  button.addEventListener("click", () => setAddOpen(true));
  document.getElementById("add-cancel").addEventListener("click", () => setAddOpen(false));
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) setAddOpen(false);
  });
  document.getElementById("add-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addPersonFromForm();
  });
}

loadAddedPeople();

PEOPLE.forEach((record) => {
  record.images = record.images || [];
});

bind();
bindAddRoster();
readUrl();
if (isResultsPage() && new URLSearchParams(location.search).get("view") === "map") setResultsView("map");
render({ url: "replace" });
if (typeof initProjects === "function") initProjects({ people: PEOPLE, openProfile });
initHeroMap();

function initHeroMap() {
  const stage = document.getElementById("hero-stage");
  const svg = document.getElementById("hero-map");
  const shots = document.getElementById("hero-shots");
  if (!stage || !svg || !shots) return;
  const ns = "http://www.w3.org/2000/svg";
  const board = { w: 780, h: 300 };
  const pin = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>`;
  const place = (roles, city) => roles.map((role) => `${role} (${city})`).join(", ");
  const origin = [348, 150];
  const steps = [
    { name: "Jules Smerling", caption: place(["Stylist"], "Atlanta"), src: "posts/jules-smerling-jul3sarchive/1.jpg", href: "https://www.instagram.com/p/DepQPa6G3we/", x: 14, y: 8, w: 68, h: 68, inn: [90, 42], bend: -40 },
    { name: "Isaac Wheatley", caption: place(["Stylist"], "London"), src: "images/hero/C_1Z2bxxC_C-1.jpg?v=2", href: "https://www.instagram.com/p/C_1Z2bxxC_C/?img_index=1", x: 242, y: 2, w: 56, h: 85, inn: [306, 45], bend: -36 },
    { name: "Charlie Harris", caption: place(["Photographer"], "Finland"), src: "posts/charlie-harris-charliebarclayharris/3.jpg", href: "https://www.instagram.com/p/DdCMAwKDMow/?img_index=1", x: 456, y: 2, w: 78, h: 100, inn: [448, 52], bend: -36 },
    { name: "Vika", caption: place(["MUA"], "London"), src: "posts/vika-vikasfotos/4.jpg", href: "https://www.instagram.com/p/DeCUYocEVmn/?img_index=1", x: 700, y: 64, w: 62, h: 83, inn: [692, 106], bend: 46 },
    { name: "Charlie Harris", caption: place(["Animator"], "Finland"), src: "posts/charlie-harris-charliebarclayharris/1.jpg", href: "https://www.instagram.com/p/DexHNlXjB3P/?img_index=1", x: 548, y: 188, w: 62, h: 74, inn: [540, 225], bend: -40 },
    { name: "Randy", caption: place(["Animator"], "London"), src: "images/hero/DSafSA0kbCB-2.jpg", href: "https://www.instagram.com/p/DSafSA0kbCB/?img_index=2", x: 146, y: 194, w: 68, h: 68, inn: [222, 228], bend: 30 },
    { name: "Michele Perna", caption: place(["Designer"], "Atlanta"), src: "posts/michele-perna-micheleperna/1.jpg", href: "https://www.instagram.com/p/Dew7glWDK1d/?img_index=1", x: 12, y: 122, w: 62, h: 78, inn: [82, 161], bend: -46 },
  ];

  const frames = steps.map((step) => {
    const link = document.createElement("a");
    link.className = "hero_shot";
    link.href = step.href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.style.left = `${(step.x / board.w) * 100}%`;
    link.style.top = `${(step.y / board.h) * 100}%`;
    link.style.width = `${(step.w / board.w) * 100}%`;
    link.style.setProperty("--shot-ratio", `${step.w} / ${step.h}`);
    link.setAttribute("aria-label", `${step.caption}, ${step.name} on Instagram`);
    link.tabIndex = -1;
    const image = document.createElement("img");
    image.src = step.src;
    image.alt = "";
    const caption = document.createElement("span");
    caption.className = "hero_cap";
    caption.insertAdjacentHTML("beforeend", pin);
    const text = document.createElement("span");
    text.textContent = step.caption;
    caption.append(text);
    link.append(image, caption);
    shots.append(link);
    return { step, link };
  });

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const curve = (from, to, bend) => {
    const mx = (from[0] + to[0]) / 2;
    const my = (from[1] + to[1]) / 2;
    const dx = to[0] - from[0];
    const dy = to[1] - from[1];
    const len = Math.hypot(dx, dy) || 1;
    return `M ${from[0]} ${from[1]} Q ${(mx + (-dy / len) * bend).toFixed(1)} ${(my + (dx / len) * bend).toFixed(1)} ${to[0]} ${to[1]}`;
  };

  const addDot = (at, radius = 2.2) => {
    const dot = document.createElementNS(ns, "circle");
    dot.setAttribute("class", "sat");
    dot.setAttribute("cx", at[0]);
    dot.setAttribute("cy", at[1]);
    dot.setAttribute("r", radius);
    dot.setAttribute("fill", "#111");
    svg.append(dot);
    return dot;
  };

  const addPath = (from, to, bend) => {
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", curve(from, to, bend));
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "#161616");
    path.setAttribute("stroke-width", "1.25");
    path.setAttribute("stroke-linecap", "round");
    svg.append(path);
    return path;
  };

  const showFrame = (frame) => {
    addDot(frame.step.inn);
    frame.link.tabIndex = 0;
    frame.link.classList.add("is-in");
  };

  if (reduced) {
    addDot(origin, 3.4);
    frames.forEach((frame) => {
      addPath(origin, frame.step.inn, frame.step.bend);
      showFrame(frame);
    });
    return;
  }

  const drawLine = (path) => new Promise((resolve) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    const duration = 760;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      path.style.strokeDashoffset = `${length * (1 - eased)}`;
      if (t < 1) requestAnimationFrame(tick);
      else resolve();
    };
    requestAnimationFrame(tick);
  });

  const play = async () => {
    const drawn = [];
    while (svg.isConnected) {
      addDot(origin, 3.4);
      await sleep(280);
      for (let index = 0; index < frames.length; index += 1) {
        if (!svg.isConnected) return;
        const frame = frames[index];
        const path = addPath(origin, frame.step.inn, frame.step.bend);
        drawn.push(path);
        await drawLine(path);
        if (!svg.isConnected) return;
        showFrame(frame);
        await sleep(320);
      }
      await sleep(2200);
      if (!svg.isConnected) return;
      stage.classList.add("is-clear");
      await sleep(460);
      drawn.splice(0).forEach((path) => path.remove());
      svg.querySelectorAll("circle.sat").forEach((dot) => dot.remove());
      frames.forEach(({ link }) => {
        link.classList.remove("is-in");
        link.tabIndex = -1;
      });
      stage.classList.remove("is-clear");
      await sleep(360);
    }
  };

  play();
}
