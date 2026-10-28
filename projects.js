const PROJECTS = [
  {
    id: "pay-gotti-dnd",
    title: "Pay Gotti — DnD ft. Luhh Dyl",
    summary: "Official music video. The YouTube description credits the artists and does not list a production crew.",
    date: "October 23, 2026",
    place: "",
    href: "https://www.youtube.com/watch?v=Bf8pXBD8CPg",
    images: ["images/projects/Bf8pXBD8CPg.jpg"],
    creatives: [
      { name: "Pay Gotti", role: "Artist" },
      { name: "Luhh Dyl", role: "Featured artist" },
    ],
  },
  {
    id: "trim-get-hit",
    title: "Trim — Get Hit",
    summary: "Official music video. The YouTube description credits Trim and does not list a production crew.",
    date: "August 27, 2026",
    place: "",
    href: "https://www.youtube.com/watch?v=Ca77yvpNdfA",
    images: ["images/projects/Ca77yvpNdfA.jpg"],
    creatives: [{ name: "Trim", role: "Artist" }],
  },
  {
    id: "trim-nobody-remix",
    title: "Trim — Nobody (Remix) feat. G Herbo",
    summary: "Official music video. The release credits Trim, Monaleo, and G Herbo. No production crew is listed.",
    date: "July 29, 2026",
    place: "",
    href: "https://www.youtube.com/watch?v=Nv_xXbj0h-w",
    images: ["images/projects/Nv_xXbj0h-w.jpg"],
    creatives: [
      { name: "Trim", role: "Artist" },
      { name: "Monaleo", role: "Featured artist" },
      { name: "G Herbo", role: "Featured artist" },
    ],
  },
  {
    id: "strawbry-right-thru-u",
    title: "STRAWBRY — Right Thru U",
    summary: "Visualizer. The YouTube description credits STRAWBRY and does not list a production crew.",
    date: "September 23, 2026",
    place: "",
    href: "https://www.youtube.com/watch?v=9WVk3pdC-7s",
    images: ["images/projects/9WVk3pdC-7s.jpg"],
    creatives: [{ name: "STRAWBRY", role: "Artist" }],
  },
  {
    id: "claire-rosinkranz-rocket",
    title: "Claire Rosinkranz — Rocket",
    summary: "Official visualizer. The YouTube description credits Claire Rosinkranz and does not list a production crew.",
    date: "July 20, 2026",
    place: "",
    href: "https://www.youtube.com/watch?v=TRdYOOMuGtY",
    images: ["images/projects/TRdYOOMuGtY.jpg"],
    creatives: [{ name: "Claire Rosinkranz", role: "Artist" }],
  },
  {
    id: "claire-rosinkranz-water-the-flowers",
    title: "Claire Rosinkranz — Water The Flowers",
    summary: "Official visualizer. The YouTube description credits Claire Rosinkranz and does not list a production crew.",
    date: "June 25, 2026",
    place: "",
    href: "https://www.youtube.com/watch?v=8n7jyCUSrF8",
    images: ["images/projects/8n7jyCUSrF8.jpg"],
    creatives: [{ name: "Claire Rosinkranz", role: "Artist" }],
  },
  {
    id: "gigi-moss-criminal",
    title: "Gigi Moss — Criminal",
    summary: "Lyric video. Credits are taken from the YouTube description.",
    date: "August 20, 2026",
    place: "",
    href: "https://www.youtube.com/watch?v=J0o9PkcXmcs",
    images: ["images/projects/J0o9PkcXmcs.jpg"],
    creatives: [
      { name: "Gigi Moss", role: "Writer" },
      { name: "Solly", role: "Writer" },
      { name: "Jonah Shy", role: "Producer" },
      { name: "Nick Gale", role: "Producer" },
      { name: "Pedro Calloni", role: "Mixer" },
    ],
  },
  {
    id: "girlfriend-wife-slow-dancing",
    title: "Girlfriend, Wife — Slow Dancing",
    summary: "Visualizer. The YouTube description credits Girlfriend, Wife and does not list a production crew.",
    date: "October 2, 2026",
    place: "",
    href: "https://www.youtube.com/watch?v=W7Ey1JZpEoc",
    images: ["images/projects/W7Ey1JZpEoc.jpg"],
    creatives: [{ name: "Girlfriend, Wife", role: "Artist" }],
  },
];

function escapeProjectText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function contactIcon(label, href, path) {
  const icon = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">${path}</svg>`;
  if (href) {
    return `<a class="roster-icon" href="${escapeProjectText(href)}" target="_blank" rel="noreferrer" aria-label="${escapeProjectText(label)}">${icon}</a>`;
  }
  return `<span class="roster-icon is-empty" aria-label="${escapeProjectText(label)}">${icon}</span>`;
}

function initProjects({ people, openProfile }) {
  const grid = document.getElementById("project-grid");
  if (!grid || grid.dataset.ready) return;
  grid.dataset.ready = "1";

  let active = null;
  let slide = 0;

  const modal = document.createElement("div");
  modal.className = "project-modal";
  modal.id = "project-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-title">
      <div class="project-split">
        <div class="project-gallery" id="project-gallery"></div>
        <div class="project-body">
          <button class="project-close" type="button" aria-label="Close">×</button>
          <p class="project-kicker" id="project-kicker"></p>
          <h2 id="project-title"></h2>
          <p class="project-summary" id="project-summary"></p>
          <h3>Creatives</h3>
          <div class="creative-list" id="project-creatives"></div>
        </div>
      </div>
    </div>
  `;
  document.body.append(modal);

  const gallery = modal.querySelector("#project-gallery");
  const title = modal.querySelector("#project-title");
  const summary = modal.querySelector("#project-summary");
  const kicker = modal.querySelector("#project-kicker");
  const creatives = modal.querySelector("#project-creatives");

  function initials(name) {
    const parts = String(name || "").split(/\s+/).filter(Boolean);
    if (!parts.length) return "";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }

  function paintGallery() {
    const images = active.images;
    const many = images.length > 1;
    gallery.innerHTML = `
      <div class="project-stage">
        <div class="project-track">
          ${images
            .map(
              (src, index) =>
                `<img src="${escapeProjectText(src)}" alt="${escapeProjectText(active.title)}, photo ${index + 1} of ${images.length}" draggable="false" />`
            )
            .join("")}
        </div>
        ${
          many
            ? `<button class="slide-nav slide-prev" type="button" aria-label="Previous photo"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M14.5 6.5 9 12l5.5 5.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
               <button class="slide-nav slide-next" type="button" aria-label="Next photo"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M9.5 6.5 15 12l-5.5 5.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
               <div class="slide-dots">${images
                 .map(
                   (_, index) =>
                     `<button class="slide-dot" type="button" aria-label="Photo ${index + 1} of ${images.length}"></button>`
                 )
                 .join("")}</div>`
            : ""
        }
      </div>
    `;
    gallery.querySelector(".slide-prev")?.addEventListener("click", () => step(-1));
    gallery.querySelector(".slide-next")?.addEventListener("click", () => step(1));
    gallery.querySelectorAll(".slide-dot").forEach((dot, index) => {
      dot.addEventListener("click", () => {
        slide = index;
        syncSlide();
      });
    });
    bindSwipe();
    syncSlide();
  }

  function syncSlide() {
    const track = gallery.querySelector(".project-track");
    const images = active?.images || [];
    if (!track) return;
    const fromDrag = track.style.transition === "none";
    track.style.transition = "";
    const place = () => {
      track.style.transform = `translateX(${-slide * 100}%)`;
    };
    if (fromDrag) requestAnimationFrame(place);
    else place();
    const prev = gallery.querySelector(".slide-prev");
    const next = gallery.querySelector(".slide-next");
    if (prev) prev.hidden = slide <= 0;
    if (next) next.hidden = slide >= images.length - 1;
    gallery.querySelectorAll(".slide-dot").forEach((dot, index) => {
      const on = index === slide;
      dot.classList.toggle("is-on", on);
      if (on) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }

  function bindSwipe() {
    const stage = gallery.querySelector(".project-stage");
    const track = gallery.querySelector(".project-track");
    if (!stage || !track) return;
    let pointer = null;
    stage.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 || event.target.closest("button")) return;
      pointer = { id: event.pointerId, x: event.clientX };
      stage.setPointerCapture(event.pointerId);
    });
    stage.addEventListener("pointermove", (event) => {
      if (!pointer || pointer.id !== event.pointerId) return;
      let dx = event.clientX - pointer.x;
      const count = active.images.length;
      if ((slide <= 0 && dx > 0) || (slide >= count - 1 && dx < 0)) dx *= 0.35;
      track.style.transition = "none";
      track.style.transform = `translateX(calc(${-slide * 100}% + ${dx}px))`;
      pointer.dx = dx;
    });
    const finish = (event) => {
      if (!pointer || pointer.id !== event.pointerId) return;
      const dx = pointer.dx || 0;
      pointer = null;
      if (dx <= -48) step(1);
      else if (dx >= 48) step(-1);
      else syncSlide();
    };
    stage.addEventListener("pointerup", finish);
    stage.addEventListener("pointercancel", finish);
  }

  function open(project) {
    active = project;
    slide = 0;
    title.textContent = project.title;
    summary.textContent = project.summary;
    kicker.textContent = [project.date, project.place].filter(Boolean).join(" · ");
    let watch = modal.querySelector("#project-watch");
    if (!watch) {
      watch = document.createElement("a");
      watch.id = "project-watch";
      watch.className = "text-button";
      summary.insertAdjacentElement("afterend", watch);
    }
    if (project.href) {
      watch.href = project.href;
      watch.target = "_blank";
      watch.rel = "noreferrer";
      watch.textContent = "Watch";
      watch.hidden = false;
    } else {
      watch.hidden = true;
    }
    paintGallery();
    creatives.innerHTML = "";
    project.creatives.forEach((creative) => {
      const match = people.find((person) => person.id === creative.id) || people.find((person) => person.name.toLowerCase() === String(creative.name || "").toLowerCase());
      const name = match?.name || creative.name || "Creative";
      const role = creative.role || (match?.roles || []).join(" · ");
      const avatar = match?.avatar
        ? `<img class="creative-mini_avatar" src="${escapeProjectText(match.avatar)}" alt="" />`
        : `<span class="creative-mini_avatar">${escapeProjectText(initials(name))}</span>`;
      const row = document.createElement("div");
      row.className = "creative-mini";
      row.innerHTML = `
        <button class="creative-mini_open" type="button">
          ${avatar}
          <span class="creative-mini_text">
            <strong>${escapeProjectText(name)}</strong>
            <span>${escapeProjectText(role)}</span>
          </span>
        </button>
        <div class="creative-mini_icons">
          ${contactIcon("Instagram", match?.instagram ? `https://instagram.com/${match.instagram}` : "", '<rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="16.6" cy="7.4" r="0.9" fill="currentColor"/>')}
          ${contactIcon("Portfolio", match?.portfolio || "", '<circle cx="12" cy="12" r="7.4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M4.6 12h14.8M12 4.6c2 2.2 3 4.7 3 7.4s-1 5.2-3 7.4c-2-2.2-3-4.7-3-7.4s1-5.2 3-7.4z" fill="none" stroke="currentColor" stroke-width="1.7"/>')}
          ${contactIcon("Phone", match?.phone ? `tel:${match.phone}` : "", '<path d="M8 5.5h2.2l1 2.4-1.4 1.1a9 9 0 0 0 4.2 4.2l1.1-1.4 2.4 1V15a1.4 1.4 0 0 1-1.5 1.4A11.4 11.4 0 0 1 6.6 7 1.4 1.4 0 0 1 8 5.5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>')}
          ${contactIcon("Email", match?.email ? `mailto:${match.email}` : "", '<rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M5 7.5 12 12.5 19 7.5" fill="none" stroke="currentColor" stroke-width="1.7"/>')}
        </div>
      `;
      row.querySelector(".creative-mini_open").addEventListener("click", () => {
        if (!match) return;
        close();
        openProfile(match.id);
      });
      creatives.append(row);
    });
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector(".project-close").focus();
  }

  function close() {
    modal.hidden = true;
    active = null;
    document.body.classList.remove("modal-open");
  }

  function step(delta) {
    if (!active) return;
    const next = slide + delta;
    if (next < 0 || next >= active.images.length) {
      syncSlide();
      return;
    }
    slide = next;
    syncSlide();
  }

  function crewHtml(project) {
    const records = (project.creatives || []).map((creative) => {
      const match = people.find((person) => person.id === creative.id) || people.find((person) => person.name.toLowerCase() === String(creative.name || "").toLowerCase());
      return { name: match?.name || creative.name || "Creative", avatar: match?.avatar || "" };
    });
    const count = records.length;
    const faces = records
      .slice(0, 4)
      .map((record) =>
        record.avatar
          ? `<img src="${escapeProjectText(record.avatar)}" alt="" />`
          : `<span class="avatar-fallback">${escapeProjectText(initials(record.name))}</span>`
      )
      .join("");
    const label = count === 1 ? "1 creative" : `${count} creatives`;
    return `<span class="project-card_crew" aria-label="${label}">${faces}<span class="project-card_count">${count}</span></span>`;
  }

  PROJECTS.forEach((project) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "project-card";
    card.innerHTML = `
      <span class="project-card_media">
        <img src="${escapeProjectText(project.images[0])}" alt="" />
        <span class="project-card_veil">View project</span>
      </span>
      <span class="project-card_title">${escapeProjectText(project.title)}</span>
      <span class="project-card_meta">
        <span class="project-card_date">${escapeProjectText(project.date || "")}</span>
        ${crewHtml(project)}
      </span>
    `;
    card.addEventListener("click", () => open(project));
    grid.append(card);
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  modal.querySelector(".project-close").addEventListener("click", close);
  document.addEventListener("keydown", (event) => {
    if (modal.hidden) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") step(-1);
    if (event.key === "ArrowRight") step(1);
  });
}

if (document.body.dataset.page === "explore") {
  initProjects({
    people: typeof PEOPLE !== "undefined" ? PEOPLE : [{ id: "aiden-zamiri", name: "Aiden Zamiri" }],
    openProfile(id) {
      location.href = `./?person=${encodeURIComponent(id)}`;
    },
  });
}
