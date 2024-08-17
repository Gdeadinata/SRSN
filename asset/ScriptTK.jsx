// loading
document.addEventListener('DOMContentLoaded', function() {
  function hideLoading() {
    document.body.classList.add('loaded');
  }
  setTimeout(hideLoading, 500);
});

  // JavaScript untuk menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});