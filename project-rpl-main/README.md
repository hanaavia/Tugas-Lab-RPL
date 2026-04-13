# 🎬 CINESPHERE - Film Management System

Project **Rekayasa Perangkat Lunak (RPL)** untuk manajemen database film.

---

Buka **Terminal** di dalam folder project, lalu copy & paste perintah di bawah ini untuk setup otomatis:

```bash
npm install && echo "NEXT_PUBLIC_API_URL=https://film-management-api.labse.id/api/v1" > .env.local && npm run dev
Note: Perintah di atas akan menginstall library, membuat konfigurasi .env.local, dan menjalankan server sekaligus.

🛠️ Langkah Manual
Jika perintah otomatis di atas bermasalah, ikuti langkah ini:

Install Dependencies

Bash
npm install
Setup Environment
Buat file .env.local di root folder dan isi dengan:

Plaintext
NEXT_PUBLIC_API_URL=https://film-management-api.labse.id/api/v1
Run Project

Bash
npm run dev
Jika muncul error Port 3000 is already in use, gunakan perintah ini untuk menjalankan di port lain:

Bash
npm run dev -- -p 3005
(Lalu akses http://localhost:3005 di browser)
