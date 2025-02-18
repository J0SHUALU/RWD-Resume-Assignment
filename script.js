const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const musicToggle = document.getElementById('musicToggle');
let musicPlaying = false;
let audio = new Audio('assets/music/kid-flamez-music.mp3');

musicToggle.addEventListener('click', () => {
  if (musicPlaying) {
    audio.pause();
    musicToggle.textContent = 'Play Music';
  } else {
    audio.play();
    musicToggle.textContent = 'Pause Music';
  }
  musicPlaying = !musicPlaying;
});

function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  lightbox.style.display = 'flex';
  lightboxImage.src = imageSrc;
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}
