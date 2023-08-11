const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Menutup sidebar saat mengklik di luar sidebar
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && e.target !== burger) {
    sidebar.classList.remove('active');
  }
});
