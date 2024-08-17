// popup
document.addEventListener('DOMContentLoaded', function() {
  // Show popup on page load
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';

  // Initialize Swiper
  const swiper = new Swiper('.swiper-container', {
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      loop: true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
  });
  
  // Close popup functionality
  document.querySelector('.popup').addEventListener('click', function(event) {
      if (event.target === this) {
          this.style.display = 'none';
      }
  });
});

// JavaScript untuk menutup popup
document.querySelector('.popup-close').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

// popup

// Loading
document.addEventListener('DOMContentLoaded', function() {
  function hideLoading() {
    document.body.classList.add('loaded');
  }
  setTimeout(hideLoading, 500);
});

        // Main Slide
        var mainSwiper = new Swiper('.main-swiper', {
          loop: true,
          pagination: {
              el: '.main-swiper .swiper-pagination',
              clickable: true,
          },
          navigation: {
              nextEl: '.main-swiper .swiper-button-next',
              prevEl: '.main-swiper .swiper-button-prev',
          },
      });

// JavaScript untuk menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});