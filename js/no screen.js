// Cegah klik kanan
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Fitur klik kanan dinonaktifkan!");
  });
  
  // Deteksi tombol Print Screen (PrtSc)
  window.addEventListener("keyup", (e) => {
    if (e.key === "PrintScreen") {
      alert("Screenshot tidak diizinkan!");
      // Kosongkan clipboard agar screenshot gagal
      navigator.clipboard.writeText("");
    }
  });
  
  // Blokir kombinasi Ctrl + Shift + I (DevTools)
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      e.preventDefault();
      alert("DevTools dinonaktifkan!");
    }
  });
  
  // Blokir F12 (DevTools)
  document.addEventListener("keydown", (e) => {
    if (e.key === "F12") {
      e.preventDefault();
      alert("DevTools tidak bisa dibuka!");
    }
  });
  
  // Deteksi jika pengguna mencoba menggunakan kombinasi umum screenshot (Windows + Shift + S)
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === "S") {
      e.preventDefault();
      alert("Fitur screenshot tidak diizinkan!");
    }
  });
  