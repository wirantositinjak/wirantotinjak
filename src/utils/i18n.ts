export const languages = {
  en: 'English',
  id: 'Indonesia',
};

export const defaultLang = 'en';

export const translations = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.back': 'Back to Projects',

    // Hero
    'hero.badge': 'Open for projects / full-time roles',
    'hero.title': 'Software Engineer & Lead Designer',
    'hero.desc': 'Combining technical expertise in software development with a user-centric design approach. Dedicated to creating digital solutions that are not only functional and scalable, but also deliver stunning visual experiences.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Contact Me',

    // Projects
    'proj.title': 'Featured Projects',
    'proj.desc': 'Some of the digital solutions I have developed to solve specific problems and deliver real value.',

    // Kalam Kudus (Project 1)
    'proj.kalam.titleHtml': 'Kalam Kudus <br/><span class="text-blue-500">Learning Management System</span>',
    'proj.kalam.title': 'Kalam Kudus LMS',
    'proj.kalam.desc': 'A web-based digital school management platform built specifically for <strong class="text-slate-900 dark:text-white">Kalam Kudus Christian School Timika</strong> — integrating all academic, administrative, library, payment, and communication activities into one digital ecosystem.',
    'proj.badge.edu': 'Education Platform',
    'proj.badge.loc': 'Timika, Central Papua',
    'proj.badge.status': 'Active',
    'proj.stat.role': 'User Roles',
    'proj.stat.module': 'System Modules',
    'proj.stat.web': 'Web-Based',
    'proj.gallery': 'Project Gallery',

    // Kalam Kudus Detailed Breakdown
    'kk.tech.title': 'Technology',
    'kk.tech.heading': 'Tech Stack',
    'kk.tech.fe': 'Frontend',
    'kk.tech.be': 'Backend',
    'kk.tech.db': 'Database',
    'kk.tech.auth': 'Auth',
    'kk.tech.cloud': 'Cloud',
    'kk.tech.cdn': 'CDN & Security',
    'kk.roles.title': 'Multi-Role System',
    'kk.roles.heading': '9 Roles, One Platform',
    'kk.roles.desc': 'Each role receives a tailored dashboard, features, and access rights — ensuring every user only sees what is relevant to their job.',
    'kk.role.1.title': 'Super Admin',
    'kk.role.1.desc': 'Full control over all systems & users',
    'kk.role.2.title': 'Admin',
    'kk.role.2.desc': 'Daily academic & administrative operations',
    'kk.role.3.title': 'Teacher',
    'kk.role.3.desc': 'Manage classes, materials, and student interactions',
    'kk.role.4.title': 'Student Affairs',
    'kk.role.4.desc': 'Guidance, disciplinary actions & extracurriculars',
    'kk.role.5.title': 'Chaplain',
    'kk.role.5.desc': 'Spiritual guidance & student counseling',
    'kk.role.6.title': 'IT Staff',
    'kk.role.6.desc': 'Technical support & digital asset management',
    'kk.role.7.title': 'Promotion Staff',
    'kk.role.7.desc': 'New student admissions & promotional campaigns',
    'kk.role.8.title': 'Facilities Staff',
    'kk.role.8.desc': 'Inventory, buildings & facility borrowing',
    'kk.role.9.title': 'HR Staff',
    'kk.role.9.desc': 'Personnel data, attendance & performance evaluation',

    'kk.f1.title': 'Virtual Class (VClass)',
    'kk.f1.desc': 'Teachers can conduct live online learning sessions directly from the platform. Students join via the "Join Now" button when a class is live, or "Join When Live" for upcoming classes.',
    'kk.f1.b1': 'Real-time live sessions per subject',
    'kk.f1.b2': 'Teacher, class, and participant count info',
    'kk.f1.b3': 'Schedule status: Live Now / Scheduled',
    'kk.f1.b4': 'Integrated with schedules and courses',

    'kk.f2.title': 'Course & Material Management',
    'kk.f2.desc': 'Each subject has a dedicated page containing structured learning sessions, materials, assignments, and a progress bar that visually displays student learning progress.',
    'kk.f2.b1': 'Progress bar per course (% sessions completed)',
    'kk.f2.b2': 'Gradual materials: textbooks, slides, videos',
    'kk.f2.b3': 'Assignments & exercises per session',
    'kk.f2.b4': 'Instructor and class information',

    'kk.f3.title': 'Electronic Attendance',
    'kk.f3.desc': 'The digital attendance module records student daily attendance electronically. It provides today\'s attendance view, overall attendance rate, and full history per period.',
    'kk.f3.b1': 'Daily attendance with location timestamp',
    'kk.f3.b2': 'Attendance rate summary (%) per student',
    'kk.f3.b3': 'Attendance history for auditing',
    'kk.f3.b4': 'Support for school & worship attendance',

    'kk.f4.title': 'Digital Tuition Payment',
    'kk.f4.desc': 'Parents and students can transparently view school billing status: total bills, amount paid, and outstanding balance — complete with transaction history per semester.',
    'kk.f4.b1': 'Active billing & arrears balance summary',
    'kk.f4.b2': 'Transaction history per semester',
    'kk.f4.b3': 'Status: Paid / Unpaid / Overdue',
    'kk.f4.b4': 'Payment gateway integration',

    'kk.f5.title': 'Digital Library',
    'kk.f5.desc': 'The school\'s book collection catalog is digitally available. Students can browse collections, request borrowing directly from the platform, and track library admin approval status.',
    'kk.f5.b1': 'Physical & digital book catalog',
    'kk.f5.b2': 'Online borrowing request',
    'kk.f5.b3': 'Status tracking: pending, approved, returned',
    'kk.f5.b4': 'Borrowing history per student',

    // Warehouse (Project 2)
    'proj.warehouse.titleHtml': 'Warehouse Stock <br/><span class="text-blue-500">Mobile App</span>',
    'proj.warehouse.title': 'Warehouse Stock App',
    'proj.warehouse.desc': 'A React Native mobile application built with Expo for managing warehouse stock, borrowing, requests, and inventory catalog.',
    'proj.warehouse.badge.type': 'Mobile Application',
    'proj.warehouse.badge.platform': 'Android & iOS',
    'proj.warehouse.stat1.label': 'Key Features',
    'proj.warehouse.stat2.label': 'Framework',
    'proj.warehouse.stat3.label': 'Database / Backend',
    'proj.warehouse.content': '<ul class="list-disc pl-5 space-y-2"><li><b>Authentication:</b> Secure login and password management.</li><li><b>Catalog & Inventory:</b> Browse warehouse items with comprehensive detailed views.</li><li><b>Stock Management:</b> Borrowing and request flows for warehouse items.</li><li><b>History Tracking:</b> Keep track of active borrowings, past requests, and history.</li><li><b>User Profile:</b> Manage user information and edit profile details.</li></ul>',

    // DiaCheck AI (Project 3)
    'proj.diacheck.titleHtml': 'DiaCheck AI <br/><span class="text-blue-500">Machine Learning</span>',
    'proj.diacheck.title': 'DiaCheck AI',
    'proj.diacheck.desc': 'A Machine Learning-based web application built using Python (Flask) and Scikit-Learn. It serves as an early indication predictor for diabetes based on medical data input, statistically tailored to real patient track records.',
    'proj.diacheck.badge.type': 'AI Application',
    'proj.diacheck.badge.tech': 'Python & Flask',
    'proj.diacheck.stat1.label': 'Accuracy',
    'proj.diacheck.stat2.label': 'Precision',
    'proj.diacheck.stat3.label': 'Recall',
    'proj.diacheck.content': '<ul class="list-disc pl-5 space-y-2"><li><b>Accurate & Instant Prediction:</b> Predicts diabetes probability based on 8 health metrics (Pregnancies, Glucose, Blood Pressure, Skin Thickness, Insulin, BMI, Diabetes Pedigree Function, and Age).</li><li><b>Modern UI (Glassmorphism):</b> Interactive dark-themed user interface optimized with glassmorphism effects using the latest Vanilla CSS.</li><li><b>Explainable AI:</b> Provides detailed information on the reliability of the computational model results.</li><li><b>Internal Model Scoreboard:</b> Users can easily view the model\'s built-in metrics (Accuracy: 76.43%, Precision: 68.04%, Recall: 61.19%).</li><li><b>Smart Popup Interaction:</b> Powered by SweetAlert2 animations for easy-to-understand calculation results.</li></ul>',

    'proj.details.overview': 'Project Overview',
    'proj.details.features': 'Key Features',

    // Experience
    'exp.title': 'Work Experience',
    'exp.desc': 'My professional career journey and organizational experience up to the present.',

    'exp.1.role': 'Human Resources Intern',
    'exp.1.duration': 'Sep 2026 - Present',
    'exp.1.desc': 'Assisting in managing employee relations and HR administration tasks to support company operations efficiently.',

    'exp.2.role': 'Project Manager',
    'exp.2.duration': 'Dec 2025 - Sep 2026',
    'exp.2.desc': 'Managed end-to-end project lifecycles, ensuring timely delivery and coordinating effectively between development teams and stakeholders.',

    'exp.3.role': 'Freelance',
    'exp.3.duration': 'Oct 2022 - Nov 2025',
    'exp.3.desc': 'Developed decentralized applications, focused on engineering software infrastructure, and delivered high-quality technical solutions for various Web3 projects.',

    'exp.4.role': 'Mobile Application Developer',
    'exp.4.duration': 'Jan 2021 - Sep 2022',
    'exp.4.desc': 'Built and maintained cross-platform mobile applications, focusing on smooth UI/UX and efficient API integrations.',

    // About
    'about.title': 'About Me',
    'about.p1': 'Hello! I am <strong class="text-slate-800 dark:text-slate-200">Wiranto Millennium Sitinjak</strong>, a professional highly passionate about creating comprehensive digital experiences. I believe that great products start with a deep understanding of user needs, which is then translated into clean lines of code.',
    'about.p2': 'With a core expertise in <strong class="text-blue-600 dark:text-blue-400">Full-Stack Development</strong> and <strong class="text-blue-600 dark:text-blue-400">UI/UX Design</strong>, I bridge the gap between visual aesthetics and technical functionality. I design intuitive interfaces and back them up with a robust backend architecture.',
    'about.p3': 'In addition, I am highly interested in <strong class="text-indigo-600 dark:text-indigo-400">AI & Python-based Automation</strong>. I constantly explore ways to leverage artificial intelligence to streamline workflows, analyze complex data, and create smart solutions that boost operational efficiency.',

    // Contact
    'contact.title': "Let's Collaborate",
    'contact.desc': 'Interested in working together, have an exciting project, or just want to chat? Do not hesitate to say hello.',
    'contact.label.name': 'Full Name',
    'contact.label.email': 'Email Address',
    'contact.label.subject': 'Subject',
    'contact.label.message': 'Message',
    'contact.placeholder.name': 'John Doe',
    'contact.placeholder.email': 'john@example.com',
    'contact.placeholder.subject': 'Project Offer / Collaboration Discussion',
    'contact.placeholder.message': 'Tell me the details here...',
    'contact.btn': 'Send Message'
  },
  id: {
    // Nav
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.back': 'Kembali ke Proyek',

    // Hero
    'hero.badge': 'Menerima proyek / peran purnawaktu',
    'hero.title': 'Software Engineer & Lead Designer',
    'hero.desc': 'Saya menggabungkan keahlian teknis dalam pengembangan perangkat lunak dengan pendekatan desain yang berpusat pada pengguna. Mendedikasikan diri untuk menciptakan solusi digital yang tidak hanya fungsional dan terukur, tetapi juga memberikan pengalaman visual yang memukau.',
    'hero.cta.projects': 'Lihat Proyek',
    'hero.cta.contact': 'Hubungi Saya',

    // Projects
    'proj.title': 'Proyek Unggulan',
    'proj.desc': 'Beberapa solusi digital yang telah saya kembangkan untuk menyelesaikan masalah spesifik dan memberikan nilai tambah yang nyata.',

    // Kalam Kudus (Project 1)
    'proj.kalam.titleHtml': 'Kalam Kudus <br/><span class="text-blue-500">Learning Management System</span>',
    'proj.kalam.title': 'Kalam Kudus LMS',
    'proj.kalam.desc': 'Platform manajemen sekolah digital berbasis web yang dibangun khusus untuk <strong class="text-slate-900 dark:text-white">Sekolah Kristen Kalam Kudus Timika</strong> — mengintegrasikan seluruh aktivitas akademik, administrasi, perpustakaan, pembayaran, dan komunikasi sekolah dalam satu ekosistem digital.',
    'proj.badge.edu': 'Platform Pendidikan',
    'proj.badge.loc': 'Timika, Papua Tengah',
    'proj.badge.status': 'Aktif',
    'proj.stat.role': 'Peran Pengguna',
    'proj.stat.module': 'Modul Sistem',
    'proj.stat.web': 'Berbasis Web',
    'proj.gallery': 'Galeri Proyek',

    // Kalam Kudus Detailed Breakdown
    'kk.tech.title': 'Teknologi',
    'kk.tech.heading': 'Stack Teknologi',
    'kk.tech.fe': 'Frontend',
    'kk.tech.be': 'Backend',
    'kk.tech.db': 'Database',
    'kk.tech.auth': 'Auth',
    'kk.tech.cloud': 'Cloud',
    'kk.tech.cdn': 'CDN & Security',
    'kk.roles.title': 'Multi-Role System',
    'kk.roles.heading': '9 Peran, Satu Platform',
    'kk.roles.desc': 'Setiap peran mendapatkan dashboard, fitur, dan hak akses yang disesuaikan — memastikan setiap pengguna hanya melihat apa yang relevan untuk pekerjaan mereka.',
    'kk.role.1.title': 'Super Admin',
    'kk.role.1.desc': 'Kendali penuh atas seluruh sistem & pengguna',
    'kk.role.2.title': 'Admin',
    'kk.role.2.desc': 'Operasional akademik & administrasi harian',
    'kk.role.3.title': 'Guru',
    'kk.role.3.desc': 'Kelola kelas, materi, dan interaksi siswa',
    'kk.role.4.title': 'Kesiswaan',
    'kk.role.4.desc': 'Pembinaan, pelanggaran & ekstrakurikuler',
    'kk.role.5.title': 'Rohaniawan',
    'kk.role.5.desc': 'Bimbingan rohani & konseling siswa',
    'kk.role.6.title': 'Staf IT',
    'kk.role.6.desc': 'Dukungan teknis & manajemen aset digital',
    'kk.role.7.title': 'Staf Promosi',
    'kk.role.7.desc': 'Penerimaan siswa baru & kampanye promosi',
    'kk.role.8.title': 'Staf Sarana',
    'kk.role.8.desc': 'Inventaris, gedung & peminjaman fasilitas',
    'kk.role.9.title': 'Staf SDM',
    'kk.role.9.desc': 'Data kepegawaian, absensi & evaluasi kinerja',

    'kk.f1.title': 'Kelas Virtual (VClass)',
    'kk.f1.desc': 'Guru dapat menyelenggarakan sesi pembelajaran online langsung dari platform. Siswa bergabung dengan tombol "Join Now" saat kelas berlangsung, atau "Join When Live" untuk kelas yang dijadwalkan berikutnya.',
    'kk.f1.b1': 'Sesi live real-time per mata pelajaran',
    'kk.f1.b2': 'Informasi guru, kelas, dan jumlah peserta',
    'kk.f1.b3': 'Status jadwal: Live Now / Scheduled',
    'kk.f1.b4': 'Terintegrasi dengan jadwal dan kursus',

    'kk.f2.title': 'Manajemen Kursus & Materi',
    'kk.f2.desc': 'Setiap mata pelajaran memiliki halaman khusus berisi sesi pembelajaran terstruktur, materi, tugas, dan progress bar yang menampilkan kemajuan belajar siswa secara visual.',
    'kk.f2.b1': 'Progress bar per kursus (% sesi selesai)',
    'kk.f2.b2': 'Materi bertahap: buku paket, slide, video',
    'kk.f2.b3': 'Tugas & latihan per sesi',
    'kk.f2.b4': 'Info guru pengampu dan kelas',

    'kk.f3.title': 'Kehadiran Elektronik',
    'kk.f3.desc': 'Modul absensi digital mencatat kehadiran harian siswa secara elektronik. Tersedia tampilan absensi hari ini, tingkat kehadiran keseluruhan, dan riwayat lengkap per periode.',
    'kk.f3.b1': 'Absensi harian dengan timestamp lokasi',
    'kk.f3.b2': 'Rekap tingkat kehadiran (%) per siswa',
    'kk.f3.b3': 'Riwayat absensi untuk audit',
    'kk.f3.b4': 'Dukungan absensi sekolah & ibadah',

    'kk.f4.title': 'Pembayaran SPP Digital',
    'kk.f4.desc': 'Orang tua dan siswa dapat melihat status tagihan sekolah secara transparan: total tagihan, jumlah yang telah dibayar, dan saldo yang masih harus dilunasi — lengkap dengan riwayat transaksi per semester.',
    'kk.f4.b1': 'Ringkasan tagihan aktif & saldo tunggakan',
    'kk.f4.b2': 'Riwayat transaksi per semester',
    'kk.f4.b3': 'Status: Lunas / Belum Bayar / Overdue',
    'kk.f4.b4': 'Integrasi payment gateway',

    'kk.f5.title': 'Perpustakaan Digital',
    'kk.f5.desc': 'Katalog koleksi buku sekolah tersedia secara digital. Siswa dapat menelusuri koleksi, mengajukan peminjaman langsung dari platform, dan melacak status persetujuan admin perpustakaan.',
    'kk.f5.b1': 'Katalog buku fisik & digital',
    'kk.f5.b2': 'Pengajuan peminjaman online',
    'kk.f5.b3': 'Pelacakan status: pending, disetujui, dikembalikan',
    'kk.f5.b4': 'Riwayat peminjaman per siswa',

    // Warehouse (Project 2)
    'proj.warehouse.titleHtml': 'Aplikasi Mobile <br/><span class="text-blue-500">Warehouse Stock</span>',
    'proj.warehouse.title': 'Warehouse Stock App',
    'proj.warehouse.desc': 'Aplikasi mobile berbasis React Native yang dibangun dengan Expo untuk mengelola stok gudang, peminjaman, permintaan, dan katalog inventaris secara efisien.',
    'proj.warehouse.badge.type': 'Aplikasi Mobile',
    'proj.warehouse.badge.platform': 'Android & iOS',
    'proj.warehouse.stat1.label': 'Fitur Utama',
    'proj.warehouse.stat2.label': 'Framework',
    'proj.warehouse.stat3.label': 'Database / Backend',
    'proj.warehouse.content': '<ul class="list-disc pl-5 space-y-2"><li><b>Autentikasi:</b> Login aman dan manajemen kata sandi.</li><li><b>Katalog & Inventaris:</b> Jelajahi barang gudang dengan tampilan detail komprehensif.</li><li><b>Manajemen Stok:</b> Alur peminjaman dan permintaan barang gudang.</li><li><b>Pelacakan Riwayat:</b> Pantau peminjaman aktif, permintaan lalu, dan riwayat.</li><li><b>Profil Pengguna:</b> Kelola informasi pengguna dan edit detail profil.</li></ul>',

    // DiaCheck AI (Project 3)
    'proj.diacheck.titleHtml': 'DiaCheck AI <br/><span class="text-blue-500">Machine Learning</span>',
    'proj.diacheck.title': 'DiaCheck AI',
    'proj.diacheck.desc': 'Aplikasi web berbasis Machine Learning yang dibangun menggunakan Python (Flask) dan Scikit-Learn. Aplikasi ini berfungsi sebagai prediksi indikasi awal diabetes berdasarkan masukan data medis yang disesuaikan secara statistik dengan profil rekam jejak pasien sungguhan.',
    'proj.diacheck.badge.type': 'Aplikasi AI',
    'proj.diacheck.badge.tech': 'Python & Flask',
    'proj.diacheck.stat1.label': 'Akurasi',
    'proj.diacheck.stat2.label': 'Presisi',
    'proj.diacheck.stat3.label': 'Recall',
    'proj.diacheck.content': '<ul class="list-disc pl-5 space-y-2"><li><b>Prediksi Akurat & Instan:</b> Memprediksi probabilitas seseorang menderita diabetes berdasarkan 8 metrik kesehatan (Kehamilan, Glukosa, Tekanan Darah, Ketebalan Kulit, Insulin, BMI, Fungsi Silsilah Genetik, dan Umur).</li><li><b>Desain UI Modern (Glassmorphism):</b> Tampilan interaktif bertema gelap (dark mode) yang dioptimalkan dengan efek glassmorphism menggunakan Vanilla CSS terbaru.</li><li><b>Transparan (Explainable AI):</b> Memberikan informasi mendetail mengenai seberapa dapat diandalkannya hasil dari model komputasi yang digunakan.</li><li><b>Papan Skor Model Internal:</b> Pengguna dapat dengan mudah melihat metrik bawaan model.</li><li><b>Interaksi Popup Pintar:</b> Didukung oleh animasi SweetAlert2 untuk hasil kalkulasi yang mudah dipahami.</li></ul>',

    'proj.details.overview': 'Gambaran Proyek',
    'proj.details.features': 'Fitur Utama',

    // Experience
    'exp.title': 'Pengalaman Kerja',
    'exp.desc': 'Perjalanan karir dan pengalaman organisasi saya hingga mencapai tahap saat ini.',

    'exp.1.role': 'Human Resources Intern',
    'exp.1.duration': 'Sep 2026 - Sekarang',
    'exp.1.desc': 'Membantu mengelola hubungan karyawan dan tugas administrasi HR untuk mendukung kelancaran operasional perusahaan.',

    'exp.2.role': 'Project Manager',
    'exp.2.duration': 'Des 2025 - Sep 2026',
    'exp.2.desc': 'Mengelola siklus hidup proyek secara end-to-end, memastikan penyelesaian tepat waktu serta mengoordinasikan tim pengembang dengan pemangku kepentingan.',

    'exp.3.role': 'Freelance',
    'exp.3.duration': 'Okt 2022 - Nov 2025',
    'exp.3.desc': 'Mengembangkan aplikasi desentralisasi, berfokus pada infrastruktur perangkat lunak, serta memberikan solusi teknis berkualitas untuk berbagai proyek Web3.',

    'exp.4.role': 'Mobile Application Developer',
    'exp.4.duration': 'Jan 2021 - Sep 2022',
    'exp.4.desc': 'Membangun dan memelihara aplikasi mobile lintas platform, dengan fokus pada pengalaman UI/UX yang mulus dan integrasi API yang efisien.',

    // About
    'about.title': 'Tentang Saya',
    'about.p1': 'Halo! Saya <strong class="text-slate-800 dark:text-slate-200">Wiranto Millennium Sitinjak</strong>, seorang profesional yang memiliki semangat tinggi dalam menciptakan pengalaman digital yang komprehensif. Saya percaya bahwa produk yang luar biasa berawal dari pemahaman mendalam tentang kebutuhan pengguna yang kemudian diterjemahkan menjadi barisan kode yang rapi.',
    'about.p2': 'Dengan keahlian utama di bidang <strong class="text-blue-600 dark:text-blue-400">Full-Stack Development</strong> dan <strong class="text-blue-600 dark:text-blue-400">UI/UX Design</strong>, saya menjembatani celah antara estetika visual dan fungsionalitas teknis. Saya merancang antarmuka yang intuitif dan mendukungnya dengan arsitektur backend yang tangguh.',
    'about.p3': 'Selain itu, saya sangat tertarik pada <strong class="text-indigo-600 dark:text-indigo-400">Otomasi Berbasis AI & Python</strong>. Saya terus mengeksplorasi cara pemanfaatan kecerdasan buatan demi merampingkan alur kerja, menganalisis data kompleks, dan menciptakan solusi cerdas yang mampu meningkatkan efisiensi operasional.',

    // Contact
    'contact.title': 'Mari Berkolaborasi',
    'contact.desc': 'Tertarik untuk bekerjasama, punya proyek seru, atau sekadar ingin berdiskusi? Jangan ragu untuk menyapa saya.',
    'contact.label.name': 'Nama Lengkap',
    'contact.label.email': 'Alamat Email',
    'contact.label.subject': 'Subjek',
    'contact.label.message': 'Pesan',
    'contact.placeholder.name': 'John Doe',
    'contact.placeholder.email': 'john@example.com',
    'contact.placeholder.subject': 'Tawaran Proyek / Diskusi Kolaborasi',
    'contact.placeholder.message': 'Ceritakan detail pesan Anda di sini...',
    'contact.btn': 'Kirim Pesan'
  }
};
