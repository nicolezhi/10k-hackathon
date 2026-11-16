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

const SEARCH_ROLES = [
  "Photographer",
  "Videographer / DP",
  "Graphic designer",
  "Stylist",
  "Model",
];

const SEARCH_GENRES = {
  Photographer: ["Concert", "Events", "Portrait"],
  "Videographer / DP": ["Concert", "Events", "Music video", "Portrait"],
  "Graphic designer": [],
};

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
  country: "",
  extraCities: [],
  roles: [],
  genres: [],
  roleGenres: {},
  genresScoped: false,
  tenk: false,
  profile: "",
  browse: false,
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

function placeInCountry(name, code) {
  const city = cityRecord(name);
  return Boolean(city) && countryOf(city).code === code;
}

function filteredPeople() {
  const tokens = tokensFrom(state.query);
  const cities = activeCities();
  return PEOPLE.filter((record) => {
    if (record.external) return false;
    if (state.country) {
      const places = [record.city, ...(record.also || [])];
      if (!places.some((place) => placeInCountry(place, state.country))) return false;
    } else if (cities.length && !cities.some((city) => sameCity(record.city, city) || (record.also || []).some((item) => sameCity(item, city)))) return false;
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
  }).sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
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
  if (state.country) parts.push(countryPhrase(state.country));
  else if (cities.length) parts.push(cities.join(" and "));
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
  const place = state.country ? countryPhrase(state.country) : cities.length ? joinPhrase(cities) : "";
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

const COUNTRY_INFO = {
  US: { name: "United States", flag: "🇺🇸" },
  UK: { name: "United Kingdom", flag: "🇬🇧" },
  BE: { name: "Belgium", flag: "🇧🇪" },
  FR: { name: "France", flag: "🇫🇷" },
  DE: { name: "Germany", flag: "🇩🇪" },
  IE: { name: "Ireland", flag: "🇮🇪" },
  ES: { name: "Spain", flag: "🇪🇸" },
  DK: { name: "Denmark", flag: "🇩🇰" },
  NL: { name: "Netherlands", flag: "🇳🇱" },
  CH: { name: "Switzerland", flag: "🇨🇭" },
  CZ: { name: "Czech Republic", flag: "🇨🇿" },
  NO: { name: "Norway", flag: "🇳🇴" },
  PL: { name: "Poland", flag: "🇵🇱" },
  FI: { name: "Finland", flag: "🇫🇮" },
  SE: { name: "Sweden", flag: "🇸🇪" },
  PT: { name: "Portugal", flag: "🇵🇹" },
  AU: { name: "Australia", flag: "🇦🇺" },
  MX: { name: "Mexico", flag: "🇲🇽" },
  GH: { name: "Ghana", flag: "🇬🇭" },
  Remote: { name: "Remote", flag: "🌐" },
};

const PLACE_COUNTRY = {
  CA: "US",
  NY: "US",
  GA: "US",
  TN: "US",
  IL: "US",
  MA: "US",
  TX: "US",
  MN: "US",
  UK: "UK",
  BE: "BE",
  FR: "FR",
  DE: "DE",
  IE: "IE",
  ES: "ES",
  DK: "DK",
  NO: "NO",
  PL: "PL",
  FI: "FI",
  SE: "SE",
  PT: "PT",
  AU: "AU",
  MX: "MX",
  GH: "GH",
};

const NAME_COUNTRY = {
  Ireland: "IE",
  Germany: "DE",
  Denmark: "DK",
  Netherlands: "NL",
  Switzerland: "CH",
  "Czech Republic": "CZ",
  Finland: "FI",
  Sweden: "SE",
  Portugal: "PT",
  Remote: "Remote",
};

const SUGGESTED_CITIES = ["New York", "London", "Los Angeles"];

function isCountryRecord(city) {
  return city.name !== "Remote" && Boolean(NAME_COUNTRY[city.name]);
}

function countryPhrase(code) {
  const name = (COUNTRY_INFO[code] && COUNTRY_INFO[code].name) || code;
  return name.startsWith("United ") ? `the ${name}` : name;
}

function allCitiesLabel() {
  return "All";
}

function countryOf(city) {
  const code = NAME_COUNTRY[city.name] || PLACE_COUNTRY[String(city.place || "").split(", ")[1]] || "Remote";
  return { code, ...(COUNTRY_INFO[code] || { name: code, flag: "🏳️" }) };
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
  const country = countryOf(city);
  const countryAliases = {
    UK: "uk britain england scotland",
    US: "us usa america",
    NL: "holland",
    CZ: "czechia",
  };
  return `${city.name} ${city.place || ""} ${city.line} ${aliases[city.name] || ""} ${country.name} ${countryAliases[country.code] || ""}`
    .toLowerCase()
    .includes(filter);
}

function whereGroups(filter) {
  const groups = [];
  const suggested = SUGGESTED_CITIES.map((name) => CITIES.find((city) => city.name === name))
    .filter((city) => city && (!filter || cityMatches(city, filter)));
  if (suggested.length) groups.push({ label: "Suggested", flag: "", cities: suggested, country: "" });

  const byCountry = new Map();
  CITIES.forEach((city) => {
    const country = countryOf(city);
    if (!byCountry.has(country.code)) byCountry.set(country.code, { ...country, cities: [] });
    byCountry.get(country.code).cities.push(city);
  });
  [...byCountry.values()]
    .sort((a, b) => {
      if (a.code === "Remote") return 1;
      if (b.code === "Remote") return -1;
      if (a.code === "US") return -1;
      if (b.code === "US") return 1;
      if (a.code === "UK") return -1;
      if (b.code === "UK") return 1;
      return a.name.localeCompare(b.name);
    })
    .forEach((group) => {
      const matches = (city) => !filter || cityMatches(city, filter);
      let cities = group.cities
        .filter((city) => !isCountryRecord(city))
        .filter(matches)
        .sort((a, b) => a.name.localeCompare(b.name));
      if (!cities.length) {
        cities = group.cities.filter(isCountryRecord).filter(matches).sort((a, b) => a.name.localeCompare(b.name));
      }
      const country = group.code === "Remote" ? "" : group.code;
      const showAll = Boolean(country) && cities.filter((city) => !isCountryRecord(city)).length > 1;
      if (!cities.length) return;
      groups.push({ label: group.name, flag: group.flag, cities, country: showAll ? country : "" });
    });
  return groups;
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
        description: typeof board.description === "string" ? board.description.trim() : "",
        date: typeof board.date === "string" ? board.date.trim() : "",
        people: Array.isArray(board.people) ? [...new Set(board.people.filter(Boolean))] : [],
      }));
  } catch {
    return [];
  }
}

function parseIsoDateParts(iso) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || "").trim());
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]) - 1;
  const day = Number(match[3]);
  const date = new Date(year, month, day);
  if (Number.isNaN(date.getTime())) return null;
  return { year, month, day, date };
}

function parseBoardDateRange(raw) {
  const str = String(raw || "").trim();
  if (!str) return { start: "", end: "" };
  const parts = str.split(/\s*\.\.\s*/);
  const first = parseIsoDateParts(parts[0]) ? parts[0].trim() : "";
  const second = parts[1] && parseIsoDateParts(parts[1]) ? parts[1].trim() : "";
  if (!first) return { start: "", end: "" };
  if (!second || second === first) return { start: first, end: "" };
  return first <= second ? { start: first, end: second } : { start: second, end: first };
}

function serializeBoardDateRange(start, end) {
  const s = String(start || "").trim();
  const e = String(end || "").trim();
  if (!s) return "";
  if (!e || e === s) return s;
  return s <= e ? `${s}..${e}` : `${e}..${s}`;
}

function formatBoardDate(raw) {
  const str = String(raw || "").trim();
  if (!str) return "";
  const { start, end } = parseBoardDateRange(str);
  if (!start) return str;
  const sParts = parseIsoDateParts(start);
  if (!sParts) return str;
  if (!end || end === start) {
    return sParts.date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  const eParts = parseIsoDateParts(end);
  if (!eParts) {
    return sParts.date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  const sMonth = sParts.date.toLocaleDateString("en-US", { month: "short" });
  const eMonth = eParts.date.toLocaleDateString("en-US", { month: "short" });
  if (sParts.year === eParts.year && sParts.month === eParts.month) {
    return `${sMonth} ${sParts.day}–${eParts.day}, ${sParts.year}`;
  }
  if (sParts.year === eParts.year) {
    return `${sMonth} ${sParts.day} – ${eMonth} ${eParts.day}, ${sParts.year}`;
  }
  const sFull = sParts.date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  const eFull = eParts.date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  return `${sFull} – ${eFull}`;
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

let igGradSeq = 0;

function instagramPillHtml(instagramHref, extraClass = "") {
  const cls = ["ig-btn", extraClass, instagramHref ? "" : "is-empty"].filter(Boolean).join(" ");
  if (!instagramHref) {
    const emptyIcon = `<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">${CONTACT_PATHS.instagram}</svg>`;
    return `<span class="${cls}" aria-label="Instagram">${emptyIcon}</span>`;
  }
  igGradSeq += 1;
  const gradId = `ig-g-${igGradSeq}`;
  const icon = `<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
    <defs>
      <linearGradient id="${gradId}" x1="4" y1="20" x2="20" y2="4" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#feda75" />
        <stop offset="28%" stop-color="#fa7e1e" />
        <stop offset="55%" stop-color="#d62976" />
        <stop offset="80%" stop-color="#962fbf" />
        <stop offset="100%" stop-color="#4f5bd5" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="url(#${gradId})" stroke-width="1.9"/>
    <circle cx="12" cy="12" r="3.4" fill="none" stroke="url(#${gradId})" stroke-width="1.9"/>
    <circle cx="16.6" cy="7.4" r="1" fill="url(#${gradId})"/>
  </svg>`;
  return `<a class="${cls}" href="${escapeHtml(instagramHref)}" target="_blank" rel="noreferrer" aria-label="Instagram">${icon}</a>`;
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

function tenkStampHtml(record) {
  if (!record.tenk) return "";
  return `<span class="tenk-stamp" title="Worked with 10K">10K</span>`;
}

function rosterCardHtml(record) {
  const city = cityRecord(record.city);
  const tags = (record.genres || []).join(" · ");
  const instagramHref = record.instagram ? `https://instagram.com/${record.instagram}` : "";
  const isExternal = Boolean(record.external);
  const handleLine = record.instagram ? `@${record.instagram.replace(/^@/, "")}` : "";
  const placeOrHandle = record.city
    ? `<p>${escapeHtml(city?.place || record.city)}</p>`
    : isExternal && handleLine
    ? `<p class="result-card_handle">${escapeHtml(handleLine)}</p>`
    : "<p></p>";
  const tagsLine = tags
    ? `<p class="result-card_tags">${escapeHtml(tags)}</p>`
    : isExternal
    ? `<p class="result-card_tags">Added via Instagram</p>`
    : `<p class="result-card_tags"></p>`;
  const showContactRow = !isExternal || Boolean(record.portfolio || record.phone || record.email);
  return `
    <div class="result-card_actions">
      ${isExternal ? `<span class="external-stamp">External</span>` : ""}
      ${instagramPillHtml(instagramHref)}
      ${starButtonHtml(record.id)}
    </div>
    ${avatarHtml(record, "result-card_avatar")}
    <div class="result-card_body">
      <h3><span class="result-card_name">${escapeHtml(record.name)}</span>${tenkStampHtml(record)}</h3>
      <p class="result-card_role">${escapeHtml(roleNames(record).join(" · "))}</p>
      ${placeOrHandle}
      ${tagsLine}
      ${
        showContactRow
          ? `<div class="result-card_icons">
        ${record.portfolio
          ? externalControl("roster-icon", "Portfolio", record.portfolio, tinyIcon(CONTACT_PATHS.portfolio))
          : copyControl("Portfolio", "", "Copied portfolio link", tinyIcon(CONTACT_PATHS.portfolio))}
        ${copyControl("Phone", record.phone || "", "Copied phone number", tinyIcon(CONTACT_PATHS.phone))}
        ${copyControl("Email", record.email || "", "Copied email", tinyIcon(CONTACT_PATHS.email))}
      </div>`
          : ""
      }
    </div>
    ${instagramStrip(record, "result-card_shots", false)}
  `;
}

function renderMapResults(list) {
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const title = document.getElementById("results-title");
  if (title) title.textContent = resultsHeading(list);
  document.getElementById("summary").textContent = summaryText(list);
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
    grid.appendChild(card);
  });

  renderNearby(list);
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
      <div class="roster-pop_actions">
        ${instagramPillHtml(instagramHref)}
        ${starButtonHtml(record.id)}
      </div>
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
        <h1><span>${escapeHtml(record.name)}</span>${tenkStampHtml(record)}</h1>
        ${record.external ? `<span class="external-stamp">External</span>` : ""}
        ${instagramPillHtml(instagramHref, "profile_ig")}
        ${starButtonHtml(record.id, "profile_star")}
      </div>
      ${roleLine ? `<p class="profile_role">${escapeHtml(roleLine)}</p>` : ""}
      ${place ? `<p class="profile_place">${escapeHtml(place)}</p>` : ""}
      </div>
      <div class="profile_icons">
        ${copyControl("Phone", record.phone || "", "Copied phone number", tinyIcon(CONTACT_PATHS.phone))}
        ${copyControl("Email", record.email || "", "Copied email", tinyIcon(CONTACT_PATHS.email))}
        ${record.portfolio
          ? externalControl("roster-icon", "Portfolio", record.portfolio, tinyIcon(CONTACT_PATHS.portfolio))
          : copyControl("Portfolio", "", "Copied portfolio link", tinyIcon(CONTACT_PATHS.portfolio))}
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
      </div>`);
  }
  otherRows.forEach((row) => {
    contact.insertAdjacentHTML("beforeend", contactLine(row));
  });
  if (rows.length) {
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
let searchExpanded = false;

function mobileLayout() {
  return window.matchMedia("(max-width: 800px)").matches;
}

function searchIsStarted() {
  return searchExpanded || Boolean(activeCities().length || state.country || state.roles.length || openPanel);
}

function composerOpen() {
  if (mobileLayout()) {
    const typing = document.body.classList.contains("is-city-search");
    if (!document.body.dataset.page) return Boolean(searchExpanded || openPanel || typing);
    return Boolean(openPanel || typing);
  }
  return searchIsStarted();
}

function searchPromptLabel() {
  return "Search for creatives";
}

function clearSearchFilters() {
  state.city = "";
  state.country = "";
  state.extraCities = [];
  state.roles = [];
  state.roleGenres = {};
  state.genres = [];
  state.genresScoped = false;
  const field = document.getElementById("where-filter");
  if (field) field.value = "";
  const locationField = document.getElementById("location-filter");
  if (locationField) locationField.value = "";
  searchExpanded = true;
  openPanel = "where";
  openWhoRole = "";
  closeCitySearch();
  render();
}

function placeSearchPanels() {
  const airbnb = document.getElementById("airbnb");
  const whereSlot = document.getElementById("where-segment")?.parentElement;
  const whoSlot = document.getElementById("who-segment")?.parentElement;
  const wherePanel = document.getElementById("where-panel");
  const whoPanel = document.getElementById("who-panel");
  if (!airbnb || !whereSlot || !whoSlot || !wherePanel || !whoPanel) return;
  const clear = airbnb.querySelector(".search-clear");
  if (mobileLayout()) {
    if (wherePanel.parentElement !== whereSlot) whereSlot.append(wherePanel);
    if (whoPanel.parentElement !== whoSlot) whoSlot.append(whoPanel);
  } else if (wherePanel.parentElement !== airbnb || whoPanel.parentElement !== airbnb) {
    airbnb.insertBefore(wherePanel, clear);
    airbnb.insertBefore(whoPanel, clear);
  }
  const input = document.getElementById("where-filter");
  if (input) input.placeholder = mobileLayout() ? "Search cities" : "Los Angeles, Memphis, Remote";
  if (!input || input.dataset.citySearchBound) return;
  input.dataset.citySearchBound = "1";
  const openFromTap = () => {
    if (mobileLayout()) openCitySearch();
  };
  input.addEventListener("pointerdown", openFromTap);
  input.addEventListener("focus", openFromTap);
  input.addEventListener("input", syncSearchActions);
  const search = input.closest(".where-search");
  if (!search || search.querySelector(".where-back")) return;
  const back = document.createElement("button");
  back.type = "button";
  back.className = "where-back";
  back.setAttribute("aria-label", "Back");
  back.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M19 12H6M11 6 5 12l6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  back.addEventListener("mousedown", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
  back.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeCitySearch();
  });
  search.insertBefore(back, search.firstChild);
}

function ensureSearchChrome() {
  if (!document.querySelector(".search-overlay")) {
    const overlay = document.createElement("button");
    overlay.type = "button";
    overlay.className = "search-overlay";
    overlay.setAttribute("aria-label", "Close search");
    overlay.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      exitSearchView();
    });
    document.body.appendChild(overlay);
  }
  if (document.querySelector(".search-close")) return;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "search-close";
  button.setAttribute("aria-label", "Close");
  button.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    exitSearchView();
  });
  document.body.appendChild(button);
}

function searchPopupOpen() {
  if (!mobileLayout()) return false;
  const typing = document.body.classList.contains("is-city-search");
  if (!document.body.dataset.page) return Boolean(searchExpanded || openPanel || typing);
  return Boolean(openPanel || typing);
}

function syncSearchPopup() {
  const open = searchPopupOpen();
  document.body.classList.toggle("is-search-open", open);
  if (!open) return;
  ensureSearchChrome();
  document.querySelector(".navbar")?.classList.remove("is-nav-open");
  document.getElementById("nav-toggle")?.setAttribute("aria-expanded", "false");
  placeSearchClose();
  requestAnimationFrame(() => placeSearchClose());
}

function placeSearchClose() {
  const button = document.querySelector(".search-close");
  const card = document.querySelector("#airbnb .segment-slot");
  if (!button || !card) return;
  const right = Math.max(0, window.innerWidth - card.getBoundingClientRect().right);
  button.style.right = `${right}px`;
}

function exitSearchView() {
  if (!document.body.dataset.page) searchExpanded = false;
  openPanel = "";
  openWhoRole = "";
  closeCitySearch();
  paintSearch();
}

function syncSearchActions() {
  const airbnb = document.getElementById("airbnb");
  if (!airbnb) return;
  const whereSet = Boolean(activeCities().length || state.country);
  const whoSet = state.roles.length > 0;
  airbnb.classList.toggle("is-searching", whereSet && whoSet);
}

function openCitySearch() {
  if (!mobileLayout()) return;
  document.body.classList.add("is-city-search");
  document.getElementById("airbnb")?.classList.add("is-city-search");
  syncSearchActions();
  syncSearchPopup();
  const input = document.getElementById("where-filter");
  if (input && document.activeElement !== input) input.focus({ preventScroll: true });
}

function closeCitySearch() {
  document.body.classList.remove("is-city-search");
  document.getElementById("airbnb")?.classList.remove("is-city-search");
  document.getElementById("where-filter")?.blur();
  syncSearchActions();
}

function ensureSearchPrompt() {
  const airbnb = document.getElementById("airbnb");
  if (!airbnb || airbnb.querySelector(".search-prompt")) return;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "search-prompt";
  button.textContent = "Search for creatives";
  airbnb.insertBefore(button, airbnb.firstChild);
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    searchExpanded = true;
    openPanel = "where";
    openWhoRole = "";
    setFiltersOpen(false);
    setLocationOpen(false);
    paintSearch();
  });
  const clear = document.createElement("button");
  clear.type = "button";
  clear.className = "search-clear";
  clear.textContent = "Clear all";
  airbnb.appendChild(clear);
  clear.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    clearSearchFilters();
  });
  window.matchMedia("(max-width: 800px)").addEventListener("change", () => {
    if (!mobileLayout()) closeCitySearch();
    paintSearch();
    syncNearbyBar();
    syncBrowseTools();
  });
  window.addEventListener("resize", () => {
    if (document.body.classList.contains("is-search-open")) placeSearchClose();
    const sub = document.getElementById("filters-sub");
    if (sub && !sub.hidden) placeFilterSub(sub);
    else clampFilterPanel();
  });
}

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
  if (state.country) return (COUNTRY_INFO[state.country] && COUNTRY_INFO[state.country].name) || state.country;
  const cities = activeCities().map((city) => (city === "Remote" ? "Remote / anywhere" : city));
  if (!cities.length) return "Search cities";
  if (cities.length === 1) return cities[0];
  return `${cities[0]} +${cities.length - 1}`;
}

function selectCity(name) {
  state.country = "";
  setCities([name]);
  searchExpanded = true;
  openPanel = mobileLayout() ? "who" : "";
  closeCitySearch();
  render();
}

function selectCountry(code) {
  state.country = code;
  setCities([]);
  searchExpanded = true;
  openPanel = mobileLayout() ? "who" : "";
  closeCitySearch();
  render();
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
  Stylist:
    '<path d="M12 11.6V9.4a2 2 0 0 1 2-2 1.6 1.6 0 0 1 .3 3.1"/><path d="M2.4 17.4h19.2L12 11.6 2.4 17.4"/>',
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
  "Graphic designer":
    '<path d="M12 3.2c-5 0-8.6 4-8.4 8.8.2 3.4 2.2 5 4.4 5 1.3 0 1.8.7 1.8 1.8 0 2 1.7 3.1 3.5 2.9 4.6-.5 7.9-4.6 7.9-9.4 0-5.2-4-9.1-9.2-9.1z"/><circle cx="16.1" cy="15.4" r="1.45" stroke-width="1.3"/><circle cx="7.9" cy="10.3" r="1.55" fill="#111" stroke="none"/><circle cx="11" cy="6.7" r="1.55" fill="#111" stroke="none"/><circle cx="14.4" cy="8.1" r="1.55" fill="#111" stroke="none"/>',
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
  const groups = whereGroups(filter);
  container.innerHTML = "";
  if (!groups.length) {
    const empty = document.createElement("p");
    empty.className = "pick-empty";
    empty.textContent = "No city matches that.";
    container.append(empty);
    return;
  }
  const picked = state.city;
  groups.forEach((group) => {
    const section = document.createElement("section");
    section.className = "where-group";
    const head = document.createElement("div");
    head.className = "where-group_head";
    head.innerHTML = group.flag
      ? `<span class="where-flag" aria-hidden="true">${group.flag}</span><span>${escapeHtml(group.label)}</span>`
      : escapeHtml(group.label);
    const list = document.createElement("div");
    list.className = "where-group_list";
    if (group.country) {
      const all = document.createElement("button");
      all.type = "button";
      all.className = "where-city";
      all.setAttribute("aria-pressed", state.country === group.country ? "true" : "false");
      all.textContent = allCitiesLabel();
      all.addEventListener("click", (event) => {
        event.stopPropagation();
        selectCountry(group.country);
      });
      list.append(all);
    }
    group.cities.forEach((city) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "where-city";
      button.setAttribute("aria-pressed", !state.country && picked === city.name ? "true" : "false");
      button.textContent = city.name;
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        selectCity(city.name);
      });
      list.append(button);
    });
    section.append(head, list);
    container.append(section);
  });
}

function genresForRole(role) {
  if (SEARCH_GENRES[role]) return SEARCH_GENRES[role].slice();
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

function renderRoleGroups(container, bag, after) {
  container.innerHTML = "";
  SEARCH_ROLES.forEach((name) => {
    const role = ROLES.find((item) => item.name === name);
    if (!role) return;
    const genres = genresForRole(role.name).slice().sort((a, b) => a.localeCompare(b));
    const section = document.createElement("section");
    section.className = "where-group";
    const head = document.createElement("div");
    head.className = "where-group_head";
    head.innerHTML = `<span class="pick-glyph${role.name === "Photographer" ? " is-photo" : ""}" aria-hidden="true">${roleIcon(role.name)}</span><span>${escapeHtml(role.name)}</span>`;
    const list = document.createElement("div");
    list.className = "where-group_list";
    const rows = genres.length
      ? [{ label: filterAllLabel(role.name), genre: "" }, ...genres.map((genre) => ({ label: genre, genre }))]
      : [{ label: role.name, genre: null }];
    rows.forEach((row) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "where-city";
      const picked = bag.roleGenres[role.name] || [];
      const allOn = bagIsAll(bag, role.name);
      const pressed = row.genre === null
        ? bag.roles.includes(role.name)
        : row.genre
          ? allOn || (bag.roles.includes(role.name) && picked.includes(row.genre))
          : allOn;
      button.setAttribute("aria-pressed", pressed ? "true" : "false");
      button.setAttribute("aria-checked", pressed ? "true" : "false");
      button.innerHTML = `${checkHtml()}<span>${escapeHtml(row.label)}</span>`;
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        if (row.genre === null) bagToggleFlat(bag, role.name);
        else if (!row.genre) bagToggleAll(bag, role.name);
        else bagToggleWhoGenre(bag, role.name, row.genre);
        after();
      });
      list.append(button);
    });
    section.append(head, list);
    container.append(section);
  });
}

function renderWhoOptions() {
  const container = document.getElementById("who-options");
  if (!container) return;
  const sub = document.getElementById("who-sub");
  if (sub) {
    sub.hidden = true;
    sub.innerHTML = "";
  }
  renderRoleGroups(container, state, () => {
    syncScopedGenres();
    render();
  });
}

function paintSearch() {
  ensureSearchPrompt();
  placeSearchPanels();
  const prompt = document.querySelector("#airbnb .search-prompt");
  if (prompt) {
    prompt.textContent = searchPromptLabel();
    prompt.classList.toggle("is-centered", mobileLayout() && isResultsPage() && !state.browse);
  }
  document.getElementById("airbnb")?.classList.toggle("is-started", composerOpen());
  syncSearchActions();
  syncSearchPopup();
  const whereValue = document.getElementById("where-value");
  const whoValue = document.getElementById("who-value");
  whereValue.textContent = whereLabel();
  whoValue.textContent = whoLabel();
  whereValue.classList.toggle("is-set", Boolean(activeCities().length || state.country));
  whoValue.classList.toggle("is-set", state.roles.length > 0);
  document.getElementById("airbnb").dataset.open = openPanel;
  document.getElementById("where-panel").hidden = openPanel !== "where";
  document.getElementById("who-panel").hidden = openPanel !== "who";
  document.getElementById("where-segment").setAttribute("aria-expanded", String(openPanel === "where"));
  document.getElementById("who-segment").setAttribute("aria-expanded", String(openPanel === "who"));
  const clear = document.getElementById("where-clear");
  if (clear) {
    clear.hidden = false;
    clear.classList.toggle("is-empty", !activeCities().length && !state.country);
  }
  const clearWho = document.getElementById("who-clear");
  if (clearWho) {
    clearWho.hidden = false;
    clearWho.classList.toggle("is-empty", !state.roles.length);
  }
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
  if (openPanel === "where" && !mobileLayout()) document.getElementById("where-filter").focus();
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
  else requestAnimationFrame(() => clampFilterPanel());
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

function searchFilterMenu() {
  return SEARCH_ROLES.map((role) => {
    const full = filterMenu().find((entry) => entry.role === role);
    return {
      role,
      label: filterLabel(role),
      all: filterAllLabel(role),
      genres: SEARCH_GENRES[role] ? SEARCH_GENRES[role].slice() : full ? full.genres : [],
    };
  });
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

function bagIsAll(bag, role) {
  return bag.roles.includes(role) && !(bag.roleGenres[role] || []).length;
}

function roleIsAll(role) {
  return bagIsAll(state, role);
}

function bagToggleAll(bag, role) {
  if (bagIsAll(bag, role)) {
    bag.roles = bag.roles.filter((item) => item !== role);
    delete bag.roleGenres[role];
  } else {
    if (!bag.roles.includes(role)) bag.roles = [...bag.roles, role];
    bag.roleGenres[role] = [];
  }
}

function bagToggleFlat(bag, role) {
  if (bag.roles.includes(role)) {
    bag.roles = bag.roles.filter((item) => item !== role);
    delete bag.roleGenres[role];
  } else {
    bag.roles = [...bag.roles, role];
    bag.roleGenres[role] = [];
  }
}

function bagToggleRoleGenre(bag, role, genre) {
  const current = bagIsAll(bag, role) ? [] : bag.roleGenres[role] || [];
  const next = current.includes(genre) ? current.filter((item) => item !== genre) : [...current, genre];
  if (!next.length) {
    bag.roles = bag.roles.filter((item) => item !== role);
    delete bag.roleGenres[role];
  } else {
    if (!bag.roles.includes(role)) bag.roles = [...bag.roles, role];
    bag.roleGenres[role] = next;
  }
}

function bagToggleWhoGenre(bag, role, genre) {
  if (!bagIsAll(bag, role)) {
    bagToggleRoleGenre(bag, role, genre);
    return;
  }
  const rest = genresForRole(role).filter((item) => item !== genre);
  if (!rest.length) {
    bag.roles = bag.roles.filter((item) => item !== role);
    delete bag.roleGenres[role];
  } else {
    bag.roleGenres[role] = rest;
  }
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
  bagToggleAll(state, role);
  syncScopedGenres();
  render();
}

function toggleWhoGenre(role, genre) {
  bagToggleWhoGenre(state, role, genre);
  syncScopedGenres();
  render();
}

function toggleRoleGenre(role, genre) {
  bagToggleRoleGenre(state, role, genre);
  syncScopedGenres();
  render();
}

function toggleFlatRole(role) {
  bagToggleFlat(state, role);
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
  state.country = "";
  setCities(city ? [city] : []);
  setLocationOpen(false);
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
    ...(query ? [] : [{ label: "All locations", city: "", checked: !picked.length && !state.country }]),
    ...cities.map((city) => ({ label: city.place, city: city.name, checked: picked.length === 1 && picked[0] === city.name })),
  ];
  menu.innerHTML = rows.length
    ? rows
        .map(
          (row) => `<button class="filter-row" type="button" role="menuitemradio" aria-checked="${row.checked}" data-city="${escapeHtml(row.city)}">
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
  const count = activeCities().length || (state.country ? 1 : 0);
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
  const item = searchFilterMenu().find((entry) => entry.role === openFilterRole && entry.genres.length);
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
  if (mobileLayout() && sub.id === "filters-sub") {
    if (row) row.after(sub);
    sub.style.left = "";
    sub.style.right = "";
    sub.style.top = "";
    sub.style.position = "";
    sub.style.width = "";
    clampFilterPanel();
    return;
  }
  const panel = document.getElementById("filters-panel");
  if (panel && sub.parentElement !== panel) panel.append(sub);
  alignSubmenu(sub, row, 8);
}

function clampFilterPanel() {
  const panel = document.getElementById("filters-panel");
  if (!panel) return;
  if (!mobileLayout() || panel.hidden) {
    panel.style.left = "";
    return;
  }
  panel.style.left = "0px";
  const rect = panel.getBoundingClientRect();
  const overflowRight = rect.right - (window.innerWidth - 12);
  if (overflowRight > 0) panel.style.left = `${-overflowRight}px`;
}

function alignSubmenu(sub, row, gap) {
  sub.style.left = "";
  sub.style.right = "";
  sub.style.top = "";
  sub.style.position = "";
  sub.style.width = "";
  if (mobileLayout() && sub.id === "filters-sub") {
    clampFilterPanel();
    return;
  }
  if (!row || !sub.offsetParent || (sub.id === "who-sub" && window.matchMedia("(max-width: 800px)").matches)) {
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
      if (mobileLayout()) return;
      if (panel.contains(event.relatedTarget)) return;
      showFilterSub("");
    });
  }
  menu.innerHTML = "";
  searchFilterMenu().forEach((item) => {
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
    button.addEventListener("mouseenter", () => {
      if (mobileLayout()) return;
      showFilterSub(item.genres.length ? item.role : "");
    });
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!item.genres.length) {
        toggleFlatRole(item.role);
        return;
      }
      if (mobileLayout() && openFilterRole === item.role) showFilterSub("");
      else showFilterSub(item.role);
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
  state.country = "";
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

function syncNearbyBar() {
  document.body.classList.remove("is-nearby");
  document.getElementById("nearby-row")?.remove();
}

function syncBrowseTools() {
  const tools = document.getElementById("results-tools");
  if (!tools) return;
  const show = isResultsPage() && !state.profile && (state.browse || mobileLayout());
  tools.hidden = !show;
  if (!show) {
    setFiltersOpen(false);
    setLocationOpen(false);
  }
}

function syncControls() {
  paintSearch();
  paintFilters();
  paintLocation();
  syncNearbyBar();
  syncBrowseTools();
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
  if (state.country) params.set("country", state.country);
  if (state.extraCities.length) params.set("near", state.extraCities.join(","));
  writeFilterParams(params);
  if (state.tenk) params.set("tenk", "1");
  const query = params.toString();
  return query ? `results.html?${query}` : "results.html";
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
  if (state.country) params.set("country", state.country);
  if (state.extraCities.length) params.set("near", state.extraCities.join(","));
  writeFilterParams(params);
  if (state.tenk) params.set("tenk", "1");
  if (state.browse) params.set("browse", "1");
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
  state.country = COUNTRY_INFO[params.get("country") || ""] ? params.get("country") : "";
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
  state.browse = params.get("browse") === "1";
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
  let clearPointer = false;
  const armClear = (button, run) => {
    if (!button) return;
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      event.stopPropagation();
      clearPointer = true;
      run();
      window.setTimeout(() => {
        clearPointer = false;
      }, 350);
    });
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (clearPointer) {
        clearPointer = false;
        return;
      }
      run();
    });
  };
  document.getElementById("where-segment").addEventListener("click", (event) => {
    if (clearPointer || event.target.closest("#where-clear")) return;
    setPanel("where");
  });
  document.getElementById("who-segment").addEventListener("click", (event) => {
    if (clearPointer || event.target.closest("#who-clear")) return;
    setPanel("who");
  });
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
  armClear(document.getElementById("where-clear"), () => {
    state.city = "";
    state.country = "";
    state.extraCities = [];
    const field = document.getElementById("where-filter");
    if (field) field.value = "";
    render();
  });
  armClear(document.getElementById("who-clear"), () => {
    openWhoRole = "";
    clearRoles();
  });
  document.getElementById("where-filter").addEventListener("input", () => renderWhereOptions());
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  const setNavOpen = (open) => {
    const bar = navToggle?.closest(".navbar");
    if (!bar || !navToggle) return;
    bar.classList.toggle("is-nav-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Menu");
  };
  navToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    setNavOpen(navToggle.getAttribute("aria-expanded") !== "true");
  });
  document.addEventListener("click", (event) => {
    if (!navToggle || navToggle.getAttribute("aria-expanded") !== "true") return;
    if (navToggle.contains(event.target) || navLinks?.contains(event.target)) return;
    setNavOpen(false);
  });
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
      const countryCode = Object.keys(COUNTRY_INFO).find((code) => {
        if (code === "Remote") return false;
        const name = COUNTRY_INFO[code].name.toLowerCase();
        return typed === name || typed === `all ${name}` || typed === `all cities in ${countryPhrase(code).toLowerCase()}`;
      });
      if (countryCode) {
        state.country = countryCode;
        setCities([]);
      } else {
        const match = CITIES.find((city) => !isCountryRecord(city) && cityMatches(city, typed));
        if (match) {
          state.country = "";
          setCities([match.name]);
        }
      }
    }
    state.profile = "";
    state.browse = false;
    openPanel = "";
    document.getElementById("where-filter").value = "";
    if (!isResultsPage()) {
      markSkeletonNav();
      location.href = resultsQuery();
      return;
    }
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
    const navToggle = document.getElementById("nav-toggle");
    if (navToggle?.getAttribute("aria-expanded") === "true") {
      navToggle.closest(".navbar")?.classList.remove("is-nav-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Menu");
      return;
    }
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
    const handle = String(record?.instagram || "").trim().toLowerCase().replace(/^@/, "");
    if (!name) return false;
    if (/^(nicole|ncole|hamna|betty)(\s|$)/i.test(name)) return false;
    if (handle === "nicolezhi" || record?.id === "ncole") return false;
    const duplicate = PEOPLE.some((item) => {
      if (String(item.name || "").trim().toLowerCase() === name.toLowerCase()) return true;
      const existing = String(item.instagram || "").trim().toLowerCase().replace(/^@/, "");
      return handle && existing === handle;
    });
    return !duplicate;
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

const EXTERNAL_KEY = "10k-external-people";

function readExternalPeople() {
  try {
    const parsed = JSON.parse(localStorage.getItem(EXTERNAL_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveExternalPeople(list) {
  try {
    localStorage.setItem(EXTERNAL_KEY, JSON.stringify(list));
  } catch {}
}

function loadExternalPeople() {
  const saved = readExternalPeople();
  saved.forEach((record) => {
    if (!record || !record.id || !record.name) return;
    record.external = true;
    record.roles = record.roles?.length ? record.roles : ["External creative"];
    record.secondary = record.secondary || [];
    record.genres = record.genres || [];
    record.also = record.also || [];
    record.images = record.images || [];
    record.past = record.past || [];
    if (!PEOPLE.some((item) => item.id === record.id)) {
      PEOPLE.push(record);
    }
  });
}

function formatHandleDisplayName(handle) {
  const clean = String(handle || "").replace(/^@/, "").trim();
  if (!clean) return "External Creative";
  const parts = clean.split(/[._-]+/).filter(Boolean);
  if (parts.length > 1) {
    return parts
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

function extractInstagramHandles(rawValues) {
  const out = [];
  rawValues.forEach((raw) => {
    String(raw || "")
      .split(/[\s,;]+/)
      .map((part) => cleanHandle(part))
      .filter(Boolean)
      .forEach((handle) => {
        const cleaned = handle.replace(/[^a-zA-Z0-9._]/g, "");
        if (!cleaned || /^(p|reel|reels|stories|explore|tv)$/i.test(cleaned)) return;
        if (!out.some((item) => item.toLowerCase() === cleaned.toLowerCase())) {
          out.push(cleaned);
        }
      });
  });
  return out;
}

function ensureExternalPerson(rawHandle) {
  const handle = cleanHandle(rawHandle).replace(/[^a-zA-Z0-9._]/g, "");
  if (!handle) return null;
  const lower = handle.toLowerCase();
  const slug = lower.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "creator";
  const extId = `ext-${slug}`;

  const existingExt = PEOPLE.find(
    (item) => item.external && (item.id === extId || String(item.instagram || "").toLowerCase() === lower)
  );
  if (existingExt) return existingExt;

  const template = PEOPLE.find(
    (item) => !item.external && String(item.instagram || "").toLowerCase() === lower
  );

  const record = template
    ? {
        ...template,
        id: extId,
        external: true,
        roles: [...(template.roles || ["External creative"])],
        secondary: [...(template.secondary || [])],
        genres: [...(template.genres || [])],
        also: [...(template.also || [])],
        images: [...(template.images || [])],
        past: [],
      }
    : {
        id: extId,
        name: formatHandleDisplayName(handle),
        city: "",
        also: [],
        roles: ["External creative"],
        secondary: [],
        genres: [],
        tenk: false,
        instagram: handle,
        email: "",
        phone: "",
        preferred: "instagram",
        referredBy: "",
        rate: "",
        compensation: "",
        portfolio: "",
        bio: "",
        past: [],
        avatar: "",
        images: [],
        external: true,
      };

  PEOPLE.push(record);
  const saved = readExternalPeople().filter((item) => item.id !== record.id);
  saved.unshift(record);
  saveExternalPeople(saved);
  return record;
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
    const names = pick.roles.map((role) => formRoleLabel(role));
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
    const item = role ? formRoleMenu().find((entry) => entry.role === role) : null;
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
    formRoleMenu().forEach((item) => {
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

function formRoleMenu() {
  return [
    { role: "Photographer", label: "Photography", genres: ["Concert", "Events", "Portrait"] },
    { role: "Videographer / DP", label: "Videography", genres: ["Concert", "Events", "Music video", "Portrait"] },
    { role: "Stylist", label: "Stylist", genres: ["Hair", "Wardrobe"] },
    { role: "Model", label: "Model", genres: [] },
    { role: "Graphic designer", label: "Graphic designer", genres: [] },
  ];
}

function formRoleLabel(role) {
  return formRoleMenu().find((item) => item.role === role)?.label || role;
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
  document.getElementById("add-error").textContent = "";
  syncInstagramLinkCheck();
  document.getElementById("add-instagram-link")?.focus();
}

function syncInstagramLinkCheck() {
  const input = document.getElementById("add-instagram-link");
  const box = input?.closest(".add-input");
  const status = document.getElementById("add-instagram-status");
  if (!input || !box) return;
  const valid = Boolean(instagramLinkHandle(input.value));
  box.classList.toggle("is-valid", valid);
  if (status) status.textContent = valid ? "Valid Instagram link" : "";
}

function instagramLinkHandle(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const url = raw.match(/^(?:https?:\/\/)?(?:www\.)?instagram\.com\/([A-Za-z0-9._]{1,30})\/?(?:[?#].*)?$/i);
  if (url) return url[1];
  const handle = raw.match(/^@?([A-Za-z0-9._]{1,30})$/);
  return handle ? handle[1] : "";
}

async function savePersonRecord(record) {
  const response = await fetch("/api/people", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  });
  if (!response.ok) throw new Error("save failed");
}

async function addPersonFromForm() {
  const name = document.getElementById("add-name").value.trim();
  const city = document.getElementById("add-city").value;
  const roles = mainPicker.roles();
  const extraRoles = [];
  const extraGenres = [];
  secondaryPickers.forEach((picker) => {
    picker.roles().forEach((role) => {
      if (!roles.includes(role) && !extraRoles.includes(role)) extraRoles.push(role);
    });
    extraGenres.push(...picker.genres());
  });
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
  if (!roles.length) {
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
  const record = person(rosterId(name), name, city, [], roles, genres, false, {
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
  commitAddedPerson(record);
}

async function addPersonFromShortForm() {
  const error = document.getElementById("add-error");
  const input = document.getElementById("add-instagram-link");
  const handle = instagramLinkHandle(input?.value);
  const worked = document.querySelector('#add-form input[name="worked"]:checked')?.value || "";
  if (!input?.value.trim()) {
    error.textContent = "Add an Instagram link.";
    input?.focus();
    return;
  }
  if (!handle) {
    error.textContent = "Enter an Instagram profile link.";
    input.focus();
    return;
  }
  if (worked !== "yes" && worked !== "no") {
    error.textContent = "Choose yes or no.";
    return;
  }
  if (PEOPLE.some((item) => String(item.instagram || "").replace(/^@/, "").toLowerCase() === handle.toLowerCase())) {
    error.textContent = "That Instagram is already on the roster.";
    input.focus();
    return;
  }
  const record = person(rosterId(handle), handle, "", [], [], [], false, {
    instagram: handle,
    email: "",
    phone: "",
    preferred: "instagram",
    secondary: [],
    referredBy: "",
    compensation: "",
    portfolio: "",
    bio: "",
    rate: "",
    past: [],
    avatar: "",
    images: [],
    workedWith: worked === "yes",
  });
  commitAddedPerson(record);
}

async function commitAddedPerson(record) {
  const error = document.getElementById("add-error");
  const submit = document.querySelector("#add-form .add-submit");
  if (submit) submit.disabled = true;
  try {
    await savePersonRecord(record);
  } catch (saveError) {
    error.textContent = "Couldn't add them to the roster. Try again.";
    if (submit) submit.disabled = false;
    return;
  }
  if (!PEOPLE.some((item) => item.id === record.id)) PEOPLE.unshift(record);
  rememberPerson(record);
  if (!filteredPeople().some((item) => item.id === record.id)) {
    state.roles = [];
    state.genres = [];
    state.roleGenres = {};
    state.genresScoped = false;
    state.city = "";
    state.country = "";
    state.extraCities = [];
    state.browse = true;
  }
  buildFilters();
  setAddOpen(false);
  if (submit) submit.disabled = false;
  render({ url: "push" });
  document.querySelector(`.result-card[data-id="${CSS.escape(record.id)}"]`)?.scrollIntoView({ block: "center" });
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
  bindCityPicker(document.getElementById("add-city-wrap"));
  document.getElementById("add-form").addEventListener("click", (event) => {
    [mainPicker, ...secondaryPickers].forEach((picker) => {
      const wrap = picker.wrap();
      if (wrap && picker.isOpen() && !wrap.contains(event.target)) picker.close();
    });
    if (!event.target.closest(".add-city")) closeCityMenus();
  });
  document.getElementById("add-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addPersonFromShortForm();
  });
  document.getElementById("add-instagram-link")?.addEventListener("input", syncInstagramLinkCheck);
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

function createBoard(rawName, initialPersonId = "", { description = "", date = "" } = {}) {
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
    description: String(description || "").trim(),
    date: String(date || "").trim(),
    people: initialPersonId ? [initialPersonId] : [],
  };
  boards.unshift(board);
  saveBoards(boards);
  syncStarButtons();
  renderHomeBoards();
  if (isBoardsPage() && !state.profile) renderBoards();
  return board;
}

function updateBoardDetails(boardId, { name, description, date }, { rerender = true } = {}) {
  const boards = readBoards();
  const board = boards.find((item) => item.id === boardId);
  if (!board) return null;
  if (typeof name === "string" && name.trim()) board.name = name.trim();
  if (typeof description === "string") board.description = description.trim();
  if (typeof date === "string") board.date = date.trim();
  saveBoards(boards);
  renderHomeBoards();
  if (rerender && isBoardsPage() && !state.profile) renderBoards();
  return board;
}

function sizeBoardDescInput(el) {
  if (!el) return;
  el.style.height = "auto";
  el.style.height = `${Math.max(24, el.scrollHeight)}px`;
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
let boardPickerHideTimer = 0;

function cancelHideBoardPicker() {
  if (boardPickerHideTimer) {
    clearTimeout(boardPickerHideTimer);
    boardPickerHideTimer = 0;
  }
}

function scheduleHideBoardPicker() {
  cancelHideBoardPicker();
  boardPickerHideTimer = window.setTimeout(() => {
    boardPickerHideTimer = 0;
    const picker = document.getElementById("board-picker");
    const input = picker?.querySelector(".board-picker_input");
    if (input && document.activeElement === input) return;
    closeBoardPicker();
  }, 160);
}

function ensureBoardPicker() {
  let picker = document.getElementById("board-picker");
  if (picker) return picker;
  picker = document.createElement("div");
  picker.id = "board-picker";
  picker.className = "board-picker";
  picker.hidden = true;
  picker.setAttribute("role", "dialog");
  picker.setAttribute("aria-label", "Save to board");
  picker.addEventListener("mouseenter", cancelHideBoardPicker);
  picker.addEventListener("mouseleave", () => {
    if (mobileLayout()) return;
    scheduleHideBoardPicker();
  });
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

function openBoardPicker(personId, anchor, { toggle = true } = {}) {
  cancelHideBoardPicker();
  const picker = ensureBoardPicker();
  if (!picker.hidden && activePickerPerson === personId && activePickerAnchor === anchor) {
    if (toggle) closeBoardPicker();
    return;
  }
  activePickerPerson = personId;
  activePickerAnchor = anchor;
  picker.hidden = false;
  paintBoardPicker();
  requestAnimationFrame(() => positionBoardPicker(picker, anchor));
}

function closeBoardPicker() {
  cancelHideBoardPicker();
  const picker = document.getElementById("board-picker");
  if (picker) picker.hidden = true;
  activePickerPerson = "";
  activePickerAnchor = null;
}

function buildBoardCardElement(board, { onOpen, onDelete }) {
  const srcs = boardPreviewSources(board);
  const count = board.people.filter((id) => PEOPLE.some((p) => p.id === id)).length;
  const countText = count === 1 ? "1 creative" : `${count} creatives`;
  const formattedDate = formatBoardDate(board.date);
  const metaText = [countText, formattedDate].filter(Boolean).join(" · ");
  const descText = String(board.description || "").trim();
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
        <p>${escapeHtml(metaText)}</p>
        ${descText ? `<p class="board-card_desc">${escapeHtml(descText)}</p>` : ""}
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
  boards.slice(0, 4).forEach((board) => {
    grid.appendChild(
      buildBoardCardElement(board, {
        onOpen: () => {
          markSkeletonNav();
          location.href = `boards.html?board=${encodeURIComponent(board.id)}`;
        },
      })
    );
  });
}

let pendingDeleteBoardId = "";

function requestDeleteBoard(boardId) {
  const board = readBoards().find((item) => item.id === boardId);
  if (!board) return;
  const dialog = document.getElementById("board-delete-dialog");
  const titleEl = document.getElementById("board-delete-title");
  const ledeEl = document.getElementById("board-delete-lede");
  if (!dialog) {
    deleteBoard(boardId);
    return;
  }
  pendingDeleteBoardId = boardId;
  if (titleEl) titleEl.textContent = `Delete "${board.name}"?`;
  if (ledeEl) {
    const count = board.people.filter((id) => PEOPLE.some((p) => p.id === id)).length;
    const countPart = count === 1 ? "1 saved creative" : `${count} saved creatives`;
    ledeEl.textContent = count
      ? `This will remove "${board.name}" and unpin its ${countPart}. This action cannot be undone.`
      : `Are you sure you want to delete "${board.name}"? This action cannot be undone.`;
  }
  dialog.hidden = false;
  document.body.classList.add("add-open");
}

function closeDeleteBoardDialog() {
  const dialog = document.getElementById("board-delete-dialog");
  if (dialog) dialog.hidden = true;
  pendingDeleteBoardId = "";
  const createDialog = document.getElementById("boards-create-dialog");
  if (!createDialog || createDialog.hidden) {
    document.body.classList.remove("add-open");
  }
}

function setBoardCreateOpen(open) {
  const dialog = document.getElementById("boards-create-dialog");
  const createInput = document.getElementById("boards-create-input");
  const createDate = document.getElementById("boards-create-date");
  const createDateBtn = document.getElementById("boards-create-date-btn");
  const createDateText = document.getElementById("boards-create-date-text");
  const createDesc = document.getElementById("boards-create-desc");
  const createError = document.getElementById("boards-create-error");
  if (!dialog) return;
  dialog.hidden = !open;
  document.body.classList.toggle("add-open", open);
  closeBoardDatePicker();
  if (open) {
    if (createError) createError.textContent = "";
    requestAnimationFrame(() => createInput?.focus());
  } else {
    if (createInput) createInput.value = "";
    if (createDate) createDate.value = "";
    if (createDateText) createDateText.textContent = "Add date";
    if (createDateBtn) createDateBtn.classList.add("is-empty");
    if (createDesc) createDesc.value = "";
    if (createError) createError.textContent = "";
  }
}

let moodboardMode = "";
let moodboardBoardId = "";
let moodboardPicks = {};
let moodboardSeed = 1;

function moodboardPickList(roleName) {
  const value = moodboardPicks[roleName];
  if (Array.isArray(value)) return value.filter(Boolean);
  if (value) return [value];
  return [];
}

function moodboardRoleAllowsMany(roleName) {
  return mobileLayout() && /photograph/i.test(roleName);
}

function boardRoleGroupsMap(members) {
  const roleGroups = new Map();
  members.forEach((record) => {
    const primaryRole = (record.roles || [])[0] || (record.secondary || [])[0] || "Creative";
    if (!roleGroups.has(primaryRole)) roleGroups.set(primaryRole, []);
    roleGroups.get(primaryRole).push(record);
  });
  return roleGroups;
}

function placeMoodboardDialog() {
  const dialog = document.getElementById("board-moodboard-dialog");
  if (!dialog) return;
  const header = document.querySelector(".results-top");
  if (dialog.hidden || !mobileLayout() || !header) {
    dialog.style.top = "";
    return;
  }
  dialog.style.top = Math.round(header.getBoundingClientRect().bottom) + "px";
}

function resetMoodboardState() {
  moodboardMode = "";
  moodboardBoardId = "";
  moodboardPicks = {};
  const dlg = document.getElementById("board-moodboard-dialog");
  if (dlg) dlg.hidden = true;
  document.body.classList.remove("add-open");
  placeMoodboardDialog();
}

function syncMoodboardUI(activeBoard, members, roleGroups) {
  const detail = document.getElementById("board-detail");
  const ctaBtn = document.getElementById("board-moodboard-btn");
  const bar = document.getElementById("board-moodboard-bar");
  const picksEl = document.getElementById("board-moodboard-picks");
  const hintEl = document.getElementById("board-moodboard-hint");
  const dialog = document.getElementById("board-moodboard-dialog");
  const resultsWrap = document.getElementById("board-detail-results");
  if (!detail) return;

  if (!activeBoard || members.length === 0) {
    resetMoodboardState();
    if (ctaBtn) ctaBtn.hidden = true;
    if (bar) bar.hidden = true;
    if (dialog) dialog.hidden = true;
    if (resultsWrap) resultsWrap.hidden = false;
    detail.removeAttribute("data-moodboard-mode");
    placeMoodboardDialog();
    return;
  }

  if (moodboardBoardId && moodboardBoardId !== activeBoard.id) {
    resetMoodboardState();
  }
  moodboardBoardId = activeBoard.id;

  if (ctaBtn) {
    ctaBtn.hidden = members.length < 1 || moodboardMode === "select";
  }

  detail.dataset.moodboardMode = moodboardMode || "";

  if (moodboardMode === "select") {
    if (bar) bar.hidden = false;
    if (dialog) dialog.hidden = true;
    document.body.classList.remove("add-open");
    if (resultsWrap) resultsWrap.hidden = false;

    const roles = [...roleGroups.keys()];
    const pickedCount = roles.filter((roleName) => moodboardPickList(roleName).length > 0).length;
    const multiPhoto = roles.some(
      (roleName) => moodboardRoleAllowsMany(roleName) && roleGroups.get(roleName).length > 1
    );

    if (hintEl) {
      if (mobileLayout()) {
        const others = roles.filter((roleName) => !moodboardRoleAllowsMany(roleName));
        hintEl.textContent = multiPhoto
          ? others.length
            ? "Tap any photographers, and one person from each other role."
            : "Tap the photographers you want, then Generate."
          : "Tap one person from each role, then Generate.";
      } else if (multiPhoto) {
        const others = roles.filter((roleName) => !moodboardRoleAllowsMany(roleName));
        hintEl.textContent = others.length
          ? "Select any photographers, and 1 creative from each other role."
          : "Select one or more photographers, then tap Generate.";
      } else {
        hintEl.textContent =
          pickedCount === roles.length
            ? `All ${roles.length} ${roles.length === 1 ? "role" : "roles"} checked — click Generate to preview!`
            : `Check 1 creative from each role row below (${pickedCount} of ${roles.length} roles selected).`;
      }
    }

    const barTitle = document.querySelector("#board-moodboard-bar .moodboard-bar_title strong");
    if (barTitle) {
      barTitle.textContent = mobileLayout() ? "Choose your lineup" : "Select 1 creative from each role";
    }

    const genBtn = document.getElementById("board-moodboard-generate");
    if (genBtn) {
      genBtn.disabled = pickedCount === 0;
    }

    if (picksEl) {
      if (mobileLayout()) {
        picksEl.innerHTML = roles
          .map((roleName) => {
            const people = roleGroups.get(roleName);
            const picks = moodboardPickList(roleName);
            const buttons = people
              .map((person) => {
                const on = picks.includes(person.id);
                return `<button type="button" class="moodboard-person-btn${on ? " is-on" : ""}" data-role="${escapeHtml(roleName)}" data-person="${escapeHtml(person.id)}" aria-pressed="${on ? "true" : "false"}">${avatarHtml(person, "moodboard-person-btn_avatar")}<span>${escapeHtml(person.name)}</span></button>`;
              })
              .join("");
            return `<div class="moodboard-pick-role">
              <span class="moodboard-pick-role_label">${escapeHtml(pluralRole(roleName, people.length))}</span>
              <div class="moodboard-pick-people">${buttons}</div>
            </div>`;
          })
          .join("");
        picksEl.querySelectorAll(".moodboard-person-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const roleName = btn.dataset.role || "";
            const personId = btn.dataset.person || "";
            const picks = moodboardPickList(roleName);
            if (picks.includes(personId)) {
              const remaining = picks.filter((id) => id !== personId);
              if (remaining.length) moodboardPicks[roleName] = remaining;
              else delete moodboardPicks[roleName];
            } else if (moodboardRoleAllowsMany(roleName)) {
              moodboardPicks[roleName] = [...picks, personId];
            } else {
              moodboardPicks[roleName] = [personId];
            }
            syncMoodboardUI(activeBoard, members, roleGroups);
          });
        });
      } else {
        picksEl.innerHTML = roles
          .map((roleName) => {
            const chosen = moodboardPickList(roleName)
              .map((id) => roleGroups.get(roleName).find((person) => person.id === id))
              .filter(Boolean);
            const emptyLabel = moodboardRoleAllowsMany(roleName) ? "Select any" : "Check 1 below";
            return `<span class="moodboard-pick-chip${chosen.length ? " is-picked" : ""}">
              <strong>${escapeHtml(roleName)}:</strong>
              <span>${escapeHtml(chosen.length ? chosen.map((person) => person.name).join(", ") : emptyLabel)}</span>
            </span>`;
          })
          .join("");
      }
    }

    document.querySelectorAll("#board-detail-grid .board-role-group").forEach((groupEl) => {
      const roleName = groupEl.dataset.role || "";
      const selectedIds = moodboardPickList(roleName);
      groupEl.querySelectorAll(".result-card").forEach((card) => {
        const isPicked = selectedIds.includes(card.dataset.id);
        card.classList.toggle("is-moodboard-picked", isPicked);
        const checkbox = card.querySelector(".moodboard-card-checkbox");
        if (checkbox) checkbox.checked = isPicked;
        const labelEl = card.querySelector(".moodboard-card-check_label");
        if (labelEl) labelEl.textContent = isPicked ? "Selected" : `Select ${roleName}`;
      });
    });
    placeMoodboardDialog();
    return;
  }

  if (moodboardMode === "preview") {
    if (bar) bar.hidden = true;
    if (dialog) dialog.hidden = false;
    document.body.classList.add("add-open");
    if (resultsWrap) resultsWrap.hidden = false;
    paintMoodboardStage(roleGroups);
    if (mobileLayout()) window.scrollTo(0, 0);
    placeMoodboardDialog();
    return;
  }

  if (bar) bar.hidden = true;
  if (dialog) dialog.hidden = true;
  document.body.classList.remove("add-open");
  if (resultsWrap) resultsWrap.hidden = false;
  placeMoodboardDialog();
}

function paintMoodboardStage(roleGroups) {
  const crewEl = document.getElementById("board-moodboard-crew");
  const canvasEl = document.getElementById("board-moodboard-canvas");
  const subEl = document.getElementById("board-moodboard-sub");
  if (!crewEl || !canvasEl) return;

  const selectedCrew = [];
  roleGroups.forEach((groupRecords, roleName) => {
    const pickedIds = moodboardPickList(roleName);
    groupRecords.forEach((person) => {
      if (pickedIds.includes(person.id)) selectedCrew.push({ role: roleName, record: person });
    });
  });
  if (!selectedCrew.length) {
    roleGroups.forEach((groupRecords, roleName) => {
      if (groupRecords[0]) selectedCrew.push({ role: roleName, record: groupRecords[0] });
    });
  }

  if (subEl) {
    const summary = selectedCrew.map((item) => `${item.record.name} (${item.role})`).join(" + ");
    subEl.textContent = summary
      ? `Featuring work from ${summary}.`
      : "Visualizing how your selected crew's work looks together.";
  }

  crewEl.innerHTML = selectedCrew
    .map(
      ({ role, record }) => `
      <button type="button" class="moodboard-crew_pill" data-person="${escapeHtml(record.id)}">
        ${avatarHtml(record, "moodboard-crew_avatar")}
        <span class="moodboard-crew_meta">
          <strong>${escapeHtml(record.name)}</strong>
          <span>${escapeHtml(role)}</span>
        </span>
      </button>
    `
    )
    .join("");

  crewEl.querySelectorAll(".moodboard-crew_pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.person) {
        resetMoodboardState();
        openProfile(btn.dataset.person);
      }
    });
  });

  const buckets = selectedCrew.map(({ role, record }) => {
    const rawImages = (record.images || [])
      .map((item) => (typeof item === "string" ? { src: item, href: "" } : item))
      .filter((item) => item && item.src)
      .slice(0, 5);
    if (!rawImages.length && record.avatar) {
      rawImages.push({ src: record.avatar, href: record.instagram ? `https://instagram.com/${record.instagram}` : "" });
    }
    return rawImages.map((img) => ({
      src: img.src,
      href: img.href || (record.instagram ? `https://instagram.com/${record.instagram}` : ""),
      record,
      role,
    }));
  });

  const interleaved = [];
  const maxLen = Math.max(0, ...buckets.map((b) => b.length));
  for (let i = 0; i < maxLen; i += 1) {
    buckets.forEach((bucket) => {
      if (bucket[i]) interleaved.push(bucket[i]);
    });
  }

  const angles = [-4.2, 3.1, -2.4, 4.4, -3.5, 2.2, -4.6, 3.6, -1.8, 2.9, -3.8, 4.1];
  const lifts = [4, 18, 0, 22, 10, 2, 20, 8, 14, 0, 16, 6];
  const aspects = ["4 / 5", "1 / 1", "4 / 4.6", "3 / 4", "4 / 5", "1 / 1.15"];

  if (!interleaved.length) {
    canvasEl.innerHTML = `<p class="boards-sub">No portfolio images available for this selection yet.</p>`;
    return;
  }

  const ordered = interleaved.slice();
  if (moodboardSeed > 1) {
    for (let i = ordered.length - 1; i > 0; i -= 1) {
      const j = (i * moodboardSeed * 7 + moodboardSeed * 3) % (i + 1);
      const temp = ordered[i];
      ordered[i] = ordered[j];
      ordered[j] = temp;
    }
  }

  canvasEl.innerHTML = ordered
    .map((item, idx) => {
      const rot = angles[(idx + moodboardSeed) % angles.length];
      const lift = lifts[(idx + moodboardSeed * 2) % lifts.length];
      const ratio = aspects[(idx + moodboardSeed) % aspects.length];
      return `
        <figure
          class="moodboard-item"
          style="--mb-rot:${rot}deg;--mb-lift:${lift}px;--mb-ratio:${ratio}"
          data-person="${escapeHtml(item.record.id)}"
        >
          <div class="moodboard-item_photo">
            <img src="${escapeHtml(item.src)}" alt="" />
          </div>
          <figcaption class="moodboard-item_cap">
            ${avatarHtml(item.record, "moodboard-item_avatar")}
            <span class="moodboard-item_credit">
              <strong>${escapeHtml(item.record.name)}</strong>
              <span>${escapeHtml(item.role)}</span>
            </span>
          </figcaption>
        </figure>
      `;
    })
    .join("");

  canvasEl.querySelectorAll(".moodboard-item").forEach((card) => {
    card.addEventListener("click", () => {
      if (card.dataset.person) {
        resetMoodboardState();
        openProfile(card.dataset.person);
      }
    });
  });
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
    const descEl = document.getElementById("board-detail-desc");
    const dateEl = document.getElementById("board-detail-date");
    const dateTextEl = document.getElementById("board-detail-date-text");
    const dateWrapEl = document.getElementById("board-detail-date-wrap");
    const emptyEl = document.getElementById("board-detail-empty");
    const gridEl = document.getElementById("board-detail-grid");
    const members = activeBoard.people
      .map((id) => PEOPLE.find((person) => person.id === id))
      .filter(Boolean);
    const countLabel = members.length === 1 ? "1 creative saved" : `${members.length} creatives saved`;
    const dateLabel = formatBoardDate(activeBoard.date);
    if (titleEl) titleEl.textContent = activeBoard.name;
    if (countEl) countEl.textContent = countLabel;
    if (descEl && document.activeElement !== descEl) {
      descEl.value = activeBoard.description || "";
      requestAnimationFrame(() => sizeBoardDescInput(descEl));
    }
    if (dateEl) {
      dateEl.value = activeBoard.date || "";
    }
    if (dateTextEl) dateTextEl.textContent = dateLabel || "Add date";
    if (dateWrapEl) dateWrapEl.classList.toggle("is-empty", !dateLabel);
    const roleGroups = boardRoleGroupsMap(members);
    if (emptyEl) emptyEl.hidden = members.length !== 0;
    if (gridEl) {
      gridEl.innerHTML = "";
      const showRoleHeaders = roleGroups.size > 1 || moodboardMode === "select";
      roleGroups.forEach((groupRecords, roleName) => {
        const section = document.createElement("section");
        section.className = "board-role-group";
        section.dataset.role = roleName;
        if (showRoleHeaders) {
          const heading = document.createElement("h3");
          heading.className = "board-role-group_title";
          const label =
            roleName === "Videographer / DP" && groupRecords.length > 1
              ? "Videographers / DPs"
              : pluralRole(roleName, groupRecords.length);
          heading.innerHTML = `${escapeHtml(label)} <span>${groupRecords.length}</span>`;
          section.appendChild(heading);
        }
        const rowGrid = document.createElement("div");
        rowGrid.className = "grid";
        groupRecords.forEach((record) => {
          const card = document.createElement("article");
          const isPicked = moodboardPickList(roleName).includes(record.id);
          card.className = [
            "result-card",
            record.external ? "is-external" : "",
            isPicked ? "is-moodboard-picked" : "",
          ]
            .filter(Boolean)
            .join(" ");
          card.tabIndex = 0;
          card.dataset.id = record.id;
          card.dataset.role = roleName;
          card.innerHTML = `
            <label class="moodboard-card-check" aria-label="Select ${escapeHtml(record.name)} for ${escapeHtml(roleName)}">
              <input
                type="checkbox"
                class="moodboard-card-checkbox"
                data-role="${escapeHtml(roleName)}"
                data-person="${escapeHtml(record.id)}"
                ${isPicked ? "checked" : ""}
              />
              <span class="moodboard-card-check_box" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="12" height="12"><path d="M3.5 8.3 6.6 11.4 12.6 4.8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="moodboard-card-check_label">${escapeHtml(isPicked ? "Selected" : `Select ${roleName}`)}</span>
            </label>
            ${rosterCardHtml(record)}
          `;
          const toggleRolePick = (forceState) => {
            const picks = moodboardPickList(roleName);
            const currentlyPicked = picks.includes(record.id);
            const nextPicked = typeof forceState === "boolean" ? forceState : !currentlyPicked;
            if (nextPicked) {
              moodboardPicks[roleName] = moodboardRoleAllowsMany(roleName)
                ? [...picks, record.id]
                : [record.id];
            } else {
              const remaining = picks.filter((id) => id !== record.id);
              if (remaining.length) moodboardPicks[roleName] = remaining;
              else delete moodboardPicks[roleName];
            }
            syncMoodboardUI(activeBoard, members, roleGroups);
          };
          const checkboxEl = card.querySelector(".moodboard-card-checkbox");
          checkboxEl?.addEventListener("change", (event) => {
            event.stopPropagation();
            toggleRolePick(checkboxEl.checked);
          });
          card.querySelector(".moodboard-card-check")?.addEventListener("click", (event) => {
            event.stopPropagation();
          });
          card.addEventListener("click", (event) => {
            if (moodboardMode === "select") {
              if (event.target.closest("a, .copy-icon, .star-btn")) {
                event.preventDefault();
                event.stopPropagation();
              }
              toggleRolePick();
              return;
            }
            if (event.target.closest("a, .copy-icon, .star-btn")) return;
            openProfile(record.id);
          });
          card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && !event.target.closest("a, .copy-icon, .star-btn")) {
              if (moodboardMode === "select") toggleRolePick();
              else openProfile(record.id);
            }
          });
          rowGrid.appendChild(card);
        });
        section.appendChild(rowGrid);
        gridEl.appendChild(section);
      });
    }
    syncMoodboardUI(activeBoard, members, roleGroups);
    return;
  }

  resetMoodboardState();

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
        onDelete: () => requestDeleteBoard(board.id),
      })
    );
  });

  if (boards.length) {
    grid.appendChild(
      buildAddBoardCardElement(() => {
        setBoardCreateOpen(true);
      })
    );
  }
}

function paintBoardAddPanel() {
  const listEl = document.getElementById("board-add-list");
  const searchEl = document.getElementById("board-add-search");
  if (!listEl || !state.board) return;
  const board = readBoards().find((item) => item.id === state.board);
  if (!board) return;
  const q = (searchEl?.value || "").trim().toLowerCase();
  const matches = PEOPLE.filter((person) => {
    if (!q) return true;
    const hay = `${person.name} ${roleNames(person).join(" ")} ${person.city || ""} ${(person.genres || []).join(" ")}`.toLowerCase();
    return hay.includes(q);
  });
  if (!matches.length) {
    listEl.innerHTML = `<p class="board-picker_empty">No creatives match "${escapeHtml(searchEl?.value || "")}".</p>`;
    return;
  }
  listEl.innerHTML = matches
    .slice(0, 40)
    .map((person) => {
      const saved = board.people.includes(person.id);
      const sub = [roleNames(person)[0] || "Creative", person.city || ""].filter(Boolean).join(" · ");
      return `
        <button type="button" class="board-picker_row${saved ? " is-saved" : ""}" data-add-person="${escapeHtml(person.id)}">
          ${avatarHtml(person, "board-add_avatar")}
          <span class="board-picker_meta">
            <strong>${escapeHtml(person.name)}</strong>
            <span>${escapeHtml(sub)}</span>
          </span>
          <span class="board-picker_pill">${saved ? "Added" : "Add"}</span>
        </button>
      `;
    })
    .join("");
  listEl.querySelectorAll(".board-picker_row[data-add-person]").forEach((row) => {
    row.addEventListener("click", (event) => {
      event.stopPropagation();
      togglePersonInBoard(row.dataset.addPerson, state.board);
      paintBoardAddPanel();
    });
  });
}

function closeBoardAddPanel() {
  const panel = document.getElementById("board-add-panel");
  const menu = document.getElementById("board-add-menu");
  const btn = document.getElementById("board-add-creative-btn");
  if (panel) panel.hidden = true;
  if (menu) menu.hidden = true;
  if (btn) btn.setAttribute("aria-expanded", "false");
}

function addExternalHandleRow(initialValue = "") {
  const container = document.getElementById("board-external-rows");
  if (!container) return null;
  const row = document.createElement("div");
  row.className = "board-external_row";
  row.innerHTML = `
    <span class="add-input board-external_input">
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">${CONTACT_PATHS.instagram}</svg>
      <input
        type="text"
        name="external-instagram"
        placeholder="instagram.com/username or @handle"
        autocomplete="off"
        value="${escapeHtml(initialValue)}"
      />
    </span>
    <button type="button" class="board-external_remove" aria-label="Remove handle">×</button>
  `;
  const removeBtn = row.querySelector(".board-external_remove");
  removeBtn?.addEventListener("click", () => {
    row.remove();
    syncExternalRemoveButtons();
  });
  container.appendChild(row);
  syncExternalRemoveButtons();
  return row.querySelector("input");
}

function syncExternalRemoveButtons() {
  const rows = [...document.querySelectorAll("#board-external-rows .board-external_row")];
  rows.forEach((row) => {
    const btn = row.querySelector(".board-external_remove");
    if (btn) btn.hidden = rows.length <= 1;
  });
}

function setBoardExternalOpen(open) {
  const dialog = document.getElementById("board-external-dialog");
  const container = document.getElementById("board-external-rows");
  const errorEl = document.getElementById("board-external-error");
  if (!dialog) return;
  dialog.hidden = !open;
  document.body.classList.toggle("add-open", open);
  closeBoardAddPanel();
  if (errorEl) errorEl.textContent = "";
  if (open) {
    if (container) {
      container.innerHTML = "";
      const firstInput = addExternalHandleRow();
      requestAnimationFrame(() => firstInput?.focus());
    }
  } else if (container) {
    container.innerHTML = "";
  }
}

let activeDateAnchor = null;
let activeDateCallback = null;
let activeDateStart = "";
let activeDateEnd = "";
let activeDateHover = "";
let activeDateViewYear = 2026;
let activeDateViewMonth = 10;

function ensureBoardDatePicker() {
  let pop = document.getElementById("board-date-picker");
  if (pop) return pop;
  pop = document.createElement("div");
  pop.id = "board-date-picker";
  pop.className = "board-date-picker";
  pop.hidden = true;
  pop.setAttribute("role", "dialog");
  pop.setAttribute("aria-label", "Choose date");
  document.body.appendChild(pop);
  return pop;
}

function positionBoardDatePicker(pop, anchor) {
  if (!pop || !anchor) return;
  const rect = anchor.getBoundingClientRect();
  const width = pop.offsetWidth || 276;
  const height = pop.offsetHeight || 336;
  const margin = 12;
  let left = rect.left;
  if (left + width > window.innerWidth - margin) left = window.innerWidth - width - margin;
  if (left < margin) left = margin;
  let top = rect.bottom + 8;
  if (top + height > window.innerHeight - margin && rect.top - height - 8 > margin) {
    top = rect.top - height - 8;
  }
  pop.style.left = `${Math.max(margin, left)}px`;
  pop.style.top = `${Math.max(margin, top)}px`;
}

function toIsoDate(year, monthIndex, day) {
  const m = String(monthIndex + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

function paintBoardDatePicker() {
  const pop = ensureBoardDatePicker();
  const monthName = new Date(activeDateViewYear, activeDateViewMonth, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const firstDow = new Date(activeDateViewYear, activeDateViewMonth, 1).getDay();
  const daysInMonth = new Date(activeDateViewYear, activeDateViewMonth + 1, 0).getDate();
  const prevDays = new Date(activeDateViewYear, activeDateViewMonth, 0).getDate();
  const now = new Date();
  const todayIso = toIsoDate(now.getFullYear(), now.getMonth(), now.getDate());

  const cells = [];
  for (let i = firstDow - 1; i >= 0; i -= 1) {
    const d = prevDays - i;
    const prevDate = new Date(activeDateViewYear, activeDateViewMonth - 1, d);
    const iso = toIsoDate(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate());
    cells.push({ label: d, iso, outside: true });
  }
  for (let d = 1; d <= daysInMonth; d += 1) {
    const iso = toIsoDate(activeDateViewYear, activeDateViewMonth, d);
    cells.push({ label: d, iso, outside: false });
  }
  const trailing = (7 - (cells.length % 7)) % 7;
  for (let d = 1; d <= trailing; d += 1) {
    const nextDate = new Date(activeDateViewYear, activeDateViewMonth + 1, d);
    const iso = toIsoDate(nextDate.getFullYear(), nextDate.getMonth(), nextDate.getDate());
    cells.push({ label: d, iso, outside: true });
  }

  const dowHtml = ["S", "M", "T", "W", "T", "F", "S"]
    .map((d) => `<span class="board-cal_dow">${d}</span>`)
    .join("");

  const previewEnd =
    activeDateStart && !activeDateEnd && activeDateHover
      ? activeDateHover
      : activeDateEnd;
  const hasRange = Boolean(activeDateStart && previewEnd && activeDateStart !== previewEnd);
  const rangeLo = hasRange
    ? activeDateStart <= previewEnd
      ? activeDateStart
      : previewEnd
    : activeDateStart;
  const rangeHi = hasRange
    ? activeDateStart <= previewEnd
      ? previewEnd
      : activeDateStart
    : "";

  const daysHtml = cells
    .map((cell) => {
      const isSingleSelected = !hasRange && activeDateStart && cell.iso === activeDateStart;
      const isStart = hasRange && cell.iso === rangeLo;
      const isEnd = hasRange && cell.iso === rangeHi;
      const isBetween = hasRange && cell.iso > rangeLo && cell.iso < rangeHi;
      const classes = [
        "board-cal_day",
        cell.outside ? "is-outside" : "",
        isSingleSelected ? "is-selected" : "",
        isStart ? "is-range-start" : "",
        isEnd ? "is-range-end" : "",
        isBetween ? "is-in-range" : "",
        cell.iso === todayIso ? "is-today" : "",
      ]
        .filter(Boolean)
        .join(" ");
      return `<button type="button" class="${classes}" data-iso="${cell.iso}"><span>${cell.label}</span></button>`;
    })
    .join("");

  const rangeHint = !activeDateStart
    ? "Select a date or range"
    : !activeDateEnd
    ? `${formatBoardDate(activeDateStart)} – End date (optional)`
    : formatBoardDate(serializeBoardDateRange(activeDateStart, activeDateEnd));

  pop.innerHTML = `
    <div class="board-cal_range_hint">${escapeHtml(rangeHint)}</div>
    <div class="board-cal_head">
      <strong class="board-cal_title">${escapeHtml(monthName)}</strong>
      <div class="board-cal_nav">
        <button type="button" class="board-cal_arrow" data-cal-dir="-1" aria-label="Previous month">
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M10 3.5 5.5 8 10 12.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <button type="button" class="board-cal_arrow" data-cal-dir="1" aria-label="Next month">
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M6 3.5 10.5 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </div>
    <div class="board-cal_weekdays">${dowHtml}</div>
    <div class="board-cal_grid">${daysHtml}</div>
    <div class="board-cal_foot">
      <button type="button" class="board-cal_action" data-cal-clear>Clear</button>
      <div class="board-cal_foot_right">
        <button type="button" class="board-cal_action" data-cal-today>Today</button>
        <button type="button" class="board-cal_action board-cal_action-today" data-cal-done>Done</button>
      </div>
    </div>
  `;

  pop.querySelectorAll(".board-cal_arrow").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      const delta = Number(btn.dataset.calDir || 0);
      const next = new Date(activeDateViewYear, activeDateViewMonth + delta, 1);
      activeDateViewYear = next.getFullYear();
      activeDateViewMonth = next.getMonth();
      paintBoardDatePicker();
    });
  });

  pop.querySelectorAll(".board-cal_day").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      if (!activeDateStart || activeDateEnd) return;
      const iso = btn.dataset.iso || "";
      if (iso === activeDateHover) return;
      activeDateHover = iso;
      if (iso === activeDateStart) {
        pop.querySelectorAll(".board-cal_day").forEach((el) => {
          const dIso = el.dataset.iso || "";
          el.classList.toggle("is-selected", dIso === activeDateStart);
          el.classList.remove("is-range-start", "is-range-end", "is-in-range");
        });
        return;
      }
      const lo = activeDateStart <= iso ? activeDateStart : iso;
      const hi = activeDateStart <= iso ? iso : activeDateStart;
      pop.querySelectorAll(".board-cal_day").forEach((el) => {
        const dIso = el.dataset.iso || "";
        el.classList.remove("is-selected");
        el.classList.toggle("is-range-start", dIso === lo);
        el.classList.toggle("is-range-end", dIso === hi);
        el.classList.toggle("is-in-range", dIso > lo && dIso < hi);
      });
    });

    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      const iso = btn.dataset.iso || "";
      if (!activeDateStart || activeDateEnd) {
        activeDateStart = iso;
        activeDateEnd = "";
        activeDateHover = "";
        if (activeDateCallback) activeDateCallback(iso);
        paintBoardDatePicker();
      } else if (iso === activeDateStart) {
        activeDateEnd = "";
        activeDateHover = "";
        if (activeDateCallback) activeDateCallback(activeDateStart);
        closeBoardDatePicker();
      } else {
        if (iso < activeDateStart) {
          activeDateEnd = activeDateStart;
          activeDateStart = iso;
        } else {
          activeDateEnd = iso;
        }
        activeDateHover = "";
        const serialized = serializeBoardDateRange(activeDateStart, activeDateEnd);
        if (activeDateCallback) activeDateCallback(serialized);
        paintBoardDatePicker();
      }
    });
  });

  pop.querySelector(".board-cal_grid")?.addEventListener("mouseleave", () => {
    if (!activeDateStart || activeDateEnd || !activeDateHover) return;
    activeDateHover = "";
    pop.querySelectorAll(".board-cal_day").forEach((el) => {
      const dIso = el.dataset.iso || "";
      el.classList.toggle("is-selected", dIso === activeDateStart);
      el.classList.remove("is-range-start", "is-range-end", "is-in-range");
    });
  });

  pop.querySelector("[data-cal-clear]")?.addEventListener("click", (event) => {
    event.stopPropagation();
    activeDateStart = "";
    activeDateEnd = "";
    activeDateHover = "";
    if (activeDateCallback) activeDateCallback("");
    closeBoardDatePicker();
  });

  pop.querySelector("[data-cal-today]")?.addEventListener("click", (event) => {
    event.stopPropagation();
    activeDateStart = todayIso;
    activeDateEnd = "";
    activeDateHover = "";
    if (activeDateCallback) activeDateCallback(todayIso);
    const nowDate = new Date();
    activeDateViewYear = nowDate.getFullYear();
    activeDateViewMonth = nowDate.getMonth();
    paintBoardDatePicker();
  });

  pop.querySelector("[data-cal-done]")?.addEventListener("click", (event) => {
    event.stopPropagation();
    closeBoardDatePicker();
  });

  if (activeDateAnchor) positionBoardDatePicker(pop, activeDateAnchor);
}

function openBoardDatePicker(anchor, currentRaw, onSelect) {
  const pop = ensureBoardDatePicker();
  if (!pop.hidden && activeDateAnchor === anchor) {
    closeBoardDatePicker();
    return;
  }
  if (activeDateAnchor) activeDateAnchor.setAttribute("aria-expanded", "false");
  activeDateAnchor = anchor;
  activeDateCallback = onSelect;
  const { start, end } = parseBoardDateRange(currentRaw);
  activeDateStart = start;
  activeDateEnd = end;
  activeDateHover = "";
  const sParts = parseIsoDateParts(start);
  const base = sParts ? new Date(sParts.year, sParts.month, 1) : new Date();
  activeDateViewYear = base.getFullYear();
  activeDateViewMonth = base.getMonth();
  anchor.setAttribute("aria-expanded", "true");
  pop.hidden = false;
  paintBoardDatePicker();
  requestAnimationFrame(() => positionBoardDatePicker(pop, anchor));
}

function closeBoardDatePicker() {
  const pop = document.getElementById("board-date-picker");
  if (pop) pop.hidden = true;
  if (activeDateAnchor) activeDateAnchor.setAttribute("aria-expanded", "false");
  activeDateAnchor = null;
  activeDateCallback = null;
  activeDateHover = "";
}

function boardPreviewShots(board) {
  return (board?.people || [])
    .map((id) => PEOPLE.find((person) => person.id === id))
    .filter(Boolean)
    .slice(0, 3)
    .map((person) => ({
      name: person.name,
      src: instagramShots(person)[0]?.src || person.avatar || "",
    }));
}

function clearSharePreviewTimers() {
  (openSharePreview.timers || []).forEach((id) => window.clearTimeout(id));
  openSharePreview.timers = [];
}

function sharePreviewLater(fn, ms) {
  const id = window.setTimeout(fn, ms);
  openSharePreview.timers = openSharePreview.timers || [];
  openSharePreview.timers.push(id);
}

function resetSharePreview() {
  clearSharePreviewTimers();
  const root = document.getElementById("share-preview");
  const field = document.getElementById("share-field-text");
  if (root) root.classList.remove("is-pasted", "is-sending", "is-sent");
  if (field) field.textContent = "";
}

function shareFieldLink(board) {
  const url = boardShareUrl(board);
  try {
    const parsed = new URL(url);
    return `${parsed.host}${parsed.pathname}${parsed.search}`;
  } catch {
    return url;
  }
}

function openSharePreview(board) {
  const root = document.getElementById("share-preview");
  const collage = document.getElementById("share-preview-collage");
  const subtitle = document.getElementById("share-preview-board");
  const field = document.getElementById("share-field-text");
  if (!root || !collage) return;
  const shots = boardPreviewShots(board);
  const cells = shots.length
    ? shots.map((shot) => (
      shot.src
        ? `<img src="${escapeHtml(shot.src)}" alt="" />`
        : `<span class="share-collage_empty">${escapeHtml(initials(shot.name))}</span>`
    ))
    : [`<span class="share-collage_empty"></span>`];
  collage.dataset.count = String(shots.length || 1);
  collage.innerHTML = cells.join("");
  if (subtitle) subtitle.textContent = board?.name || "";
  resetSharePreview();
  root.hidden = false;
  document.body.classList.add("share-preview-open");
  const link = shareFieldLink(board);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    root.classList.add("is-sent");
    return;
  }
  sharePreviewLater(() => {
    if (field) field.textContent = link;
    root.classList.add("is-pasted");
  }, 480);
  sharePreviewLater(() => {
    root.classList.add("is-sending");
  }, 1880);
  sharePreviewLater(() => {
    if (field) field.textContent = "";
    root.classList.remove("is-pasted", "is-sending");
    root.classList.add("is-sent");
  }, 2060);
}

function closeSharePreview() {
  const root = document.getElementById("share-preview");
  resetSharePreview();
  if (root) root.hidden = true;
  document.body.classList.remove("share-preview-open");
  window.setTimeout(() => {
    closeBoardSharePanel();
    const label = document.getElementById("board-share-text-label");
    if (label) label.textContent = "Text";
  }, 900);
}

function closeBoardSharePanel() {
  const panel = document.getElementById("board-share-panel");
  const btn = document.getElementById("board-share-btn");
  if (panel) panel.hidden = true;
  if (btn) btn.setAttribute("aria-expanded", "false");
}

function boardShareUrl(board) {
  const url = new URL("boards.html", location.href);
  if (board?.id) url.searchParams.set("board", board.id);
  return url.toString();
}

function syncBoardShareLinks() {
  if (!state.board) return;
  const board = readBoards().find((item) => item.id === state.board);
  if (!board) return;
  const shareUrl = boardShareUrl(board);
  const dateLabel = formatBoardDate(board.date);
  const members = board.people
    .map((id) => PEOPLE.find((person) => person.id === id))
    .filter(Boolean);
  const names = members.map((person) => person.name).join(", ");
  const headerLine = dateLabel ? `${board.name} (${dateLabel})` : board.name;
  const smsBody = [
    `Check out the "${headerLine}" board on Draft:`,
    names ? `Creatives: ${names}` : "",
    shareUrl,
  ]
    .filter(Boolean)
    .join("\n");
  const emailSubject = `Draft board: ${headerLine}`;
  const emailBody = [
    `Here's the "${headerLine}" board on Draft:`,
    board.description ? `\n${board.description}` : "",
    names ? `\nCreatives (${members.length}): ${names}` : "",
    `\n${shareUrl}`,
  ]
    .filter(Boolean)
    .join("\n");

  const textLink = document.getElementById("board-share-text");
  const emailLink = document.getElementById("board-share-email");
  if (textLink) textLink.href = `sms:?&body=${encodeURIComponent(smsBody)}`;
  if (emailLink) {
    emailLink.href = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  }
}

function bindBoards() {
  document.addEventListener("mouseover", (event) => {
    if (mobileLayout()) return;
    const starBtn = event.target.closest(".star-btn[data-star-person]");
    if (!starBtn) return;
    openBoardPicker(starBtn.dataset.starPerson, starBtn, { toggle: false });
  });

  document.addEventListener("mouseout", (event) => {
    if (mobileLayout()) return;
    const starBtn = event.target.closest(".star-btn[data-star-person]");
    if (!starBtn) return;
    if (event.relatedTarget && starBtn.contains(event.relatedTarget)) return;
    scheduleHideBoardPicker();
  });

  document.addEventListener("focusin", (event) => {
    if (mobileLayout()) return;
    const starBtn = event.target.closest(".star-btn[data-star-person]");
    if (!starBtn) return;
    openBoardPicker(starBtn.dataset.starPerson, starBtn, { toggle: false });
  });

  document.addEventListener("focusout", (event) => {
    if (mobileLayout()) return;
    const starBtn = event.target.closest(".star-btn[data-star-person]");
    if (!starBtn) return;
    scheduleHideBoardPicker();
  });

  document.addEventListener("click", (event) => {
    const starBtn = event.target.closest(".star-btn[data-star-person]");
    if (starBtn) {
      event.preventDefault();
      event.stopPropagation();
      openBoardPicker(starBtn.dataset.starPerson, starBtn, { toggle: false });
      return;
    }
    const picker = document.getElementById("board-picker");
    if (picker && !picker.hidden && !picker.contains(event.target)) {
      closeBoardPicker();
    }
    const addWrap = document.getElementById("board-add-wrap");
    const addMenu = document.getElementById("board-add-menu");
    if (addMenu && !addMenu.hidden && addWrap && !addWrap.contains(event.target)) {
      closeBoardAddPanel();
    }
    const shareWrap = document.getElementById("board-share-wrap");
    const sharePanel = document.getElementById("board-share-panel");
    if (sharePanel && !sharePanel.hidden && shareWrap && !shareWrap.contains(event.target)) {
      closeBoardSharePanel();
    }
    const datePop = document.getElementById("board-date-picker");
    if (
      datePop &&
      !datePop.hidden &&
      !datePop.contains(event.target) &&
      (!activeDateAnchor || !activeDateAnchor.contains(event.target))
    ) {
      closeBoardDatePicker();
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
      const datePop = document.getElementById("board-date-picker");
      if (datePop && !datePop.hidden && activeDateAnchor) {
        if (!activeDateAnchor.isConnected) closeBoardDatePicker();
        else positionBoardDatePicker(datePop, activeDateAnchor);
      }
    },
    { passive: true }
  );

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const datePop = document.getElementById("board-date-picker");
      if (datePop && !datePop.hidden) {
        closeBoardDatePicker();
        return;
      }
      const moodboardDialog = document.getElementById("board-moodboard-dialog");
      if (moodboardDialog && !moodboardDialog.hidden) {
        resetMoodboardState();
        renderBoards();
        return;
      }
      const deleteDialog = document.getElementById("board-delete-dialog");
      if (deleteDialog && !deleteDialog.hidden) {
        closeDeleteBoardDialog();
        return;
      }
      const externalDialog = document.getElementById("board-external-dialog");
      if (externalDialog && !externalDialog.hidden) {
        setBoardExternalOpen(false);
        return;
      }
      const createDialog = document.getElementById("boards-create-dialog");
      if (createDialog && !createDialog.hidden) {
        setBoardCreateOpen(false);
        return;
      }
      closeBoardAddPanel();
      closeBoardSharePanel();
      closeBoardPicker();
    }
  });

  const createToggle = document.getElementById("boards-create-toggle");
  const emptyCreate = document.getElementById("boards-empty-create");
  const createDialog = document.getElementById("boards-create-dialog");
  const createForm = document.getElementById("boards-create-form");
  const createInput = document.getElementById("boards-create-input");
  const createDate = document.getElementById("boards-create-date");
  const createDateBtn = document.getElementById("boards-create-date-btn");
  const createDateText = document.getElementById("boards-create-date-text");
  const createDesc = document.getElementById("boards-create-desc");
  const createError = document.getElementById("boards-create-error");
  const createCancel = document.getElementById("boards-create-cancel");
  const createClose = document.getElementById("boards-create-close");

  createDateBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openBoardDatePicker(createDateBtn, createDate?.value || "", (iso) => {
      if (createDate) createDate.value = iso;
      const label = formatBoardDate(iso);
      if (createDateText) createDateText.textContent = label || "Add date";
      createDateBtn.classList.toggle("is-empty", !label);
    });
  });

  const openCreateForm = () => {
    setBoardCreateOpen(true);
  };

  createToggle?.addEventListener("click", () => {
    const isOpen = createDialog && !createDialog.hidden;
    setBoardCreateOpen(!isOpen);
  });

  emptyCreate?.addEventListener("click", openCreateForm);
  if (isBoardsPage() && new URLSearchParams(location.search).get("create") === "1") {
    requestAnimationFrame(openCreateForm);
  }

  createCancel?.addEventListener("click", () => setBoardCreateOpen(false));
  createClose?.addEventListener("click", () => setBoardCreateOpen(false));
  createDialog?.addEventListener("click", (event) => {
    if (event.target === createDialog) setBoardCreateOpen(false);
  });

  createForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = createInput?.value.trim();
    if (!name) {
      if (createError) createError.textContent = "Enter a board name.";
      createInput?.focus();
      return;
    }
    createBoard(name, "", {
      date: createDate?.value || "",
      description: createDesc?.value || "",
    });
    setBoardCreateOpen(false);
  });

  const detailDesc = document.getElementById("board-detail-desc");
  const detailDate = document.getElementById("board-detail-date");
  const detailDateBtn = document.getElementById("board-detail-date-btn");
  const detailDateText = document.getElementById("board-detail-date-text");
  const detailDateWrap = document.getElementById("board-detail-date-wrap");

  detailDesc?.addEventListener("input", () => {
    sizeBoardDescInput(detailDesc);
    if (!state.board) return;
    updateBoardDetails(state.board, { description: detailDesc.value }, { rerender: false });
  });

  detailDesc?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      detailDesc.blur();
    }
  });

  detailDateBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openBoardDatePicker(detailDateBtn, detailDate?.value || "", (iso) => {
      if (detailDate) detailDate.value = iso;
      if (state.board) {
        updateBoardDetails(state.board, { date: iso }, { rerender: false });
      }
      const label = formatBoardDate(iso);
      if (detailDateText) detailDateText.textContent = label || "Add date";
      if (detailDateWrap) detailDateWrap.classList.toggle("is-empty", !label);
    });
  });

  document.getElementById("board-back")?.addEventListener("click", (event) => {
    event.preventDefault();
    closeBoardAddPanel();
    closeBoardSharePanel();
    closeBoardDatePicker();
    resetMoodboardState();
    state.board = "";
    render({ url: "push" });
  });

  const moodboardBtn = document.getElementById("board-moodboard-btn");
  const moodboardDialog = document.getElementById("board-moodboard-dialog");
  const moodboardCancelBtn = document.getElementById("board-moodboard-cancel");
  const moodboardGenerateBtn = document.getElementById("board-moodboard-generate");
  const moodboardShuffleBtn = document.getElementById("board-moodboard-shuffle");
  const moodboardEditBtn = document.getElementById("board-moodboard-edit");
  const moodboardXBtn = document.getElementById("board-moodboard-x");

  const startMoodboardSelect = () => {
    if (!state.board) return;
    const board = readBoards().find((item) => item.id === state.board);
    if (!board) return;
    moodboardPicks = {};
    moodboardMode = "select";
    renderBoards();
  };
  moodboardBtn?.addEventListener("click", startMoodboardSelect);

  moodboardCancelBtn?.addEventListener("click", () => {
    resetMoodboardState();
    renderBoards();
  });

  moodboardGenerateBtn?.addEventListener("click", () => {
    if (!state.board) return;
    const board = readBoards().find((item) => item.id === state.board);
    if (!board) return;
    const members = board.people
      .map((id) => PEOPLE.find((person) => person.id === id))
      .filter(Boolean);
    const roleGroups = boardRoleGroupsMap(members);
    const hasAnyPick = [...roleGroups.keys()].some((roleName) => moodboardPickList(roleName).length > 0);
    if (!hasAnyPick) {
      roleGroups.forEach((records, roleName) => {
        if (records[0]) moodboardPicks[roleName] = [records[0].id];
      });
    }
    moodboardSeed = 1;
    moodboardMode = "preview";
    renderBoards();
  });

  moodboardShuffleBtn?.addEventListener("click", () => {
    moodboardSeed += 1;
    renderBoards();
  });

  moodboardEditBtn?.addEventListener("click", () => {
    moodboardMode = "select";
    renderBoards();
  });

  const dismissMoodboardModal = () => {
    resetMoodboardState();
    renderBoards();
  };

  window.addEventListener("resize", placeMoodboardDialog);
  moodboardXBtn?.addEventListener("click", dismissMoodboardModal);
  moodboardDialog?.addEventListener("click", (event) => {
    if (event.target === moodboardDialog) dismissMoodboardModal();
  });

  const addCreativeBtn = document.getElementById("board-add-creative-btn");
  const addMenu = document.getElementById("board-add-menu");
  const addExternalBtn = document.getElementById("board-add-external");
  const emptyAddExternalBtn = document.getElementById("board-empty-add-external");
  const externalDialog = document.getElementById("board-external-dialog");
  const externalForm = document.getElementById("board-external-form");
  const externalMoreBtn = document.getElementById("board-external-more");
  const externalCancelBtn = document.getElementById("board-external-cancel");
  const externalCloseBtn = document.getElementById("board-external-close");
  const externalError = document.getElementById("board-external-error");

  addCreativeBtn?.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!addMenu) return;
    const next = addMenu.hidden;
    closeBoardSharePanel();
    addMenu.hidden = !next;
    addCreativeBtn.setAttribute("aria-expanded", String(next));
  });

  addExternalBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setBoardExternalOpen(true);
  });

  emptyAddExternalBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    setBoardExternalOpen(true);
  });

  externalMoreBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    const input = addExternalHandleRow();
    input?.focus();
  });

  externalCancelBtn?.addEventListener("click", () => setBoardExternalOpen(false));
  externalCloseBtn?.addEventListener("click", () => setBoardExternalOpen(false));
  externalDialog?.addEventListener("click", (event) => {
    if (event.target === externalDialog) setBoardExternalOpen(false);
  });

  externalForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputs = [...document.querySelectorAll('#board-external-rows input[name="external-instagram"]')];
    const handles = extractInstagramHandles(inputs.map((input) => input.value));
    if (!handles.length) {
      if (externalError) externalError.textContent = "Enter at least one Instagram link or @handle.";
      inputs[0]?.focus();
      return;
    }
    if (!state.board) {
      setBoardExternalOpen(false);
      return;
    }
    const boards = readBoards();
    const board = boards.find((item) => item.id === state.board);
    if (!board) {
      setBoardExternalOpen(false);
      return;
    }
    handles.forEach((handle) => {
      const person = ensureExternalPerson(handle);
      if (person && !board.people.includes(person.id)) {
        board.people.push(person.id);
      }
    });
    saveBoards(boards);
    syncStarButtons();
    renderHomeBoards();
    setBoardExternalOpen(false);
    renderBoards();
  });

  const shareBtn = document.getElementById("board-share-btn");
  const sharePanel = document.getElementById("board-share-panel");
  const shareCopyBtn = document.getElementById("board-share-copy");
  const shareCopyLabel = document.getElementById("board-share-copy-label");
  const shareTextLink = document.getElementById("board-share-text");
  const shareEmailLink = document.getElementById("board-share-email");

  shareBtn?.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!sharePanel) return;
    const next = sharePanel.hidden;
    sharePanel.hidden = !next;
    shareBtn.setAttribute("aria-expanded", String(next));
    if (next) {
      if (shareCopyLabel) shareCopyLabel.textContent = "Copy link";
      syncBoardShareLinks();
    }
  });

  shareCopyBtn?.addEventListener("click", async (event) => {
    event.stopPropagation();
    const board = readBoards().find((item) => item.id === state.board);
    const url = boardShareUrl(board);
    try {
      await navigator.clipboard.writeText(url);
    } catch {}
    if (shareCopyLabel) shareCopyLabel.textContent = "Copied link!";
    window.setTimeout(() => {
      closeBoardSharePanel();
      if (shareCopyLabel) shareCopyLabel.textContent = "Copy link";
    }, 900);
  });

  shareTextLink?.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const board = readBoards().find((item) => item.id === state.board);
    const url = boardShareUrl(board);
    try {
      await navigator.clipboard.writeText(url);
    } catch {}
    const label = document.getElementById("board-share-text-label");
    if (label) label.textContent = "Copied link";
    window.setTimeout(() => openSharePreview(board), 700);
  });

  shareEmailLink?.addEventListener("click", () => {
    syncBoardShareLinks();
    closeBoardSharePanel();
  });

  document.getElementById("share-preview-close")?.addEventListener("click", closeSharePreview);
  document.getElementById("share-preview-scrim")?.addEventListener("click", closeSharePreview);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.getElementById("share-preview") && !document.getElementById("share-preview").hidden) {
      closeSharePreview();
    }
  });

  document.getElementById("board-delete-btn")?.addEventListener("click", () => {
    if (state.board) requestDeleteBoard(state.board);
  });

  const deleteDialog = document.getElementById("board-delete-dialog");
  const deleteClose = document.getElementById("board-delete-close");
  const deleteCancel = document.getElementById("board-delete-cancel");
  const deleteConfirm = document.getElementById("board-delete-confirm");

  deleteClose?.addEventListener("click", closeDeleteBoardDialog);
  deleteCancel?.addEventListener("click", closeDeleteBoardDialog);
  deleteDialog?.addEventListener("click", (event) => {
    if (event.target === deleteDialog) closeDeleteBoardDialog();
  });
  deleteConfirm?.addEventListener("click", () => {
    const id = pendingDeleteBoardId;
    closeDeleteBoardDialog();
    if (id) deleteBoard(id);
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
}

document.addEventListener("click", (event) => {
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const anchor = event.target.closest("a");
  if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
  const href = anchor.getAttribute("href") || "";
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("sms:")) return;
  let url;
  try { url = new URL(anchor.href, location.href); } catch (error) { return; }
  if (url.origin !== location.origin) return;
  if (url.pathname === location.pathname && url.search === location.search) return;
  markSkeletonNav();
}, true);

loadAddedPeople();
loadExternalPeople();

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
  const mobile = window.matchMedia("(max-width: 800px)").matches;
  svg.replaceChildren();
  shots.replaceChildren();
  stage.classList.remove("is-clear");
  const token = String(Date.now());
  stage.dataset.heroToken = token;
  const alive = () => stage.isConnected && stage.dataset.heroToken === token;
  if (!initHeroMap.bound) {
    initHeroMap.bound = true;
    window.matchMedia("(max-width: 800px)").addEventListener("change", () => initHeroMap());
  }
  const ns = "http://www.w3.org/2000/svg";
  const board = mobile ? { w: 360, h: 418 } : { w: 780, h: 300 };
  stage.style.aspectRatio = mobile ? `${board.w} / ${board.h}` : "";
  svg.setAttribute("viewBox", `0 0 ${board.w} ${board.h}`);
  const pin = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>`;
  const origin = mobile ? [172, 124] : [348, 150];
  const steps = mobile
    ? [
        { name: "Patricia Rosingana", caption: "Photographer\n(Los Angeles)", src: "images/hero/DJRvgVUtFxW.jpg", href: "https://www.instagram.com/p/DJRvgVUtFxW/?img_index=1", x: 6, y: 4, w: 70, h: 88, inn: [74, 88], bend: 0 },
        { name: "petrosstudio", caption: "Creative Director\n(New York)", src: "images/hero/C7zebkCteQ5.jpg", href: "https://www.instagram.com/p/C7zebkCteQ5/", x: 196, y: 4, w: 68, h: 68, inn: [200, 68], bend: 0 },
        { name: "Patricia Rosingana", caption: "Stylist\n(Atlanta)", src: "images/hero/DQHn4eVjPN-.jpg", href: "https://www.instagram.com/p/DQHn4eVjPN-/?img_index=1", x: 252, y: 148, w: 62, h: 78, inn: [256, 156], bend: 0 },
        { name: "Vika", caption: "Cinematographer\n(London)", src: "posts/vika-vikasfotos/4.jpg", href: "https://www.instagram.com/p/DeCUYocEVmn/?img_index=1", x: 214, y: 286, w: 66, h: 86, inn: [222, 294], bend: 0 },
        { name: "Charlie Harris", caption: "Videographer\n(Finland)", src: "posts/charlie-harris-charliebarclayharris/1.jpg", href: "https://www.instagram.com/p/DexHNlXjB3P/?img_index=1", x: 108, y: 168, w: 56, h: 66, inn: [136, 172], bend: 0 },
        { name: "Randy", caption: "Designer\n(London)", src: "images/hero/DSafSA0kbCB-2.jpg", href: "https://www.instagram.com/p/DSafSA0kbCB/?img_index=2", x: 6, y: 318, w: 86, h: 54, inn: [88, 326], bend: 88, focus: "center top" },
        { name: "petrosstudio", caption: "Model\n(Paris)", src: "images/hero/DW3SuiliCHg.jpg", href: "https://www.instagram.com/p/DW3SuiliCHg/", x: 6, y: 158, w: 68, h: 88, inn: [70, 166], bend: 0 },
      ]
    : [
        { name: "Patricia Rosingana", caption: "Photographer\n(Los Angeles)", src: "images/hero/DJRvgVUtFxW.jpg", href: "https://www.instagram.com/p/DJRvgVUtFxW/?img_index=1", x: 12, y: -40, w: 86, h: 108, inn: [106, 18], bend: -40 },
        { name: "petrosstudio", caption: "Creative Director\n(New York)", src: "images/hero/C7zebkCteQ5.jpg", href: "https://www.instagram.com/p/C7zebkCteQ5/", x: 254, y: -72, w: 84, h: 84, inn: [300, 22], bend: -36 },
        { name: "Patricia Rosingana", caption: "Stylist\n(Atlanta)", src: "images/hero/DQHn4eVjPN-.jpg", href: "https://www.instagram.com/p/DQHn4eVjPN-/?img_index=1", x: 456, y: 2, w: 80, h: 100, inn: [448, 52], bend: -36 },
        { name: "Vika", caption: "Cinematographer\n(London)", src: "posts/vika-vikasfotos/4.jpg", href: "https://www.instagram.com/p/DeCUYocEVmn/?img_index=1", x: 684, y: 48, w: 84, h: 112, inn: [676, 104], bend: 46 },
        { name: "Charlie Harris", caption: "Videographer (Finland)", src: "posts/charlie-harris-charliebarclayharris/1.jpg", href: "https://www.instagram.com/p/DexHNlXjB3P/?img_index=1", x: 548, y: 188, w: 62, h: 74, inn: [540, 225], bend: -40 },
        { name: "Randy", caption: "Designer (London)", src: "images/hero/DSafSA0kbCB-2.jpg", href: "https://www.instagram.com/p/DSafSA0kbCB/?img_index=2", x: 300, y: 214, w: 102, h: 68, inn: [351, 206], bend: 4, focus: "center top" },
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

  // The yellow line aims at the photo but ends just under its caption.
  const lineEnd = (frame, index) => {
    if (mobile || index !== 1) return frame.step.inn;
    const cap = frame.link.querySelector(".hero_cap");
    const stageRect = stage.getBoundingClientRect();
    const capRect = cap ? cap.getBoundingClientRect() : null;
    if (!capRect || !stageRect.height || !capRect.height) return frame.step.inn;
    const y = ((capRect.bottom - stageRect.top + 14) / stageRect.height) * board.h;
    const [x1, y1] = origin;
    const [x2, y2] = frame.step.inn;
    if (y >= y1 || y <= y2) return frame.step.inn;
    const t = (y - y1) / (y2 - y1);
    return [x1 + (x2 - x1) * t, y];
  };

  const showFrame = (frame, end) => {
    addDot(end);
    frame.link.classList.add("is-in");
  };

  if (reduced) {
    addDot(origin, 3.4);
    frames.forEach((frame, index) => {
      const end = lineEnd(frame, index);
      addPath(origin, end, frame.step.bend, index);
      showFrame(frame, end);
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
    while (alive()) {
      addDot(origin, 3.4);
      await sleep(280);
      for (let index = 0; index < frames.length; index += 1) {
        if (!alive()) return;
        const frame = frames[index];
        const end = lineEnd(frame, index);
        const path = addPath(origin, end, frame.step.bend, index);
        drawn.push(path);
        await drawLine(path);
        if (!alive()) return;
        showFrame(frame, end);
        await sleep(320);
      }
      await sleep(2200);
      if (!alive()) return;
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
  if (!hero) return;
  const next = [document.getElementById("projects"), document.getElementById("home-boards"), document.getElementById("results")]
    .find((node) => node && !node.hidden);
  const boundaryTop = () => {
    if (next && !next.hidden && next.getClientRects().length) return next.getBoundingClientRect().top;
    return hero.getBoundingClientRect().bottom;
  };
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
    const projectsTop = boundaryTop() + window.scrollY;
    const end = Math.max(projectsTop - window.innerHeight * 0.55, 140);
    return 1 - Math.min(1, Math.max(0, window.scrollY / end));
  };

  const inHero = (x, y) => {
    if (document.body.dataset.view === "profile") return false;
    if (y >= boundaryTop() - 12) return false;
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

const LAYOUT_KEY = "10k-layout";

function layoutUrl(href, frame) {
  const url = new URL(href, location.href);
  if (frame) url.searchParams.set("frame", "1");
  else url.searchParams.delete("frame");
  return url.toString();
}

function initLayoutToggle() {
  const root = document.documentElement;
  if (root.classList.contains("is-frame")) return;
  const desktopMq = window.matchMedia("(min-width: 801px)");
  if (!desktopMq.matches && !root.classList.contains("is-device-preview")) return;

  const toggle = document.createElement("div");
  toggle.className = "device-toggle";
  toggle.setAttribute("role", "group");
  toggle.setAttribute("aria-label", "Layout");
  toggle.innerHTML = `
    <button type="button" data-layout="desktop" aria-pressed="true" aria-label="Desktop">
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 20h8M12 16v4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
    </button>
    <button type="button" data-layout="mobile" aria-pressed="false" aria-label="Mobile">
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M11 18.5h2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
    </button>
  `;
  const stage = document.createElement("div");
  stage.className = "device-stage";
  const phone = document.createElement("div");
  phone.className = "device-phone";
  phone.innerHTML = `
    <span class="device-side device-side-action" aria-hidden="true"></span>
    <span class="device-side device-side-volup" aria-hidden="true"></span>
    <span class="device-side device-side-voldown" aria-hidden="true"></span>
    <span class="device-side device-side-power" aria-hidden="true"></span>
    <div class="device-chassis">
      <div class="device-screen"></div>
      <div class="device-island" aria-hidden="true"></div>
      <div class="device-home" aria-hidden="true"></div>
    </div>
  `;
  const iframe = document.createElement("iframe");
  iframe.title = "iPhone 16";
  phone.querySelector(".device-screen").appendChild(iframe);
  stage.appendChild(phone);
  document.body.append(stage, toggle);

  function paint(mode) {
    const mobile = mode === "mobile";
    toggle.querySelector('[data-layout="desktop"]').setAttribute("aria-pressed", String(!mobile));
    toggle.querySelector('[data-layout="mobile"]').setAttribute("aria-pressed", String(mobile));
    root.classList.toggle("is-device-preview", mobile);
    if (mobile && iframe.dataset.loaded !== "1") {
      iframe.src = layoutUrl(location.href, true);
      iframe.dataset.loaded = "1";
    }
  }

  toggle.addEventListener("click", (event) => {
    const button = event.target.closest("[data-layout]");
    if (!button) return;
    event.stopPropagation();
    const mode = button.dataset.layout;
    try { sessionStorage.setItem(LAYOUT_KEY, mode); } catch {}
    if (mode === "desktop") {
      let next = location.href;
      try {
        const framed = iframe.contentWindow.location.href;
        if (framed && framed !== "about:blank") next = framed;
      } catch {}
      const dest = layoutUrl(next, false);
      if (dest === location.href) {
        paint("desktop");
        return;
      }
      location.href = dest;
      return;
    }
    paint("mobile");
  });

  desktopMq.addEventListener("change", () => {
    if (!desktopMq.matches) {
      root.classList.remove("is-device-preview");
      return;
    }
    let saved = "";
    try { saved = sessionStorage.getItem(LAYOUT_KEY) || ""; } catch {}
    if (saved === "mobile") paint("mobile");
  });

  let saved = "";
  try { saved = sessionStorage.getItem(LAYOUT_KEY) || ""; } catch {}
  if (saved === "mobile" || root.classList.contains("is-device-preview")) paint("mobile");
}

initLayoutToggle();

