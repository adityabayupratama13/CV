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
      en: "Supervisor MES & IT",
      id: "Supervisor MES & IT"
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
      en: "Turning factory floors into<br>connected, data-driven systems.",
      id: "Mengubah lantai produksi menjadi<br>sistem terkoneksi berbasis data."
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
    { value: "7+",    label: { en: "Years in smart manufacturing", id: "Tahun di smart manufacturing" } },
    { value: "500+",  label: { en: "Product models governed by MES", id: "Model produk dikelola MES" } },
    { value: "5",     label: { en: "Engineers led & mentored", id: "Engineer dipimpin & dibina" } },
    { value: "99.9%", label: { en: "Core server uptime sustained", id: "Uptime server inti terjaga" } }
  ],

  /* ---------- 4. PROFILE ---------- */
  profile: {
    heading: {
      en: "A solution-focused engineer working where hardware, enterprise software and operations meet.",
      id: "Engineer berorientasi solusi yang bekerja di titik temu hardware, software enterprise, dan operasional."
    },
    body: [
      {
        en: "Results-driven Supervisor MES & IT with more than seven years of expertise in Manufacturing Execution Systems, Industrial IoT, machine vision and smart factory automation across high-precision electronics and the oil & gas sector.",
        id: "Supervisor MES & IT yang berorientasi hasil dengan pengalaman lebih dari tujuh tahun di bidang Manufacturing Execution System, Industrial IoT, machine vision, dan otomasi smart factory pada industri elektronik presisi tinggi serta sektor oil & gas."
      },
      {
        en: "Proven track record of scaling an IT department from a solo role into a five-engineer team, architecting custom C#/.NET enterprise solutions governing 500+ product models, and executing high-stakes Industry 4.0 digital transformations end to end.",
        id: "Rekam jejak nyata dalam mengembangkan departemen IT dari satu orang menjadi tim beranggotakan lima engineer, merancang solusi enterprise C#/.NET untuk 500+ model produk, dan menjalankan transformasi digital Industri 4.0 secara menyeluruh."
      },
      {
        en: "Holds a Bachelor of Applied Science in Mechatronics Engineering (Cum Laude, GPA 3.81) and is adept at bridging embedded hardware, enterprise software and AI-driven automation.",
        id: "Lulusan Sarjana Terapan Teknik Mekatronika (Cum Laude, IPK 3.81) dan terbiasa menjembatani hardware embedded, software enterprise, serta otomasi berbasis AI."
      }
    ],
    facts: [
      { k: { en: "Current role", id: "Posisi saat ini" }, v: { en: "Supervisor MES & IT — Giken Precision Indonesia", id: "Supervisor MES & IT — Giken Precision Indonesia" } },
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
      location: { en: "Batam, Indonesia · On-site", id: "Batam, Indonesia · On-site" },
      period: { en: "Apr 2019 — Present", id: "Apr 2019 — Sekarang" },
      role: { en: "Supervisor MES & IT", id: "Supervisor MES & IT" },
      subroles: {
        en: "Promoted from Lead Software & IT Engineer · Software & IT Engineer · Software Test Engineer · New Product Introduction Engineer",
        id: "Promosi dari Lead Software & IT Engineer · Software & IT Engineer · Software Test Engineer · New Product Introduction Engineer"
      },
      summary: {
        en: "Own the MES and IT roadmap for a high-precision electronics plant: architecture, delivery, infrastructure and the engineering team behind it.",
        id: "Bertanggung jawab atas roadmap MES dan IT di pabrik elektronik presisi tinggi: arsitektur, delivery, infrastruktur, serta tim engineering di belakangnya."
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
          d: { en: "Engineered an automated ESD wristband monitoring gate with Arduino, C# and MySQL, enforcing 100% compliance before line entry and tracking hardware defect rates.",
               id: "Merekayasa auto-gate pemantau wristband ESD berbasis Arduino, C#, dan MySQL yang memastikan kepatuhan 100% sebelum masuk lini serta memantau tingkat kerusakan perangkat." }
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
               id: "Menuntaskan wabah malware worm pada 20 laptop dalam 3 jam tanpa downtime produksi; mendiagnosis gangguan kernel dan power pada server MySQL inti hingga uptime 99,9%; menyelesaikan gangguan jaringan pabrik dalam SLA 15 menit." }
        }
      ],
      tags: ["C# / .NET", "MySQL", "React.js", "MES", "IIoT", "Arduino", "Network Infrastructure", "Team Leadership"],
      images: []   // e.g. ["assets/img/experience/mes-dashboard.png", "assets/img/experience/line.jpg"]
    },
    {
      company: "Cladtek Bi-Metal Manufacturing",
      logo: "assets/img/experience/cladtek.png",
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
          d: { en: "Engineered a pipe-inspection robot using C#, Raspberry Pi, Lidar and specialised light sensors to navigate autonomously inside industrial pipes, streaming live video while calculating defect location and severity.",
               id: "Merekayasa robot inspeksi pipa berbasis C#, Raspberry Pi, Lidar, dan sensor cahaya khusus yang bernavigasi otonom di dalam pipa industri, mengalirkan video langsung sekaligus menghitung lokasi dan tingkat keparahan defect." }
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

  /* ---------- 7. PROJECTS ---------- */
  projects: [
    {
      title: { en: "Manufacturing Traceability System", id: "Sistem Traceability Manufaktur" },
      category: { en: "Award-winning · MES", id: "Peraih penghargaan · MES" },
      year: "2023",
      desc: {
        en: "End-to-end traceability across production lines that eliminated defect passage between processes and won 1st place globally at the Giken Value Engineering Award.",
        id: "Traceability menyeluruh antar lini produksi yang menghilangkan lolosnya defect antar proses dan meraih Juara 1 global pada Giken Value Engineering Award."
      },
      tags: ["C#", "MySQL", "Pokayoke", "Traceability"],
      image: "assets/img/projects/traceability.jpg",
      link: ""
    },
    {
      title: { en: "Intelligent Machine Data", id: "Intelligent Machine Data" },
      category: { en: "Award-winning · Industry 4.0", id: "Peraih penghargaan · Industri 4.0" },
      year: "2025",
      desc: {
        en: "Real-time machine analytics platform optimising line efficiency and downtime visibility; 1st place globally at the Giken Value Engineering Award 2025.",
        id: "Platform analitik mesin real-time yang mengoptimalkan efisiensi lini dan visibilitas downtime; Juara 1 global Giken Value Engineering Award 2025."
      },
      tags: ["IIoT", "Data Acquisition", "Analytics", "C#"],
      image: "assets/img/projects/machine-data.jpg",
      link: ""
    },
    {
      title: { en: "AI-Driven Grid Trading Application", id: "Aplikasi Grid Trading Berbasis AI" },
      category: { en: "Personal · AI & Fintech", id: "Personal · AI & Fintech" },
      year: "2024",
      desc: {
        en: "High-frequency grid trading bot built with React.js and the Telegram Bot API, using zero-reasoning AI models for ultra-low-latency execution on market sentiment, technical indicators and Binance API data.",
        id: "Bot grid trading frekuensi tinggi berbasis React.js dan Telegram Bot API, memakai model AI zero-reasoning untuk eksekusi berlatensi sangat rendah berdasarkan sentimen pasar, indikator teknikal, dan data Binance API."
      },
      tags: ["React.js", "Telegram Bot API", "Binance API", "AI"],
      image: "assets/img/projects/grid-trading.jpg",
      link: ""
    },
    {
      title: { en: "LabVIEW AOI PCB Inspection System", id: "Sistem Inspeksi PCB AOI LabVIEW" },
      category: { en: "Machine Vision", id: "Machine Vision" },
      year: "2021",
      desc: {
        en: "Automated Optical Inspection algorithm in LabVIEW Vision detecting missing or misaligned components on PCB assembly lines, cutting manual QA headcount and standard production time.",
        id: "Algoritma Automated Optical Inspection di LabVIEW Vision untuk mendeteksi komponen hilang atau tidak sejajar pada lini perakitan PCB, memangkas kebutuhan QA manual dan waktu produksi standar."
      },
      tags: ["LabVIEW", "Vision", "AOI", "Quality"],
      image: "assets/img/projects/aoi.jpg",
      link: ""
    },
    {
      title: { en: "IoT Emergency Response & Human Finder Robot", id: "Robot Tanggap Darurat & Pencari Korban IoT" },
      category: { en: "Robotics · IoT", id: "Robotika · IoT" },
      year: "2021",
      desc: {
        en: "Raspberry Pi / Arduino wireless rescue robot with thermal, gas, smoke and PIR sensors plus live camera streaming, controlled from web and mobile apps for hazardous-environment search.",
        id: "Robot penyelamat nirkabel berbasis Raspberry Pi / Arduino dengan sensor termal, gas, asap, dan PIR serta streaming kamera langsung, dikendalikan dari aplikasi web dan mobile untuk pencarian di lingkungan berbahaya."
      },
      tags: ["Raspberry Pi", "Arduino", "Sensors", "Streaming"],
      image: "assets/img/projects/rescue-robot.jpg",
      link: ""
    },
    {
      title: { en: "Smart Multi-Biometric Access Controller", id: "Pengendali Akses Multi-Biometrik" },
      category: { en: "Computer Vision · Security", id: "Computer Vision · Keamanan" },
      year: "2020",
      desc: {
        en: "Automated door-lock ecosystem combining Python (OpenCV) facial recognition, fingerprint validation, RFID and PIN passcodes, all backed by MySQL access logging.",
        id: "Ekosistem kunci pintu otomatis yang memadukan pengenalan wajah Python (OpenCV), validasi sidik jari, RFID, dan PIN, dengan pencatatan akses berbasis MySQL."
      },
      tags: ["Python", "OpenCV", "RFID", "MySQL"],
      image: "assets/img/projects/biometric.jpg",
      link: ""
    }
  ],

  /* ---------- 8. SKILLS ---------- */
  skills: [
    {
      group: { en: "Software & Languages", id: "Software & Bahasa Pemrograman" },
      items: ["C# (.NET Framework)", "SQL / MySQL", "Python", "React.js", "C++", "LabVIEW", "Dart / Flutter", "REST API"]
    },
    {
      group: { en: "Smart Manufacturing", id: "Smart Manufacturing" },
      items: ["MES Architecture", "Industrial IoT (IIoT)", "Pokayoke System", "AOI Machine Vision", "Thermal Print Automation", "Traceability"]
    },
    {
      group: { en: "Hardware & Automation", id: "Hardware & Otomasi" },
      items: ["PLC (BNSP Certified)", "Raspberry Pi", "Arduino", "Lidar & Laser Sensors", "DAQ Systems", "SCADA", "PID Control"]
    },
    {
      group: { en: "Engineering Quality", id: "Kualitas Engineering" },
      items: ["FMEA", "DMAIC", "Six Sigma Practices", "5M Change Management", "Value Engineering", "BOM & QCPC"]
    },
    {
      group: { en: "IT & Leadership", id: "IT & Kepemimpinan" },
      items: ["Team Recruitment & Management", "Network Infrastructure", "Enterprise Server Maintenance", "Incident Response", "Project Management"]
    }
  ],

  /* ---------- 9. EDUCATION ---------- */
  education: [
    {
      school: "State Polytechnic of Batam",
      logo: "assets/img/experience/polibatam.png",
      degree: { en: "Bachelor of Applied Science (S.Tr.T.) — Mechatronics, Robotics & Automation Engineering",
                id: "Sarjana Terapan (S.Tr.T.) — Teknik Mekatronika, Robotika & Otomasi" },
      period: { en: "Jul 2017 — Jul 2021", id: "Jul 2017 — Jul 2021" },
      grade: { en: "Graduated Cum Laude · GPA 3.81 / 4.00", id: "Lulus Cum Laude · IPK 3,81 / 4,00" },
      focus: {
        en: "Machine Vision (C# & LabVIEW), Distributed Control Systems, Industrial IoT, SCADA, PLC, Microcontrollers, AI & Robotics, Pneumatics & Hydraulics, PID Control.",
        id: "Machine Vision (C# & LabVIEW), Distributed Control System, Industrial IoT, SCADA, PLC, Mikrokontroler, AI & Robotika, Pneumatik & Hidrolik, Kontrol PID."
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
    heading: { en: "Let us build the next system.", id: "Mari bangun sistem berikutnya." },
    body: {
      en: "Open to leadership and specialist roles in MES, smart manufacturing, industrial automation and enterprise IT — on-site, hybrid or remote.",
      id: "Terbuka untuk peran kepemimpinan maupun spesialis di bidang MES, smart manufacturing, otomasi industri, dan IT enterprise — on-site, hybrid, maupun remote."
    }
  }
};
