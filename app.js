const ROLES = [
  { name: "Photographer", icon: "photo_camera", line: "Stills, portraits, and the day of the shoot", tint: "#e7f0fb" },
  { name: "Videographer / DP", icon: "videocam", line: "Camera, coverage, and the moving image", tint: "#fde8ea" },
  { name: "Director", icon: "movie", line: "Calls the shots and shapes the piece", tint: "#f3e8fb" },
  { name: "Stylist", icon: "checkroom", line: "Wardrobe, looks, and what goes on camera", tint: "#fde8f3" },
  { name: "Producer", icon: "assignment", line: "Runs the production and keeps the shoot moving", tint: "#e7f3ff" },
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
  { name: "Chicago", icon: "location_city", line: "Concert and portrait crew", tint: "#e7f0fb", place: "Chicago, IL", at: [41.8781, -87.6298] },
  { name: "Boston", icon: "location_city", line: "Photo and video crew", tint: "#f3e8fb", place: "Boston, MA", at: [42.3601, -71.0589] },
  { name: "Austin", icon: "location_city", line: "Concert photography", tint: "#fff4d6", place: "Austin, TX", at: [30.2672, -97.7431] },
  { name: "Minneapolis", icon: "location_city", line: "Fashion portraits", tint: "#e7f6ee", place: "Minneapolis, MN", at: [44.9778, -93.265] },
  { name: "Brighton", icon: "location_city", line: "Concert photography", tint: "#fde8f3", place: "Brighton, UK", at: [50.8225, -0.1372] },
  { name: "Bristol", icon: "location_city", line: "Concert and portrait crew", tint: "#f8efe4", place: "Bristol, UK", at: [51.4545, -2.5879] },
  { name: "Birmingham", icon: "location_city", line: "Concert crew", tint: "#eef2f6", place: "Birmingham, UK", at: [52.4862, -1.8904] },
  { name: "Galway", icon: "location_city", line: "Concert crew", tint: "#e7f6ee", place: "Galway, IE", at: [53.2707, -9.0568] },
  { name: "Ireland", icon: "public", line: "Concert and portrait crew", tint: "#e7f6ee", place: "Ireland", at: [53.1424, -7.6921] },
  { name: "Madrid", icon: "location_city", line: "Concert crew", tint: "#fff4d6", place: "Madrid, ES", at: [40.4168, -3.7038] },
  { name: "Barcelona", icon: "location_city", line: "Concert crew", tint: "#fde8f3", place: "Barcelona, ES", at: [41.3874, 2.1686] },
  { name: "Glasgow", icon: "location_city", line: "Concert photography", tint: "#eef2f6", place: "Glasgow, UK", at: [55.8642, -4.2518] },
  { name: "Germany", icon: "public", line: "Concert crew", tint: "#e7f3ff", place: "Germany", at: [51.1657, 10.4515] },
  { name: "Copenhagen", icon: "location_city", line: "Portrait and video crew", tint: "#e7f0fb", place: "Copenhagen, DK", at: [55.6761, 12.5683] },
  { name: "Denmark", icon: "public", line: "Concert and portrait crew", tint: "#e7f0fb", place: "Denmark", at: [56.2639, 9.5018] },
  { name: "Netherlands", icon: "public", line: "Concert crew", tint: "#fff4d6", place: "Netherlands", at: [52.1326, 5.2913] },
  { name: "Switzerland", icon: "public", line: "Concert crew", tint: "#fde8ea", place: "Switzerland", at: [46.8182, 8.2275] },
  { name: "Czech Republic", icon: "public", line: "Concert and event crew", tint: "#f8efe4", place: "Czech Republic", at: [49.8175, 15.473] },
  { name: "Bergen", icon: "location_city", line: "Concert crew", tint: "#e7f6ee", place: "Bergen, NO", at: [60.3913, 5.3221] },
  { name: "Oslo", icon: "location_city", line: "Concert photography", tint: "#eef2f6", place: "Oslo, NO", at: [59.9139, 10.7522] },
  { name: "Warsaw", icon: "location_city", line: "Concert photography", tint: "#fde8ea", place: "Warsaw, PL", at: [52.2297, 21.0122] },
  { name: "Helsinki", icon: "location_city", line: "Concert and portrait crew", tint: "#e7f0fb", place: "Helsinki, FI", at: [60.1699, 24.9384] },
  { name: "Finland", icon: "public", line: "Portrait crew", tint: "#e7f0fb", place: "Finland", at: [61.9241, 25.7482] },
  { name: "Sweden", icon: "public", line: "Portrait photography", tint: "#fff4d6", place: "Sweden", at: [60.1282, 18.6435] },
  { name: "Varberg", icon: "location_city", line: "Concert video", tint: "#e7f6ee", place: "Varberg, SE", at: [57.1057, 12.2508] },
  { name: "Porto", icon: "location_city", line: "Concert photography", tint: "#fde8f3", place: "Porto, PT", at: [41.1579, -8.6291] },
  { name: "Portugal", icon: "public", line: "Concert and portrait crew", tint: "#fde8f3", place: "Portugal", at: [39.3999, -8.2245] },
  { name: "Sydney", icon: "location_city", line: "Concert photography", tint: "#fff4d6", place: "Sydney, AU", at: [-33.8688, 151.2093] },
  { name: "Mexico City", icon: "location_city", line: "Portrait and concert photography", tint: "#f8efe4", place: "Mexico City, MX", at: [19.4326, -99.1332] },
  { name: "Accra", icon: "location_city", line: "Director of photography", tint: "#e7f6ee", place: "Accra, GH", at: [5.6037, -0.187] },
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
  Memphis: "Memphis is a thin market. Atlanta is the next place the creatives have depth.",
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
  "Producer",
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

const ROLE_GENRES = {
  Stylist: ["Hair", "Wardrobe"],
  Editor: ["VFX"],
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

function roleNames(record) {
  return [...(record.roles || []), ...(record.secondary || [])];
}

function blob(record) {
  const past = (record.past || []).map((item) => `${item.artist} ${item.project} ${item.role}`).join(" ");
  return [
    record.name,
    record.city,
    ...(record.also || []),
    ...roleNames(record),
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
    if (cities.length && !cities.some((city) => sameCity(record.city, city) || (record.also || []).some((item) => sameCity(item, city)))) return false;
    if (state.roles.length) {
      const hit = state.roles.some((role) => {
        if (!roleNames(record).includes(role)) return false;
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
  if (!parts.length) return PEOPLE.length ? "Everyone in the creatives." : "";
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

function canonicalCity(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const lower = raw.toLowerCase();
  const found = CITIES.find(
    (city) => city.name.toLowerCase() === lower || String(city.place || "").toLowerCase() === lower
  );
  return found ? found.name : raw;
}

function cityRecord(name) {
  return CITIES.find((city) => city.name === canonicalCity(name));
}

function cityMatches(city, filter) {
  if (!filter) return true;
  const aliases = {
    "New York": "nyc ny",
    "Los Angeles": "la",
    Atlanta: "atl",
    London: "ldn",
    Birmingham: "brum",
    "Mexico City": "cdmx",
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
    Nightlife: "nightlife",
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
    return `Shoots ${joinPhrase(genres)}${place}.`;
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

function instagramStrip(record, className, linked = true) {
  const instagramHref = record.instagram ? `https://instagram.com/${record.instagram}` : "";
  const shotClass = className.slice(0, -1);
  const shots = instagramShots(record)
    .map((item) => {
      const href = item.href || instagramHref;
      const img = `<img src="${escapeHtml(item.src)}" alt="" />`;
      if (linked && href) {
        return `<a class="${shotClass}" href="${escapeHtml(href)}" target="_blank" rel="noreferrer">${img}</a>`;
      }
      return `<span class="${shotClass}">${img}</span>`;
    })
    .join("");
  return shots ? `<div class="${className}">${shots}</div>` : "";
}

const BOARDS_KEY = "10k-boards";

function readBoards() {
  try {
    const parsed = JSON.parse(localStorage.getItem(BOARDS_KEY) || "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((board) => board && typeof board.id === "string" && typeof board.name === "string")
      .map((board) => ({
        id: board.id,
        name: board.name,
        people: Array.isArray(board.people) ? [...new Set(board.people.filter(Boolean))] : [],
      }));
  } catch {
    return [];
  }
}

function saveBoards(boards) {
  try {
    localStorage.setItem(BOARDS_KEY, JSON.stringify(boards));
  } catch {}
}

function isPersonStarred(personId) {
  return readBoards().some((board) => board.people.includes(personId));
}

function starIconSvg(filled) {
  return `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 3.4l2.62 5.31 5.86.85-4.24 4.13 1 5.84L12 16.77l-5.24 2.76 1-5.84-4.24-4.13 5.86-.85L12 3.4z" fill="${filled ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
}

function starButtonHtml(personId, extraClass = "") {
  const starred = isPersonStarred(personId);
  const cls = ["star-btn", extraClass, starred ? "is-starred" : ""].filter(Boolean).join(" ");
  return `<button type="button" class="${cls}" data-star-person="${escapeHtml(personId)}" aria-label="${starred ? "Saved to board" : "Save to board"}" aria-pressed="${starred}">${starIconSvg(starred)}</button>`;
}

function syncStarButtons() {
  document.querySelectorAll(".star-btn[data-star-person]").forEach((btn) => {
    const id = btn.dataset.starPerson;
    const starred = isPersonStarred(id);
    btn.classList.toggle("is-starred", starred);
    btn.setAttribute("aria-pressed", String(starred));
    btn.setAttribute("aria-label", starred ? "Saved to board" : "Save to board");
    btn.innerHTML = starIconSvg(starred);
  });
}

function rosterCardHtml(record) {
  const city = cityRecord(record.city);
  const tags = (record.genres || []).join(" · ");
  const instagramHref = record.instagram ? `https://instagram.com/${record.instagram}` : "";
  return `
    ${starButtonHtml(record.id, "result-card_star")}
    ${avatarHtml(record, "result-card_avatar")}
    <div class="result-card_body">
      <h3>${escapeHtml(record.name)}</h3>
      <p class="result-card_role">${escapeHtml(roleNames(record).join(" · "))}</p>
      ${record.city ? `<p>${escapeHtml(city?.place || record.city)}</p>` : "<p></p>"}
      <p class="result-card_tags">${escapeHtml(tags)}</p>
      <div class="result-card_icons">
        ${externalControl("roster-icon", "Instagram", instagramHref, tinyIcon(CONTACT_PATHS.instagram))}
        ${copyControl("Portfolio", record.portfolio || "", "Copied portfolio link", tinyIcon(CONTACT_PATHS.portfolio))}
        ${copyControl("Phone", record.phone || "", "Copied phone number", tinyIcon(CONTACT_PATHS.phone))}
        ${copyControl("Email", record.email || "", "Copied email", tinyIcon(CONTACT_PATHS.email))}
      </div>
    </div>
    ${instagramStrip(record, "result-card_shots", false)}
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
  empty.textContent = PEOPLE.length ? "No one matches that yet." : "No creatives yet.";
  document.querySelector(".map-skeleton")?.remove();
  grid.innerHTML = "";
  grid.removeAttribute("aria-busy");
  grid.removeAttribute("aria-label");

  list.forEach((record) => {
    const card = document.createElement("article");
    card.className = "result-card";
    card.tabIndex = 0;
    card.dataset.id = record.id;
    card.innerHTML = rosterCardHtml(record);
    const open = () => openProfile(record.id);
    card.addEventListener("click", (event) => {
      if (event.target.closest("a, .copy-icon, .star-btn")) return;
      open();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.target.closest("a, .copy-icon, .star-btn")) open();
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
let resultCityLayer = null;
let resultPinLayer = null;
const resultMarkers = new Map();
const resultCityMarkers = new Map();
const CITY_MAX_ZOOM = 11;
const CITY_EXPAND_ZOOM = 11;

function cityFanPoint(center, indexInCity, cityCount) {
  if (cityCount <= 1) return center;
  const spacingPx = 52;
  const centerPt = resultMap ? resultMap.project(center, CITY_MAX_ZOOM) : null;
  let dx = 0;
  let dy = 0;
  if (cityCount <= 7) {
    const angle = (indexInCity / cityCount) * Math.PI * 2 - Math.PI / 2;
    const radius = cityCount <= 3 ? spacingPx * 0.72 : spacingPx;
    dx = Math.cos(angle) * radius;
    dy = Math.sin(angle) * radius;
  } else if (indexInCity > 0) {
    let rem = indexInCity - 1;
    let ring = 1;
    while (rem >= ring * 6) {
      rem -= ring * 6;
      ring += 1;
    }
    const priorPlaced = 1 + 3 * (ring - 1) * ring;
    const countInRing = Math.min(ring * 6, cityCount - priorPlaced);
    const angle = (rem / countInRing) * Math.PI * 2 - Math.PI / 2 + (ring % 2) * (Math.PI / countInRing);
    const radius = ring * spacingPx;
    dx = Math.cos(angle) * radius;
    dy = Math.sin(angle) * radius;
  }
  if (centerPt && resultMap) {
    const ll = resultMap.unproject(L.point(centerPt.x + dx, centerPt.y + dy), CITY_MAX_ZOOM);
    return [ll.lat, ll.lng];
  }
  const latPerPx = 0.00052;
  const lngPerPx = latPerPx / Math.max(0.45, Math.cos((center[0] * Math.PI) / 180));
  return [center[0] - dy * latPerPx, center[1] + dx * lngPerPx];
}

function pinCity(record) {
  const cities = activeCities();
  if (cities.length && !cities.some((city) => sameCity(record.city, city))) {
    return (record.also || []).find((city) => cities.some((item) => sameCity(city, item))) || record.city;
  }
  return record.city;
}

function pinPoint(record, indexInCity, cityCount, cityName = record.city) {
  const city = cityRecord(cityName);
  if (!city?.at) return null;
  return cityFanPoint(city.at, indexInCity, cityCount);
}

function mapPopup(record) {
  const instagramHref = record.instagram ? `https://instagram.com/${record.instagram}` : "";
  const phoneHref = record.phone ? `tel:${record.phone}` : "";
  const mailHref = record.email ? `mailto:${record.email}` : "";
  const shots = instagramStrip(record, "roster-pop_shots", false);
  return `
    <div class="roster-pop">
      ${starButtonHtml(record.id, "roster-pop_star")}
      <button class="roster-pop_close" type="button" aria-label="Close">
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
      <div class="roster-pop_head">
        ${avatarHtml(record, "roster-pop_avatar")}
        <div>
          <h3>${escapeHtml(record.name)}</h3>
          <p>${escapeHtml(roleNames(record).join(" · "))}</p>
        </div>
      </div>
      ${shots ? shots : ""}
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

const POPUP_GLASS =
  "linear-gradient(115deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 246, 240, 0.58) 46%, rgba(255, 255, 255, 0.38) 100%)";

function paintPopupGlass(popup) {
  const wrap = popup?.getElement()?.querySelector(".leaflet-popup-content-wrapper");
  if (!wrap) return;
  wrap.style.backgroundColor = "rgba(255, 248, 244, 0.78)";
  wrap.style.backgroundImage = POPUP_GLASS;
  wrap.style.border = "1px solid rgba(255, 255, 255, 0.72)";
  wrap.style.borderRadius = "22px";
  wrap.style.boxShadow = "0 12px 32px rgba(20, 20, 30, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)";
  wrap.style.backdropFilter = "blur(18px) saturate(1.6)";
  wrap.style.webkitBackdropFilter = "blur(18px) saturate(1.6)";
}

function updateMapZoomLayer() {
  if (!resultMap || !resultCityLayer || !resultPinLayer) return;
  const expanded = resultMap.getZoom() >= CITY_EXPAND_ZOOM;
  if (expanded) {
    if (resultMap.hasLayer(resultCityLayer)) resultMap.removeLayer(resultCityLayer);
    if (!resultMap.hasLayer(resultPinLayer)) resultMap.addLayer(resultPinLayer);
  } else {
    resultMap.closePopup();
    if (resultMap.hasLayer(resultPinLayer)) resultMap.removeLayer(resultPinLayer);
    if (!resultMap.hasLayer(resultCityLayer)) resultMap.addLayer(resultCityLayer);
  }
}

let mapSyncTries = 0;

function syncMap(list) {
  const mount = document.getElementById("map");
  if (!mount || typeof L === "undefined") return;
  const pane = mount.closest(".map-pane") || mount;
  if (getComputedStyle(pane).display === "none") return;
  const rect = mount.getBoundingClientRect();
  if (rect.width < 24 || rect.height < 24) {
    if (resultsView === "map" && mapSyncTries < 12) {
      mapSyncTries += 1;
      requestAnimationFrame(() => syncMap(filteredPeople()));
    }
    return;
  }
  mapSyncTries = 0;
  if (!resultMap) {
    resultMap = L.map(mount, {
      zoomControl: false,
      scrollWheelZoom: true,
      minZoom: 2,
      maxZoom: CITY_MAX_ZOOM,
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
      maxZoom: CITY_MAX_ZOOM,
    }).addTo(resultMap);
    L.control.zoom({ position: "topright" }).addTo(resultMap);
    resultMap.getContainer().addEventListener("click", (event) => {
      if (!event.target.closest(".roster-pop_close")) return;
      event.preventDefault();
      resultMap.closePopup();
    });
    resultCityLayer = L.layerGroup();
    resultPinLayer = L.layerGroup();
    resultMap.on("zoomend", updateMapZoomLayer);
  }
  resultCityLayer.clearLayers();
  resultPinLayer.clearLayers();
  resultMarkers.clear();
  resultCityMarkers.clear();

  const cityGroups = new Map();
  list.forEach((record) => {
    const cityName = canonicalCity(pinCity(record));
    const city = cityRecord(cityName);
    if (!city?.at) return;
    if (!cityGroups.has(city.name)) cityGroups.set(city.name, { city, records: [] });
    cityGroups.get(city.name).records.push(record);
  });

  const points = [];
  cityGroups.forEach(({ city, records }) => {
    const count = records.length;
    const cityMarker = L.marker(city.at, {
      icon: count === 1
        ? pinIcon(records[0])
        : L.divIcon({
            className: "map-cluster",
            html: `<div class="map-cluster-face"><span>${count}</span></div>`,
            iconSize: [46, 58],
            iconAnchor: [23, 54],
          }),
    });
    cityMarker.on("click", () => {
      resultMap.setView(city.at, CITY_MAX_ZOOM, { animate: true });
    });
    resultCityLayer.addLayer(cityMarker);
    records.forEach((record) => resultCityMarkers.set(record.id, cityMarker));

    records.forEach((record, indexInCity) => {
      const point = pinPoint(record, indexInCity, count, city.name);
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
      marker.on("popupopen", (event) => {
        paintPopupGlass(event.popup);
        requestAnimationFrame(() => paintPopupGlass(event.popup));
        const shots = event.popup.getElement()?.querySelector(".roster-pop_shots");
        if (shots) {
          shots.tabIndex = 0;
          shots.setAttribute("role", "button");
          shots.setAttribute("aria-label", `Open ${record.name}'s page`);
          shots.addEventListener("click", (clickEvent) => {
            clickEvent.preventDefault();
            clickEvent.stopPropagation();
            openProfile(record.id);
          });
          shots.addEventListener("keydown", (keyEvent) => {
            if (keyEvent.key !== "Enter" && keyEvent.key !== " ") return;
            keyEvent.preventDefault();
            openProfile(record.id);
          });
        }
        resultMarkers.forEach((item, id) => {
          item.getElement()?.classList.toggle("is-selected", id === record.id);
          if (id === record.id) item.setZIndexOffset(1000);
        });
      });
      marker.on("popupclose", () => {
        marker.getElement()?.classList.remove("is-selected");
        marker.setZIndexOffset(0);
      });
      resultPinLayer.addLayer(marker);
      resultMarkers.set(record.id, marker);
      points.push(point);
    });
  });

  const selected = activeCities();
  const centers = [...cityGroups.values()].map(({ city }) => city.at);
  if (selected.length > 1 && centers.length > 1) {
    resultMap.fitBounds(centers, { padding: [72, 72], maxZoom: CITY_EXPAND_ZOOM - 1 });
  } else if (selected.length === 1 && cityRecord(selected[0])?.at) {
    resultMap.setView(cityRecord(selected[0]).at, CITY_MAX_ZOOM);
  } else if (centers.length === 1) {
    resultMap.setView(centers[0], CITY_MAX_ZOOM);
  } else if (!selected.length && points.length > 24) resultMap.setView([40.7128, -74.006], CITY_MAX_ZOOM);
  else if (points.length) resultMap.fitBounds(points, { padding: [36, 36], maxZoom: CITY_MAX_ZOOM });
  else resultMap.setView([39.5, -98.35], 4);
  updateMapZoomLayer();
  requestAnimationFrame(() => {
    resultMap.invalidateSize();
    updateMapZoomLayer();
  });
}

function highlightPin(id, on) {
  const marker = resultMarkers.get(id);
  const element = marker?.getElement();
  if (element) {
    element.classList.toggle("is-hot", on);
    marker.setZIndexOffset(on ? 1000 : 0);
    return;
  }
  const cityMarker = resultCityMarkers.get(id);
  const cityEl = cityMarker?.getElement();
  if (!cityEl) return;
  cityEl.classList.toggle("is-hot", on);
  cityMarker.setZIndexOffset(on ? 1000 : 0);
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
  empty.textContent = PEOPLE.length ? "No one matches that yet." : "No creatives yet.";
  grid.innerHTML = "";
  grid.removeAttribute("aria-busy");
  grid.removeAttribute("aria-label");

  nearby.forEach((record) => {
    const card = document.createElement("article");
    card.className = "result-card";
    card.tabIndex = 0;
    card.innerHTML = rosterCardHtml(record);
    const open = () => openProfile(record.id);
    card.addEventListener("click", (event) => {
      if (event.target.closest("a, .copy-icon, .star-btn")) return;
      open();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.target.closest("a, .copy-icon, .star-btn")) open();
    });
    grid.appendChild(card);
  });

  renderNearby(list);
}

function pastProjectCards(record) {
  const items = record.past || [];
  if (!items.length) {
    return `<div class="past-projects"><div class="past-card past-card_empty"><span class="past-card_copy"><span>No 10K projects on file yet.</span></span></div></div>`;
  }
  const catalog = typeof PROJECTS === "undefined" ? [] : PROJECTS;
  return `<div class="past-projects">${items
    .map((item) => {
      const project = catalog.find((entry) => entry.id === item.id);
      const title = project?.title || item.project || "Project";
      const image = project?.images?.[0] || "";
      const media = image
        ? `<img src="${escapeHtml(image)}" alt="" />`
        : `<span class="past-card_fallback" aria-hidden="true"></span>`;
      return `<button class="past-card" type="button" data-project="${escapeHtml(item.id || "")}">
        ${media}
        <span class="past-card_copy">
          <strong>${escapeHtml(title)}</strong>
          <span>${escapeHtml(item.role || "")}</span>
        </span>
      </button>`;
    })
    .join("")}</div>`;
}

function preferredKeys(record) {
  const value = record.preferred;
  const list = Array.isArray(value) ? value : String(value || "").split(",");
  return [...new Set(list.map((item) => String(item).trim().toLowerCase()).filter(Boolean))];
}

function contactRows(record) {
  const rows = [];
  if (record.instagram) {
    rows.push({ key: "instagram", label: "Instagram", value: `@${record.instagram}`, href: `https://instagram.com/${record.instagram}` });
  }
  if (record.email) rows.push({ key: "email", label: "Email", value: record.email });
  if (record.phone) rows.push({ key: "phone", label: "Phone", value: record.phone });
  const preferred = new Set(preferredKeys(record));
  rows.sort((a, b) => Number(preferred.has(b.key)) - Number(preferred.has(a.key)));
  return rows;
}

function contactAction(row) {
  const icon = tinyIcon(CONTACT_PATHS[row.key] || "");
  if (row.href) {
    return `<a class="contact_icon" href="${escapeHtml(row.href)}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(row.label)}">${icon}</a>`;
  }
  const copied = row.key === "phone" ? "Copied phone number" : row.key === "email" ? "Copied email" : "Copied";
  return `<button type="button" class="contact_icon copy-icon" data-copy="${escapeHtml(row.value)}" data-copied="${escapeHtml(copied)}" aria-label="Copy ${escapeHtml(row.label)}">${icon}<span class="copy-tip" role="tooltip">${escapeHtml(row.value)}</span></button>`;
}

function contactLine(row) {
  return `<div class="contact_row">
    <div><strong>${escapeHtml(row.label)}</strong>${escapeHtml(row.value)}</div>
    <div class="contact_actions">${contactAction(row)}</div>
  </div>`;
}

function introToggleHtml() {
  return `<button type="button" class="intro-toggle" aria-expanded="false" aria-controls="intro-panel"><span class="intro-label">Intro message</span><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 6.5 8 10.5 12 6.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`;
}

function introPanelHtml() {
  return `<div class="intro-panel" id="intro-panel" hidden>
    <div class="intro-shell">
      <button class="intro-copy" type="button" id="copy-intro" aria-label="Copy intro message">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
      </button>
      <textarea class="intro" id="intro" rows="4" aria-label="Intro message"></textarea>
    </div>
  </div>`;
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
    document.title = isResultsPage()
      ? "Search · 10K Creatives"
      : isBoardsPage()
      ? "Boards · 10K Creatives"
      : "10K Creatives";
    return;
  }

  root.hidden = false;
  document.title = `${record.name} · 10K Creatives`;
  const projects = pastProjectCards(record);
  const city = cityRecord(record.city);
  const place = city?.place || record.city || "";
  const also = (record.also || []).length ? `Also travels to ${record.also.join(", ")}.` : "";
  const genreLabel = { Concert: "Concerts" };
  const genres = [...(record.genres || [])].sort((a, b) => a.localeCompare(b)).map((genre) => genreLabel[genre] || genre);
  const roleLine = [...(record.roles || []), genres.join("/")].filter(Boolean).join(", ");
  const instagramHref = record.instagram ? `https://instagram.com/${record.instagram}` : "";

  const backLabel = isBoardsPage()
    ? state.board
      ? "Back to board"
      : "Back to boards"
    : isResultsPage()
    ? "Back to results"
    : "Back to creatives";

  root.innerHTML = `
    <a class="back" href="#results"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M15 5.5 8.5 12 15 18.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span>${backLabel}</span></a>
    <header class="profile_head">
      ${avatarHtml(record, "profile_avatar")}
      <div class="profile_id">
      <div class="profile_title_row">
        <h1>${escapeHtml(record.name)}</h1>
        ${starButtonHtml(record.id, "profile_star")}
      </div>
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
        ${`<p class="profile_bio">${escapeHtml(cardBio(record))}</p>`}
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
          <div class="contact-card">
            <div class="contact-card_glass">
              <div class="contact" id="contact"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;

  root.querySelectorAll(".past-card").forEach((button) => {
    button.addEventListener("click", () => {
      if (typeof openProject === "function") openProject(button.dataset.project);
    });
  });

  root.querySelector(".back").addEventListener("click", (event) => {
    event.preventDefault();
    closeProfile();
  });

  const contact = root.querySelector("#contact");
  const rows = contactRows(record);
  const preferred = new Set(preferredKeys(record));
  const preferredRows = rows.filter((row) => preferred.has(row.key));
  const otherRows = rows.filter((row) => !preferred.has(row.key));
  if (preferredRows.length) {
    contact.insertAdjacentHTML("beforeend", `
      <div class="contact_preferred">
        <div class="contact_preferred_head">
          <strong>Preferred</strong>
        </div>
        ${preferredRows.map((row) => contactLine(row)).join("")}
        ${introToggleHtml()}
        ${introPanelHtml()}
      </div>`);
  }
  otherRows.forEach((row) => {
    contact.insertAdjacentHTML("beforeend", contactLine(row));
  });
  if (!preferredRows.length && rows.length) {
    contact.insertAdjacentHTML("beforeend", `${introToggleHtml()}${introPanelHtml()}`);
  }

  const intro = root.querySelector("#intro");
  const copyIntro = root.querySelector("#copy-intro");
  const toggle = root.querySelector(".intro-toggle");
  const panel = root.querySelector("#intro-panel");
  if (toggle && panel) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
    });
  }
  if (intro && copyIntro) {
  intro.value = introText(record);
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
  }
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
  Producer: '<rect x="7" y="6.2" width="10" height="12.6" rx="1.4"/><path d="M9.2 6.2V5.2a1.2 1.2 0 0 1 1.2-1.2h3.2a1.2 1.2 0 0 1 1.2 1.2v1M9.4 11h5.2M9.4 14.2h3.4"/>',
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
      const current = activeCities();
      setCities(current.includes(city.name) ? current.filter((item) => item !== city.name) : [...current, city.name]);
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
  sub.innerHTML = `<div class="who-sub_menu">${rows
    .map(
      (row) => `<button class="filter-sub_row" type="button" role="menuitemcheckbox" aria-checked="${row.checked}" data-genre="${escapeHtml(row.genre)}">
        ${checkHtml()}
        <span class="filter-row_label">${escapeHtml(row.label)}</span>
      </button>`
    )
    .join("")}</div>`;
  sub.querySelectorAll(".filter-sub_row").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!button.dataset.genre) toggleAllRole(openWhoRole);
      else toggleRoleGenre(openWhoRole, button.dataset.genre);
    });
  });
  const row = [...document.querySelectorAll("#who-options .pick")].find((button) => button.dataset.role === openWhoRole);
  alignSubmenu(sub, row, 8);
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
  if (clear) clear.hidden = !activeCities().length;
  const clearWho = document.getElementById("who-clear");
  if (clearWho) clearWho.hidden = !state.roles.length;
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
  const used = new Set(PEOPLE.flatMap((record) => roleNames(record)));
  const listed = (role) => used.has(role) || Boolean(ROLE_GENRES[role]) || role === "Producer";
  const ordered = [
    ...FILTER_ORDER.filter(listed),
    ...ROLES.map((role) => role.name).filter((role) => listed(role) && !FILTER_ORDER.includes(role)),
  ];
  return ordered.map((role) => {
    const pinned = ROLE_GENRES[role] || [];
    const found = new Set();
    PEOPLE.forEach((record) => {
      if (!roleNames(record).includes(role)) return;
      (record.genres || []).forEach((genre) => found.add(genre));
    });
    pinned.forEach((genre) => found.delete(genre));
    return {
      role,
      label: filterLabel(role),
      all: filterAllLabel(role),
      genres: [...[...found].sort((a, b) => a.localeCompare(b)), ...pinned],
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

function sameCity(left, right) {
  const a = canonicalCity(left);
  const b = canonicalCity(right);
  return Boolean(a) && a === b;
}

function setCities(cities) {
  const unique = [];
  cities.forEach((city) => {
    const name = canonicalCity(city);
    if (name && !unique.includes(name)) unique.push(name);
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
      event.preventDefault();
      toggleLocation(button.getAttribute("data-city") || "");
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

let resultsViewSettled = false;
let resultsViewGeneration = 0;

function setResultsView(view) {
  if (view !== "map" && view !== "list") return;
  const page = document.querySelector(".results-page");
  const scroller = document.querySelector(".results");
  const savedTop = resultsView === "map" ? scroller?.scrollTop || 0 : window.scrollY;
  const changed = view !== resultsView;
  const animate =
    changed &&
    resultsViewSettled &&
    page &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const generation = ++resultsViewGeneration;
  resultsView = view;
  document.querySelectorAll(".view-toggle_btn").forEach((button) => {
    const on = button.dataset.view === view;
    button.classList.toggle("is-on", on);
    button.setAttribute("aria-pressed", String(on));
  });

  const commit = () => {
    if (generation !== resultsViewGeneration) return;
    if (page) page.dataset.resultsView = view;
    const summary = document.getElementById("summary");
    if (summary && isResultsPage()) {
      const list = filteredPeople();
      summary.textContent =
        view === "list" ? summaryText(list) : "Hover a card to find them on the map. Click the card to open their profile.";
    }
    requestAnimationFrame(() => {
      if (generation !== resultsViewGeneration) return;
      if (view === "list") window.scrollTo(0, savedTop);
      else if (scroller) scroller.scrollTop = savedTop;
      if (view !== "map") return;
      requestAnimationFrame(() => {
        if (generation !== resultsViewGeneration) return;
        syncMap(filteredPeople());
        resultMap?.invalidateSize();
      });
    });
  };

  if (!animate) {
    page?.classList.remove("is-view-out", "is-view-in");
    commit();
    return;
  }

  page.classList.remove("is-view-in");
  page.classList.add("is-view-out");
  window.setTimeout(() => {
    if (generation !== resultsViewGeneration) return;
    commit();
    page.classList.add("is-view-in");
    page.classList.remove("is-view-out");
    window.setTimeout(() => {
      if (generation === resultsViewGeneration) page.classList.remove("is-view-in");
    }, 240);
  }, 120);
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

function isBoardsPage() {
  return document.body.dataset.page === "boards";
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
  if (!state.profile) {
    if (isBoardsPage()) renderBoards();
    else {
      renderResults(isResultsPage() ? filteredPeople() : PEOPLE);
      renderHomeBoards();
    }
  }
  renderProfile();
  if (!skipUrl) {
    if (isResultsPage() || isBoardsPage()) writeUrl(options.url || "replace");
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
  if (state.board) params.set("board", state.board);
  if (state.profile) params.set("person", state.profile);
  const next = `${location.pathname}${params.toString() ? `?${params}` : ""}`;
  if (next === `${location.pathname}${location.search}`) return;
  if (mode === "push") history.pushState(null, "", next);
  else history.replaceState(null, "", next);
}

function readUrl() {
  const params = new URLSearchParams(location.search);
  state.query = params.get("q") || "";
  state.city = canonicalCity(params.get("city") || "");
  state.extraCities = (params.get("near") || "").split(",").map(canonicalCity).filter(Boolean);
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
  state.board = params.get("board") || "";
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
  const clearWho = document.getElementById("who-clear");
  if (clearWho) {
    clearWho.addEventListener("click", (event) => {
      event.stopPropagation();
      openWhoRole = "";
      clearRoles();
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
      if (match && !activeCities().includes(match.name)) setCities([...activeCities(), match.name]);
    }
    state.profile = "";
    openPanel = "";
    document.getElementById("where-filter").value = "";
    if (!isResultsPage()) {
      markSkeletonNav();
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
      if (document.querySelector(".add-city.is-open")) {
        closeCityMenus();
        return;
      }
      if (mainPicker.isOpen() || secondaryPickers.some((picker) => picker.isOpen())) {
        mainPicker.close();
        secondaryPickers.forEach((picker) => picker.close());
        return;
      }
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
  const kept = saved.filter((record) => {
    const name = String(record?.name || "").trim();
    return !/^nicole(\s|$)/i.test(name) && !/^hamna(\s|$)/i.test(name) && !/^betty(\s|$)/i.test(name);
  });
  if (kept.length !== saved.length) localStorage.setItem(ADDED_KEY, JSON.stringify(kept));
  kept
    .slice()
    .reverse()
    .forEach((record) => {
      if (!record || !record.id || !record.name || PEOPLE.some((item) => item.id === record.id)) return;
      record.roles = record.roles || [];
      record.secondary = record.secondary || [];
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

function clearDialogMenu(panel) {
  panel.style.position = "";
  panel.style.top = "";
  panel.style.left = "";
  panel.style.width = "";
  panel.style.right = "";
}

function placeDialogMenu(panel) {
  const scroller = panel.closest(".add-dialog_panel");
  const anchor = panel.parentElement?.querySelector(".add-role_toggle, .add-city_toggle");
  if (!scroller || !anchor || panel.hidden) return;
  const rect = anchor.getBoundingClientRect();
  panel.style.position = "fixed";
  panel.style.left = `${rect.left}px`;
  panel.style.width = `${rect.width}px`;
  panel.style.right = "auto";
  panel.style.top = `${rect.bottom + 8}px`;
  const menu = panel.getBoundingClientRect();
  const overflow = menu.bottom - (window.innerHeight - 12);
  if (overflow > 0) {
    scroller.scrollTop += overflow;
    const next = anchor.getBoundingClientRect();
    panel.style.top = `${next.bottom + 8}px`;
    panel.style.left = `${next.left}px`;
  }
}

function createRolePicker(config) {
  const pick = { roles: [], roleGenres: {} };
  const single = Boolean(config.single);

  function blocked() {
    return config.blockedRoles ? config.blockedRoles() : [];
  }

  function labelText() {
    if (!pick.roles.length) return config.emptyLabel;
    const names = pick.roles.map((role) => filterLabel(role));
    if (names.length === 1) return names[0];
    return `${names[0]} +${names.length - 1}`;
  }

  function isOpen() {
    const panel = document.getElementById(config.panel);
    return Boolean(panel && !panel.hidden);
  }

  function close() {
    const panel = document.getElementById(config.panel);
    const toggle = document.getElementById(config.toggle);
    if (!panel || !toggle) return;
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    clearDialogMenu(panel);
  }

  function setOpen(open) {
    const panel = document.getElementById(config.panel);
    const toggle = document.getElementById(config.toggle);
    if (!panel || !toggle) return;
    if (open) {
      config.beforeOpen?.();
      build();
    }
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    if (open) placeDialogMenu(panel);
    else clearDialogMenu(panel);
  }

  function paintLabel() {
    const label = document.getElementById(config.label);
    const toggle = document.getElementById(config.toggle);
    if (!label || !toggle) return;
    label.textContent = labelText();
    toggle.classList.toggle("is-set", pick.roles.length > 0);
  }

  function paintGenres() {
    const box = document.getElementById(config.genres);
    if (!box) return;
    const role = single ? pick.roles[0] || "" : "";
    const item = role ? filterMenu().find((entry) => entry.role === role) : null;
    const genres = item && !blocked().includes(role) ? item.genres : [];
    if (!genres.length) {
      box.hidden = true;
      box.innerHTML = "";
      return;
    }
    const picked = pick.roleGenres[role] || [];
    box.hidden = false;
    box.innerHTML = `<span class="add-genres_label">Genre</span><div class="add-genres_list">${genres
      .map((genre) => {
        const on = picked.includes(genre);
        return `<button class="add-genre${on ? " is-on" : ""}" type="button" aria-pressed="${on}" data-genre="${escapeHtml(genre)}">${escapeHtml(genre)}</button>`;
      })
      .join("")}</div>`;
    box.querySelectorAll(".add-genre").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleGenre(role, button.dataset.genre);
      });
    });
  }

  function paint() {
    document.querySelectorAll(`#${config.menu} .add-city_option`).forEach((button) => {
      const on = pick.roles.includes(button.dataset.role);
      button.classList.toggle("is-on", on);
      button.setAttribute("aria-selected", String(on));
    });
    paintGenres();
    paintLabel();
  }

  function changed() {
    config.onChange?.();
  }

  function selectRole(role) {
    if (blocked().includes(role)) return;
    if (single && pick.roles.length === 1 && pick.roles[0] === role) {
      pick.roles = [];
      pick.roleGenres = {};
    } else if (single) {
      pick.roles = [role];
      pick.roleGenres = { [role]: pick.roleGenres[role] || [] };
    } else if (pick.roles.includes(role)) {
      pick.roles = pick.roles.filter((item) => item !== role);
      delete pick.roleGenres[role];
    } else {
      pick.roles = [...pick.roles, role];
      pick.roleGenres[role] = pick.roleGenres[role] || [];
    }
    paint();
    changed();
    if (single) close();
  }

  function toggleGenre(role, genre) {
    if (blocked().includes(role) || !pick.roles.includes(role)) return;
    const owned = pick.roleGenres[role] || [];
    const next = owned.includes(genre) ? owned.filter((item) => item !== genre) : [...owned, genre];
    pick.roleGenres[role] = next;
    paint();
    changed();
  }

  function build() {
    const menu = document.getElementById(config.menu);
    const panel = document.getElementById(config.panel);
    if (!menu || !panel) return;
    const skip = new Set(blocked());
    menu.innerHTML = "";
    filterMenu().forEach((item) => {
      if (skip.has(item.role)) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "add-city_option";
      button.dataset.role = item.role;
      button.setAttribute("role", "option");
      button.setAttribute("aria-selected", "false");
      button.textContent = item.label;
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        selectRole(item.role);
      });
      menu.append(button);
    });
    paint();
  }

  function bind() {
    const toggle = document.getElementById(config.toggle);
    if (!toggle || toggle.dataset.bound) return;
    toggle.dataset.bound = "1";
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      setOpen(!isOpen());
    });
  }

  return {
    bind,
    build,
    close,
    drop(roles) {
      const remove = new Set(roles);
      const next = pick.roles.filter((role) => !remove.has(role));
      if (next.length === pick.roles.length) return;
      pick.roles = next;
      roles.forEach((role) => delete pick.roleGenres[role]);
      paint();
    },
    genres() {
      return pick.roles.flatMap((role) => pick.roleGenres[role] || []);
    },
    isOpen,
    reset() {
      pick.roles = [];
      pick.roleGenres = {};
      close();
      paintLabel();
      paintGenres();
    },
    roles() {
      return pick.roles.slice();
    },
    open() {
      setOpen(true);
    },
    wrap() {
      return document.getElementById(config.wrap);
    },
  };
}

const secondaryPickers = [];
let secondaryCount = 0;

const mainPicker = createRolePicker({
  single: true,
  emptyLabel: "Add a main role",
  toggle: "add-main-toggle",
  label: "add-main-label",
  panel: "add-main-panel",
  menu: "add-main-panel",
  genres: "add-main-genres",
  wrap: "add-main-wrap",
  beforeOpen() {
    closeCityMenus();
    secondaryPickers.forEach((picker) => picker.close());
  },
  onChange() {
    secondaryPickers.forEach((picker) => picker.drop(mainPicker.roles()));
  },
});

function syncSecondaryAdd() {
  const button = document.getElementById("add-secondary-add");
  if (button) button.hidden = secondaryPickers.length >= 1;
}

function clearSecondaryFields() {
  secondaryPickers.splice(0, secondaryPickers.length);
  const list = document.getElementById("add-secondary-list");
  if (list) list.replaceChildren();
  syncSecondaryAdd();
}

function secondaryTaken(except) {
  const taken = new Set(mainPicker.roles());
  secondaryPickers.forEach((picker) => {
    if (picker === except) return;
    picker.roles().forEach((role) => taken.add(role));
  });
  return [...taken];
}

function addSecondaryField() {
  const list = document.getElementById("add-secondary-list");
  if (!list || secondaryPickers.length >= 1) return;
  const id = `add-secondary-${secondaryCount}`;
  secondaryCount += 1;
  const wrap = document.createElement("div");
  wrap.className = "add-role add-secondary_field";
  wrap.id = id;
  wrap.innerHTML = `
    <span class="add-secondary_label">Secondary role</span>
    <div class="add-role_group">
      <button class="add-role_toggle" id="${id}-toggle" type="button" aria-expanded="false" aria-controls="${id}-panel">
        <span id="${id}-label">Add a secondary role</span>
        <svg class="add-field_chevron" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 6.5 8 10.5 12 6.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <button class="add-field_remove" type="button" aria-label="Remove secondary role">×</button>
      <div class="add-city_panel" id="${id}-panel" hidden role="listbox" aria-label="Secondary role"></div>
      <div class="add-genres" id="${id}-genres" hidden></div>
    </div>
  `;
  list.append(wrap);
  const picker = createRolePicker({
    single: true,
    emptyLabel: "Add a secondary role",
    toggle: `${id}-toggle`,
    label: `${id}-label`,
    panel: `${id}-panel`,
    menu: `${id}-panel`,
    genres: `${id}-genres`,
    wrap: id,
    blockedRoles: () => secondaryTaken(picker),
    beforeOpen() {
      closeCityMenus();
      mainPicker.close();
      secondaryPickers.forEach((other) => {
        if (other !== picker) other.close();
      });
    },
  });
  secondaryPickers.push(picker);
  picker.bind();
  wrap.querySelector(".add-field_remove").addEventListener("click", (event) => {
    event.stopPropagation();
    picker.close();
    const index = secondaryPickers.indexOf(picker);
    if (index >= 0) secondaryPickers.splice(index, 1);
    wrap.remove();
    syncSecondaryAdd();
  });
  syncSecondaryAdd();
  picker.open();
}

function closeCityMenus(except) {
  document.querySelectorAll(".add-city.is-open").forEach((wrap) => {
    if (wrap !== except) setCityOpen(wrap, false);
  });
}

function setCityOpen(wrap, open) {
  const panel = wrap.querySelector(".add-city_panel");
  const toggle = wrap.querySelector(".add-city_toggle");
  if (!panel || !toggle) return;
  wrap.classList.toggle("is-open", open);
  panel.hidden = !open;
  toggle.setAttribute("aria-expanded", String(open));
  if (open) placeDialogMenu(panel);
  else clearDialogMenu(panel);
}

function paintCityMenu(wrap) {
  const input = wrap.querySelector("input");
  const label = wrap.querySelector(".add-city_label");
  const panel = wrap.querySelector(".add-city_panel");
  const toggle = wrap.querySelector(".add-city_toggle");
  if (!input || !label || !panel || !toggle) return;
  const selected = input.value;
  const blocked = (wrap.dataset.blocked || "").split("|").filter(Boolean);
  const current = CITIES.find((item) => item.name === selected);
  label.textContent = current ? current.place || current.name : "Select a city";
  toggle.classList.toggle("is-set", Boolean(current));
  panel.innerHTML = CITIES.filter((item) => item.name === selected || !blocked.includes(item.name))
    .map((item) => {
      const on = item.name === selected;
      return `<button class="add-city_option${on ? " is-on" : ""}" type="button" role="option" aria-selected="${on}" data-city="${escapeHtml(item.name)}">${escapeHtml(item.place || item.name)}</button>`;
    })
    .join("");
  panel.querySelectorAll(".add-city_option").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      input.value = button.dataset.city;
      input.dispatchEvent(new Event("change", { bubbles: true }));
      paintCityMenu(wrap);
      setCityOpen(wrap, false);
    });
  });
}

function bindCityPicker(wrap) {
  if (!wrap || wrap.dataset.bound) return;
  wrap.dataset.bound = "1";
  wrap.querySelector(".add-city_toggle").addEventListener("click", (event) => {
    event.stopPropagation();
    const open = wrap.classList.contains("is-open");
    closeCityMenus();
    mainPicker.close();
    secondaryPickers.forEach((picker) => picker.close());
    if (!open) {
      paintCityMenu(wrap);
      const panel = wrap.querySelector(".add-city_panel");
      const room = window.innerHeight - wrap.querySelector(".add-city_toggle").getBoundingClientRect().bottom - 20;
      panel.style.maxHeight = `${Math.max(140, Math.min(240, room))}px`;
      setCityOpen(wrap, true);
      wrap.querySelector(".add-city_option")?.focus();
    }
  });
  wrap.querySelector(".add-city_panel").addEventListener("keydown", (event) => {
    const options = [...wrap.querySelectorAll(".add-city_option")];
    const index = options.indexOf(document.activeElement);
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const next = event.key === "ArrowDown" ? Math.min(index + 1, options.length - 1) : Math.max(index - 1, 0);
      options[next]?.focus();
    }
    if (event.key === "Enter" && index >= 0) {
      event.preventDefault();
      options[index].click();
    }
  });
}

function travelCityWraps() {
  return [...document.querySelectorAll("#add-travel-list .add-city")];
}

function refreshTravelSelects() {
  const home = document.getElementById("add-city").value;
  const wraps = travelCityWraps();
  wraps.forEach((wrap) => {
    const input = wrap.querySelector("input");
    if (input.value === home) input.value = "";
    wrap.dataset.blocked = [home, ...wraps.filter((other) => other !== wrap).map((other) => other.querySelector("input").value)].filter(Boolean).join("|");
    paintCityMenu(wrap);
  });
}

function addTravelCity() {
  const list = document.getElementById("add-travel-list");
  const row = document.createElement("div");
  row.className = "add-travel_row";
  row.innerHTML = `<div class="add-city add-combo"><button class="add-role_toggle add-city_toggle" type="button" aria-expanded="false" aria-haspopup="listbox" aria-label="Travel city"><span class="add-city_label">Select a city</span><svg class="add-field_chevron" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 6.5 8 10.5 12 6.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button><button class="add-field_remove" type="button" aria-label="Remove city">×</button><div class="add-city_panel" hidden role="listbox" aria-label="Travel city"></div><input class="add-city_value" type="hidden" value="" /></div>`;
  const wrap = row.querySelector(".add-city");
  bindCityPicker(wrap);
  row.querySelector(".add-field_remove").addEventListener("click", () => {
    setCityOpen(wrap, false);
    row.remove();
    refreshTravelSelects();
  });
  wrap.querySelector("input").addEventListener("change", refreshTravelSelects);
  list.append(row);
  refreshTravelSelects();
}

function clearTravel() {
  const box = document.getElementById("add-travel");
  const places = document.getElementById("add-travel-places");
  const list = document.getElementById("add-travel-list");
  if (box) box.checked = false;
  if (list) list.innerHTML = "";
  if (places) places.hidden = true;
}

function syncTravel() {
  const on = document.getElementById("add-travel").checked;
  const places = document.getElementById("add-travel-places");
  places.hidden = !on;
  if (!on) {
    document.getElementById("add-travel-list").innerHTML = "";
    return;
  }
  if (!travelCityWraps().length) addTravelCity();
}

function travelCities() {
  if (!document.getElementById("add-travel")?.checked) return [];
  const home = document.getElementById("add-city").value;
  const seen = new Set();
  return travelCityWraps()
    .map((wrap) => wrap.querySelector("input").value)
    .filter((city) => {
      if (!city || city === home || seen.has(city) || !CITIES.some((item) => item.name === city)) return false;
      seen.add(city);
      return true;
    });
}

function checkedValues(name) {
  return [...document.querySelectorAll(`#add-form input[name="${name}"]:checked`)].map((input) => input.value);
}

function fillAddForm() {
  const city = document.getElementById("add-city");
  const wrap = document.getElementById("add-city-wrap");
  city.value = "";
  wrap.dataset.blocked = "";
  paintCityMenu(wrap);
  mainPicker.reset();
  clearSecondaryFields();
  mainPicker.build();
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
  clearTravel();
  document.getElementById("add-error").textContent = "";
  document.getElementById("add-name").focus();
}

function addPersonFromForm() {
  const name = document.getElementById("add-name").value.trim();
  const city = document.getElementById("add-city").value;
  const mainRoles = mainPicker.roles();
  const extraRoles = [];
  const extraGenres = [];
  secondaryPickers.forEach((picker) => {
    picker.roles().forEach((role) => {
      if (!mainRoles.includes(role) && !extraRoles.includes(role)) extraRoles.push(role);
    });
    extraGenres.push(...picker.genres());
  });
  const roles = mainRoles;
  const genres = [...new Set([...mainPicker.genres(), ...extraGenres])];
  const instagram = cleanHandle(document.getElementById("add-instagram").value);
  const email = document.getElementById("add-email").value.trim();
  const phone = document.getElementById("add-phone").value.trim();
  const portfolio = cleanUrl(document.getElementById("add-portfolio").value);
  const bio = document.getElementById("add-bio")?.value.trim() || "";
  const preferred = document.querySelector('#add-form input[name="preferred"]:checked')?.value || "";
  const error = document.getElementById("add-error");
  if (!name) {
    error.textContent = "Add a name.";
    document.getElementById("add-name").focus();
    return;
  }
  if (!city) {
    error.textContent = "Choose a city.";
    document.getElementById("add-city-toggle").focus();
    return;
  }
  if (!mainPicker.roles().length) {
    error.textContent = "Choose a main role.";
    document.getElementById("add-main-toggle")?.focus();
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
  const record = person(rosterId(name), name, city, travelCities(), roles, genres, false, {
    instagram,
    email,
    phone,
    preferred: preferred || ["instagram", "email", "phone"].find((key) => contact[key]) || "",
    secondary: extraRoles,
    referredBy: "",
    compensation: "",
    portfolio,
    bio,
    rate: "",
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
  document.getElementById("add-close").addEventListener("click", () => setAddOpen(false));
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) setAddOpen(false);
  });
  mainPicker.bind();
  const dialogPanel = document.querySelector(".add-dialog_panel");
  dialogPanel?.addEventListener("scroll", () => {
    dialogPanel.querySelectorAll(".add-role_panel:not([hidden]), .add-city_panel:not([hidden])").forEach((panel) => placeDialogMenu(panel));
  }, { passive: true });
  document.getElementById("add-secondary-add")?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    addSecondaryField();
  });
  document.getElementById("add-travel")?.addEventListener("change", syncTravel);
  document.getElementById("add-travel-add")?.addEventListener("click", (event) => {
    event.preventDefault();
    addTravelCity();
  });
  bindCityPicker(document.getElementById("add-city-wrap"));
  document.getElementById("add-city")?.addEventListener("change", refreshTravelSelects);
  document.getElementById("add-form").addEventListener("click", (event) => {
    [mainPicker, ...secondaryPickers].forEach((picker) => {
      const wrap = picker.wrap();
      if (wrap && picker.isOpen() && !wrap.contains(event.target)) picker.close();
    });
    if (!event.target.closest(".add-city")) closeCityMenus();
  });
  document.getElementById("add-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addPersonFromForm();
  });
}

function markSkeletonNav() {
  try { sessionStorage.setItem("10k-skeleton", String(Date.now())); } catch (error) {}
}

function skeletonDelay() {
  let started = 0;
  try {
    started = Number(sessionStorage.getItem("10k-skeleton") || 0);
    sessionStorage.removeItem("10k-skeleton");
  } catch (error) {}
  if (!started) return 0;
  const elapsed = Date.now() - started;
  if (elapsed < 0 || elapsed > 4000) return 0;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return 0;
  return Math.max(180, 560 - elapsed);
}

function createBoard(rawName, initialPersonId = "") {
  const name = String(rawName || "").trim();
  if (!name) return null;
  const boards = readBoards();
  const baseSlug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "board";
  let id = baseSlug;
  let counter = 2;
  while (boards.some((item) => item.id === id)) {
    id = `${baseSlug}-${counter}`;
    counter += 1;
  }
  const board = {
    id,
    name,
    people: initialPersonId ? [initialPersonId] : [],
  };
  boards.unshift(board);
  saveBoards(boards);
  syncStarButtons();
  renderHomeBoards();
  if (isBoardsPage() && !state.profile) renderBoards();
  return board;
}

function deleteBoard(boardId) {
  const boards = readBoards().filter((item) => item.id !== boardId);
  saveBoards(boards);
  syncStarButtons();
  renderHomeBoards();
  if (state.board === boardId) state.board = "";
  if (isBoardsPage()) render({ url: "push" });
}

function togglePersonInBoard(personId, boardId) {
  const boards = readBoards();
  const board = boards.find((item) => item.id === boardId);
  if (!board) return false;
  const idx = board.people.indexOf(personId);
  const added = idx === -1;
  if (added) board.people.push(personId);
  else board.people.splice(idx, 1);
  saveBoards(boards);
  syncStarButtons();
  renderHomeBoards();
  if (isBoardsPage() && !state.profile) renderBoards();
  return added;
}

function boardPreviewSources(board) {
  const srcs = [];
  const records = (board.people || [])
    .map((personId) => PEOPLE.find((item) => item.id === personId))
    .filter(Boolean);
  records.forEach((record) => {
    if (srcs.length >= 3) return;
    const firstShot = instagramShots(record)[0]?.src || record.avatar || "";
    if (firstShot && !srcs.includes(firstShot)) srcs.push(firstShot);
  });
  records.forEach((record) => {
    if (srcs.length >= 3) return;
    instagramShots(record).forEach((shot) => {
      if (shot?.src && srcs.length < 3 && !srcs.includes(shot.src)) srcs.push(shot.src);
    });
    if (record.avatar && srcs.length < 3 && !srcs.includes(record.avatar)) srcs.push(record.avatar);
  });
  return srcs;
}

let activePickerPerson = "";
let activePickerAnchor = null;

function ensureBoardPicker() {
  let picker = document.getElementById("board-picker");
  if (picker) return picker;
  picker = document.createElement("div");
  picker.id = "board-picker";
  picker.className = "board-picker";
  picker.hidden = true;
  picker.setAttribute("role", "dialog");
  picker.setAttribute("aria-label", "Save to board");
  document.body.appendChild(picker);
  return picker;
}

function positionBoardPicker(picker, anchor) {
  if (!picker || !anchor) return;
  const rect = anchor.getBoundingClientRect();
  const pickerWidth = 280;
  const margin = 12;
  let left = rect.right - pickerWidth;
  if (left < margin) left = Math.min(rect.left, window.innerWidth - pickerWidth - margin);
  if (left + pickerWidth > window.innerWidth - margin) left = window.innerWidth - pickerWidth - margin;
  let top = rect.bottom + 8;
  const pickerHeight = picker.offsetHeight || 260;
  if (top + pickerHeight > window.innerHeight - margin && rect.top - pickerHeight - 8 > margin) {
    top = rect.top - pickerHeight - 8;
  }
  picker.style.left = `${Math.max(margin, left)}px`;
  picker.style.top = `${Math.max(margin, top)}px`;
}

function paintBoardPicker() {
  const picker = ensureBoardPicker();
  if (!activePickerPerson) return;
  const record = PEOPLE.find((item) => item.id === activePickerPerson);
  const boards = readBoards();
  const rowsHtml = boards.length
    ? boards
        .map((board) => {
          const saved = board.people.includes(activePickerPerson);
          const thumb = boardPreviewSources(board)[0] || "";
          const count = board.people.length;
          const countLabel = count === 1 ? "1 creative" : `${count} creatives`;
          return `
            <button type="button" class="board-picker_row${saved ? " is-saved" : ""}" data-board-id="${escapeHtml(board.id)}">
              <span class="board-picker_thumb">
                ${thumb ? `<img src="${escapeHtml(thumb)}" alt="" />` : `<span class="board-picker_thumb_empty" aria-hidden="true"></span>`}
              </span>
              <span class="board-picker_meta">
                <strong>${escapeHtml(board.name)}</strong>
                <span>${escapeHtml(countLabel)}</span>
              </span>
              <span class="board-picker_pill">${saved ? "Saved" : "Save"}</span>
            </button>
          `;
        })
        .join("")
    : `<p class="board-picker_empty">Create your first board below to save ${escapeHtml(record?.name || "this creative")}.</p>`;

  picker.innerHTML = `
    <div class="board-picker_head">
      <strong>Save to board</strong>
      <button type="button" class="board-picker_close" aria-label="Close">×</button>
    </div>
    <div class="board-picker_list">${rowsHtml}</div>
    <form class="board-picker_form" id="board-picker-form">
      <input
        type="text"
        class="board-picker_input"
        placeholder="New board name..."
        aria-label="New board name"
        maxlength="60"
        required
      />
      <button type="submit" class="board-picker_create">+ Create</button>
    </form>
  `;

  picker.querySelector(".board-picker_close")?.addEventListener("click", (event) => {
    event.stopPropagation();
    closeBoardPicker();
  });

  picker.querySelectorAll(".board-picker_row").forEach((row) => {
    row.addEventListener("click", (event) => {
      event.stopPropagation();
      togglePersonInBoard(activePickerPerson, row.dataset.boardId);
      paintBoardPicker();
    });
  });

  const form = picker.querySelector("#board-picker-form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const input = form.querySelector(".board-picker_input");
    const name = input?.value.trim();
    if (!name) return;
    createBoard(name, activePickerPerson);
    paintBoardPicker();
  });

  if (activePickerAnchor) positionBoardPicker(picker, activePickerAnchor);
}

function openBoardPicker(personId, anchor) {
  const picker = ensureBoardPicker();
  if (!picker.hidden && activePickerPerson === personId && activePickerAnchor === anchor) {
    closeBoardPicker();
    return;
  }
  activePickerPerson = personId;
  activePickerAnchor = anchor;
  picker.hidden = false;
  paintBoardPicker();
  requestAnimationFrame(() => positionBoardPicker(picker, anchor));
}

function closeBoardPicker() {
  const picker = document.getElementById("board-picker");
  if (picker) picker.hidden = true;
  activePickerPerson = "";
  activePickerAnchor = null;
}

function buildBoardCardElement(board, { onOpen, onDelete }) {
  const srcs = boardPreviewSources(board);
  const count = board.people.filter((id) => PEOPLE.some((p) => p.id === id)).length;
  const countText = count === 1 ? "1 creative" : `${count} creatives`;
  const card = document.createElement("article");
  card.className = "board-card";
  card.tabIndex = 0;
  card.innerHTML = `
    <div class="board-card_cover">
      <div class="board-card_tile board-card_tile-main">
        ${srcs[0] ? `<img src="${escapeHtml(srcs[0])}" alt="" />` : `<span class="board-card_placeholder"></span>`}
      </div>
      <div class="board-card_side">
        <div class="board-card_tile">
          ${srcs[1] ? `<img src="${escapeHtml(srcs[1])}" alt="" />` : `<span class="board-card_placeholder"></span>`}
        </div>
        <div class="board-card_tile">
          ${srcs[2] ? `<img src="${escapeHtml(srcs[2])}" alt="" />` : `<span class="board-card_placeholder"></span>`}
        </div>
      </div>
    </div>
    <div class="board-card_body">
      <div class="board-card_copy">
        <h3>${escapeHtml(board.name)}</h3>
        <p>${escapeHtml(countText)}</p>
      </div>
      ${
        onDelete
          ? `<button type="button" class="board-card_delete" aria-label="Delete ${escapeHtml(board.name)}">
        <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </button>`
          : ""
      }
    </div>
  `;
  card.addEventListener("click", (event) => {
    if (event.target.closest(".board-card_delete")) return;
    onOpen();
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.target.closest(".board-card_delete")) onOpen();
  });
  if (onDelete) {
    card.querySelector(".board-card_delete")?.addEventListener("click", (event) => {
      event.stopPropagation();
      onDelete();
    });
  }
  return card;
}

function buildAddBoardCardElement(onClick) {
  const addCard = document.createElement("button");
  addCard.type = "button";
  addCard.className = "board-card board-card_add";
  addCard.innerHTML = `
    <span class="board-card_add_cover">
      <span class="board-card_add_label">+ Add board</span>
    </span>
    <span class="board-card_body">
      <span class="board-card_copy">
        <h3>New board</h3>
        <p>Create a moodboard</p>
      </span>
    </span>
  `;
  addCard.addEventListener("click", onClick);
  return addCard;
}

function renderHomeBoards() {
  const section = document.getElementById("home-boards");
  const grid = document.getElementById("home-boards-grid");
  if (!section || !grid) return;
  const boards = readBoards();
  if (!boards.length) {
    section.hidden = true;
    grid.innerHTML = "";
    return;
  }
  section.hidden = false;
  grid.innerHTML = "";
  boards.slice(0, 3).forEach((board) => {
    grid.appendChild(
      buildBoardCardElement(board, {
        onOpen: () => {
          markSkeletonNav();
          location.href = `boards.html?board=${encodeURIComponent(board.id)}`;
        },
      })
    );
  });
  grid.appendChild(
    buildAddBoardCardElement(() => {
      markSkeletonNav();
      location.href = "boards.html?create=1";
    })
  );
}

function renderBoards() {
  const overview = document.getElementById("boards-overview");
  const detail = document.getElementById("board-detail");
  if (!overview || !detail) return;

  const boards = readBoards();
  const activeBoard = state.board ? boards.find((item) => item.id === state.board) : null;
  if (state.board && !activeBoard) {
    state.board = "";
  }

  if (activeBoard) {
    overview.hidden = true;
    detail.hidden = false;
    document.title = `${activeBoard.name} · Boards · 10K Creatives`;
    const titleEl = document.getElementById("board-detail-title");
    const countEl = document.getElementById("board-detail-count");
    const emptyEl = document.getElementById("board-detail-empty");
    const gridEl = document.getElementById("board-detail-grid");
    const members = activeBoard.people
      .map((id) => PEOPLE.find((person) => person.id === id))
      .filter(Boolean);
    if (titleEl) titleEl.textContent = activeBoard.name;
    if (countEl) countEl.textContent = members.length === 1 ? "1 creative saved" : `${members.length} creatives saved`;
    if (emptyEl) emptyEl.hidden = members.length !== 0;
    if (gridEl) {
      gridEl.innerHTML = "";
      members.forEach((record) => {
        const card = document.createElement("article");
        card.className = "result-card";
        card.tabIndex = 0;
        card.dataset.id = record.id;
        card.innerHTML = rosterCardHtml(record);
        const open = () => openProfile(record.id);
        card.addEventListener("click", (event) => {
          if (event.target.closest("a, .copy-icon, .star-btn")) return;
          open();
        });
        card.addEventListener("keydown", (event) => {
          if (event.key === "Enter" && !event.target.closest("a, .copy-icon, .star-btn")) open();
        });
        gridEl.appendChild(card);
      });
    }
    return;
  }

  overview.hidden = false;
  detail.hidden = true;
  document.title = "Boards · 10K Creatives";
  const recentSection = document.getElementById("boards-recent");
  const grid = document.getElementById("boards-grid");
  const empty = document.getElementById("boards-empty");
  const summary = document.getElementById("boards-summary");
  if (summary) {
    const totalSaved = new Set(boards.flatMap((b) => b.people)).size;
    summary.textContent = boards.length
      ? `${boards.length === 1 ? "1 board" : `${boards.length} boards`} · ${totalSaved === 1 ? "1 starred creative" : `${totalSaved} starred creatives`}`
      : "Star creatives and organize them into boards for upcoming shoots.";
  }
  if (recentSection) recentSection.hidden = boards.length === 0;
  if (empty) empty.hidden = boards.length !== 0;
  if (!grid) return;
  grid.innerHTML = "";
  boards.forEach((board) => {
    grid.appendChild(
      buildBoardCardElement(board, {
        onOpen: () => {
          state.board = board.id;
          render({ url: "push" });
          window.scrollTo(0, 0);
        },
        onDelete: () => deleteBoard(board.id),
      })
    );
  });

  if (boards.length) {
    grid.appendChild(
      buildAddBoardCardElement(() => {
        const createForm = document.getElementById("boards-create-form");
        const createInput = document.getElementById("boards-create-input");
        if (!createForm) return;
        createForm.hidden = false;
        createInput?.focus();
      })
    );
  }
}

function bindBoards() {
  document.addEventListener("click", (event) => {
    const starBtn = event.target.closest(".star-btn[data-star-person]");
    if (starBtn) {
      event.preventDefault();
      event.stopPropagation();
      openBoardPicker(starBtn.dataset.starPerson, starBtn);
      return;
    }
    const picker = document.getElementById("board-picker");
    if (picker && !picker.hidden && !picker.contains(event.target)) {
      closeBoardPicker();
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      const picker = document.getElementById("board-picker");
      if (picker && !picker.hidden && activePickerAnchor) {
        if (!activePickerAnchor.isConnected) closeBoardPicker();
        else positionBoardPicker(picker, activePickerAnchor);
      }
    },
    { passive: true }
  );

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeBoardPicker();
  });

  const createToggle = document.getElementById("boards-create-toggle");
  const emptyCreate = document.getElementById("boards-empty-create");
  const createForm = document.getElementById("boards-create-form");
  const createInput = document.getElementById("boards-create-input");
  const createCancel = document.getElementById("boards-create-cancel");

  const openCreateForm = () => {
    if (!createForm) return;
    createForm.hidden = false;
    createInput?.focus();
  };

  createToggle?.addEventListener("click", () => {
    if (!createForm) return;
    const next = createForm.hidden;
    createForm.hidden = !next;
    if (next) createInput?.focus();
  });

  emptyCreate?.addEventListener("click", openCreateForm);
  if (isBoardsPage() && new URLSearchParams(location.search).get("create") === "1") {
    requestAnimationFrame(openCreateForm);
  }

  createCancel?.addEventListener("click", () => {
    if (!createForm) return;
    createForm.hidden = true;
    if (createInput) createInput.value = "";
  });

  createForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = createInput?.value.trim();
    if (!name) return;
    createBoard(name);
    if (createInput) createInput.value = "";
    createForm.hidden = true;
  });

  document.getElementById("board-back")?.addEventListener("click", (event) => {
    event.preventDefault();
    state.board = "";
    render({ url: "push" });
  });

  document.getElementById("board-delete-btn")?.addEventListener("click", () => {
    if (state.board) deleteBoard(state.board);
  });
}

function prepareSkeletonFrame() {
  const params = new URLSearchParams(location.search);
  if (params.has("person")) {
    const root = document.getElementById("profile");
    if (root) {
      document.body.dataset.view = "profile";
      root.hidden = false;
    }
  }
  if (isResultsPage() && params.get("view") === "map") {
    const page = document.querySelector(".results-page");
    if (page) page.dataset.resultsView = "map";
  }
}

document.addEventListener("click", (event) => {
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const anchor = event.target.closest("a");
  if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
  const href = anchor.getAttribute("href") || "";
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
  let url;
  try { url = new URL(anchor.href, location.href); } catch (error) { return; }
  if (url.origin !== location.origin) return;
  if (url.pathname === location.pathname && url.search === location.search) return;
  markSkeletonNav();
}, true);

loadAddedPeople();

PEOPLE.forEach((record) => {
  record.images = record.images || [];
});

bind();
bindAddRoster();
bindBoards();
readUrl();
syncControls();
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
    { name: "Patricia Rosingana", caption: "Photographer\n(Los Angeles)", src: "images/hero/DJRvgVUtFxW.jpg", href: "https://www.instagram.com/p/DJRvgVUtFxW/?img_index=1", x: 12, y: -40, w: 86, h: 108, inn: [106, 18], bend: -40 },
    { name: "petrosstudio", caption: "Creative Director\n(New York)", src: "images/hero/C7zebkCteQ5.jpg", href: "https://www.instagram.com/p/C7zebkCteQ5/", x: 254, y: -72, w: 84, h: 84, inn: [300, 48], bend: -36 },
    { name: "Patricia Rosingana", caption: "Stylist\n(Atlanta)", src: "images/hero/DQHn4eVjPN-.jpg", href: "https://www.instagram.com/p/DQHn4eVjPN-/?img_index=1", x: 456, y: 2, w: 80, h: 100, inn: [448, 52], bend: -36 },
    { name: "Vika", caption: "Cinematographer\n(London)", src: "posts/vika-vikasfotos/4.jpg", href: "https://www.instagram.com/p/DeCUYocEVmn/?img_index=1", x: 684, y: 48, w: 84, h: 112, inn: [676, 104], bend: 46 },
    { name: "Charlie Harris", caption: place(["Videographer"], "Finland"), src: "posts/charlie-harris-charliebarclayharris/1.jpg", href: "https://www.instagram.com/p/DexHNlXjB3P/?img_index=1", x: 548, y: 188, w: 62, h: 74, inn: [540, 225], bend: -40 },
    { name: "Randy", caption: place(["Designer"], "London"), src: "images/hero/DSafSA0kbCB-2.jpg", href: "https://www.instagram.com/p/DSafSA0kbCB/?img_index=2", x: 300, y: 214, w: 102, h: 68, inn: [351, 206], bend: 4, focus: "center top" },
    { name: "petrosstudio", caption: "Model\n(Paris)", src: "images/hero/DW3SuiliCHg.jpg", href: "https://www.instagram.com/p/DW3SuiliCHg/", x: 112, y: 128, w: 84, h: 112, inn: [202, 184], bend: -22 },
  ];

  const NEON = [
    ["#ff2bd6", "#ff8ae0"],
    ["#c6ff00", "#ffe600"],
    ["#00e8ff", "#4d7cff"],
    ["#ff5a00", "#ff2d6a"],
    ["#b44dff", "#ff2bd6"],
    ["#00ffc8", "#d6ff00"],
    ["#ffe14a", "#ff4d00"],
  ];

  const defs = document.createElementNS(ns, "defs");
  const glow = document.createElementNS(ns, "filter");
  glow.id = "hero-neon";
  glow.setAttribute("x", "-60%");
  glow.setAttribute("y", "-60%");
  glow.setAttribute("width", "220%");
  glow.setAttribute("height", "220%");
  const blur = document.createElementNS(ns, "feGaussianBlur");
  blur.setAttribute("in", "SourceGraphic");
  blur.setAttribute("stdDeviation", "1.5");
  blur.setAttribute("result", "blur");
  const merge = document.createElementNS(ns, "feMerge");
  const soft = document.createElementNS(ns, "feMergeNode");
  soft.setAttribute("in", "blur");
  const crisp = document.createElementNS(ns, "feMergeNode");
  crisp.setAttribute("in", "SourceGraphic");
  merge.append(soft, crisp);
  glow.append(blur, merge);
  defs.append(glow);
  svg.append(defs);

  const frames = steps.map((step) => {
    const link = document.createElement("div");
    link.className = "hero_shot";
    link.style.left = `${(step.x / board.w) * 100}%`;
    link.style.top = `${(step.y / board.h) * 100}%`;
    link.style.width = `${(step.w / board.w) * 100}%`;
    link.style.setProperty("--shot-ratio", `${step.w} / ${step.h}`);
    const image = document.createElement("img");
    image.src = step.src;
    image.alt = "";
    if (step.focus) image.style.objectPosition = step.focus;
    const caption = document.createElement("span");
    caption.className = "hero_cap";
    caption.insertAdjacentHTML("beforeend", pin);
    const text = document.createElement("span");
    step.caption.split("\n").forEach((line, index) => {
      if (index) text.append(document.createElement("br"));
      text.append(line);
    });
    if (step.caption.includes("\n")) caption.classList.add("is-lines");
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

  const addPath = (from, to, bend, index) => {
    const id = `hero-line-${index}`;
    let grad = svg.querySelector(`#${id}`);
    if (!grad) {
      grad = document.createElementNS(ns, "linearGradient");
      grad.id = id;
      grad.setAttribute("gradientUnits", "userSpaceOnUse");
      const [start, end] = NEON[index % NEON.length];
      const fromStop = document.createElementNS(ns, "stop");
      fromStop.setAttribute("offset", "0%");
      fromStop.setAttribute("stop-color", start);
      const toStop = document.createElementNS(ns, "stop");
      toStop.setAttribute("offset", "100%");
      toStop.setAttribute("stop-color", end);
      grad.append(fromStop, toStop);
      defs.append(grad);
    }
    grad.setAttribute("x1", from[0]);
    grad.setAttribute("y1", from[1]);
    grad.setAttribute("x2", to[0]);
    grad.setAttribute("y2", to[1]);
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", curve(from, to, bend));
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", `url(#${id})`);
    path.setAttribute("stroke-width", "3.6");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("filter", "url(#hero-neon)");
    svg.append(path);
    return path;
  };

  const showFrame = (frame) => {
    addDot(frame.step.inn);
    frame.link.classList.add("is-in");
  };

  if (reduced) {
    addDot(origin, 3.4);
    frames.forEach((frame, index) => {
      addPath(origin, frame.step.inn, frame.step.bend, index);
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
        const path = addPath(origin, frame.step.inn, frame.step.bend, index);
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
      });
      stage.classList.remove("is-clear");
      await sleep(360);
    }
  };

  play();
}

function revealPage() {
  if (isResultsPage() && new URLSearchParams(location.search).get("view") === "map") setResultsView("map");
  render({ url: "replace" });
  if (isResultsPage()) requestAnimationFrame(() => render({ url: "replace" }));
  resultsViewSettled = true;
  if (typeof initProjects === "function") {
    const open = document.body.dataset.page === "explore"
      ? (id) => {
          markSkeletonNav();
          location.href = `./?person=${encodeURIComponent(id)}`;
        }
      : openProfile;
    initProjects({ people: PEOPLE, openProfile: open });
  }
  initHeroMap();
  initGlassCursor();
}

function initGlassCursor() {
  const hero = document.querySelector(".home-view .hero");
  const projects = document.getElementById("projects");
  if (!hero || !projects) return;
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!fine.matches || reduce.matches) return;

  const svgNs = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNs, "svg");
  svg.setAttribute("aria-hidden", "true");
  svg.style.cssText = "position:absolute;width:0;height:0";
  const filter = document.createElementNS(svgNs, "filter");
  filter.id = "glass-lens";
  filter.setAttribute("x", "-20%");
  filter.setAttribute("y", "-20%");
  filter.setAttribute("width", "140%");
  filter.setAttribute("height", "140%");
  filter.setAttribute("color-interpolation-filters", "sRGB");
  const turbulence = document.createElementNS(svgNs, "feTurbulence");
  turbulence.setAttribute("type", "fractalNoise");
  turbulence.setAttribute("baseFrequency", "0.012");
  turbulence.setAttribute("numOctaves", "2");
  turbulence.setAttribute("seed", "3");
  turbulence.setAttribute("result", "noise");
  const displace = document.createElementNS(svgNs, "feDisplacementMap");
  displace.setAttribute("in", "SourceGraphic");
  displace.setAttribute("in2", "noise");
  displace.setAttribute("scale", "26");
  displace.setAttribute("xChannelSelector", "R");
  displace.setAttribute("yChannelSelector", "G");
  filter.append(turbulence, displace);
  svg.append(filter);
  document.body.append(svg);
  if (!CSS.supports("backdrop-filter", "url(#glass-lens)") && !CSS.supports("-webkit-backdrop-filter", "url(#glass-lens)")) {
    svg.remove();
    return;
  }

  const lens = document.createElement("div");
  lens.className = "glass-cursor";
  lens.setAttribute("aria-hidden", "true");
  document.body.append(lens);

  let pointer = null;
  let current = { x: 0, y: 0 };
  let frame = 0;

  const lensFade = () => {
    const projectsTop = projects.getBoundingClientRect().top + window.scrollY;
    const end = Math.max(projectsTop - window.innerHeight * 0.55, 140);
    return 1 - Math.min(1, Math.max(0, window.scrollY / end));
  };

  const inHero = (x, y) => {
    if (document.body.dataset.view === "profile") return false;
    if (y >= projects.getBoundingClientRect().top - 12) return false;
    const hit = document.elementFromPoint(x, y);
    return !!hit && !hit.closest(".navbar") && !!hit.closest(".hero");
  };

  const sync = () => {
    const fade = lens.classList.contains("is-on") ? lensFade() : 0;
    lens.style.opacity = String(fade);
    document.body.classList.toggle("is-glass", fade > 0.2);
  };

  const paint = () => {
    frame = 0;
    if (!pointer) return;
    current.x += (pointer.x - current.x) * 0.28;
    current.y += (pointer.y - current.y) * 0.28;
    const vx = pointer.x - current.x;
    const vy = pointer.y - current.y;
    const stretch = Math.min(Math.hypot(vx, vy) / 90, 0.28);
    const angle = Math.atan2(vy, vx);
    lens.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%) rotate(${angle}rad) scale(${1 + stretch}, ${1 - stretch * 0.55})`;
    if (Math.hypot(pointer.x - current.x, pointer.y - current.y) > 0.4) frame = requestAnimationFrame(paint);
  };

  const show = (x, y) => {
    if (!lens.classList.contains("is-on")) {
      current = { x, y };
      lens.classList.add("is-on");
      document.body.classList.add("is-glass");
    }
    pointer = { x, y };
    sync();
    if (!frame) frame = requestAnimationFrame(paint);
  };

  const hide = () => {
    pointer = null;
    lens.classList.remove("is-on");
    cancelAnimationFrame(frame);
    frame = 0;
    sync();
  };

  window.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;
    if (inHero(event.clientX, event.clientY)) show(event.clientX, event.clientY);
    else hide();
  });
  window.addEventListener("pointerleave", hide);
  window.addEventListener("scroll", () => {
    sync();
    if (!pointer) return;
    if (!inHero(pointer.x, pointer.y)) hide();
  }, { passive: true });
}

window.addEventListener("pageshow", (event) => {
  if (!event.persisted || !isResultsPage()) return;
  readUrl();
  render({ url: "replace" });
});

const delay = skeletonDelay();
if (delay) {
  prepareSkeletonFrame();
  setTimeout(revealPage, delay);
} else {
  revealPage();
}

