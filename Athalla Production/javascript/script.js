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

// Script global WhatsApp button
const waButtons = document.querySelectorAll(".wa-btn");

waButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const nomor = "6285875597282"; // nomor admin kamu
    const layanan = btn.getAttribute("data-layanan") || "layanan Anda"; 
    const pesan = encodeURIComponent(`Halo Athalla Production, saya ingin memesan dokumentasi ${layanan}.`);

    window.open(`https://wa.me/${nomor}?text=${pesan}`, "_blank");
  });
});