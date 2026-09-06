/* =============================================================
   ALL CONTENT LIVES HERE. Edit this file only.
   Every text field is { en: "...", id: "..." } (English / Indonesia).
   Images: drop files into assets/img/... and put the path in `image`
   or `images: []`. Missing images degrade gracefully (no broken icon).
   ============================================================= */

const CV = {

  /* ---------- 1. IDENTITY ---------- */
  meta: {
    name: "Aditya Bayu Pratama",
    initials: "AB",
    role: {
      en: "Supervisor MES & IT Engineer",
      id: "Supervisor MES & IT Engineer"
    },
    tagline: {
      en: "Smart Manufacturing · Industry 4.0 · Enterprise Systems",
      id: "Smart Manufacturing · Industri 4.0 · Sistem Enterprise"
    },
    location: { en: "Batam, Indonesia", id: "Batam, Indonesia" },
    phone: "+62 882 7145 2089",
    phoneHref: "tel:+6288271452089",
    email: "adityabayupratama13@gmail.com",
    linkedin: "https://www.linkedin.com/in/aditya-bayu-pratama-00561314a",
    photo: "assets/img/profile/aditya.jpg",     // drop your photo here
    cv: "assets/docs/Aditya Bayu Pratama_CV_2Page.pdf",
    cvShort: "assets/docs/Aditya Bayu Pratama_CV_1Page.pdf"
  },

  /* ---------- 2. HERO ---------- */
  hero: {
    kicker: { en: "Software & IT Engineering Leadership", id: "Kepemimpinan Software & IT Engineering" },
    headline: {
      en: "Turning factory floors into connected, data-driven systems.",
      id: "Mengubah lantai produksi menjadi sistem terkoneksi berbasis data."
    },
    intro: {
      en: "7+ years architecting Manufacturing Execution Systems, Industrial IoT and machine vision for high-precision electronics and oil & gas. Two-time global 1st place winner of the Giken Value Engineering Award.",
      id: "7+ tahun merancang Manufacturing Execution System, Industrial IoT, dan machine vision untuk industri elektronik presisi tinggi serta oil & gas. Dua kali Juara 1 global Giken Value Engineering Award."
    },
    ctaPrimary: { en: "View Experience", id: "Lihat Pengalaman" },
    ctaSecondary: { en: "Download CV", id: "Unduh CV" }
  },

  /* ---------- 3. HEADLINE METRICS ---------- */
  metrics: [
    { value: "7+",    label: { en: "Years in smart manufacturing", id: "Tahun di bidang smart manufacturing" } },
    { value: "500+",  label: { en: "Product models governed by MES", id: "Model produk dikelola oleh MES" } },
    { value: "5",     label: { en: "Engineers led & mentored", id: "Engineer dipimpin & dibina" } },
    { value: "99.9%", label: { en: "Core server uptime sustained", id: "Uptime server inti yang terjaga" } }
  ],

  /* ---------- 4. PROFILE ---------- */
  profile: {
    heading: {
      en: "A solution-focused engineer working where hardware, enterprise software and operations meet.",
      id: "Engineer berorientasi solusi yang bekerja di titik temu hardware, software enterprise, dan operasional."
    },
    body: [
      {
        en: "Results-driven Supervisor MES & IT Engineer with more than seven years of expertise in Manufacturing Execution Systems, Industrial IoT, machine vision and smart factory automation across high-precision electronics and the oil & gas sector.",
        id: "Supervisor MES & IT Engineer yang berorientasi hasil dengan pengalaman lebih dari tujuh tahun di bidang Manufacturing Execution System, Industrial IoT, machine vision, dan otomasi smart factory pada industri elektronik presisi tinggi serta sektor oil & gas."
      },
      {
        en: "Proven track record of scaling an IT department from a solo role into a five-engineer team, architecting custom C#/.NET enterprise solutions governing 500+ product models, and executing high-stakes Industry 4.0 digital transformations end to end.",
        id: "Rekam jejak nyata dalam mengembangkan departemen IT dari satu orang menjadi tim beranggotakan lima engineer, merancang solusi enterprise C#/.NET untuk 500+ model produk, dan menjalankan transformasi digital Industri 4.0 secara menyeluruh."
      },
      {
        en: "Holds a Bachelor of Applied Science in Mechatronics Engineering (Cum Laude, GPA 3.81) and is adept at bridging embedded hardware, enterprise software and AI-driven automation.",
        id: "Lulusan Sarjana Terapan Teknik Mekatronika (Cum Laude, IPK 3,81) dan terbiasa menjembatani hardware embedded, software enterprise, serta otomasi berbasis AI."
      }
    ],
    facts: [
      { k: { en: "Current role", id: "Posisi saat ini" }, v: { en: "Supervisor MES & IT Engineer — Giken Precision Indonesia", id: "Supervisor MES & IT Engineer — Giken Precision Indonesia" } },
      { k: { en: "Based in", id: "Domisili" },            v: { en: "Batam, Riau Islands, Indonesia", id: "Batam, Kepulauan Riau, Indonesia" } },
      { k: { en: "Work mode", id: "Mode kerja" },         v: { en: "On-site · Hybrid · Remote", id: "On-site · Hybrid · Remote" } },
      { k: { en: "Languages", id: "Bahasa" },             v: { en: "Indonesian (native) · English (professional)", id: "Indonesia (asli) · Inggris (profesional)" } }
    ]
  },

  /* ---------- 5. AWARDS ---------- */
  awards: [
    {
      year: "2025",
      title: { en: "1st Place — Giken Global Value Engineering", id: "Juara 1 — Giken Global Value Engineering" },
      desc: {
        en: "Top global prize for Intelligent Machine Data, optimising real-time analytics and production line efficiency.",
        id: "Penghargaan global tertinggi untuk Intelligent Machine Data, mengoptimalkan analitik real-time dan efisiensi lini produksi."
      }
    },
    {
      year: "2023",
      title: { en: "1st Place — Giken Global Value Engineering", id: "Juara 1 — Giken Global Value Engineering" },
      desc: {
        en: "Won 1st place on the first entry with a Manufacturing Traceability System that eliminated defect passage across lines.",
        id: "Juara 1 pada keikutsertaan pertama dengan Manufacturing Traceability System yang menghilangkan lolosnya defect antar lini."
      }
    }
  ],

  /* ---------- 6. EXPERIENCE ---------- */
  experience: [
    {
      company: "Giken Precision Indonesia",
      logo: "assets/img/experience/giken.png",
      companyUrl: "https://www.linkedin.com/company/giken-precision-indonesia-pt/",
      location: { en: "Batam, Indonesia · On-site", id: "Batam, Indonesia · On-site" },
      period: { en: "Apr 2019 — Present", id: "Apr 2019 — Sekarang" },
      role: { en: "Supervisor MES & IT Engineer", id: "Supervisor MES & IT Engineer" },
      subroles: { en: "", id: "" },
      /* career progression inside the company — newest first.
         Edit a `period` here whenever a title or date changes. */
      roles: [
        {
          title: { en: "Supervisor MES & IT Engineer", id: "Supervisor MES & IT Engineer" },
          period: { en: "Jul 2026 — Present", id: "Jul 2026 — Sekarang" },
          note: {
            en: "Promoted to supervise the MES & IT engineering function: setting the system roadmap and architecture standards, prioritising projects across production and support, owning the department budget, and developing the engineers who deliver them.",
            id: "Dipromosikan untuk mengawasi fungsi engineering MES & IT: menetapkan peta jalan sistem dan standar arsitektur, memprioritaskan proyek lintas produksi dan support, mengelola anggaran departemen, serta membina para engineer yang mengerjakannya."
          },
          current: true
        },
        {
          title: { en: "Lead Software & IT Engineer", id: "Lead Software & IT Engineer" },
          period: { en: "Apr 2019 — Jun 2026", id: "Apr 2019 — Jun 2026" },
          note: {
            en: "Started as the sole software and IT engineer, then grew the function into a five-engineer team while architecting the MES, the Giken One web platform and the plant's data infrastructure.",
            id: "Memulai sebagai satu-satunya software dan IT engineer, lalu mengembangkan fungsi tersebut menjadi tim beranggotakan lima engineer sambil merancang MES, platform web Giken One, dan infrastruktur data pabrik."
          }
        },
        {
          title: { en: "Software Test Engineer", id: "Software Test Engineer" },
          period: { en: "Apr 2019 — Apr 2024", id: "Apr 2019 — Apr 2024" },
          note: {
            en: "Machine testing software for new products, trial runs and translating customer requirements into test criteria.",
            id: "Software pengujian mesin untuk produk baru, uji coba produksi, serta menerjemahkan kebutuhan pelanggan menjadi kriteria pengujian."
          }
        },
        {
          title: { en: "New Product Introduction Engineer", id: "New Product Introduction Engineer" },
          period: { en: "Apr 2019 — Sep 2021", id: "Apr 2019 — Sep 2021" },
          note: {
            en: "Study of new electronics projects: FMEA, 5M change management, BOM lists and QCPC, product trials and production problem solving.",
            id: "Kajian proyek elektronik baru: FMEA, manajemen perubahan 5M, daftar BOM dan QCPC, uji coba produk, serta penyelesaian masalah produksi."
          }
        }
      ],
      summary: {
        en: "Responsible for the MES and IT roadmap of a high-precision electronics plant — its architecture, delivery, infrastructure and the engineering team behind it.",
        id: "Bertanggung jawab atas peta jalan MES dan IT di pabrik elektronik presisi tinggi — mulai dari arsitektur, pengembangan, infrastruktur, hingga tim engineering di belakangnya."
      },
      bullets: [
        {
          t: { en: "Enterprise MES architecture (C# & SQL)", id: "Arsitektur MES enterprise (C# & SQL)" },
          d: { en: "Designed and deployed a custom Windows-based Manufacturing Execution System now governing 500+ product models across automotive, medical and consumer electronics lines, enforcing Pokayoke defect prevention and CTQ quality compliance.",
               id: "Merancang dan menerapkan Manufacturing Execution System berbasis Windows yang kini mengelola 500+ model produk pada lini otomotif, medis, dan elektronik konsumen, dengan penerapan Pokayoke dan kepatuhan kualitas CTQ." }
        },
        {
          t: { en: "Digital transformation web platform (React.js / MySQL)", id: "Platform web transformasi digital (React.js / MySQL)" },
          d: { en: "Built an enterprise-wide web application digitising legacy manual workflows: employee records, departmental org charts, overtime approvals, ticketing and project scheduling.",
               id: "Membangun aplikasi web perusahaan yang mendigitalkan alur kerja manual: data karyawan, struktur organisasi, persetujuan lembur, ticketing, dan penjadwalan proyek." }
        },
        {
          t: { en: "Industrial IoT gate & ESD safety automation", id: "Gate Industrial IoT & otomasi keselamatan ESD" },
          d: { en: "Built an automated ESD wristband monitoring gate with Arduino, C# and MySQL that enforces 100% compliance before line entry and tracks wristband defect rates.",
               id: "Membangun auto-gate pemantau wristband ESD berbasis Arduino, C#, dan MySQL yang memastikan kepatuhan 100% sebelum masuk lini sekaligus memantau tingkat kerusakan wristband." }
        },
        {
          t: { en: "Automated thermal label printing pipeline", id: "Pipeline cetak label termal otomatis" },
          d: { en: "Streamlined QR-code label printing across new electronic lines with a direct C# and SQL interface to thermal printers, eliminating printing delays.",
               id: "Menyederhanakan pencetakan label QR di lini elektronik baru melalui antarmuka C# dan SQL langsung ke thermal printer, menghilangkan keterlambatan cetak." }
        },
        {
          t: { en: "Centralised data storage & infrastructure security", id: "Sentralisasi penyimpanan data & keamanan infrastruktur" },
          d: { en: "Established centralised network file servers across all departments, preventing data loss from drive failure and improving cross-department collaboration.",
               id: "Membangun server berbagi berkas terpusat untuk seluruh departemen, mencegah kehilangan data akibat kerusakan hard disk dan meningkatkan kolaborasi antar departemen." }
        },
        {
          t: { en: "IT team leadership & department growth", id: "Kepemimpinan tim IT & pertumbuhan departemen" },
          d: { en: "Recruited, mentored and scaled the software and IT engineering department from a solo role into a five-engineer team, managing NPI testing and digital infrastructure.",
               id: "Merekrut, membina, dan mengembangkan departemen software & IT engineering dari satu orang menjadi tim lima engineer, mengelola pengujian NPI dan infrastruktur digital." }
        },
        {
          t: { en: "Mission-critical incident response", id: "Penanganan insiden kritis" },
          d: { en: "Contained a worm malware outbreak across 20 laptops within 3 hours with no production downtime; diagnosed kernel and power faults on core MySQL servers to sustain 99.9% uptime; resolved factory network outages under 15-minute SLAs.",
               id: "Menangani dan menuntaskan serangan malware worm pada 20 laptop dalam 3 jam tanpa menghentikan produksi; mendiagnosis gangguan kernel dan daya pada server MySQL inti sehingga uptime terjaga di 99,9%; memulihkan gangguan jaringan pabrik dalam SLA 15 menit." }
        }
      ],
      tags: ["C# / .NET", "MySQL", "React.js", "MES", "IIoT", "Arduino", "Network Infrastructure", "Team Leadership"],
      images: []   // e.g. ["assets/img/experience/mes-dashboard.png", "assets/img/experience/line.jpg"]
    },
    {
      company: "Cladtek Bi-Metal Manufacturing",
      logo: "assets/img/experience/cladtek.png",
      companyUrl: "https://www.linkedin.com/company/cladtek/",
      location: { en: "Batam, Indonesia · On-site", id: "Batam, Indonesia · On-site" },
      period: { en: "Apr 2018 — Jan 2019", id: "Apr 2018 — Jan 2019" },
      role: { en: "Junior Programmer — R&D Department", id: "Junior Programmer — Departemen R&D" },
      subroles: { en: "", id: "" },
      summary: {
        en: "Research and development for automated weld inspection in the oil & gas pipe manufacturing chain.",
        id: "Riset dan pengembangan inspeksi las otomatis pada rantai produksi pipa oil & gas."
      },
      bullets: [
        {
          t: { en: "Autonomous welding defect inspection robot", id: "Robot inspeksi defect pengelasan otonom" },
          d: { en: "Built a pipe-inspection robot with C#, Raspberry Pi, Lidar and specialised light sensors that navigates autonomously inside industrial pipes, streaming live video while calculating the location and severity of each weld defect.",
               id: "Membangun robot inspeksi pipa berbasis C#, Raspberry Pi, Lidar, dan sensor cahaya khusus yang bernavigasi otonom di dalam pipa industri sambil mengirim video langsung serta menghitung lokasi dan tingkat keparahan setiap cacat las." }
        },
        {
          t: { en: "High-speed data acquisition protocols", id: "Protokol akuisisi data berkecepatan tinggi" },
          d: { en: "Developed low-latency transmission pipelines connecting embedded hardware sensors to central servers for real-time welding QA evaluation.",
               id: "Mengembangkan jalur transmisi latensi rendah yang menghubungkan sensor embedded ke server pusat untuk evaluasi QA pengelasan secara real-time." }
        }
      ],
      tags: ["C#", "Raspberry Pi", "Lidar", "Machine Vision", "DAQ"],
      images: []
    }
  ],

  /* ---------- 7. PROJECTS ----------
     images: [] -> slideshow on the card, click opens the lightbox
     points: [] -> card without images, rendered as a list
     link / video -> card becomes clickable / shows a play badge */
  projects: [
    {
      title: { en: "Manufacturing Traceability System — Giken One MES", id: "Manufacturing Traceability System — Giken One MES" },
      category: { en: "Award-winning · MES", id: "Peraih penghargaan · MES" },
      year: "2019 — Present",
      desc: {
        en: "The plant-wide MES: production dashboards per assembly line, full unit traceback, SMT refill control and Pokayoke enforcement across 500+ product models. 1st place globally at the Giken Value Engineering Award 2023.",
        id: "MES untuk seluruh pabrik: dashboard produksi per lini perakitan, traceback unit menyeluruh, kontrol refill SMT, dan penerapan Pokayoke pada 500+ model produk. Juara 1 global Giken Value Engineering Award 2023."
      },
      tags: ["C# / .NET", "MySQL", "Traceability", "Pokayoke", "Dashboard"],
      images: [
        "assets/img/projects/manufacturing-traceability-system-2019-until-now/01-1-giken-one-mes-apps.png",
        "assets/img/projects/manufacturing-traceability-system-2019-until-now/02-1a-layout.png",
        "assets/img/projects/manufacturing-traceability-system-2019-until-now/03-2-production-final-assembly-dashboard.png",
        "assets/img/projects/manufacturing-traceability-system-2019-until-now/04-2a-traceback.png",
        "assets/img/projects/manufacturing-traceability-system-2019-until-now/05-3-production-final-assembly-dashboard-details.png",
        "assets/img/projects/manufacturing-traceability-system-2019-until-now/06-4-smt-material-refill-system.png",
        "assets/img/projects/manufacturing-traceability-system-2019-until-now/07-5-investment-cost.png"
      ]
    },
    {
      title: { en: "Intelligent Machine Data", id: "Intelligent Machine Data" },
      category: { en: "Award-winning · Industry 4.0", id: "Peraih penghargaan · Industri 4.0" },
      year: "2025",
      desc: {
        en: "Real-time machine data acquisition and analytics that replaced manual reporting with live line-efficiency and downtime visibility. 1st place globally at the Giken Value Engineering Award 2025.",
        id: "Akuisisi dan analitik data mesin real-time yang menggantikan pelaporan manual dengan visibilitas efisiensi lini dan downtime secara langsung. Juara 1 global Giken Value Engineering Award 2025."
      },
      tags: ["IIoT", "Data Acquisition", "Analytics", "C#", "MySQL"],
      images: [
        "assets/img/projects/intelligent-machine-data-2025/01-1-title.png",
        "assets/img/projects/intelligent-machine-data-2025/02-2-focus-point.png",
        "assets/img/projects/intelligent-machine-data-2025/03-3-target-point.png",
        "assets/img/projects/intelligent-machine-data-2025/04-4-brainstorming.png",
        "assets/img/projects/intelligent-machine-data-2025/05-5-schedule.png",
        "assets/img/projects/intelligent-machine-data-2025/06-6-working-concepts-before-improvement.png",
        "assets/img/projects/intelligent-machine-data-2025/07-7-working-concepts-afterimprovement.png",
        "assets/img/projects/intelligent-machine-data-2025/08-8-stage-1.png",
        "assets/img/projects/intelligent-machine-data-2025/09-9-stage-2.png",
        "assets/img/projects/intelligent-machine-data-2025/10-10-result.png",
        "assets/img/projects/intelligent-machine-data-2025/11-11-summary.png"
      ]
    },
    {
      title: { en: "Digital Feeder Inventory & Tracking", id: "Inventori & Pelacakan Feeder Digital" },
      category: { en: "Giken One Apps · Asset Control", id: "Giken One Apps · Kontrol Aset" },
      year: "2026",
      desc: {
        en: "Real-time feeder location and asset control on Giken One: it links the pick-up material database to the refill system and tracks every feeder down to area → line → machine → table → feeder number. A process with no inventory system at all became real-time, with near-zero manpower.",
        id: "Kontrol aset dan lokasi feeder real-time di atas Giken One: menghubungkan database pick-up material dengan sistem refill dan melacak setiap feeder hingga area → line → mesin → table → nomor feeder. Proses yang sebelumnya tanpa sistem inventori kini real-time dengan manpower mendekati nol."
      },
      tags: ["Giken One", "Asset Tracking", "Dashboard", "MySQL", "Security"],
      images: [
        "assets/img/projects/digitalization-and-security-feeder-calibrations-data-2026/01-1.png",
        "assets/img/projects/digitalization-and-security-feeder-calibrations-data-2026/02-2.png",
        "assets/img/projects/digitalization-and-security-feeder-calibrations-data-2026/03-3.png"
      ]
    },
    {
      title: { en: "Auto Feeder Machine Data Generator", id: "Auto Feeder Machine Data Generator" },
      category: { en: "Process Digitalisation", id: "Digitalisasi Proses" },
      year: "2026",
      desc: {
        en: "Digitalised the SMT feeder data flow across four roles. Manual preparation and verification of 5–7 hours with 4–6 people became a 30-minute automated flow — cycle time down by roughly 93%.",
        id: "Mendigitalkan alur data feeder SMT lintas empat peran. Persiapan dan verifikasi manual 5–7 jam dengan 4–6 orang menjadi alur otomatis 30 menit — cycle time turun sekitar 93%."
      },
      tags: ["Automation", "SMT", "Workflow", "Giken One"],
      images: [
        "assets/img/projects/auto-feeder-machine-generator-2026/01-1-comparison.png",
        "assets/img/projects/auto-feeder-machine-generator-2026/02-2-smt-feeder-data-auto-generate-new.png",
        "assets/img/projects/auto-feeder-machine-generator-2026/03-3-smt-feeder-data-auto-generate-2.png"
      ]
    },
    {
      title: { en: "SMT Pick-Up Material Analytics Dashboard", id: "Dashboard Analitik Pick-Up Material SMT" },
      category: { en: "Data Engineering · Quality", id: "Data Engineering · Kualitas" },
      year: "2026",
      desc: {
        en: "Automated collection and analysis of component pick-up data across 23 SMT lines: 7.9 million pickups, error rate and spoilage PPM per line and machine, high-risk feeder detection and one-click export to Excel, PDF or email.",
        id: "Pengumpulan dan analisis otomatis data pick-up komponen di 23 lini SMT: 7,9 juta pickup, error rate dan spoilage PPM per lini maupun mesin, deteksi feeder berisiko tinggi, serta ekspor sekali klik ke Excel, PDF, atau email."
      },
      tags: ["Analytics", "SMT", "Dashboard", "MySQL", "Reporting"],
      images: [
        "assets/img/projects/automations-collect-and-analysis-dashboard-smt-pickup-material-2026/01-1.png",
        "assets/img/projects/automations-collect-and-analysis-dashboard-smt-pickup-material-2026/02-2.png"
      ]
    },
    {
      title: { en: "Digital Wristband ESD Auto Checker", id: "Digital Wristband ESD Auto Checker" },
      category: { en: "Industrial IoT · Safety", id: "Industrial IoT · Keselamatan" },
      year: "2020",
      desc: {
        en: "Automated ESD wristband checking gate built with Arduino, C# and MySQL. Every operator is verified before entering the line, giving 100% compliance and a record of wristband hardware defect rates.",
        id: "Gate pemeriksaan wristband ESD otomatis berbasis Arduino, C#, dan MySQL. Setiap operator diverifikasi sebelum masuk lini, menghasilkan kepatuhan 100% dan catatan tingkat kerusakan perangkat wristband."
      },
      tags: ["Arduino", "C#", "MySQL", "IIoT", "ESD"],
      images: [
        "assets/img/projects/digital-wristband-esd-auto-checker-2020/01-1.png",
        "assets/img/projects/digital-wristband-esd-auto-checker-2020/02-2.png",
        "assets/img/projects/digital-wristband-esd-auto-checker-2020/03-3.png"
      ]
    },
    {
      title: { en: "Centralisation Data Management", id: "Sentralisasi Manajemen Data" },
      category: { en: "IT Infrastructure", id: "Infrastruktur IT" },
      year: "2020",
      desc: {
        en: "Moved the plant from manual books and data scattered on individual computers to centralised storage on servers and network shares — no more data lost to a single failed drive, less paper, and documents searchable across departments.",
        id: "Memindahkan pabrik dari buku manual dan data yang tersebar di tiap komputer menuju penyimpanan terpusat di server dan jaringan — data tidak lagi hilang karena satu hard disk rusak, biaya kertas turun, dan dokumen mudah dicari lintas departemen."
      },
      tags: ["Server", "Network", "Data Management", "Security"],
      images: [
        "assets/img/projects/centralization-data-management-2020/01-1-concepts.png",
        "assets/img/projects/centralization-data-management-2020/02-2-concepts.png"
      ]
    },
    {
      title: { en: "Multiple Remote Desktop Protocol (MRDP)", id: "Multiple Remote Desktop Protocol (MRDP)" },
      category: { en: "IT Infrastructure", id: "Infrastruktur IT" },
      year: "2021",
      desc: {
        en: "Remote access architecture letting one Windows host be reached from every operating system in the plant — Windows, Linux, Raspberry Pi, Android and iOS — so machines and servers can be supported without walking the floor.",
        id: "Arsitektur akses jarak jauh yang memungkinkan satu host Windows diakses dari seluruh sistem operasi di pabrik — Windows, Linux, Raspberry Pi, Android, dan iOS — sehingga mesin dan server dapat ditangani tanpa harus berkeliling lantai produksi."
      },
      tags: ["RDP", "Linux", "Raspberry Pi", "Network"],
      images: [
        "assets/img/projects/multiple-remote-desktop-protocol-mrdp-2021/01-1-intro.png",
        "assets/img/projects/multiple-remote-desktop-protocol-mrdp-2021/02-2-concepts.png",
        "assets/img/projects/multiple-remote-desktop-protocol-mrdp-2021/03-3-roadmap.png",
        "assets/img/projects/multiple-remote-desktop-protocol-mrdp-2021/04-4-trial.png"
      ]
    },
    {
      title: { en: "AI-Driven Grid Trading Application", id: "Aplikasi Grid Trading Berbasis AI" },
      category: { en: "Personal · AI & Fintech", id: "Personal · AI & Fintech" },
      year: "2026",
      desc: {
        en: "High-frequency grid trading bot built with React.js and the Telegram Bot API, using zero-reasoning AI models for ultra-low-latency execution on market sentiment, technical indicators and Binance API data.",
        id: "Bot grid trading frekuensi tinggi berbasis React.js dan Telegram Bot API, memakai model AI zero-reasoning untuk eksekusi berlatensi sangat rendah berdasarkan sentimen pasar, indikator teknikal, dan data Binance API."
      },
      tags: ["React.js", "Telegram Bot API", "Binance API", "AI"],
      images: [
        "assets/img/projects/ai-driven-grid-trading-2026/01-robot-trading-dashboard.jpg",
        "assets/img/projects/ai-driven-grid-trading-2026/02-robot-trading-feature.jpg",
        "assets/img/projects/ai-driven-grid-trading-2026/03-robot-trading-presentations.jpg"
      ]
    },
    {
      title: { en: "LabVIEW AOI PCB Inspection System", id: "Sistem Inspeksi PCB AOI LabVIEW" },
      category: { en: "Machine Vision · Video", id: "Machine Vision · Video" },
      year: "2021",
      desc: {
        en: "Automated Optical Inspection algorithm in LabVIEW Vision detecting missing or misaligned components on PCB assembly lines, cutting manual QA headcount and standard production time. Watch the system running on YouTube.",
        id: "Algoritma Automated Optical Inspection di LabVIEW Vision untuk mendeteksi komponen hilang atau tidak sejajar pada lini perakitan PCB, memangkas kebutuhan QA manual dan waktu produksi standar. Lihat sistemnya berjalan di YouTube."
      },
      tags: ["LabVIEW", "Vision", "AOI", "Quality"],
      video: true,
      image: "https://img.youtube.com/vi/AfsoS-FMV7E/maxresdefault.jpg",
      link: "https://youtu.be/AfsoS-FMV7E"
    },
    {
      title: { en: "IoT Emergency Response & Human Finder Robot", id: "Robot Tanggap Darurat & Pencari Korban IoT" },
      category: { en: "Robotics · IoT", id: "Robotika · IoT" },
      year: "2021",
      desc: {
        en: "Wireless rescue robot for hazardous sites. Thermal, gas, smoke and PIR sensors plus a live camera feed a Node-RED dashboard and an Android app.",
        id: "Robot penyelamat nirkabel untuk lokasi berbahaya. Sensor termal, gas, asap, dan PIR serta kamera langsung mengalir ke dashboard Node-RED dan aplikasi Android."
      },
      /* drop the Node-RED dashboard screenshot in assets/img/projects/iot-rescue-robot/
         and list it here to turn this card into a slideshow */
      images: ["assets/img/projects/iot-rescue-robot/01-dashboard.jpg"],
      flow: ["Camera + Sensors", "Raspberry Pi", "API Communication", "Node-RED + Android App"],
      tags: ["Raspberry Pi", "Arduino", "Sensors", "Streaming"]
    },
    {
      title: { en: "Two Wheels Balancing Robot (Remote Control)", id: "Robot Penyeimbang Dua Roda (Remote Control)" },
      category: { en: "Control Systems · Video", id: "Sistem Kendali · Video" },
      year: "2020",
      desc: {
        en: "Self-balancing two-wheeled robot built on Arduino: an IMU feeds a PID control loop that holds the chassis upright while the robot is driven by remote control. Watch it balancing and driving on YouTube.",
        id: "Robot dua roda yang menyeimbangkan diri berbasis Arduino: IMU menjadi masukan bagi loop kendali PID yang menjaga sasis tetap tegak sementara robot dikemudikan lewat remote control. Lihat aksinya di YouTube."
      },
      tags: ["Arduino", "PID Control", "IMU", "Robotics"],
      video: true,
      image: "https://img.youtube.com/vi/ftbygNLeoSw/maxresdefault.jpg",
      link: "https://youtu.be/ftbygNLeoSw"
    },
    {
      title: { en: "Smart Multi-Biometric Access Controller", id: "Pengendali Akses Multi-Biometrik" },
      category: { en: "Computer Vision · Security", id: "Computer Vision · Keamanan" },
      year: "2020",
      desc: {
        en: "Automated door-lock ecosystem with four independent identification methods and full access logging.",
        id: "Ekosistem kunci pintu otomatis dengan empat metode identifikasi independen dan pencatatan akses lengkap."
      },
      points: [
        { en: "Facial recognition built in Python with OpenCV", id: "Pengenalan wajah dibangun dengan Python dan OpenCV" },
        { en: "Fingerprint validation and RFID card reading", id: "Validasi sidik jari dan pembacaan kartu RFID" },
        { en: "PIN passcode fallback for every user", id: "Cadangan PIN untuk setiap pengguna" },
        { en: "MySQL logging of every access attempt", id: "Pencatatan setiap percobaan akses di MySQL" }
      ],
      tags: ["Python", "OpenCV", "RFID", "MySQL"]
    }
  ],

  /* ---------- 7b. PRODUCT IMPLEMENTATIONS ---------- */
  products: {
    intro: {
      en: "Every product below runs on a production line I handled at Giken Precision Indonesia: I built its traceability system and digitalised the process behind it, from high-end electronics to certified medical devices.",
      id: "Setiap produk di bawah ini berjalan pada lini produksi yang saya tangani di Giken Precision Indonesia: saya membangun sistem traceability-nya dan mendigitalkan proses di baliknya, dari elektronik high-end hingga perangkat medis bersertifikasi."
    },
    categories: [
      {
        name: { en: "High-End Products", id: "Produk High-End" },
        companies: [
          { name: "PreAct Technologies", logo: "assets/img/products/pre-act/logo.png",
            items: [{ name: { en: "LiDAR Camera", id: "Kamera LiDAR" }, image: "assets/img/products/pre-act/1-lidar-camera-product.jpg" }] },
          { name: "AOHAI", logo: "assets/img/products/aohai/logo.png",
            items: [{ name: { en: "Crypto Miner Machine", id: "Mesin Crypto Miner" }, image: "assets/img/products/aohai/1-crypto-miner-machine-product.jpg" }] },
          { name: "Bluetti", logo: "assets/img/products/bluetti/logo.png",
            items: [{ name: { en: "Portable Power Station", id: "Portable Power Station" }, image: "assets/img/products/bluetti/portable-power-station.png" }] }
        ]
      },
      {
        name: { en: "Medical Products", id: "Produk Medis" },
        companies: [
          { name: "Porticos Asia", logo: "assets/img/products/porticos/logo.png",
            items: [{ name: { en: "Cardiac Monitor", id: "Monitor Jantung" }, image: "assets/img/products/porticos/cardiac-monitor-product.png" }] },
          { name: "Philips", logo: "assets/img/products/philips/logo.jpg",
            items: [{ name: { en: "Electric Toothbrush", id: "Sikat Gigi Elektrik" }, image: "assets/img/products/philips/electric-toothbrush-product.jpg" }] }
        ]
      },
      {
        name: { en: "Industrial Products", id: "Produk Industri" },
        companies: [
          { name: "Toshiba", logo: "assets/img/products/toshiba/logo.jpg",
            items: [{ name: { en: "Thermal Printer", id: "Thermal Printer" }, image: "assets/img/products/toshiba/thermal-printer.jpg" }] }
        ]
      },
      {
        name: { en: "IoT Devices", id: "Perangkat IoT" },
        companies: [
          { name: "STYL Solutions", logo: "assets/img/products/styl-solutions/logo.png",
            items: [
              { name: { en: "NFC Reader", id: "NFC Reader" }, image: "assets/img/products/styl-solutions/nfc-reader.png" },
              { name: { en: "Tree Tilt Sensor", id: "Sensor Kemiringan Pohon" }, image: "assets/img/products/styl-solutions/tree-tilt-sensor.png" }
            ] }
        ]
      }
    ]
  },


  /* ---------- 7c. RESEARCH & INNOVATION ----------
     `answer` is optional: leave it out and the card shows the status tag
     instead. Fill it in when you have written the case up. */
  research: {
    headline: {
      en: "Two years of applied AI research, turned into systems that run on the factory floor.",
      id: "Dua tahun riset AI terapan, diwujudkan menjadi sistem yang berjalan di lantai produksi."
    },
    intro: [
      {
        en: "For the past two years I have followed AI research, releases and industry agendas closely — not as a spectator, but as a practitioner. Every model or technique worth trusting goes straight into how I work: in system design, in code, and in the daily decisions of running MES and IT.",
        id: "Dalam dua tahun terakhir saya mengikuti riset, rilis, dan agenda industri AI secara serius — bukan sebagai penonton, melainkan sebagai praktisi. Setiap model atau teknik yang layak dipercaya langsung saya terapkan dalam cara kerja saya: pada desain sistem, pada kode, dan pada keputusan harian mengelola MES dan IT."
      },
      {
        en: "With a background in manufacturing digital transformation and programming, AI has closed gaps that stayed open for years — problems that were previously blocked by the limits of one person's knowledge or time. Ideas that used to stall at the proposal stage now reach production.",
        id: "Dengan latar belakang transformasi digital manufaktur dan pemrograman, AI menutup celah yang bertahun-tahun terbuka — persoalan yang sebelumnya terhalang oleh keterbatasan pengetahuan atau waktu satu orang. Gagasan yang dulu berhenti di tahap usulan kini sampai ke produksi."
      },
      {
        en: "This section is my working log: the questions I am researching, the problems behind them, and the solutions as they take shape.",
        id: "Bagian ini adalah catatan kerja saya: pertanyaan yang sedang saya teliti, persoalan di baliknya, dan solusinya seiring terbentuk."
      }
    ],
    status: { en: "Write-up in progress", id: "Rangkuman sedang disusun" },
    items: [
      {
        q: { en: "How to get real-time Panasonic SMT NPM machine data?",
             id: "Bagaimana mendapatkan data mesin Panasonic SMT NPM secara real-time?" },
        note: { en: "Reading production data directly from the machine layer instead of manual logs and end-of-shift exports.",
                id: "Membaca data produksi langsung dari lapisan mesin, bukan dari catatan manual dan ekspor akhir shift." },
        tags: ["IIoT", "Panasonic NPM", "Data Acquisition"]
      },
      {
        q: { en: "How to read 100+ BOM formats and transform them into one general format?",
             id: "Bagaimana membaca 100+ format BOM dan mengubahnya menjadi satu format umum?" },
        note: { en: "Every customer sends a different bill of materials layout; the line needs a single normalised schema it can trust.",
                id: "Setiap pelanggan mengirim tata letak bill of materials yang berbeda; lini produksi membutuhkan satu skema baku yang dapat diandalkan." },
        tags: ["Data Parsing", "Normalisation", "AI-Assisted"]
      },
      {
        q: { en: "How to automatically link refill material, feeder calibration and material pickup?",
             id: "Bagaimana menghubungkan refill material, kalibrasi feeder, dan material pickup secara otomatis?" },
        note: { en: "Three systems, one physical feeder — giving it a single identity end to end makes traceability and asset control real.",
                id: "Tiga sistem, satu feeder fisik — memberinya satu identitas dari hulu ke hilir membuat traceability dan kontrol aset benar-benar berjalan." },
        tags: ["Traceability", "MES", "Asset Control"]
      }
    ]
  },

  /* ---------- 8. SKILLS ---------- */
  skills: [
    {
      group: { en: "Software & Languages", id: "Software & Bahasa Pemrograman" },
      items: ["C# (.NET Framework)", "SQL / MySQL", "Python", "React.js", "JavaScript", "C++", "LabVIEW",
              "Dart / Flutter", "R", "REST API"]
    },
    {
      group: { en: "Smart Manufacturing", id: "Smart Manufacturing" },
      items: ["MES Architecture", "Industrial IoT (IIoT)", "Pokayoke System", "AOI Machine Vision",
              "Thermal Print Automation", "Traceability", "SMT Line Analytics", "Feeder Asset Tracking", "Node-RED"]
    },
    {
      group: { en: "Hardware & Automation", id: "Hardware & Otomasi" },
      items: ["PLC (BNSP Certified)", "Raspberry Pi", "Arduino", "Lidar & Laser Sensors", "DAQ Systems", "SCADA", "PID Control"]
    },
    {
      group: { en: "AI & Modern Tooling", id: "AI & Perkakas Modern" },
      items: ["Claude Code", "Cursor", "Antigravity", "Codex", "LM Studio (local LLM)",
              "AI-Assisted Development", "Prompt Engineering", "LLM Integration",
              "Machine Learning Practice", "OpenCV / Computer Vision"]
    },
    {
      group: { en: "Engineering Quality", id: "Kualitas Engineering" },
      items: ["FMEA", "DMAIC", "Six Sigma Practices", "5M Change Management", "Value Engineering", "BOM & QCPC"]
    },
    {
      group: { en: "IT & Leadership", id: "IT & Kepemimpinan" },
      items: ["Team Recruitment & Management", "Department Budget Ownership", "Network Infrastructure",
              "Enterprise Server Maintenance", "DevOps Basics", "Incident Response", "Project Management"]
    }
  ],

  /* ---------- 9. EDUCATION ---------- */
  education: [
    {
      school: "State Polytechnic of Batam",
      logo: "assets/img/experience/polibatam.png",
      schoolUrl: "https://www.linkedin.com/school/politeknik-negeri-batam/",
      degree: { en: "Bachelor of Applied Science (S.Tr.T.) — Mechatronics, Robotics & Automation Engineering",
                id: "Sarjana Terapan (S.Tr.T.) — Teknik Mekatronika, Robotika & Otomasi" },
      period: { en: "Jul 2017 — Jul 2021", id: "Jul 2017 — Jul 2021" },
      grade: { en: "Graduated Cum Laude · GPA 3.81 / 4.00", id: "Lulus Cum Laude · IPK 3,81 / 4,00" },
      points: [
        { en: "Machine Vision (C# & LabVIEW)", id: "Machine Vision (C# & LabVIEW)" },
        { en: "Distributed Control System (DCS)", id: "Distributed Control System (DCS)" },
        { en: "Supervisory Control & Data Acquisition (SCADA)", id: "Supervisory Control & Data Acquisition (SCADA)" },
        { en: "Programmable Logic Controller (PLC)", id: "Programmable Logic Controller (PLC)" },
        { en: "Internet of Things (IoT)", id: "Internet of Things (IoT)" },
        { en: "Microprocessor & Microcontroller", id: "Mikroprosesor & Mikrokontroler" },
        { en: "Artificial Intelligence & Robotics", id: "Kecerdasan Buatan & Robotika" },
        { en: "Pneumatic & Hydraulic Automation", id: "Otomasi Pneumatik & Hidrolik" },
        { en: "C# & .NET Framework Programming", id: "Pemrograman C# & .NET Framework" },
        { en: "LabVIEW Programming", id: "Pemrograman LabVIEW" },
        { en: "PID Controller", id: "Kontroler PID" },
        { en: "Material Technology", id: "Teknologi Material" }
      ],
      thesis: {
        title: { en: "Final-year thesis journal", id: "Jurnal tugas akhir" },
        name: { en: "Read the published journal", id: "Baca jurnal yang dipublikasikan" },
        url: "https://drive.google.com/file/d/15KlJZh4uSoRouvgXIm53M1eEt6EKkfCK/view"
      }
    }
  ],

  /* ---------- 10. CERTIFICATIONS ----------
     `url` opens the credential. Empty url = card is not clickable.
     Verify each URL once; replace any that does not resolve. */
  certifications: [
    { name: { en: "Google Data Analytics Professional Certificate", id: "Google Data Analytics Professional Certificate" },
      issuer: "Coursera", date: { en: "Oct 2022", id: "Okt 2022" }, credential: "Z6FL9554JMKX",
      url: "https://www.coursera.org/account/accomplishments/certificate/Z6FL9554JMKX", featured: true },

    { name: { en: "Google Data Analytics Capstone: Complete a Case Study", id: "Google Data Analytics Capstone: Complete a Case Study" },
      issuer: "Coursera", date: { en: "Oct 2022", id: "Okt 2022" }, credential: "BWU4ZCQU4LC3",
      url: "https://www.coursera.org/account/accomplishments/certificate/BWU4ZCQU4LC3" },

    { name: { en: "Data Analysis with R Programming", id: "Data Analysis with R Programming" },
      issuer: "Coursera", date: { en: "Oct 2022", id: "Okt 2022" }, credential: "B6BKSQC9REJC",
      url: "https://www.coursera.org/account/accomplishments/certificate/B6BKSQC9REJC" },

    { name: { en: "Share Data Through the Art of Visualization", id: "Share Data Through the Art of Visualization" },
      issuer: "Coursera", date: { en: "Oct 2022", id: "Okt 2022" }, credential: "3AS4Z7KJ77AK",
      url: "https://www.coursera.org/account/accomplishments/certificate/3AS4Z7KJ77AK" },

    { name: { en: "Analyze Data to Answer Questions", id: "Analyze Data to Answer Questions" },
      issuer: "Coursera", date: { en: "Oct 2022", id: "Okt 2022" }, credential: "QLZA92S5KGYR",
      url: "https://www.coursera.org/account/accomplishments/certificate/QLZA92S5KGYR" },

    { name: { en: "Process Data from Dirty to Clean", id: "Process Data from Dirty to Clean" },
      issuer: "Coursera", date: { en: "Oct 2022", id: "Okt 2022" }, credential: "EVGYDGWD8B2M",
      url: "https://www.coursera.org/account/accomplishments/certificate/EVGYDGWD8B2M" },

    { name: { en: "Prepare Data for Exploration", id: "Prepare Data for Exploration" },
      issuer: "Coursera", date: { en: "Oct 2022", id: "Okt 2022" }, credential: "5T89LFP6P6S5",
      url: "https://www.coursera.org/account/accomplishments/certificate/5T89LFP6P6S5" },

    { name: { en: "Ask Questions to Make Data-Driven Decisions", id: "Ask Questions to Make Data-Driven Decisions" },
      issuer: "Coursera", date: { en: "Oct 2022", id: "Okt 2022" }, credential: "2AUJM57CVWLG",
      url: "https://www.coursera.org/account/accomplishments/certificate/2AUJM57CVWLG" },

    { name: { en: "Foundations: Data, Data, Everywhere", id: "Foundations: Data, Data, Everywhere" },
      issuer: "Coursera", date: { en: "Oct 2022", id: "Okt 2022" }, credential: "L9UU9VDLNN36",
      url: "https://www.coursera.org/account/accomplishments/certificate/L9UU9VDLNN36" },

    { name: { en: "Competency in Programmable Logic Controllers", id: "Sertifikat Kompetensi Programmable Logic Controller" },
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)", date: { en: "May 2019 — May 2022", id: "Mei 2019 — Mei 2022" },
      credential: "26510311400001512019", url: "", featured: true },

    { name: { en: "One-Phase Lighting and Power Installation Technician", id: "Teknisi Instalasi Penerangan dan Daya Fasa Satu" },
      issuer: "Lembaga Pengembangan Jasa Konstruksi (LPJK)", date: { en: "Jan 2020 — Jan 2023", id: "Jan 2020 — Jan 2023" },
      credential: "2.4.021.2.001.31.284754", url: "" },

    { name: { en: "Learn DevOps Basics", id: "Belajar Dasar DevOps" },
      issuer: "Dicoding Indonesia", date: { en: "Sep 2023", id: "Sep 2023" }, credential: "N9ZO5MGQRPG5",
      url: "https://www.dicoding.com/certificates/N9ZO5MGQRPG5" },

    { name: { en: "Learning Computer Networks for Beginners", id: "Belajar Jaringan Komputer untuk Pemula" },
      issuer: "Dicoding Indonesia", date: { en: "Oct 2023", id: "Okt 2023" }, credential: "4EXG4V54EPRL",
      url: "https://www.dicoding.com/certificates/4EXG4V54EPRL" },

    { name: { en: "Getting Started Programming with Dart", id: "Memulai Pemrograman dengan Dart" },
      issuer: "Dicoding Indonesia", date: { en: "Sep 2023", id: "Sep 2023" }, credential: "1RXY01J6KZVM",
      url: "https://www.dicoding.com/certificates/1RXY01J6KZVM" },

    { name: { en: "Learn to Make Flutter Apps for Beginners", id: "Belajar Membuat Aplikasi Flutter untuk Pemula" },
      issuer: "Dicoding Indonesia", date: { en: "Oct 2023", id: "Okt 2023" }, credential: "53XE4Q699ZRN",
      url: "https://www.dicoding.com/certificates/53XE4Q699ZRN" },

    { name: { en: "Automotive Expertise Technician Certificate", id: "Sertifikat Teknisi Keahlian Otomotif" },
      issuer: "Agung Toyota", date: { en: "Feb 2017", id: "Feb 2017" }, credential: "13468/109.7/SMK/AKD/11/2017", url: "" }
  ],

  /* ---------- 11. CONTACT ---------- */
  contact: {
    heading: { en: "Let's build the next system.", id: "Mari bangun sistem berikutnya." },
    body: {
      en: "Open to leadership and specialist roles in MES, smart manufacturing, industrial automation and enterprise IT — on-site, hybrid or remote.",
      id: "Terbuka untuk peran kepemimpinan maupun spesialis di bidang MES, smart manufacturing, otomasi industri, dan IT enterprise — on-site, hybrid, maupun remote."
    }
  }
};
