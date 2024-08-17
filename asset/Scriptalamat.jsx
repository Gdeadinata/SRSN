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

// Fetch Data Example (Replace URL and content as needed)
document.addEventListener('DOMContentLoaded', function() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      const contentContainer = document.getElementById('content');
      contentContainer.innerHTML = data.map(item => `
        <div class="item">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
        </div>
      `).join('');
    })
    .catch(error => console.error('Error fetching data:', error));
});
