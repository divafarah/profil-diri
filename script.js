let halamanSekarang = 0;

const halaman = document.querySelectorAll(".halaman");


function tampilkanHalaman(index) {

    halaman.forEach(function(item) {
        item.classList.remove("aktif");
    });

    halaman[index].classList.add("aktif");

    halamanSekarang = index;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function nextHalaman() {

    if (halamanSekarang < halaman.length - 1) {
        tampilkanHalaman(halamanSekarang + 1);
    }

}


function halamanSebelumnya() {

    if (halamanSekarang > 0) {
        tampilkanHalaman(halamanSekarang - 1);
    }

}