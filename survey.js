const html = htm.bind(React.createElement);
const { useEffect, useRef, useState } = React;

function roleChoices() {
  if (typeof filterMenu === "function") return filterMenu();
  return ROLES.map((role) => ({ role: role.name, label: role.name, all: `All ${role.name}`, genres: [] }));
}

function roleText(value, empty) {
  if (!value.role) return empty;
  const copy = typeof FILTER_COPY !== "undefined" ? FILTER_COPY[value.role] : null;
  if (!value.genres.length) return copy ? copy[0] : value.role;
  if (value.genres.length === 1) return `${value.genres[0]} ${value.role.toLowerCase()}`;
  return `${value.genres[0]} +${value.genres.length - 1}`;
}

function cityPlace(name) {
  const city = CITIES.find((item) => item.name === name);
  return city ? city.place || city.name : "Select a city";
}

let fieldKey = 1;
function nextKey() {
  fieldKey += 1;
  return fieldKey;
}

function Check() {
  return html`<span class="filter-check" aria-hidden="true"><svg viewBox="0 0 16 16" width="12" height="12"><path d="M3.2 8.2 6.4 11.4 12.8 4.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg></span>`;
}

function PhoneShell({ children, label }) {
  return html`<section class="phone-stage">
    <div class="phone" aria-label=${label}>
      <div class="phone-screen">
        <div class="phone-island" aria-hidden="true"></div>
        <div class="phone-status">
          <span>9:41</span>
          <span class="phone-status_icons" aria-hidden="true">
            <svg width="17" height="12" viewBox="0 0 17 12"><rect x="0" y="7" width="3" height="5" rx="0.6" fill="currentColor"/><rect x="4.5" y="5" width="3" height="7" rx="0.6" fill="currentColor"/><rect x="9" y="2.5" width="3" height="9.5" rx="0.6" fill="currentColor"/><rect x="13.5" y="0" width="3" height="12" rx="0.6" fill="currentColor"/></svg>
            <svg width="16" height="12" viewBox="0 0 16 12"><path d="M8 2.2c2.2 0 4.2.8 5.8 2.2l1.2-1.4A9.6 9.6 0 0 0 8 .2 9.6 9.6 0 0 0 1 3l1.2 1.4A8.2 8.2 0 0 1 8 2.2zm0 3.2c1.3 0 2.5.5 3.4 1.3l1.2-1.4A6.6 6.6 0 0 0 8 3.8a6.6 6.6 0 0 0-4.6 1.5l1.2 1.4A4.8 4.8 0 0 1 8 5.4zM8 9.2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="currentColor"/></svg>
            <svg width="25" height="12" viewBox="0 0 25 12"><rect x="0.6" y="0.6" width="21" height="10.8" rx="2.4" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="2" y="2" width="16" height="8" rx="1.2" fill="currentColor"/><path d="M23 4.2v3.6c.8-.3 1.2-.9 1.2-1.8s-.4-1.5-1.2-1.8z" fill="currentColor"/></svg>
          </span>
        </div>
        ${children}
      </div>
    </div>
  </section>`;
}

function bindDragScroll(el) {
  let origin = 0;
  let start = 0;
  let active = false;
  let dragged = false;
  const move = (event) => {
    if (!active) return;
    const delta = event.clientY - origin;
    if (!dragged && Math.abs(delta) < 5) return;
    dragged = true;
    el.classList.add("is-dragging");
    el.scrollTop = start - delta;
  };
  const up = () => {
    if (!active) return;
    active = false;
    el.classList.remove("is-dragging");
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
    window.removeEventListener("pointercancel", up);
  };
  const down = (event) => {
    if (event.button !== 0) return;
    active = true;
    dragged = false;
    origin = event.clientY;
    start = el.scrollTop;
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  };
  const click = (event) => {
    if (!dragged) return;
    event.preventDefault();
    event.stopPropagation();
    dragged = false;
  };
  el.addEventListener("pointerdown", down);
  el.addEventListener("click", click, true);
  return () => {
    up();
    el.removeEventListener("pointerdown", down);
    el.removeEventListener("click", click, true);
  };
}

function PhoneScroll({ className, children, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    return bindDragScroll(el);
  }, []);
  return html`<div class=${className} ref=${ref} ...${rest}>${children}</div>`;
}

function Messages() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [sent, setSent] = useState(reduce);
  useEffect(() => {
    if (reduce) return undefined;
    const timer = window.setTimeout(() => setSent(true), 2800);
    return () => window.clearTimeout(timer);
  }, [reduce]);
  return html`<${PhoneShell} label="iPhone showing a message from 10K">
    <header class="imessage-head">
      <span class="imessage-back" aria-hidden="true">
        <svg width="12" height="20" viewBox="0 0 12 20"><path d="M10 2 2 10l8 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <div class="imessage-who">
        <span class="imessage-avatar">10K</span>
        <strong>10K</strong>
      </div>
      <span></span>
    </header>
    <${PhoneScroll} className="imessage-thread" aria-live="polite">
      <p class="imessage-time">Today 9:41 AM</p>
      ${sent
        ? html`<p class="imessage-bubble is-in">
            Hey — 10K is putting a roster of freelancers together. Add yourself so producers can find you for the next shoot.<br />
            <a class="imessage-link" href="#join">10k.projects/join</a>
          </p>`
        : html`<p class="imessage-typing" aria-label="10K is typing"><span></span><span></span><span></span></p>`}
    </${PhoneScroll}>
    <div class="imessage-compose" aria-hidden="true">
      <span>
        <svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 8v8M8 12h8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
      </span>
      <div class="imessage-field">iMessage</div>
    </div>
  </${PhoneShell}>`;
}

function CityMenu({ labelId, value, blocked, open, onToggle, onPick, combo, onRemove, empty }) {
  const choices = CITIES.filter((city) => city.name === value || !blocked.includes(city.name));
  return html`<div class=${`add-city${combo ? " add-combo" : ""}${open ? " is-open" : ""}`}>
    <div class="add-city_control">
      <button class=${`add-role_toggle add-city_toggle${value ? " is-set" : ""}`} type="button" aria-expanded=${String(open)} aria-haspopup="listbox" aria-labelledby=${labelId || undefined} onClick=${(event) => { event.stopPropagation(); onToggle(); }}>
        <span class="add-city_label">${value ? cityPlace(value) : (empty || "Select a city")}</span>
        <svg class=${combo ? "add-field_chevron" : ""} viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 6.5 8 10.5 12 6.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
      ${combo ? html`<button class="add-field_remove" type="button" aria-label="Remove city" onClick=${(event) => { event.stopPropagation(); onRemove(); }}>×</button>` : null}
    </div>
    <div class="add-city_panel" hidden=${!open} role="listbox">
      ${choices.map((city) => html`<button class=${`add-city_option${city.name === value ? " is-on" : ""}`} type="button" role="option" aria-selected=${String(city.name === value)} onClick=${(event) => { event.stopPropagation(); onPick(city.name); }}>${city.place || city.name}</button>`)}
    </div>
  </div>`;
}

function RoleMenu({ empty, value, blocked, open, onToggle, onChange, removable, onRemove }) {
  const [hover, setHover] = useState("");
  const options = roleChoices().filter((item) => item.role === value.role || !blocked.includes(item.role));
  const hovered = options.find((item) => item.role === hover && item.genres.length);
  const choose = (role, genres) => {
    onChange({ role, genres });
    onToggle(false);
    setHover("");
  };
  return html`<div class="add-role">
    <div class="add-role_control">
      <button class=${`add-role_toggle${value.role ? " is-set" : ""}`} type="button" aria-expanded=${String(open)} onClick=${(event) => { event.stopPropagation(); onToggle(); }}>
        <span>${roleText(value, empty)}</span>
        <svg class=${removable ? "add-field_chevron" : ""} viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 6.5 8 10.5 12 6.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
      ${removable ? html`<button class="add-field_remove" type="button" aria-label="Remove role" onClick=${(event) => { event.stopPropagation(); onRemove(); }}>×</button>` : null}
    </div>
    <div class="filters-panel add-role_panel" hidden=${!open}>
      <div class="filters-menu" role="menu">
        ${options.map((item) => html`<button class="filter-row" type="button" role="menuitemcheckbox" aria-checked=${String(value.role === item.role && !value.genres.length)} data-role=${item.role} onMouseEnter=${() => setHover(item.genres.length ? item.role : "")} onClick=${(event) => {
          event.stopPropagation();
          if (item.genres.length) setHover(item.role);
          else choose(item.role, []);
        }}>
          ${item.genres.length ? null : html`<${Check} />`}
          <span class="filter-row_label">${item.label}</span>
          ${item.genres.length ? html`<span class="filter-row_chevron" aria-hidden="true"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M6 3.5 10.5 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>` : null}
        </button>`)}
      </div>
      <div class="filters-sub" hidden=${!hovered} role="menu" aria-label=${hovered ? hovered.label : ""}>
        ${hovered ? [html`<button class="filter-sub_row" type="button" role="menuitemcheckbox" aria-checked=${String(value.role === hovered.role && !value.genres.length)} onClick=${(event) => { event.stopPropagation(); choose(hovered.role, []); }}><${Check} /><span>${hovered.all}</span></button>`, ...hovered.genres.map((genre) => html`<button class="filter-sub_row" type="button" role="menuitemcheckbox" aria-checked=${String(value.role === hovered.role && value.genres.includes(genre))} onClick=${(event) => {
          event.stopPropagation();
          const current = value.role === hovered.role ? value.genres : [];
          const genres = current.includes(genre) ? current.filter((item) => item !== genre) : [...current, genre];
          if (!genres.length) onChange({ role: "", genres: [] });
          else onChange({ role: hovered.role, genres });
        }}><${Check} /><span>${genre}</span></button>`)] : null}
      </div>
    </div>
  </div>`;
}

function JoinForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [also, setAlso] = useState([]);
  const [main, setMain] = useState({ role: "", genres: [] });
  const [secondary, setSecondary] = useState([]);
  const [instagram, setInstagram] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [preferred, setPreferred] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [menu, setMenu] = useState("");

  useEffect(() => {
    const close = (event) => {
      if (event.target.closest(".add-role, .add-city, .add-secondary_field")) return;
      setMenu("");
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const toggle = (id) => setMenu((current) => (current === id ? "" : id));

  const save = (event) => {
    event.preventDefault();
    const handle = cleanHandle(instagram);
    const mail = email.trim();
    const number = phone.trim();
    const site = cleanUrl(portfolio);
    const home = city;
    const travelCities = [...new Set(also.map((item) => item.city).filter((item) => item && item !== home && CITIES.some((city) => city.name === item)))];
    const extraRoles = [];
    const extraGenres = [];
    secondary.forEach((item) => {
      if (item.role && item.role !== main.role && !extraRoles.includes(item.role)) extraRoles.push(item.role);
      item.genres.forEach((genre) => {
        if (!extraGenres.includes(genre)) extraGenres.push(genre);
      });
    });
    const contact = { instagram: handle, email: mail, phone: number };
    if (!name.trim()) {
      setError("Add a name.");
      return;
    }
    if (!home) {
      setError("Choose a city.");
      return;
    }
    if (!main.role) {
      setError("Choose a main role.");
      return;
    }
    if (mail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      setError("Enter a valid email.");
      return;
    }
    if (number && number.replace(/\D/g, "").length < 7) {
      setError("Enter a phone number.");
      return;
    }
    if (!handle && !mail && !number && !site) {
      setError("Add Instagram, email, phone, or a portfolio.");
      return;
    }
    if (preferred && !contact[preferred]) {
      setError("Preferred contact needs a value.");
      return;
    }
    const record = person(rosterId(name.trim()), name.trim(), home, travelCities, [main.role], [...new Set([...main.genres, ...extraGenres])], false, {
      instagram: handle,
      email: mail,
      phone: number,
      preferred: preferred || ["instagram", "email", "phone"].find((key) => contact[key]) || "",
      secondary: extraRoles,
      referredBy: "",
      rate: "",
      compensation: "",
      portfolio: site,
      bio: "",
      past: [],
      avatar: "",
      images: [],
    });
    PEOPLE.unshift(record);
    rememberPerson(record);
    setDone(true);
    setError("");
  };

  if (done) {
    return html`<${PhoneShell} label="iPhone showing the 10K roster form">
      <${PhoneScroll} className="phone-survey">
        <div class="add-dialog_panel">
          <h2>You're in.</h2>
          <p class="join-done">Producers can find you with the creatives now. <a href="results.html">See the roster</a></p>
        </div>
      </${PhoneScroll}>
    </${PhoneShell}>`;
  }

  const takenRoles = [main.role, ...secondary.map((item) => item.role)].filter(Boolean);

  return html`<${PhoneShell} label="iPhone showing the 10K roster form">
    <${PhoneScroll} className="phone-survey">
    <form id="join-form" class="add-dialog_panel" onSubmit=${save} novalidate>
      <h2>Be in the loop.</h2>
      <p class="add-dialog_lede">Add yourself so producers can find you for the next shoot.</p>
      <label class="add-field">
        <span>Name</span>
        <input name="name" type="text" autocomplete="name" value=${name} onInput=${(event) => setName(event.target.value)} />
      </label>
      <div class="add-field">
        <span id="join-city-caption">City</span>
        <div class="add-roles">
          <${CityMenu} labelId="join-city-caption" value=${city} blocked=${[]} open=${menu === "city"} onToggle=${() => toggle("city")} onPick=${(next) => { setCity(next); setAlso((rows) => rows.map((row) => (row.city === next ? { ...row, city: "" } : row))); setMenu(""); }} />
          <div class="add-secondary">
            ${also.map((row) => html`<div class="add-travel_row" key=${row.id}>
              <span class="add-travel_label">Travels to</span>
              <${CityMenu} combo=${true} empty="Add a city" value=${row.city} blocked=${[city, ...also.filter((item) => item.id !== row.id).map((item) => item.city)].filter(Boolean)} open=${menu === `also-${row.id}`} onToggle=${() => toggle(`also-${row.id}`)} onPick=${(next) => { setAlso((rows) => rows.map((item) => (item.id === row.id ? { ...item, city: next } : item))); setMenu(""); }} onRemove=${() => { setAlso((rows) => rows.filter((item) => item.id !== row.id)); setMenu(""); }} />
            </div>`)}
          </div>
          <button class="add-more" type="button" onClick=${(event) => {
            event.stopPropagation();
            const id = nextKey();
            setAlso((rows) => [...rows, { id, city: "" }]);
            setMenu(`also-${id}`);
          }}>
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M8 3.2v9.6M3.2 8h9.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" /></svg>
            <span>Willing to travel</span>
          </button>
        </div>
      </div>
      <div class="add-field">
        <span>Main role</span>
        <div class="add-roles">
          <${RoleMenu} empty="Add a main role" value=${main} blocked=${secondary.map((item) => item.role).filter(Boolean)} open=${menu === "main"} onToggle=${(force) => { if (force === false) setMenu(""); else toggle("main"); }} onChange=${setMain} />
          <div class="add-secondary">
            ${secondary.map((row) => html`<div class="add-secondary_field" key=${row.id}>
              <${RoleMenu} removable=${true} empty="Add a secondary role" value=${row} blocked=${takenRoles.filter((role) => role !== row.role)} open=${menu === `role-${row.id}`} onToggle=${(force) => { if (force === false) setMenu(""); else toggle(`role-${row.id}`); }} onChange=${(next) => setSecondary((rows) => rows.map((item) => (item.id === row.id ? { ...item, ...next } : item)))} onRemove=${() => { setSecondary((rows) => rows.filter((item) => item.id !== row.id)); setMenu(""); }} />
            </div>`)}
          </div>
          <button class="add-more" type="button" onClick=${() => setSecondary((rows) => [...rows, { id: nextKey(), role: "", genres: [] }])}>
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M8 3.2v9.6M3.2 8h9.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" /></svg>
            <span>Add secondary role</span>
          </button>
        </div>
      </div>
      <h3 class="add-section">Contact</h3>
      <div class="add-contact">
        <label class="add-field">
          <span>Instagram</span>
          <span class="add-input">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="16.6" cy="7.4" r="0.9" fill="currentColor"/></svg>
            <input type="text" autocomplete="off" placeholder="username" value=${instagram} onInput=${(event) => setInstagram(event.target.value)} />
          </span>
        </label>
        <label class="add-field">
          <span>Email</span>
          <span class="add-input">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M5 7.5 12 12.5 19 7.5" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>
            <input type="email" autocomplete="email" placeholder="name@email.com" value=${email} onInput=${(event) => setEmail(event.target.value)} />
          </span>
        </label>
        <label class="add-field">
          <span>Phone</span>
          <span class="add-input">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M8 5.5h2.2l1 2.4-1.4 1.1a9 9 0 0 0 4.2 4.2l1.1-1.4 2.4 1V15a1.4 1.4 0 0 1-1.5 1.4A11.4 11.4 0 0 1 6.6 7 1.4 1.4 0 0 1 8 5.5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
            <input type="tel" autocomplete="tel" placeholder="(000) 000-0000" value=${phone} onInput=${(event) => setPhone(event.target.value)} />
          </span>
        </label>
        <label class="add-field">
          <span>Portfolio</span>
          <span class="add-input">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="12" cy="12" r="7.4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M4.6 12h14.8M12 4.6c2 2.2 3 4.7 3 7.4s-1 5.2-3 7.4c-2-2.2-3-4.7-3-7.4s1-5.2 3-7.4z" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>
            <input type="text" inputMode="url" autocomplete="url" placeholder="https://" value=${portfolio} onInput=${(event) => setPortfolio(event.target.value)} />
          </span>
        </label>
      </div>
      <fieldset class="add-field">
        <legend>Preferred contact</legend>
        <div class="add-checks">
          ${[
            ["instagram", "Instagram", html`<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="16.6" cy="7.4" r="0.9" fill="currentColor"/></svg>`],
            ["email", "Email", html`<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M5 7.5 12 12.5 19 7.5" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>`],
            ["phone", "Phone", html`<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M8 5.5h2.2l1 2.4-1.4 1.1a9 9 0 0 0 4.2 4.2l1.1-1.4 2.4 1V15a1.4 1.4 0 0 1-1.5 1.4A11.4 11.4 0 0 1 6.6 7 1.4 1.4 0 0 1 8 5.5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`],
          ].map(([value, label, icon]) => html`<label class="add-check" key=${value}>
            <input type="radio" name="preferred" value=${value} checked=${preferred === value} onChange=${() => setPreferred(value)} />
            ${icon}
            <span>${label}</span>
          </label>`)}
        </div>
      </fieldset>
      <p class="add-dialog_error" role="alert">${error}</p>
      <div class="add-dialog_actions">
        <button class="add-cancel" type="button" onClick=${() => { location.hash = ""; }}>Cancel</button>
        <button class="add-submit" type="submit">Add myself</button>
      </div>
    </form>
    </${PhoneScroll}>
  </${PhoneShell}>`;
}

function SurveyApp() {
  const [view, setView] = useState(() => (location.hash === "#join" ? "join" : "phone"));
  useEffect(() => {
    const sync = () => setView(location.hash === "#join" ? "join" : "phone");
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  useEffect(() => {
    document.title = view === "join" ? "Add yourself · 10K Creatives" : "User survey · 10K Creatives";
  }, [view]);
  return view === "join" ? html`<${JoinForm} />` : html`<${Messages} />`;
}

ReactDOM.createRoot(document.getElementById("survey-app")).render(html`<${SurveyApp} />`);
