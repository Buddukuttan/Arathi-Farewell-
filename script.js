// ═══════════════════════════════════════════
// ALL MEDIA FILES
// ═══════════════════════════════════════════
const PHOTOS = [
  "WhatsApp Image 2026-04-11 at 10.47.48 PM (1).jpeg",
  "WhatsApp Image 2026-04-11 at 10.47.48 PM (2).jpeg",
  "WhatsApp Image 2026-04-11 at 10.47.48 PM (3).jpeg",
  "WhatsApp Image 2026-04-11 at 10.47.48 PM (4).jpeg",
  "WhatsApp Image 2026-04-11 at 10.47.48 PM.jpeg",
  "WhatsApp Image 2026-04-11 at 10.47.49 PM (1).jpeg",
  "WhatsApp Image 2026-04-11 at 10.47.49 PM (2).jpeg",
  "WhatsApp Image 2026-04-11 at 10.47.49 PM (3).jpeg",
  "WhatsApp Image 2026-04-11 at 10.47.49 PM.jpeg",
  "WhatsApp Image 2026-04-11 at 10.47.50 PM (1).jpeg",
  "WhatsApp Image 2026-04-11 at 10.47.50 PM (2).jpeg",
  "WhatsApp Image 2026-04-11 at 10.47.50 PM (3).jpeg",
  "WhatsApp Image 2026-04-11 at 10.47.50 PM.jpeg",
  "WhatsApp Image 2026-04-11 at 10.47.51 PM (1).jpeg",
  "WhatsApp Image 2026-04-11 at 10.47.51 PM.jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.53 AM.jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.54 AM (1).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.54 AM (2).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.54 AM (3).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.54 AM (4).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.54 AM.jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.55 AM (1).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.55 AM.jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.56 AM (1).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.56 AM (2).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.56 AM (3).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.56 AM (4).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.56 AM.jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.57 AM (1).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.57 AM (2).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.57 AM (3).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.57 AM (4).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.57 AM.jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.58 AM (1).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.58 AM (2).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.58 AM (3).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.58 AM (4).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.58 AM.jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.59 AM (1).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.59 AM (2).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.59 AM (3).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.59 AM (4).jpeg",
  "WhatsApp Image 2026-04-13 at 2.12.59 AM.jpeg",
  "WhatsApp Image 2026-04-13 at 2.13.00 AM (1).jpeg",
  "WhatsApp Image 2026-04-13 at 2.13.00 AM (2).jpeg",
  "WhatsApp Image 2026-04-13 at 2.13.00 AM (3).jpeg",
  "WhatsApp Image 2026-04-13 at 2.13.00 AM.jpeg"
];

const VIDEOS = [
  "WhatsApp Video 2026-04-11 at 10.47.49 PM.mp4",
  "WhatsApp Video 2026-04-13 at 2.12.54 AM.mp4",
  "WhatsApp Video 2026-04-13 at 2.12.55 AM (1).mp4",
  "WhatsApp Video 2026-04-13 at 2.12.55 AM (2).mp4",
  "WhatsApp Video 2026-04-13 at 2.12.55 AM.mp4",
  "WhatsApp Video 2026-04-13 at 2.12.58 AM.mp4",
  "WhatsApp Video 2026-04-13 at 2.13.00 AM.mp4",
  "WhatsApp Video 2026-04-13 at 2.13.01 AM (1).mp4",
  "WhatsApp Video 2026-04-13 at 2.13.01 AM (2).mp4",
  "WhatsApp Video 2026-04-13 at 2.13.01 AM (3).mp4",
  "WhatsApp Video 2026-04-13 at 2.13.01 AM (4).mp4",
  "WhatsApp Video 2026-04-13 at 2.13.01 AM.mp4",
  "WhatsApp Video 2026-04-13 at 2.13.02 AM (1).mp4",
  "WhatsApp Video 2026-04-13 at 2.13.02 AM.mp4"
];

// ═══════════════════════════════════════════
// BOARDING PASS
// ═══════════════════════════════════════════

// Generate barcode lines
const barcodeEl = document.getElementById('barcodeLines');
if (barcodeEl) {
  for (let i = 0; i < 30; i++) {
    const bar = document.createElement('span');
    bar.style.height = (Math.random() * 28 + 10) + 'px';
    bar.style.width = (Math.random() < 0.3 ? 4 : 2) + 'px';
    barcodeEl.appendChild(bar);
  }
}

const boardingBtn = document.getElementById('boardingBtn');
const boardingPassWrapper = document.getElementById('boardingPassWrapper');
const musicOverlay = document.getElementById('musicOverlay');

// Trigger boarding pass entrance animation on load
setTimeout(() => {
  boardingPassWrapper.classList.add('bp-arrived');
}, 300);

boardingBtn.addEventListener('click', () => {
  // 1. Shrink the boarding pass away
  boardingPassWrapper.classList.add('fly-away');

  // 2. Activate the plane transition overlay
  setTimeout(() => {
    const pt = document.getElementById('planeTransition');
    const plane = document.getElementById('ptPlane');
    const exhaust = document.getElementById('ptExhaust');
    const flash = document.getElementById('ptFlash');
    const clouds = pt.querySelectorAll('.pt-cloud');

    pt.classList.add('active');

    // Slight delay then start animations
    setTimeout(() => {
      plane.classList.add('go');
      exhaust.classList.add('go');
      flash.classList.add('go');
      clouds.forEach(c => c.classList.add('go'));
      pt.classList.add('fadeout');
    }, 100);

    // 3. After transition ends, show music overlay
    setTimeout(() => {
      pt.style.display = 'none';
      musicOverlay.classList.add('show');
    }, 3400);

  }, 500);
});

// ═══════════════════════════════════════════
// MUSIC
// ═══════════════════════════════════════════
const bgMusic = document.getElementById('bgMusic');
bgMusic.volume = 0.35;

document.getElementById('playMusicBtn').addEventListener('click', () => {
  bgMusic.play().catch(() => {});
  musicOverlay.classList.remove('show');
  musicOverlay.style.pointerEvents = 'none';
  revealSections();
  // Show the mute button
  document.getElementById('muteBtn').classList.add('show');
});

// Mute toggle
const muteBtn = document.getElementById('muteBtn');
const muteIcon = document.getElementById('muteIcon');
let isMuted = false;
muteBtn.addEventListener('click', () => {
  isMuted = !isMuted;
  bgMusic.muted = isMuted;
  muteIcon.textContent = isMuted ? '🔇' : '🔊';
  muteBtn.style.borderColor = isMuted ? 'rgba(212,175,55,0.8)' : 'rgba(212,175,55,0.35)';
});

// ═══════════════════════════════════════════
// REVEAL SECTIONS ON SCROLL
// ═══════════════════════════════════════════
function revealSections() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.hidden-section').forEach(s => observer.observe(s));
}

// ═══════════════════════════════════════════
// NETFLIX — EP4 SCROLL TO MEMORIES
// ═══════════════════════════════════════════
document.getElementById('ep4PlayBtn').addEventListener('click', () => {
  document.getElementById('memories').scrollIntoView({ behavior: 'smooth' });
});

// ═══════════════════════════════════════════
// MEMORY GRID — Build & Interactions
// ═══════════════════════════════════════════
function buildMemoryGrid() {
  const grid = document.getElementById('memoryGrid');

  // Interleave photos and videos
  const allMedia = [];
  let pi = 0, vi = 0;
  while (pi < PHOTOS.length || vi < VIDEOS.length) {
    if (pi < PHOTOS.length) allMedia.push({ type: 'photo', src: PHOTOS[pi++] });
    if (pi < PHOTOS.length) allMedia.push({ type: 'photo', src: PHOTOS[pi++] });
    if (pi < PHOTOS.length) allMedia.push({ type: 'photo', src: PHOTOS[pi++] });
    if (vi < VIDEOS.length) allMedia.push({ type: 'video', src: VIDEOS[vi++] });
  }

  allMedia.forEach((media, idx) => {
    const item = document.createElement('div');
    item.className = 'memory-item';
    item.style.transitionDelay = (idx % 8) * 0.07 + 's';

    // Random hover direction for each item
    const dirs = [-1, 1];
    const rx = dirs[Math.floor(Math.random() * 2)];
    const ry = dirs[Math.floor(Math.random() * 2)];
    const hx = (Math.random() * 6 + 2).toFixed(1);
    const hy = (Math.random() * 8 + 4).toFixed(1);
    const hr = (Math.random() * 3 + 0.5).toFixed(2);
    item.style.setProperty('--hx', `${rx * hx}px`);
    item.style.setProperty('--hy', `${ry * hy}px`);
    item.style.setProperty('--hr', `${rx * hr}deg`);
    item.style.transition = 'opacity 0.5s ease, transform 0.35s cubic-bezier(.22,.68,0,1.4), box-shadow 0.3s ease';

    if (media.type === 'photo') {
      const img = document.createElement('img');
      img.src = media.src;
      img.alt = 'Memory';
      img.loading = 'lazy';
      item.appendChild(img);
      item.addEventListener('click', () => openLightbox('img', media.src));
    } else {
      const vid = document.createElement('video');
      vid.src = media.src;
      vid.muted = true;
      vid.loop = true;
      vid.playsInline = true;
      vid.preload = 'metadata';
      item.appendChild(vid);

      const overlay = document.createElement('div');
      overlay.className = 'memory-video-overlay';
      overlay.innerHTML = '<div class="play-indicator">▶</div>';
      item.appendChild(overlay);

      // Hover: play video, duck music
      item.addEventListener('mouseenter', () => {
        vid.muted = false;
        vid.play().catch(() => { vid.muted = true; vid.play(); });
        bgMusic.volume = 0.08;
      });
      item.addEventListener('mouseleave', () => {
        vid.pause();
        vid.currentTime = 0;
        vid.muted = true;
        bgMusic.volume = 0.35;
      });

      item.addEventListener('click', () => openLightbox('video', media.src));
    }

    grid.appendChild(item);
  });

  // Scroll reveal for memory items
  const memObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('revealed');
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.memory-item').forEach(el => memObs.observe(el));
}

buildMemoryGrid();

// ═══════════════════════════════════════════
// LIGHTBOX
// ═══════════════════════════════════════════
const lightbox = document.getElementById('lightbox');
const lightboxMedia = document.getElementById('lightboxMedia');
let currentLightboxVideo = null;

function openLightbox(type, src) {
  lightboxMedia.innerHTML = '';
  if (type === 'img') {
    const img = document.createElement('img');
    img.src = src;
    lightboxMedia.appendChild(img);
  } else {
    const vid = document.createElement('video');
    vid.src = src;
    vid.controls = true;
    vid.autoplay = true;
    vid.style.maxWidth = '90vw';
    vid.style.maxHeight = '90vh';
    lightboxMedia.appendChild(vid);
    currentLightboxVideo = vid;
    bgMusic.volume = 0.08;
  }
  lightbox.classList.add('open');
}

function closeLightbox() {
  if (currentLightboxVideo) {
    currentLightboxVideo.pause();
    currentLightboxVideo = null;
    bgMusic.volume = 0.35;
  }
  lightboxMedia.innerHTML = '';
  lightbox.classList.remove('open');
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// ═══════════════════════════════════════════
// VOICE NOTES
// ═══════════════════════════════════════════
function generateWaveform(containerId, bars = 28) {
  const container = document.getElementById(containerId);
  if (!container) return;
  for (let i = 0; i < bars; i++) {
    const bar = document.createElement('span');
    const h = Math.random() * 22 + 4;
    bar.style.height = h + 'px';
    container.appendChild(bar);
  }
}
generateWaveform('dayanaWave');
generateWaveform('asmaWave');

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return m + ':' + String(s).padStart(2, '0');
}

function setupVoicePlayer(btnId, audioEl, durId, waveId) {
  const btn = document.getElementById(btnId);
  const durEl = document.getElementById(durId);
  const waveEl = document.getElementById(waveId);
  const bars = waveEl ? waveEl.querySelectorAll('span') : [];
  let animFrame;

  audioEl.addEventListener('loadedmetadata', () => {
    durEl.textContent = formatTime(audioEl.duration);
  });

  function animateWave(playing) {
    bars.forEach((b, i) => {
      if (playing) {
        b.style.height = (Math.random() * 22 + 4) + 'px';
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
    if (playing) animFrame = requestAnimationFrame(() => setTimeout(() => animateWave(true), 120));
  }

  btn.addEventListener('click', () => {
    // Pause all other audios
    document.querySelectorAll('audio').forEach(a => {
      if (a !== audioEl && a !== bgMusic) { a.pause(); a.currentTime = 0; }
    });
    // Reset other play btns
    document.querySelectorAll('.voice-play-btn').forEach(b => {
      if (b !== btn) b.querySelector('.play-icon').textContent = '▶';
    });
    cancelAnimationFrame(animFrame);

    if (audioEl.paused) {
      audioEl.play();
      btn.querySelector('.play-icon').textContent = '⏸';
      bgMusic.volume = 0.08;
      animateWave(true);
    } else {
      audioEl.pause();
      btn.querySelector('.play-icon').textContent = '▶';
      bgMusic.volume = 0.35;
      animateWave(false);
    }
  });

  audioEl.addEventListener('timeupdate', () => {
    durEl.textContent = formatTime(audioEl.currentTime);
  });

  audioEl.addEventListener('ended', () => {
    btn.querySelector('.play-icon').textContent = '▶';
    bgMusic.volume = 0.35;
    cancelAnimationFrame(animFrame);
    animateWave(false);
    audioEl.currentTime = 0;
    durEl.textContent = formatTime(audioEl.duration || 0);
  });
}

setupVoicePlayer('dayanaPlayBtn', document.getElementById('dayanaAudio'), 'dayanaDur', 'dayanaWave');
setupVoicePlayer('asmaPlayBtn', document.getElementById('asmaAudio'), 'asmaDur', 'asmaWave');

// ═══════════════════════════════════════════
// COUNTDOWN TIMER
// ═══════════════════════════════════════════
const departureDate = new Date('2026-04-11T23:30:00');

function updateTimer() {
  const now = new Date();
  let diff = Math.max(0, now - departureDate) / 1000;

  const months = Math.floor(diff / (30.44 * 24 * 3600));
  diff -= months * 30.44 * 24 * 3600;
  const days = Math.floor(diff / (24 * 3600));
  diff -= days * 24 * 3600;
  const hours = Math.floor(diff / 3600);
  diff -= hours * 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = Math.floor(diff % 60);

  const pad = n => String(n).padStart(2, '0');
  document.getElementById('tMonths').textContent = pad(months);
  document.getElementById('tDays').textContent = pad(days);
  document.getElementById('tHours').textContent = pad(hours);
  document.getElementById('tMinutes').textContent = pad(minutes);
  document.getElementById('tSeconds').textContent = pad(seconds);
}

updateTimer();
setInterval(updateTimer, 1000);

// ═══════════════════════════════════════════
// FIREWORKS (CSS particle effect)
// ═══════════════════════════════════════════
function launchFireworks() {
  const fw = document.getElementById('fireworks');
  if (!fw) return;

  function burst() {
    const colors = ['#D4AF37', '#8B0000', '#ffffff', '#ff6b9d', '#c44dff'];
    for (let i = 0; i < 12; i++) {
      const p = document.createElement('div');
      const angle = (i / 12) * 360;
      const dist = 80 + Math.random() * 100;
      const color = colors[Math.floor(Math.random() * colors.length)];
      p.style.cssText = `
        position:absolute;
        width:6px; height:6px;
        border-radius:50%;
        background:${color};
        left:${20 + Math.random() * 60}%;
        top:${20 + Math.random() * 60}%;
        transform:translate(-50%,-50%);
        animation:firework 1.2s ease-out forwards;
        --dx:${Math.cos(angle * Math.PI/180) * dist}px;
        --dy:${Math.sin(angle * Math.PI/180) * dist}px;
      `;
      fw.appendChild(p);
      setTimeout(() => p.remove(), 1300);
    }
  }

  // Inject keyframes
  if (!document.getElementById('fwStyle')) {
    const s = document.createElement('style');
    s.id = 'fwStyle';
    s.textContent = `@keyframes firework {
      0%{transform:translate(-50%,-50%) scale(1);opacity:1}
      100%{transform:translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0);opacity:0}
    }`;
    document.head.appendChild(s);
  }

  burst();
  const outroObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const interval = setInterval(burst, 1800);
        setTimeout(() => clearInterval(interval), 12000);
        outroObs.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const outroSection = document.getElementById('outro');
  if (outroSection) outroObs.observe(outroSection);
}

launchFireworks();
