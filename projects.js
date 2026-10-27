const PROJECTS = [
  {
    id: "trippy-red",
    title: "Trippy Red Music Video",
    summary: "A night shoot soaked in red light. The look was built around wardrobe, practicals, and a tight camera crew.",
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&h=1200&q=70",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&h=700&q=70",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&h=1100&q=70",
    ],
    creatives: [
      { name: "Noa Ellison", role: "Wardrobe Stylist", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&h=160&q=70" },
      { name: "Jules Park", role: "MUA", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&h=160&q=70" },
      { name: "Idris Bennett", role: "Gaffer", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=70" },
    ],
  },
  {
    id: "warehouse-editorial",
    title: "Warehouse Night Editorial",
    summary: "An empty warehouse, one set wall, and a small team. Styling and set design carried the frame.",
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&h=680&q=70",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&h=1200&q=70",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&h=900&q=70",
    ],
    creatives: [
      { name: "Sable Nguyen", role: "Set designer", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=70" },
      { name: "Noa Ellison", role: "Wardrobe Stylist", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&h=160&q=70" },
    ],
  },
  {
    id: "festival-stage",
    title: "Festival Main Stage",
    summary: "Day-into-night coverage from the pit and the side stage. Fast calls, a lot of light, and a director on comms.",
    images: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&h=1100&q=70",
      "https://images.unsplash.com/photo-1459749411177-04de6b5c0e2e?auto=format&fit=crop&w=900&h=640&q=70",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=900&h=1000&q=70",
    ],
    creatives: [
      { name: "Léa Moreau", role: "Director", avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=160&h=160&q=70" },
      { name: "Idris Bennett", role: "Gaffer", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=70" },
      { name: "Aiden Zamiri", role: "35mm Photographer", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=160&h=160&q=70" },
    ],
  },
  {
    id: "studio-35",
    title: "Studio 35mm Portraits",
    summary: "A quiet studio day. Film stills, a simple set, and makeup that reads on a close crop.",
    images: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&h=1100&q=70",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&h=760&q=70",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&h=1200&q=70",
    ],
    creatives: [
      { name: "Aiden Zamiri", role: "35mm Photographer", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=160&h=160&q=70" },
      { name: "Jules Park", role: "MUA", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&h=160&q=70" },
    ],
  },
  {
    id: "after-hours",
    title: "After Hours Lookbook",
    summary: "Street-to-studio looks shot after call time. Wardrobe led, with a photographer working the available light.",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&h=1300&q=70",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&h=800&q=70",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&h=1050&q=70",
    ],
    creatives: [
      { name: "Noa Ellison", role: "Wardrobe Stylist", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&h=160&q=70" },
      { name: "Aiden Zamiri", role: "Photographer", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=160&h=160&q=70" },
    ],
  },
  {
    id: "cover-day",
    title: "Cover Day in Color",
    summary: "A cover setup with a painted backdrop. Set, styling, and stills, all in one room.",
    images: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&h=720&q=70",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&h=1150&q=70",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&h=860&q=70",
    ],
    creatives: [
      { name: "Sable Nguyen", role: "Set designer", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=70" },
      { name: "Jules Park", role: "MUA", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&h=160&q=70" },
      { name: "Léa Moreau", role: "Director", avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=160&h=160&q=70" },
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

function initProjects({ people, openProfile }) {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  let active = null;
  let slide = 0;

  const modal = document.createElement("div");
  modal.className = "project-modal";
  modal.id = "project-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-title">
      <button class="project-close" type="button" aria-label="Close">×</button>
      <div class="carousel">
        <img id="project-hero" alt="" />
        <button class="carousel-btn carousel-prev" type="button" aria-label="Previous image">‹</button>
        <button class="carousel-btn carousel-next" type="button" aria-label="Next image">›</button>
      </div>
      <div class="project-body">
        <h2 id="project-title"></h2>
        <p class="project-summary" id="project-summary"></p>
        <h3>Attached creatives</h3>
        <div class="creative-list" id="project-creatives"></div>
      </div>
    </div>
  `;
  document.body.append(modal);

  const hero = modal.querySelector("#project-hero");
  const title = modal.querySelector("#project-title");
  const summary = modal.querySelector("#project-summary");
  const creatives = modal.querySelector("#project-creatives");

  function paintSlide() {
    const images = active.images;
    hero.src = images[slide];
    hero.alt = `${active.title}, image ${slide + 1} of ${images.length}`;
  }

  function open(project) {
    active = project;
    slide = 0;
    title.textContent = project.title;
    summary.textContent = project.summary;
    paintSlide();
    creatives.innerHTML = "";
    project.creatives.forEach((creative) => {
      const match = people.find((person) => person.name.toLowerCase() === creative.name.toLowerCase());
      const row = document.createElement("button");
      row.type = "button";
      row.className = "creative-row";
      row.innerHTML = `
        <img src="${escapeProjectText(creative.avatar)}" alt="" />
        <span>
          <strong>${escapeProjectText(creative.name)}</strong>
          <span>${escapeProjectText(creative.role)}</span>
        </span>
      `;
      row.addEventListener("click", () => {
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
    const count = active.images.length;
    slide = (slide + delta + count) % count;
    paintSlide();
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
    `;
    card.addEventListener("click", () => open(project));
    grid.append(card);
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  modal.querySelector(".project-close").addEventListener("click", close);
  modal.querySelector(".carousel-prev").addEventListener("click", () => step(-1));
  modal.querySelector(".carousel-next").addEventListener("click", () => step(1));
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
