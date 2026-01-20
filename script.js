function tampilkanKejutan() {
    // 1. Ganti tampilan kartu
    document.getElementById('box-kado').classList.remove('active');
    document.getElementById('konten-utama').classList.add('active');

    // 2. Set pesan otomatis
    const pesan = "Woi, bangun! Jangan ngantuk terus. Pramuka itu asik, apalagi bareng kalian. Semangat ya kegiatannya! Ngantuk tapi tetep Happy! 🔥";
    document.getElementById('teks-semangat').innerText = pesan;

    // 3. Efek Letupan Petasan Indah (Fireworks Style)
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      
      // Letupan petasan di berbagai sisi
      confetti(Object.assign({}, defaults, { 
          particleCount, 
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#ff0000', '#ffae00', '#ffffff', '#8B4513']
      }));
      confetti(Object.assign({}, defaults, { 
          particleCount, 
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#ff0000', '#ffae00', '#ffffff', '#8B4513']
      }));
    }, 250);
}
;