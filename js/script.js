//Toggle class active untuk hamburger menu

const navbarNav = document.querySelector('.navbar-nav');
// when the hamburger menu is clicked

document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

//Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Tonggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = () => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

//Klik di luar element
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// Klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// Klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};

function handleSubmit(event) {
  event.preventDefault();

  let nama = document.querySelector('input[placeholder="nama"]').value;
  let email = document.querySelector('input[placeholder="email"]').value;
  let noHp = document.querySelector('input[placeholder="no hp"]').value;
  let pesan = document.querySelector('input[placeholder="pesan"]').value;

  // Kirim data ke email.js menggunakan XMLHttpRequest
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://api.emailjs.com/api/v1.0/email/send');
  xhr.setRequestHeader('Content-Type', 'application/json');

  // Ganti dengan konfigurasi email.js yang sesuai
  let data = {
    service_id: 'YOUR_SERVICE_ID',
    template_id: 'YOUR_TEMPLATE_ID',
    user_id: 'YOUR_USER_ID',
    template_params: {
      nama: nama,
      email: email,
      no_hp: noHp,
      pesan: pesan,
    },
  };

  xhr.send(JSON.stringify(data));

  // Setelah data terkirim, kosongkan nilai input
  document.querySelector('input[placeholder="nama"]').value = '';
  document.querySelector('input[placeholder="email"]').value = '';
  document.querySelector('input[placeholder="no hp"]').value = '';
  document.querySelector('input[placeholder="pesan"]').value = '';

  // Tambahkan logika atau kode lainnya sesuai kebutuhan
}
