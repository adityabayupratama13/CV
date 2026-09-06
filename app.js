/* Renders the whole page from data.js. UI labels below; content lives in data.js. */

const UI = {
  nav: {
    profile:        { en: "Profile",        id: "Profil" },
    experience:     { en: "Experience",     id: "Pengalaman" },
    projects:       { en: "Projects",       id: "Proyek" },
    skills:         { en: "Expertise",      id: "Keahlian" },
    education:      { en: "Education",      id: "Pendidikan" },
    certifications: { en: "Certifications", id: "Sertifikasi" },
    contact:        { en: "Contact",        id: "Kontak" }
  },
  section: {
    profile:        { en: "Profile",              id: "Profil" },
    awards:         { en: "Honors & Awards",      id: "Penghargaan" },
    experience:     { en: "Professional Experience", id: "Pengalaman Profesional" },
    projects:       { en: "Selected Projects",    id: "Proyek Terpilih" },
    skills:         { en: "Core Expertise",       id: "Keahlian Utama" },
    education:      { en: "Education",            id: "Pendidikan" },
    certifications: { en: "Licenses & Certifications", id: "Lisensi & Sertifikasi" },
    contact:        { en: "Contact",              id: "Kontak" }
  },
  sectionLead: {
    experience: { en: "Seven years of building and running the systems a precision factory depends on.",
                  id: "Tujuh tahun membangun dan menjalankan sistem yang menjadi tumpuan pabrik presisi." },
    projects:   { en: "Work spanning manufacturing execution, machine vision, robotics and applied AI.",
                  id: "Karya yang mencakup manufacturing execution, machine vision, robotika, dan AI terapan." },
    skills:     { en: "From embedded hardware to enterprise software and the teams that run them.",
                  id: "Dari hardware embedded hingga software enterprise dan tim yang menjalankannya." },
    certifications: { en: "Verified credentials across data analytics, industrial control and modern engineering practice.",
                      id: "Kredensial terverifikasi di bidang analitik data, kontrol industri, dan praktik engineering modern." }
  },
  labels: {
    viewCredential: { en: "View credential", id: "Lihat kredensial" },
    credentialId:   { en: "Credential ID",   id: "ID Kredensial" },
    noLink:         { en: "On file",         id: "Arsip pribadi" },
    email:          { en: "Email",           id: "Email" },
    phone:          { en: "Phone",           id: "Telepon" },
    linkedin:       { en: "LinkedIn",        id: "LinkedIn" },
    location:       { en: "Location",        id: "Lokasi" },
    downloadFull:   { en: "Download full CV (2 pages)", id: "Unduh CV lengkap (2 halaman)" },
    downloadShort:  { en: "Download 1-page CV",         id: "Unduh CV 1 halaman" },
    scroll:         { en: "Scroll", id: "Gulir" },
    rights:         { en: "All rights reserved.", id: "Hak cipta dilindungi." },
    theme:          { en: "Toggle theme", id: "Ganti tema" },
    menu:           { en: "Menu", id: "Menu" },
    highlights:     { en: "Key highlights", id: "Sorotan utama" },
    focus:          { en: "Key focus", id: "Fokus utama" }
  }
};

/* ---------- state ---------- */
let lang = localStorage.getItem("cv-lang") || "en";
const t = v => (v == null ? "" : (typeof v === "string" ? v : (v[lang] ?? v.en ?? "")));

/* image that hides itself if the file is not there yet */
const img = (src, cls, alt) =>
  src ? `<img class="${cls}" src="${src}" alt="${alt || ""}" loading="lazy" onerror="this.parentElement.classList.add('empty');this.remove()">` : "";

/* ---------- renderers ---------- */
function renderHeader() {
  const links = Object.keys(UI.nav)
    .map(k => `<a href="#${k}" class="nav-link">${t(UI.nav[k])}</a>`).join("");
  return `
    <a class="brand" href="#home">
      <span class="brand-mark">${CV.meta.initials}</span>
      <span class="brand-text">
        <strong>${CV.meta.name}</strong>
        <em>${t(CV.meta.role)}</em>
      </span>
    </a>
    <nav class="nav" id="nav">${links}</nav>
    <div class="header-actions">
      <div class="lang-switch" role="group" aria-label="Language">
        <button data-lang="en" class="${lang === "en" ? "on" : ""}">EN</button>
        <button data-lang="id" class="${lang === "id" ? "on" : ""}">ID</button>
      </div>
      <button class="icon-btn" id="themeBtn" title="${t(UI.labels.theme)}" aria-label="${t(UI.labels.theme)}">
        <svg viewBox="0 0 24 24" class="i-sun"><path d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-5.66 1.41-1.41M4.93 19.07l1.41-1.41m11.32 0 1.41 1.41M4.93 4.93l1.41 1.41" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.6"/></svg>
        <svg viewBox="0 0 24 24" class="i-moon"><path d="M20 14.5A8.2 8.2 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
      </button>
      <button class="icon-btn menu-btn" id="menuBtn" aria-label="${t(UI.labels.menu)}">
        <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
      </button>
    </div>`;
}

function renderHero() {
  const m = CV.metrics.map(x => `
    <div class="metric">
      <span class="metric-val">${x.value}</span>
      <span class="metric-lab">${t(x.label)}</span>
    </div>`).join("");
  return `
  <section id="home" class="hero">
    <div class="hero-bg" aria-hidden="true"><div class="hero-grid"></div><div class="hero-glow"></div></div>
    <div class="wrap hero-inner">
      <p class="kicker light">${t(CV.hero.kicker)}</p>
      <h1 class="hero-title">${t(CV.hero.headline)}</h1>
      <p class="hero-intro">${t(CV.hero.intro)}</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="#experience">${t(CV.hero.ctaPrimary)}</a>
        <a class="btn btn-ghost" href="${CV.meta.cv}" download>${t(CV.hero.ctaSecondary)}</a>
      </div>
      <div class="hero-meta">
        <span>${CV.meta.name}</span><span class="dot"></span>
        <span>${t(CV.meta.role)}</span><span class="dot"></span>
        <span>${t(CV.meta.location)}</span>
      </div>
    </div>
    <div class="metrics wrap">${m}</div>
  </section>`;
}

function renderProfile() {
  const paras = CV.profile.body.map(p => `<p>${t(p)}</p>`).join("");
  const facts = CV.profile.facts.map(f => `
    <div class="fact"><dt>${t(f.k)}</dt><dd>${t(f.v)}</dd></div>`).join("");
  const awards = CV.awards.map(a => `
    <article class="award reveal">
      <span class="award-year">${a.year}</span>
      <h4>${t(a.title)}</h4>
      <p>${t(a.desc)}</p>
    </article>`).join("");
  return `
  <section id="profile" class="section">
    <div class="wrap">
      ${head("profile")}
      <div class="profile-grid">
        <div class="profile-photo reveal">
          <div class="img-wrap photo" data-initials="${CV.meta.initials}">${img(CV.meta.photo, "", CV.meta.name)}</div>
          <dl class="facts">${facts}</dl>
        </div>
        <div class="profile-body reveal">
          <h3 class="lead">${t(CV.profile.heading)}</h3>
          ${paras}
          <div class="awards">
            <p class="kicker sm">${t(UI.section.awards)}</p>
            ${awards}
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function renderExperience() {
  const items = CV.experience.map(e => {
    const bullets = e.bullets.map(b => `
      <li><strong>${t(b.t)}</strong><span>${t(b.d)}</span></li>`).join("");
    const tags = (e.tags || []).map(x => `<span class="tag">${x}</span>`).join("");
    const gallery = (e.images || []).length
      ? `<div class="gallery">${e.images.map(s => `<figure class="img-wrap">${img(s, "", e.company)}</figure>`).join("")}</div>` : "";
    return `
    <article class="exp reveal">
      <div class="exp-side">
        <div class="img-wrap logo">${img(e.logo, "", e.company)}</div>
        <p class="exp-period">${t(e.period)}</p>
        <p class="exp-loc">${t(e.location)}</p>
      </div>
      <div class="exp-main">
        <h3>${t(e.role)}</h3>
        <p class="exp-company">${e.company}</p>
        ${t(e.subroles) ? `<p class="exp-sub">${t(e.subroles)}</p>` : ""}
        <p class="exp-summary">${t(e.summary)}</p>
        <ul class="exp-bullets">${bullets}</ul>
        ${gallery}
        <div class="tags">${tags}</div>
      </div>
    </article>`;
  }).join("");
  return `
  <section id="experience" class="section alt">
    <div class="wrap">${head("experience")}<div class="exp-list">${items}</div></div>
  </section>`;
}

function renderProjects() {
  const cards = CV.projects.map(p => {
    const tags = (p.tags || []).map(x => `<span class="tag">${x}</span>`).join("");
    const inner = `
      <div class="img-wrap pcard-media">${img(p.image, "", t(p.title))}</div>
      <div class="pcard-body">
        <p class="pcard-cat">${t(p.category)} · ${p.year}</p>
        <h3>${t(p.title)}</h3>
        <p class="pcard-desc">${t(p.desc)}</p>
        <div class="tags">${tags}</div>
      </div>`;
    return p.link
      ? `<a class="pcard reveal" href="${p.link}" target="_blank" rel="noopener">${inner}<span class="pcard-arrow">↗</span></a>`
      : `<article class="pcard reveal">${inner}</article>`;
  }).join("");
  return `
  <section id="projects" class="section">
    <div class="wrap">${head("projects")}<div class="pgrid">${cards}</div></div>
  </section>`;
}

function renderSkills() {
  const groups = CV.skills.map(g => `
    <div class="skill-group reveal">
      <h3>${t(g.group)}</h3>
      <div class="tags">${g.items.map(i => `<span class="tag">${i}</span>`).join("")}</div>
    </div>`).join("");
  return `
  <section id="skills" class="section alt">
    <div class="wrap">${head("skills")}<div class="skill-grid">${groups}</div></div>
  </section>`;
}

function renderEducation() {
  const items = CV.education.map(e => `
    <article class="edu reveal">
      <div class="img-wrap logo">${img(e.logo, "", e.school)}</div>
      <div>
        <h3>${e.school}</h3>
        <p class="edu-degree">${t(e.degree)}</p>
        <p class="edu-meta">${t(e.period)} · ${t(e.grade)}</p>
        <p class="kicker sm">${t(UI.labels.focus)}</p>
        <p class="edu-focus">${t(e.focus)}</p>
      </div>
    </article>`).join("");
  return `
  <section id="education" class="section">
    <div class="wrap">${head("education")}${items}</div>
  </section>`;
}

function renderCerts() {
  const cards = CV.certifications.map(c => {
    const inner = `
      <div class="cert-top">
        <span class="cert-issuer">${c.issuer}</span>
        ${c.featured ? `<span class="cert-star">★</span>` : ""}
      </div>
      <h3>${t(c.name)}</h3>
      <p class="cert-date">${t(c.date)}</p>
      ${c.credential ? `<p class="cert-id"><span>${t(UI.labels.credentialId)}</span> ${c.credential}</p>` : ""}
      <p class="cert-cta">${c.url ? t(UI.labels.viewCredential) + " ↗" : t(UI.labels.noLink)}</p>`;
    return c.url
      ? `<a class="cert reveal linked" href="${c.url}" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="cert reveal">${inner}</div>`;
  }).join("");
  return `
  <section id="certifications" class="section alt">
    <div class="wrap">${head("certifications")}<div class="cert-grid">${cards}</div></div>
  </section>`;
}

function renderContact() {
  const L = UI.labels;
  return `
  <section id="contact" class="section contact">
    <div class="wrap">
      <div class="contact-grid">
        <div class="reveal">
          <p class="kicker light">${t(UI.section.contact)}</p>
          <h2 class="contact-head">${t(CV.contact.heading)}</h2>
          <p class="contact-body">${t(CV.contact.body)}</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="mailto:${CV.meta.email}">${t(L.email)}</a>
            <a class="btn btn-ghost" href="${CV.meta.cv}" download>${t(L.downloadFull)}</a>
          </div>
        </div>
        <dl class="contact-list reveal">
          <div><dt>${t(L.email)}</dt><dd><a href="mailto:${CV.meta.email}">${CV.meta.email}</a></dd></div>
          <div><dt>${t(L.phone)}</dt><dd><a href="${CV.meta.phoneHref}">${CV.meta.phone}</a></dd></div>
          <div><dt>${t(L.linkedin)}</dt><dd><a href="${CV.meta.linkedin}" target="_blank" rel="noopener">/aditya-bayu-pratama ↗</a></dd></div>
          <div><dt>${t(L.location)}</dt><dd>${t(CV.meta.location)}</dd></div>
          <div><dt>CV</dt><dd><a href="${CV.meta.cvShort}" download>${t(L.downloadShort)} ↓</a></dd></div>
        </dl>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="wrap footer-inner">
      <span>© ${new Date().getFullYear()} ${CV.meta.name}. ${t(UI.labels.rights)}</span>
      <span>${t(CV.meta.tagline)}</span>
    </div>
  </footer>`;
}

function head(key) {
  const lead = UI.sectionLead[key];
  return `
    <header class="section-head reveal">
      <p class="kicker">${t(UI.section[key])}</p>
      ${lead ? `<h2 class="section-title">${t(lead)}</h2>` : ""}
    </header>`;
}

/* ---------- mount ---------- */
function render() {
  document.documentElement.lang = lang;
  document.title = `${CV.meta.name} — ${t(CV.meta.role)}`;
  document.getElementById("header").innerHTML = renderHeader();
  document.getElementById("main").innerHTML =
    renderHero() + renderProfile() + renderExperience() + renderProjects() +
    renderSkills() + renderEducation() + renderCerts() + renderContact();
  wire();
  observe();
}

function wire() {
  document.querySelectorAll("[data-lang]").forEach(b => b.onclick = () => {
    lang = b.dataset.lang;
    localStorage.setItem("cv-lang", lang);
    render();
  });
  document.getElementById("themeBtn").onclick = () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("cv-theme", next);
  };
  const nav = document.getElementById("nav");
  document.getElementById("menuBtn").onclick = () => nav.classList.toggle("open");
  nav.querySelectorAll("a").forEach(a => a.onclick = () => nav.classList.remove("open"));
}

/* reveal on scroll + active nav link */
function observe() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  const links = [...document.querySelectorAll(".nav-link")];
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("section[id]").forEach(s => spy.observe(s));

}

/* header state: attached once, not per render */
const onScroll = () =>
  document.getElementById("header").classList.toggle("scrolled", scrollY > 40);
addEventListener("scroll", onScroll, { passive: true });
onScroll();

render();
