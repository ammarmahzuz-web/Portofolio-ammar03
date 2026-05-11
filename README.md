# Portfolio Website - Ammar Mahzuz

Portfolio website modern untuk Ammar Mahzuz, Full Stack Developer, UI/UX Designer, dan Animator 3D.

## 🎨 Fitur Utama

✨ **Dark/Light Theme Toggle** - Beralih antara tema gelap dan terang dengan mudah
📱 **Fully Responsive** - Sempurna di semua perangkat (mobile, tablet, desktop)
🎭 **Smooth Animations** - Animasi halus dan interaktif di seluruh website
🚀 **Modern Design** - Desain kontemporer dengan gradien dan effects
⚡ **Fast Performance** - Optimized untuk kecepatan loading
📧 **Contact Form** - Form kontak yang siap diintegrasikan
🔗 **Social Media Links** - Link ke semua platform media sosial

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur semantic
- **CSS3** - Styling modern dengan variables dan animations
- **JavaScript** - Interaktivitas dan functionality
- **Font Awesome** - Icons
- **localStorage** - Menyimpan preferensi tema

## 📂 Struktur File

```
Web-Portofolio/
├── index.html      # File HTML utama
├── styles.css      # Styling lengkap
├── script.js       # JavaScript functionality
└── README.md       # Dokumentasi ini
```

## 🚀 Deployment

### Deploy ke GitHub Pages

1. Pastikan repository bernama `Portofolio-ammar03`
2. Push semua file ke branch `main`
3. Go to Settings → Pages
4. Set Source ke `Deploy from a branch`
5. Pilih branch `main`
6. Website akan live di: `https://ammarmahzuz-web.github.io/Portofolio-ammar03/`

## 📝 Cara Menggunakan

### 1. Update Informasi Pribadi

Edit `index.html` untuk mengubah:
- Nama
- Profesi/tagline
- Deskripsi
- Email

### 2. Tambah Foto/Avatar

Ganti placeholder dengan foto Anda:
```html
<!-- Cari line ini di index.html -->
<div class="avatar-placeholder">
  <i class="fas fa-user"></i>
</div>

<!-- Ganti dengan: -->
<img src="path/to/your/photo.jpg" alt="Ammar Mahzuz" class="avatar">
```

### 3. Update Social Media Links

Edit `script.js` dan ganti URLs:
```javascript
const socialUrls = {
  github: 'https://github.com/your-username',
  instagram: 'https://instagram.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
  youtube: 'https://youtube.com/@your-channel',
  tiktok: 'https://tiktok.com/@your-username'
};
```

Atau edit langsung di `index.html`:
```html
<a href="https://github.com/your-username" class="social-icon" target="_blank"><i class="fab fa-github"></i></a>
```

### 4. Update Project

Edit project card di section `#projects`:
```html
<h3 class="project-title">Nama Project Anda</h3>
<p class="project-description">Deskripsi project</p>
<div class="project-tech">
  <span class="tech-tag">Technology</span>
</div>
```

### 5. Integrasi Contact Form

Gunakan salah satu layanan ini untuk form submission:

#### Option 1: Formspree (Recommended)
1. Visit [formspree.io](https://formspree.io)
2. Sign up dan create new form
3. Copy form endpoint
4. Update form action di HTML:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Kirim</button>
</form>
```

#### Option 2: EmailJS
1. Visit [emailjs.com](https://www.emailjs.com)
2. Setup service
3. Integrate dengan JavaScript

## 🎨 Customization

### Mengubah Warna

Edit CSS variables di `styles.css`:
```css
:root {
  --accent-color: #6366f1;      /* Warna utama */
  --accent-light: #818cf8;      /* Warna accent terang */
  --success-color: #10b981;     /* Warna sukses */
  --danger-color: #ef4444;      /* Warna danger */
}
```

### Mengubah Font

Update font-family di body selector:
```css
body {
  font-family: 'Your Font Name', sans-serif;
}
```

## 📱 Breakpoints Responsive

- **Desktop** - `> 768px` - Full layout
- **Tablet** - `480px - 768px` - Optimized untuk tablet
- **Mobile** - `< 480px` - Mobile optimized

## ⚡ Performa

- Lighthouse Score: 90+
- No external dependencies (hanya Font Awesome)
- Minimal CSS dan JS
- Optimized images

## 🐛 Troubleshooting

### Theme tidak tersimpan
- Clear browser cache
- Check localStorage di DevTools

### Mobile menu tidak bekerja
- Pastikan JavaScript aktif
- Check console untuk errors

### Images tidak muncul
- Pastikan path relative benar
- Check image format support

## 📧 Contact

Email: ammarmahzuz@gmail.com

## 📄 License

Free to use and modify for personal projects.

---

**Made with ❤️ by Ammar Mahzuz**