# 🚀 Wiranto Millennium Sitinjak - Professional Portfolio

Selamat datang di repositori portofolio resmi **Wiranto Millennium Sitinjak**. Proyek ini adalah sebuah website portofolio interaktif yang dibangun dengan fokus pada performa yang sangat cepat (blazing fast), aksesibilitas, dan pengalaman pengguna (UI/UX) yang modern dan premium.

## 🛠️ Spesifikasi Teknologi (Tech Stack)

Proyek ini dibangun sepenuhnya menggunakan arsitektur modern web (Static Site Generation / SSG) tanpa library frontend yang berat, demi mengejar performa tingkat tinggi:

- **Core Framework**: [Astro](https://astro.build/) (v7)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4.3)
- **Scripting**: Vanilla JavaScript (ES6+)
- **Package Manager**: npm

## ✨ Fitur Unggulan (Core Features)

1. **Native Dark/Light Mode** 🌓
   - Dilengkapi dengan *theme switcher* terintegrasi.
   - Menggunakan pendekatan class `dark:` dari TailwindCSS.
   - Mendukung efek transisi warna mulus (*smooth transition*) tanpa *flicker* berkat injeksi *inline-script* pada `<head>`.
   - Preferensi tema disimpan secara persisten di `localStorage`.

2. **Sistem Multi-Bahasa (i18n)** 🌐
   - Dukungan dwibahasa: **English** (`en`) dan **Bahasa Indonesia** (`id`).
   - Sistem *translation dictionary* internal yang ringan (`src/utils/i18n.ts`).
   - Translasi *real-time* di sisi klien tanpa perlu memuat ulang halaman (*No-reload localization*).

3. **Dynamic Project Gallery & Lightbox** 🖼️
   - Halaman detail proyek (`[slug].astro`) yang dihasilkan secara dinamis (Dynamic Routing).
   - *Image Carousel/Lightbox* native yang dibangun tanpa library eksternal (menggunakan Vanilla JS).
   - Mendukung kontrol navigasi Keyboard (Panah Kiri/Kanan untuk bergeser, ESC untuk menutup).
   - Optimasi gambar otomatis melalui modul `astro:assets` (.webp generation).

4. **Desain Premium & Interaktif** 💎
   - Penggunaan *Glassmorphism* (Backdrop blur) pada Navbar.
   - Animasi mikro (Hover, Scale, Translate) untuk meningkatkan *User Engagement*.
   - Komponen reponsif 100% menggunakan pendekatan *Mobile-First Design*.

## 📁 Struktur Direktori Utama

```text
portfolio-wiranto/
├── public/                 # Static assets (Favicon, dsb.)
├── src/
│   ├── assets/             # Assets original (Gambar proyek, SVG)
│   ├── components/         # Komponen UI Astro (Navbar, Hero, About, dll.)
│   ├── layouts/            # Master layout (Layout.astro)
│   ├── pages/              # Halaman-halaman & rute (index.astro, projects/[slug].astro)
│   ├── styles/             # Global CSS (Tailwind directives)
│   └── utils/              # Skrip pendukung (i18n.ts)
└── package.json            # Daftar dependensi & scripts
```

## 🚀 Panduan Menjalankan Proyek (Local Development)

Pastikan Anda memiliki [Node.js](https://nodejs.org/) (versi 22.12.0 atau yang lebih baru) terinstal di mesin Anda.

1. **Install Dependensi**
   ```bash
   npm install
   ```

2. **Jalankan Server Development**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:4321` di browser Anda untuk melihat hasilnya.

3. **Build untuk Produksi**
   ```bash
   npm run build
   ```
   Hasil build (HTML statis dan file aset yang sudah dioptimasi) akan berada di dalam folder `dist/`.

4. **Preview Hasil Build**
   ```bash
   npm run preview
   ```

---
*Didesain dan dikembangkan dengan ❤️ oleh Wiranto Millennium Sitinjak.*
