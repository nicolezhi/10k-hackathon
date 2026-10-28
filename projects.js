const PROJECTS = [
  {
    id: "trippy-red",
    title: "Trippy Red Music Video",
    summary: "A night shoot soaked in red light. The look was built around wardrobe, practicals, and a tight camera crew.",
    date: "September 14, 2025",
    place: "New York, NY",
    images: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&h=1125&q=80",
    ],
    creatives: [
      { id: "aiden-zamiri", role: "Director" },
      { id: "alliyah-alliyah", role: "MUA" },
      { id: "stephanie-ocean-stephanieocean", role: "Gaffer" },
      { id: "isaac-wheatley-ikeview", role: "Photographer" },
    ],
  },
  {
    id: "warehouse-editorial",
    title: "Warehouse Night Editorial",
    summary: "An empty warehouse, one set wall, and a small team. Styling and set design carried the frame.",
    date: "November 2, 2025",
    place: "New York, NY",
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&h=1125&q=80",
    ],
    creatives: [
      { id: "hameem-hameem", role: "Stylist" },
      { id: "talia-restrepo-taliarestrepo", role: "Stylist" },
      { id: "ayden-starr-fatecapture", role: "Photographer" },
    ],
  },
  {
    id: "festival-stage",
    title: "Festival Main Stage",
    summary: "Day-into-night coverage from the pit and the side stage. Fast calls, a lot of light, and a director on comms.",
    date: "June 21, 2026",
    place: "New York, NY",
    images: [
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=900&h=1125&q=80",
    ],
    creatives: [
      { id: "simon-bradley-simonbradleyx", role: "Director" },
      { id: "nick-wheat-nickywheat", role: "Gaffer" },
      { id: "alex-olesky-alexolesky", role: "Photographer" },
      { id: "vika-vikasfotos", role: "Photographer" },
    ],
  },
  {
    id: "studio-35",
    title: "Studio 35mm Portraits",
    summary: "A quiet studio day. Film stills, a simple set, and makeup that reads on a close crop.",
    date: "January 18, 2026",
    place: "New York, NY",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&h=1125&q=80",
    ],
    creatives: [
      { id: "aiden-zamiri", role: "Photographer" },
      { id: "alliyah-alliyah", role: "MUA" },
      { id: "anna-koblish-annakoblish", role: "Photographer" },
    ],
  },
  {
    id: "after-hours",
    title: "After Hours Lookbook",
    summary: "Street-to-studio looks shot after call time. Wardrobe led, with a photographer working the available light.",
    date: "August 8, 2025",
    place: "New York, NY",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&h=1125&q=80",
    ],
    creatives: [
      { id: "talia-restrepo-taliarestrepo", role: "Stylist" },
      { id: "hameem-hameem", role: "Stylist" },
      { id: "oliver-oliverstemmler", role: "Photographer" },
    ],
  },
  {
    id: "cover-day",
    title: "Cover Day in Color",
    summary: "A cover setup with a painted backdrop. Set, styling, and stills, all in one room.",
    date: "March 4, 2026",
    place: "New York, NY",
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&h=1125&q=80",
    ],
    creatives: [
      { id: "simon-bradley-simonbradleyx", role: "Director" },
      { id: "alliyah-alliyah", role: "MUA" },
      { id: "aiden-zamiri", role: "Photographer" },
    ],
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
    const records = (project.creatives || [])
      .map((creative) => people.find((person) => person.id === creative.id))
      .filter(Boolean);
    const count = (project.creatives || []).length;
    const faces = records
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
