if (window.top !== window.self) {
    console.warn("Google Translate iframe terdeteksi! Memblokir akses...");
    document.body.innerHTML = "<h1>Halaman ini tidak bisa diterjemahkan!</h1>";
    throw new Error("Akses iframe diblokir.");
  }

  // Mencegah penerjemah dengan memodifikasi atribut 'lang'
  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.removeAttribute('lang'); // Hapus atribut 'lang' agar tidak ada petunjuk bahasa

    // Pantau perubahan atribut 'lang' (jika ada aktivitas penerjemahan)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
          console.warn("Penerjemahan terdeteksi! Memblokir ulang...");
          document.documentElement.removeAttribute('lang'); // Hapus kembali jika ditemukan
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true }); // Awasi perubahan pada elemen <html>

    // Periksa perubahan teks setiap detik untuk deteksi penerjemahan otomatis
    const originalText = document.body.innerText;
    setInterval(() => {
      const currentText = document.body.innerText;
      if (originalText !== currentText) {
        console.warn("Google Translate terdeteksi! Memuat ulang halaman...");
        window.location.reload(); // Reload halaman jika ada perubahan teks
      }
    }, 1000);
  });