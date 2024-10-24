// Nonaktifkan Klik Kanan
document.addEventListener('contextmenu', (event) => event.preventDefault());

// Nonaktifkan Shortcut seperti F12 dan Ctrl+Shift+I
document.addEventListener('keydown', (event) => {
    if (
      (event.ctrlKey && event.shiftKey && event.key === 'I') || // Ctrl+Shift+I
      (event.ctrlKey && event.shiftKey && event.key === 'C') || // Ctrl+Shift+C
      (event.ctrlKey && event.shiftKey && event.key === 'J') || // Ctrl+Shift+J
      (event.ctrlKey && event.key === 'U') || // Ctrl+U (View Source)
      event.key === 'F12' // F12
    ) {
        event.preventDefault();
        alert('Inspect Element dilarang!');
    }
});

// Deteksi Developer Tools Dibuka dengan Memonitor Ukuran Window
let devtoolsOpen = false;
const threshold = 160; // Threshold untuk lebar devtools
setInterval(() => {
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;

    if (widthDiff > threshold || heightDiff > threshold) {
        if (!devtoolsOpen) {
            devtoolsOpen = true;
            alert('DevTools terdeteksi! Menutup halaman...');
            window.location.href = 'about:blank'; // Redirect jika DevTools dibuka
        }
    } else {
        devtoolsOpen = false;
    }
}, 500);
