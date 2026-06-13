// Mengambil elemen tombol scroll ke atas
const btnTop = document.getElementById("btnTop");

// Ketika halaman discroll, jalankan fungsi scrollFunction
window.onscroll = function () {
    scrollFunction();
};

// Fungsi untuk menampilkan atau menyembunyikan tombol scroll
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}

// Ketika tombol diklik, halaman kembali ke atas
btnTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Menampilkan pesan di console browser
console.log("Website CV berhasil dimuat.");