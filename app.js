/* Renders the whole page from data.js. UI labels below; content lives in data.js. */

const UI = {
  nav: {
    profile:        { en: "Profile",        id: "Profil" },
    experience:     { en: "Experience",     id: "Pengalaman" },
    projects:       { en: "Projects",       id: "Proyek" },
    products:       { en: "Products",       id: "Produk" },
    research:       { en: "Research",       id: "Riset" },
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
    products:       { en: "Product Implementations", id: "Implementasi Produk" },
    research:       { en: "Research & Innovation",  id: "Riset & Inovasi" },
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
    products:   { en: "Production lines I handled — from LiDAR cameras and power stations to cardiac monitors.",
                  id: "Lini produksi yang saya tangani — dari kamera LiDAR dan power station hingga monitor jantung." },
    research:   { en: "Open questions I am working on, and how applied AI is closing them.",
                  id: "Pertanyaan terbuka yang sedang saya kerjakan, dan bagaimana AI terapan menutupnya." },
    education:  { en: "An applied engineering degree built on mechatronics, robotics and automation.",
                  id: "Pendidikan vokasi terapan yang dibangun di atas mekatronika, robotika, dan otomasi." },
    skills:     { en: "From embedded hardware to enterprise software and the teams that run them.",
                  id: "Dari hardware embedded hingga software enterprise dan tim yang menjalankannya." },
    certifications: { en: "Verified credentials across data analytics, industrial control and modern engineering practice.",
                      id: "Kredensial terverifikasi di bidang analitik data, kontrol industri, dan praktik engineering modern." }
  },
  labels: {
    viewCredential: { en: "View credential", id: "Lihat kredensial" },
    credentialId:   { en: "Credential ID",   id: "ID Kredensial" },
    noLink:         { en: "Certificate on file", id: "Sertifikat arsip" },
    email:          { en: "Email",           id: "Email" },
    emailCta:       { en: "Email me",        id: "Kirim email" },
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
    focus:          { en: "Key focus", id: "Fokus utama" },
    enlarge:        { en: "Click to enlarge", id: "Klik untuk memperbesar" },
    watch:          { en: "Watch on YouTube", id: "Tonton di YouTube" },
    cvHeading:      { en: "Curriculum vitae", id: "Curriculum vitae" },
    toTop:          { en: "Back to top", id: "Kembali ke atas" },
    showAll:        { en: "Show all", id: "Tampilkan semua" },
    showLess:       { en: "Show fewer", id: "Tampilkan lebih sedikit" },
    nProjects:      { en: "projects", id: "proyek" },
    nCerts:         { en: "certificates", id: "sertifikat" },
    degree:         { en: "Degree", id: "Program" },
    institution:    { en: "Institution", id: "Institusi" },
    period:         { en: "Period", id: "Periode" },
    result:         { en: "Result", id: "Hasil" },
    question:       { en: "Research question", id: "Pertanyaan riset" },
    progression:    { en: "Career progression", id: "Perjalanan karier" },
    current:        { en: "Current", id: "Saat ini" },
    coursework:     { en: "Coursework & specialisation", id: "Mata kuliah & spesialisasi" },
    architecture:   { en: "System flow", id: "Alur sistem" }
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
    const roles = (e.roles || []).map(r => `
      <li class="role${r.current ? " now" : ""}">
        <div class="role-head">
          <h4>${t(r.title)}</h4>
          <span class="role-period">${t(r.period)}${r.current ? ` <em>${t(UI.labels.current)}</em>` : ""}</span>
        </div>
        <p>${t(r.note)}</p>
      </li>`).join("");
    const bullets = e.bullets.map(b => `
      <li><strong>${t(b.t)}</strong><span>${t(b.d)}</span></li>`).join("");
    const tags = (e.tags || []).map(x => `<span class="tag">${x}</span>`).join("");
    const gallery = (e.images || []).length
      ? `<div class="gallery">${e.images.map(s => `<figure class="img-wrap">${img(s, "", e.company)}</figure>`).join("")}</div>` : "";
    return `
    <article class="exp reveal">
      <div class="exp-side">
        ${e.logo ? `<a class="exp-logo" href="${e.companyUrl || "#"}" target="_blank" rel="noopener" title="${e.company} — LinkedIn">
            <img src="${e.logo}" alt="${e.company}" loading="lazy" onerror="this.parentElement.remove()">
          </a>` : ""}
        <p class="exp-period">${t(e.period)}</p>
        <p class="exp-loc">${t(e.location)}</p>
      </div>
      <div class="exp-main">
        <h3>${t(e.role)}</h3>
        <p class="exp-company">${e.company}</p>
        ${t(e.subroles) ? `<p class="exp-sub">${t(e.subroles)}</p>` : ""}
        <p class="exp-summary">${t(e.summary)}</p>
        ${roles ? `<div class="roles">
            <p class="mini-label">${t(UI.labels.progression)}</p>
            <ol class="role-list">${roles}</ol>
          </div>` : ""}
        <p class="mini-label">${t(UI.labels.highlights)}</p>
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

function media(p) {
  const imgs = (p.images && p.images.length) ? p.images : (p.image ? [p.image] : []);
  if (!imgs.length) return "";
  const slides = imgs.map((src, i) =>
    `<img class="slide${i ? "" : " on"}" src="${src}" alt="${t(p.title)}" loading="lazy" onerror="this.remove()">`).join("");
  return `<div class="slides${p.link ? " nolb" : ""}">
      ${slides}
      ${imgs.length > 1 ? `<span class="badge count"><b>1</b>/${imgs.length}</span>` : ""}
      <span class="badge hint">${p.video ? t(UI.labels.watch) + " ↗" : t(UI.labels.enlarge)}</span>
      ${p.video ? `<span class="play" aria-hidden="true"></span>` : ""}
    </div>`;
}

function renderProjects() {
  const cards = CV.projects.map(p => {
    const tags = (p.tags || []).map(x => `<span class="tag">${x}</span>`).join("");
    const flow = (p.flow || []).length
      ? `<div class="flow"><p class="mini-label">${t(UI.labels.architecture)}</p>
          <div class="flow-chain">${p.flow.map(x => `<span>${x}</span>`).join("")}</div></div>` : "";
    const points = (p.points || []).length
      ? `<ul class="plist">${p.points.map(x => `<li>${t(x)}</li>`).join("")}</ul>` : "";
    const inner = `
      ${media(p)}
      <div class="pcard-body">
        <p class="pcard-cat">${t(p.category)} · ${p.year}</p>
        <h3>${t(p.title)}</h3>
        <p class="pcard-desc">${t(p.desc)}</p>
        ${flow}
        ${points}
        <div class="tags">${tags}</div>
      </div>`;
    const cls = "pcard reveal" + (media(p) ? "" : " no-media");
    return p.link
      ? `<a class="${cls}" href="${p.link}" target="_blank" rel="noopener">${inner}<span class="pcard-arrow">↗</span></a>`
      : `<article class="${cls}">${inner}</article>`;
  }).join("");
  return `
  <section id="projects" class="section">
    <div class="wrap">
      ${head("projects")}
      <div class="pgrid">${cards}</div>
      ${moreBtn(CV.projects.length, t(UI.labels.nProjects))}
    </div>
  </section>`;
}

function renderProducts() {
  const P = CV.products;
  const cols = P.categories.map(c => {
    const rows = c.companies.flatMap(co => co.items.map(it => `
      <div class="prow">
        <div class="pthumb"><img src="${it.image}" alt="${t(it.name)}" loading="lazy" onerror="this.remove()"></div>
        <div class="pinfo">
          <h4>${t(it.name)}</h4>
          <div class="prod-brand">
            <img src="${co.logo}" alt="${co.name}" loading="lazy" onerror="this.remove()">
            <span>${co.name}</span>
          </div>
        </div>
      </div>`)).join("");
    return `
      <div class="pcol reveal">
        <p class="pcol-head">${t(c.name)}</p>
        <div class="pcol-body">${rows}</div>
      </div>`;
  }).join("");
  return `
  <section id="products" class="section alt">
    <div class="wrap">
      ${head("products")}
      <p class="section-intro reveal">${t(P.intro)}</p>
      <div class="ptable">${cols}</div>
    </div>
  </section>`;
}

function renderResearch() {
  const R = CV.research;
  const paras = R.intro.map(x => `<p>${t(x)}</p>`).join("");
  const items = R.items.map((it, i) => `
    <article class="rq reveal">
      <span class="rq-no">${String(i + 1).padStart(2, "0")}</span>
      <div class="rq-body">
        <div class="rq-head">
          <h3>${t(it.q)}</h3>
          <span class="rq-status">${t(it.answer ? UI.labels.result : R.status)}</span>
        </div>
        <p>${t(it.note)}</p>
        <div class="tags">${(it.tags || []).map(x => `<span class="tag">${x}</span>`).join("")}</div>
        ${it.answer ? `<p class="rq-answer">${t(it.answer)}</p>` : ""}
      </div>
    </article>`).join("");
  return `
  <section id="research" class="section research">
    <div class="wrap">
      ${head("research")}
      <div class="research-grid">
        <div class="research-note reveal">
          <h3 class="lead">${t(R.headline)}</h3>
          ${paras}
        </div>
        <div class="rq-list">${items}</div>
      </div>
    </div>
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
  const L = UI.labels;
  const items = CV.education.map(e => {
    const points = (e.points || []).map(x => `<li>${t(x)}</li>`).join("");
    return `
    <article class="edu reveal">
      <header class="edu-head">
        <div class="edu-title">
          ${e.logo ? `<a class="exp-logo edu-logo" href="${e.schoolUrl || "#"}" target="_blank" rel="noopener" title="${e.school} — LinkedIn">
              <img src="${e.logo}" alt="${e.school}" loading="lazy" onerror="this.parentElement.remove()">
            </a>` : ""}
          <h3>${e.school}</h3>
        </div>
        <span class="edu-period">${t(e.period)}</span>
      </header>
      <dl class="edu-rows">
        <div><dt>${t(L.degree)}</dt><dd>${t(e.degree)}</dd></div>
        <div><dt>${t(L.result)}</dt><dd>${t(e.grade)}</dd></div>
        <div>
          <dt>${t(L.coursework)}</dt>
          <dd><ul class="edu-points">${points}</ul></dd>
        </div>
        ${e.thesis ? `<div>
          <dt>${t(e.thesis.title)}</dt>
          <dd><a class="link-out" href="${e.thesis.url}" target="_blank" rel="noopener">${t(e.thesis.name)} ↗</a></dd>
        </div>` : ""}
      </dl>
    </article>`;
  }).join("");
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
    <div class="wrap">
      ${head("certifications")}
      <div class="cert-grid">${cards}</div>
      ${moreBtn(CV.certifications.length, t(UI.labels.nCerts))}
    </div>
  </section>`;
}

function renderContact() {
  const L = UI.labels;
  const handle = CV.meta.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  return `
  <section id="contact" class="section contact">
    <div class="wrap">
      <div class="contact-grid">
        <div class="reveal">
          <p class="kicker light">${t(UI.section.contact)}</p>
          <h2 class="contact-head">${t(CV.contact.heading)}</h2>
          <p class="contact-body">${t(CV.contact.body)}</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="mailto:${CV.meta.email}">${t(L.emailCta)}</a>
            <a class="btn btn-ghost" href="${CV.meta.cv}" download>${t(L.downloadFull)}</a>
          </div>
          <div class="cv-groups">
            <p class="mini-label light">${t(L.cvHeading)}</p>
            ${(CV.meta.cvs || []).map(g => `
              <div class="cv-group">
                <div class="cv-files">
                  <span class="cv-label">${t(g.label)}</span>
                  ${g.files.map(f => `<a href="${f.url}" download>${t(f.name)} ↓</a>`).join("")}
                </div>
                <p class="cv-note">${t(g.note)}</p>
              </div>`).join("")}
          </div>
        </div>
        <dl class="contact-list reveal">
          <div><dt>${t(L.email)}</dt><dd><a href="mailto:${CV.meta.email}">${CV.meta.email}</a></dd></div>
          <div><dt>${t(L.phone)}</dt><dd><a href="${CV.meta.phoneHref}">${CV.meta.phone}</a></dd></div>
          <div><dt>${t(L.linkedin)}</dt><dd><a href="${CV.meta.linkedin}" target="_blank" rel="noopener">${handle}&nbsp;↗</a></dd></div>
          <div><dt>${t(L.location)}</dt><dd>${t(CV.meta.location)}</dd></div>
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

/* mobile-only "show all" toggle for the long grids */
function moreBtn(count, label) {
  return `<button class="more" type="button"
    data-more="${t(UI.labels.showAll)} ${count} ${label}"
    data-less="${t(UI.labels.showLess)}">${t(UI.labels.showAll)} ${count} ${label}</button>`;
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
    renderProducts() + renderResearch() + renderSkills() + renderEducation() +
    renderCerts() + renderContact();
  wire();
  observe();
}

function wire() {
  if (typeof toTop !== "undefined") {
    toTop.title = t(UI.labels.toTop);
    toTop.setAttribute("aria-label", t(UI.labels.toTop));
  }
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
  document.querySelectorAll(".more").forEach(b => b.onclick = () => {
    const grid = b.previousElementSibling;
    const open = grid.classList.toggle("expanded");
    b.textContent = open ? b.dataset.less : b.dataset.more;
    if (!open) grid.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  const nav = document.getElementById("nav");
  document.getElementById("menuBtn").onclick = () => nav.classList.toggle("open");
  nav.querySelectorAll("a").forEach(a => a.onclick = () => nav.classList.remove("open"));
}

/* reveal on scroll + active nav link */
function observe() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".pgrid > *, .cert-grid > *, .ptable > *, .rq-list > *")
    .forEach((el, i) => el.style.transitionDelay = ((i % 3) * 0.08).toFixed(2) + "s");
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  const links = [...document.querySelectorAll(".nav-link")];
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("section[id]").forEach(s => spy.observe(s));

}

/* header state, reading progress and back-to-top: attached once */
const progress = document.createElement("div");
progress.id = "progress";
document.body.appendChild(progress);

const toTop = document.createElement("button");
toTop.id = "toTop";
toTop.type = "button";
toTop.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V6m0 0-6 6m6-6 6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`;
toTop.onclick = () => scrollTo({ top: 0, behavior: "smooth" });
document.body.appendChild(toTop);

const onScroll = () => {
  document.getElementById("header").classList.toggle("scrolled", scrollY > 40);
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  toTop.classList.toggle("show", scrollY > 700);
};
addEventListener("scroll", onScroll, { passive: true });
onScroll();

render();

/* ---------- slideshow + lightbox (wired once) ---------- */
const slidesOf = el => [...el.querySelectorAll(".slide")];

function step(box, dir) {
  const sl = slidesOf(box);
  if (sl.length < 2) return;
  const i = Math.max(0, sl.findIndex(x => x.classList.contains("on")));
  const n = (i + dir + sl.length) % sl.length;
  sl[i].classList.remove("on");
  sl[n].classList.add("on");
  const c = box.querySelector(".count b");
  if (c) c.textContent = n + 1;
}

/* all cards advance together; reduced-motion users get an instant swap (CSS) */
setInterval(() => {
  if (document.hidden || lb.classList.contains("open")) return;
  document.querySelectorAll(".pcard .slides").forEach(b => step(b, 1));
}, 4200);

/* lightbox element, built once */
const lb = document.createElement("div");
lb.id = "lb";
lb.innerHTML = `
  <button class="lb-close" aria-label="Close">✕</button>
  <button class="lb-nav lb-prev" aria-label="Previous">‹</button>
  <img class="lb-img" alt="">
  <button class="lb-nav lb-next" aria-label="Next">›</button>
  <div class="lb-bar"><span class="lb-cap"></span><span class="lb-count"></span></div>`;
document.body.appendChild(lb);

let lbSrcs = [], lbIndex = 0, lbCap = "";
const lbImg = lb.querySelector(".lb-img");

function lbShow(i) {
  lbIndex = (i + lbSrcs.length) % lbSrcs.length;
  lbImg.src = lbSrcs[lbIndex];
  lb.querySelector(".lb-cap").textContent = lbCap;
  lb.querySelector(".lb-count").textContent = lbSrcs.length > 1 ? `${lbIndex + 1} / ${lbSrcs.length}` : "";
  lb.querySelectorAll(".lb-nav").forEach(b => b.hidden = lbSrcs.length < 2);
}
function lbOpen(srcs, i, cap) {
  lbSrcs = srcs; lbCap = cap || "";
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
  lbShow(i);
}
function lbClose() {
  lb.classList.remove("open");
  document.body.style.overflow = "";
  lbImg.removeAttribute("src");
}

document.addEventListener("click", e => {
  const box = e.target.closest(".slides:not(.nolb)");
  if (box) {
    const sl = slidesOf(box);
    if (!sl.length) return;
    const card = box.closest(".pcard, .prod");
    const cap = card ? (card.querySelector("h3, h4")?.textContent || "") : "";
    lbOpen(sl.map(x => x.src), Math.max(0, sl.findIndex(x => x.classList.contains("on"))), cap);
    return;
  }
  if (e.target.closest(".lb-prev")) return lbShow(lbIndex - 1);
  if (e.target.closest(".lb-next")) return lbShow(lbIndex + 1);
  if (e.target.closest(".lb-close") || e.target === lb) lbClose();
});

addEventListener("keydown", e => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") lbClose();
  if (e.key === "ArrowLeft") lbShow(lbIndex - 1);
  if (e.key === "ArrowRight") lbShow(lbIndex + 1);
});
