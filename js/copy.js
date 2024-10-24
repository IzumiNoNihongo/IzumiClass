// Cegah klik kanan
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Fitur klik kanan dinonaktifkan!");
  });
  
  // Cegah seleksi teks
  document.addEventListener("selectstart", (e) => {
    e.preventDefault();
    
  });
  
  // Cegah penyalinan dengan Ctrl + C
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
      alert("Penyalinan teks tidak diizinkan!");
    }
  });
  
  // Blokir drag and drop teks
  document.addEventListener("dragstart", (e) => {
    e.preventDefault();
    
  });
  
  // Hapus data clipboard saat pengguna mencoba menyalin secara paksa
  document.addEventListener("copy", (e) => {
    e.preventDefault();
    alert("Copy tidak diizinkan!");
    navigator.clipboard.writeText(""); // Kosongkan clipboard
  });
  