<!-- // === Tombol "Hubungi Kami" === -->
    const btnHubungi = document.getElementById("hubungiKami");
if (btnHubungi) {
  btnHubungi.addEventListener("click", () => {
    window.open("https://wa.me/6285875597282?text=Halo%20Mba%20Tari%2C%20saya%20ingin%20menanyakan%20stok%20barang.", "_blank");
  });
}

// === Tombol Beli Sekarang di Produk / Kategori ===
const nomorWA = "6285875597282";
const tombolBeli = document.querySelectorAll(".beli-btn");

tombolBeli.forEach(btn => {
  btn.addEventListener("click", () => {
    const namaProduk = btn.getAttribute("data-produk");
    const pesan = `Halo Mba Tari, saya ingin membeli ${namaProduk}. Apakah stoknya masih ada?`;
    const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(urlWA, "_blank");
  });
});

const kategoriItems = document.querySelectorAll(".kategori-item");
kategoriItems.forEach(item => {
  item.addEventListener("click", () => {
    const link = item.getAttribute("data-link");
    window.location.href = link;
  });
});



