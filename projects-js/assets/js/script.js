//* =======================================
//* LATIHAN -1 ============================
//* =======================================

function init() {
    let nama = "sandrian"; /* Local Variabel */
    return function () {
        /* Closure */
        console.log(nama);
    };
}

// const myClosure = init();

//* =======================================
//* LATIHAN -2 ============================
//* =======================================

const ucapkanSalam = function (waktu) {
    return function (nama) {
        console.log(`Halo ${nama} selamat ${waktu}`);
    };
};

const selamatPagi = ucapkanSalam("pagi");
const selamatSiang = ucapkanSalam("siang");
const selamatSore = ucapkanSalam("sore");
const selamatMalam = ucapkanSalam("malam");

// selamatMalam("fakri");

// *=======================================
// * LATIHAN -3 ============================
// *=======================================

let add = (function () {
    let counter = 0; /* local variable */
    return function () {
        return ++counter;
    };
})();

console.log(add());
console.log(add());
console.log(add());
