# 🎬 Tugas Lab RPL  
## Film Management System — Frontend Assignment  
**Open Recruitment Admin RPL 2026**

---

## 📌 Overview
Proyek ini merupakan implementasi frontend untuk sistem manajemen film yang dikembangkan sebagai bagian dari proses seleksi **Open Recruitment Admin RPL 2026**.

Aplikasi ini mendukung tiga jenis role pengguna:

- **Guest / Public** (tanpa login)  
- **User** (menggunakan JWT)  
- **Admin** (menggunakan JWT dengan role khusus)  

Setiap role memiliki hak akses dan fitur yang berbeda sesuai dengan konsep **Role-Based Access Control (RBAC)**.

---

## 🚀 Features

### 🔐 Authentication & Session
- Register & Login pengguna  
- Penyimpanan session menggunakan token JWT  
- Auto-load data user aktif saat aplikasi dijalankan  

### 🛡️ Authorization (RBAC)
- Protected Routes berbasis role:
  - Public  
  - User  
  - Admin  
- Pembatasan akses halaman & aksi berdasarkan role  

### 🎥 Public Exploration
- Daftar film dengan pagination / infinite scroll  
- Daftar genre (`/genres`)  
- Detail film (`/films/:id`)  
- Profil user lain (`/users/:id`)  

### 👤 User Interaction
- Menambahkan ulasan film  
- Memberikan & mengubah reaksi pada ulasan  
- Membuat daftar tontonan (watchlist)  
- Mengatur visibilitas daftar tontonan (public/private)  

### 🛠️ Admin Panel
- Manajemen film (tambah film)  
- Manajemen genre:
  - View (table dengan pagination)  
  - Create  
  - Update  

---

## ⚙️ Tech Requirements

- Routing & Protected Routes  
- Centralized State Management (session user)  
- API Integration (Authentication & Authorization)  
- Form Handling + Client-side Validation  

### UI States
- Loading state  
- Error state  
- Success state (Toast / Alert)  

### Optimasi
- Pagination (10–20 items per page)  
- Caching data  
- Debounce untuk fitur search  

### Responsiveness & SEO
- UI responsive (mobile-friendly)  
- SEO optimization semaksimal mungkin  

---

## 🧱 Tech Stack (Flexible)

### Framework
- React / Next.js  
- Vue / Nuxt  
- Svelte  

### Styling
- Tailwind CSS  
- shadcn/ui  
- Chakra UI  

### Tambahan
- State Management (Redux, Zustand, Pinia, dll)  
- Animation libraries  
- Utility libraries lainnya  

---

## 📂 Project Structure
Pastikan struktur kode:
- Bersih (clean code)  
- Modular  
- Mudah dikembangkan & di-maintain  

---

## 📊 Assessment Criteria

### 🔐 Authentication & Identity
- Register & Login berhasil  
- Data user aktif tersimpan dengan baik  

### 🛡️ Role-Based Access Control
- Halaman & fitur sesuai role (Public / User / Admin)  

### 🎬 Public Catalog & Detail
- List film  
- List genre  
- Detail film  
- Profil user publik  

### 🛠️ Admin Data Management
- CRUD genre  
- Create film  
- Table admin dengan pagination  

### 💬 User Interactivity
- Review film  
- Watchlist  
- Visibility control  
- Reaction system  

### 🌐 Deployment
- Aplikasi berhasil di-deploy  

---

## 📖 User Stories

### 🔐 Authentication & Profile
- User dapat register dan login  
- Session user dimuat otomatis  
- Dapat melihat profil user lain  

### 🛠️ Admin Features
- Melihat data genre dalam tabel berpaginasi  
- Menambah & update genre  
- Menambahkan film baru  

### 🌍 Public Exploration
- Melihat daftar genre  
- Menjelajahi daftar film (pagination / infinite scroll)  
- Melihat detail film & ulasan  

### 💬 User Interaction
- Menambahkan film ke watchlist  
- Mengatur visibilitas watchlist  
- Menulis ulasan  
- Memberikan & mengubah reaksi pada ulasan  

---

## 🚀 Deployment
Project harus di-deploy, contoh:
- Vercel  
- Netlify  
- atau platform lainnya  

---
