const colorToggle = document.getElementById('colorToggle');
const body = document.body;

colorToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});
