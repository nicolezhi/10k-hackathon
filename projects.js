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
    home: false,
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
    home: false,
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
    home: false,
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
{
    id: "trippy-red",
    title: "Trippy Red Music Video",
    home: false,
    summary: "A night shoot soaked in red light. The look was built around wardrobe, practicals, and a tight camera crew.",
    date: "September 14, 2025",
    place: "New York, NY",
    type: "Music video",
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
    home: false,
    summary: "An empty warehouse, one set wall, and a small team. Styling and set design carried the frame.",
    date: "November 2, 2025",
    place: "New York, NY",
    type: "Editorial",
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
    home: false,
    summary: "Day-into-night coverage from the pit and the side stage. Fast calls, a lot of light, and a director on comms.",
    date: "June 21, 2026",
    place: "New York, NY",
    type: "Festival",
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
    home: false,
    summary: "A quiet studio day. Film stills, a simple set, and makeup that reads on a close crop.",
    date: "January 18, 2026",
    place: "New York, NY",
    type: "Portrait",
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
    home: false,
    summary: "Street-to-studio looks shot after call time. Wardrobe led, with a photographer working the available light.",
    date: "August 8, 2025",
    place: "New York, NY",
    type: "Lookbook",
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
    home: false,
    summary: "A cover setup with a painted backdrop. Set, styling, and stills, all in one room.",
    date: "March 4, 2026",
    place: "New York, NY",
    type: "Cover",
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
  {
    id: "late-set-portraits",
    title: "Late Set Portraits",
    home: false,
    summary: "Portraits made after the set, while the room was still lit. A small crew, one backdrop, and a photographer working close.",
    date: "October 12, 2025",
    place: "New York, NY",
    type: "Portrait",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&h=1125&q=80",
    ],
    creatives: [
      { id: "isaac-wheatley-ikeview", role: "Photographer" },
      { id: "alliyah-alliyah", role: "MUA" },
      { id: "hameem-hameem", role: "Stylist" },
    ],
  },
  {
    id: "side-stage",
    title: "Side Stage Coverage",
    home: false,
    summary: "Concert stills from the side of the stage. Fast light, a tight crop, and a photographer staying out of the shot.",
    date: "May 3, 2026",
    place: "New York, NY",
    type: "Concert",
    images: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1459749411177-04de2b3705b9?auto=format&fit=crop&w=900&h=1125&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&h=1125&q=80",
    ],
    creatives: [
      { id: "isaac-wheatley-ikeview", role: "Photographer" },
      { id: "vika-vikasfotos", role: "Photographer" },
      { id: "nick-wheat-nickywheat", role: "Gaffer" },
    ],
  }
];

function escapeProjectText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function youtubeId(href) {
  try {
    const url = new URL(href);
    if (url.hostname.includes("youtu.be")) return url.pathname.slice(1);
    return url.searchParams.get("v") || "";
  } catch {
    return "";
  }
}

let youtubeApi;
function ensureYouTube() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!youtubeApi) {
    youtubeApi = new Promise((resolve) => {
      const prior = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prior === "function") prior();
        resolve(window.YT);
      };
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.head.append(script);
    });
  }
  return youtubeApi;
}

function copyIcon(label, value, copied, path) {
  const icon = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">${path}</svg>`;
  if (!value) return `<span class="roster-icon is-empty" aria-label="${escapeProjectText(label)}">${icon}</span>`;
  return `<button type="button" class="roster-icon copy-icon" data-copy="${escapeProjectText(value)}" data-copied="${escapeProjectText(copied)}" aria-label="${escapeProjectText(label)}">${icon}<span class="copy-tip" role="tooltip">${escapeProjectText(value)}</span></button>`;
}

function linkIcon(label, href, path) {
  const icon = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">${path}</svg>`;
  if (!href) return `<span class="roster-icon is-empty" aria-label="${escapeProjectText(label)}">${icon}</span>`;
  return `<a class="roster-icon" href="${escapeProjectText(href)}" target="_blank" rel="noreferrer" aria-label="${escapeProjectText(label)}">${icon}</a>`;
}

function openProject(id) {
  const project = PROJECTS.find((item) => item.id === id);
  if (project && openProjectImpl) openProjectImpl(project);
}

let openProjectImpl = null;

function initProjects({ people, openProfile }) {
  if (document.getElementById("project-modal")) return;

  let active = null;
  let slide = 0;
  let player = null;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const playIcon = `<svg class="icon-play" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M8.4 6.7c0-.86.94-1.4 1.68-.96l8.15 4.8c.72.42.72 1.5 0 1.92l-8.15 4.8c-.74.44-1.68-.1-1.68-.96V6.7z" fill="currentColor"/></svg>`;
  const pauseIcon = `<svg class="icon-pause" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M8 6.5h3.2v11H8v-11zm4.8 0H16v11h-3.2v-11z" fill="currentColor"/></svg>`;

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
          <h3>Credits</h3>
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

  function stopPlayer() {
    const current = player;
    player = null;
    try {
      current?.destroy();
    } catch {
      /* The player node may already be gone. */
    }
  }

  function setPlayState(button, playing) {
    button.classList.toggle("is-playing", playing);
    button.setAttribute("aria-label", playing ? "Pause" : "Play");
    button.setAttribute("aria-pressed", playing ? "true" : "false");
  }

  function paintPlayer(videoId) {
    stopPlayer();
    gallery.innerHTML = `
      <div class="project-stage project-player">
        <div class="project-player_mount"></div>
        <img class="project-player_poster" src="${escapeProjectText(active.images[0] || "")}" alt="" />
        <button class="project-play" type="button" aria-label="Play" aria-pressed="false">${playIcon}${pauseIcon}</button>
      </div>
    `;
    const button = gallery.querySelector(".project-play");
    const poster = gallery.querySelector(".project-player_poster");
    const mount = gallery.querySelector(".project-player_mount");
    let pendingPlay = false;
    const playOrPause = () => {
      if (!player || typeof player.playVideo !== "function" || typeof player.getPlayerState !== "function") {
        pendingPlay = true;
        button.disabled = true;
        return;
      }
      if (player.getPlayerState() === YT.PlayerState.PLAYING) player.pauseVideo();
      else {
        poster.hidden = true;
        player.unMute();
        player.playVideo();
      }
    };
    button.addEventListener("click", playOrPause);
    ensureYouTube().then(() => {
      if (!mount.isConnected) return;
      const node = document.createElement("div");
      mount.append(node);
      player = new YT.Player(node, {
        videoId,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          controls: 0,
          fs: 0,
          disablekb: 1,
          iv_load_policy: 3,
          origin: location.origin,
        },
        events: {
          onReady() {
            button.disabled = false;
            if (!pendingPlay) return;
            pendingPlay = false;
            poster.hidden = true;
            player.unMute();
            player.playVideo();
          },
          onStateChange(event) {
            const playing = event.data === YT.PlayerState.PLAYING;
            if (playing || event.data === YT.PlayerState.PAUSED) poster.hidden = true;
            setPlayState(button, playing);
          },
        },
      });
    });
  }

  function paintGallery() {
    const videoId = youtubeId(active.href);
    if (videoId) {
      paintPlayer(videoId);
      return;
    }
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
          ${linkIcon("Instagram", match?.instagram ? `https://instagram.com/${match.instagram}` : "", '<rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="16.6" cy="7.4" r="0.9" fill="currentColor"/>')}
          ${copyIcon("Portfolio", match?.portfolio || "", "copied portfolio link", '<circle cx="12" cy="12" r="7.4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M4.6 12h14.8M12 4.6c2 2.2 3 4.7 3 7.4s-1 5.2-3 7.4c-2-2.2-3-4.7-3-7.4s1-5.2 3-7.4z" fill="none" stroke="currentColor" stroke-width="1.7"/>')}
          ${copyIcon("Phone", match?.phone || "", "copied phone number", '<path d="M8 5.5h2.2l1 2.4-1.4 1.1a9 9 0 0 0 4.2 4.2l1.1-1.4 2.4 1V15a1.4 1.4 0 0 1-1.5 1.4A11.4 11.4 0 0 1 6.6 7 1.4 1.4 0 0 1 8 5.5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>')}
          ${copyIcon("Email", match?.email || "", "copied email", '<rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M5 7.5 12 12.5 19 7.5" fill="none" stroke="currentColor" stroke-width="1.7"/>')}
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
    stopPlayer();
    modal.hidden = true;
    active = null;
    document.body.classList.remove("modal-open");
  }

  openProjectImpl = open;

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

  const grid = document.getElementById("project-grid");
  if (grid && !grid.dataset.ready) {
  grid.dataset.ready = "1";
  grid.replaceChildren();
  grid.removeAttribute("aria-busy");
  grid.removeAttribute("aria-label");

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

  const showHidden = document.body.dataset.page === "explore";
  PROJECTS.forEach((project) => {
    if (!showHidden && project.home === false) return;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "project-card";
    card.dataset.project = project.id;
    const videoId = youtubeId(project.href);
    const preview = videoId && project.id !== "trim-get-hit" && !reduceMotion
      ? `<img class="project-card_preview" src="images/projects/${escapeProjectText(videoId)}.gif" alt="" aria-hidden="true" />`
      : "";
    card.innerHTML = `
      <span class="project-card_media">
        <img src="${escapeProjectText(project.images[0])}" alt="" />
        ${preview}
      </span>
      <span class="project-card_title">${escapeProjectText(project.title)}</span>
      <span class="project-card_meta">
        <span class="project-card_date">${escapeProjectText(project.date || "")}</span>
        ${crewHtml(project)}
      </span>
    `;
    if (project.id === "trim-get-hit") bindTrimPreview(card);
    card.addEventListener("click", () => open(project));
    grid.append(card);
  });
  projectFiltersController?.apply();
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  modal.querySelector(".project-close").addEventListener("click", close);
  const filters = bindProjectFilters(people, () => modal.hidden);
  document.addEventListener("keydown", (event) => {
    if (!modal.hidden) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
      return;
    }
    if (event.key === "Escape") filters.close();
  });
}

const TRIM_CLIP = { id: "Ca77yvpNdfA", start: 20, end: 34 };

function bindTrimPreview(card) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const media = card.querySelector(".project-card_media");
  let preview = null;

  const stop = () => {
    preview?.remove();
    preview = null;
  };

  const start = () => {
    if (preview) return;
    const frame = document.createElement("iframe");
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      controls: "0",
      start: String(TRIM_CLIP.start),
      end: String(TRIM_CLIP.end),
      rel: "0",
      playsinline: "1",
    });
    frame.src = `https://www.youtube.com/embed/${TRIM_CLIP.id}?${params}`;
    frame.allow = "autoplay; encrypted-media";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.title = "Trim — Get Hit preview";
    frame.tabIndex = -1;
    preview = document.createElement("span");
    preview.className = "project-card_preview is-on";
    preview.append(frame);
    media.append(preview);
  };

  card.addEventListener("pointerenter", start);
  card.addEventListener("pointerleave", stop);
  card.addEventListener("focus", start);
  card.addEventListener("blur", stop);
  card.addEventListener("click", stop);
}

const PROJECT_CHECK = `<span class="filter-check" aria-hidden="true"><svg viewBox="0 0 16 16" width="12" height="12"><path d="M3.2 8.2 6.4 11.4 12.8 4.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;

let projectFiltersController = null;

function bindProjectFilters(people, modalClosed) {
  if (projectFiltersController) return projectFiltersController;
  const root = document.getElementById("project-filters");
  const noop = { close() {}, apply() {} };
  if (!root || root.dataset.ready) return noop;
  root.dataset.ready = "1";

  const selected = { creative: new Set(), place: new Set(), type: new Set() };
  let open = "";

  const creatives = [];
  const seen = new Set();
  PROJECTS.forEach((project) => {
    (project.creatives || []).forEach((creative) => {
      if (!creative.id || seen.has(creative.id)) return;
      seen.add(creative.id);
      const match = people.find((person) => person.id === creative.id);
      creatives.push({ id: creative.id, name: match?.name || creative.name || "Creative" });
    });
  });
  creatives.sort((a, b) => a.name.localeCompare(b.name));
  const places = [...new Set(PROJECTS.map((project) => project.place).filter(Boolean))];
  const types = [...new Set(PROJECTS.map((project) => project.type).filter(Boolean))];

  const groups = {
    creative: {
      options: () => {
        const query = (document.getElementById("project-creative-filter")?.value || "").trim().toLowerCase();
        return creatives
          .filter((creative) => !query || creative.name.toLowerCase().includes(query))
          .map((creative) => ({ value: creative.id, label: creative.name }));
      },
      empty: "No creatives match.",
    },
    place: {
      options: () => {
        const query = (document.getElementById("project-place-filter")?.value || "").trim().toLowerCase();
        return places
          .filter((place) => !query || place.toLowerCase().includes(query))
          .map((place) => ({ value: place, label: place }));
      },
      empty: "No locations match.",
    },
    type: {
      options: () => types.map((type) => ({ value: type, label: type })),
      empty: "No project types match.",
    },
  };

  function paintGroup(key) {
    const menu = document.getElementById(`project-${key}-menu`);
    const toggle = document.getElementById(`project-${key}-toggle`);
    const panel = document.getElementById(`project-${key}-panel`);
    const badge = document.getElementById(`project-${key}-count`);
    if (!menu || !toggle || !panel) return;
    const picked = selected[key];
    const rows = groups[key].options();
    menu.innerHTML = rows.length
      ? rows
          .map(
            (row) => `<button class="filter-row" type="button" role="menuitemcheckbox" aria-checked="${picked.has(row.value)}" data-value="${escapeProjectText(row.value)}">
        ${PROJECT_CHECK}
        <span class="filter-row_label">${escapeProjectText(row.label)}</span>
      </button>`
          )
          .join("")
      : `<p class="location-empty">${groups[key].empty}</p>`;
    menu.querySelectorAll(".filter-row").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const value = button.dataset.value;
        if (picked.has(value)) picked.delete(value);
        else picked.add(value);
        paintGroup(key);
        apply();
      });
    });
    const on = open === key;
    panel.hidden = !on;
    toggle.setAttribute("aria-expanded", on ? "true" : "false");
    toggle.classList.toggle("is-on", picked.size > 0);
    if (badge) {
      badge.hidden = picked.size === 0;
      const num = badge.querySelector(".tool-pill_num");
      if (num) num.textContent = picked.size ? String(picked.size) : "";
    }
  }

  function apply() {
    const grid = document.getElementById("project-grid");
    if (grid?.getAttribute("aria-busy") === "true") return;
    const empty = document.getElementById("project-empty");
    let shown = 0;
    document.querySelectorAll(".project-card[data-project]").forEach((card) => {
      const project = PROJECTS.find((item) => item.id === card.dataset.project);
      const creativeHit = !selected.creative.size || (project?.creatives || []).some((creative) => selected.creative.has(creative.id));
      const placeHit = !selected.place.size || selected.place.has(project?.place);
      const typeHit = !selected.type.size || selected.type.has(project?.type);
      const match = Boolean(project) && creativeHit && placeHit && typeHit;
      card.hidden = !match;
      if (match) shown += 1;
    });
    if (empty) empty.hidden = shown > 0;
  }

  function paint() {
    Object.keys(groups).forEach(paintGroup);
  }

  function close() {
    if (!open) return;
    open = "";
    paint();
  }

  Object.keys(groups).forEach((key) => {
    document.getElementById(`project-${key}-toggle`)?.addEventListener("click", () => {
      open = open === key ? "" : key;
      paint();
    });
    document.getElementById(`project-${key}-count`)?.addEventListener("click", (event) => {
      if (!selected[key].size) return;
      event.preventDefault();
      event.stopPropagation();
      selected[key].clear();
      open = "";
      paint();
      apply();
    });
    document.getElementById(`project-${key}-filter`)?.addEventListener("input", () => paintGroup(key));
  });

  document.addEventListener("click", (event) => {
    if (!open || root.contains(event.target)) return;
    if (typeof modalClosed === "function" && !modalClosed()) return;
    close();
  });

  paint();
  projectFiltersController = { close, apply };
  return projectFiltersController;
}

function skeletonNavPending() {
  try {
    const started = Number(sessionStorage.getItem("10k-skeleton") || 0);
    return started > 0 && Date.now() - started < 4000;
  } catch (error) {
    return false;
  }
}

if (document.body.dataset.page === "explore") {
  const roster = typeof PEOPLE !== "undefined" ? PEOPLE : [{ id: "aiden-zamiri", name: "Aiden Zamiri" }];
  bindProjectFilters(roster, () => {
    const modal = document.getElementById("project-modal");
    return !modal || modal.hidden;
  });
  if (!skeletonNavPending()) {
    initProjects({
      people: roster,
      openProfile(id) {
        try { sessionStorage.setItem("10k-skeleton", String(Date.now())); } catch (error) {}
        location.href = `./?person=${encodeURIComponent(id)}`;
      },
    });
  }
}
