// ==========================================
// HAMBURGER MENU TOGGLE
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-item, .nav-cta');

if (menuToggle && navLinks) {
  // Toggle buka/tutup menu
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Otomatis tutup menu saat salah satu link diklik
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// ==========================================
// FAQ FLIP CARD
// ==========================================
function flipCard(cardElement) {
  if (cardElement) {
    cardElement.classList.toggle('flipped');
  }
}

// ==========================================
// IMAGE MODAL ZOOM
// ==========================================
function openModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const imgFull = document.getElementById('imgFull');
  
  if (modal && imgFull) {
    imgFull.src = imageSrc;
    modal.style.display = 'flex';
  }
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// ==========================================
// FAQ ACCORDION TOGGLE
// ==========================================
function toggleFaq(card) {
  // Tutup FAQ lain yang sedang terbuka (Opsional - hilangkan jika mau bisa buka banyak sekaligus)
  document.querySelectorAll('.faq-card').forEach(item => {
    if (item !== card) {
      item.classList.remove('active');
    }
  });

  // Toggle FAQ yang diklik
  card.classList.toggle('active');
}


