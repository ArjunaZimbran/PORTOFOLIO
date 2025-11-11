// Tombol "Lihat Portofolio"
const btnPorto = document.querySelector('.btn-porto');
if (btnPorto) {
  btnPorto.addEventListener('click', () => {
    window.location.href = '../html/portofolio.html';
  });
}

// Ambil semua elemen card layanan
const layananCards = document.querySelectorAll(".card");

// Tambahkan event click ke tiap card
layananCards.forEach(card => {
  card.addEventListener("click", () => {
    const targetPage = card.getAttribute("data-page");
    if (targetPage) {
      window.location.href = targetPage; // arahkan ke halaman yang dituju
    }
  });
});
// // Tombol layanan (contoh: mitoni, siraman, midodareni, dst)
// const layananButtons = document.querySelectorAll('.layanan-btn');
// layananButtons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const targetPage = btn.dataset.page; // ambil nama halaman dari atribut data-page
//     window.location.href = `../html/${targetPage}.html`;
//   });
// });