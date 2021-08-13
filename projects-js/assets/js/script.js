//* =======================================
//* CONSTRUCTOR FUNCTION ==================
//* =======================================

const students = function (nama) {
    this.nama = nama;
    this.sayHello = function () {
        console.log(`Hello ${this.nama}`);
    };
};
const sandrian = new students("sandrian");
//TODO : diable comment to run script
// console.log(sandrian);

//* =======================================
//* ARROW FUNCTION ========================
//* =======================================

//TODO disable comment to run script
// const persons = function (nama) {
//     this.nama = nama;
//     this.count = 0;

//     setInterval(() => {                 /** penerapan this pada arrow function */
//         console.log(++this.count);
//     }, 1000);
// };

const persons = function (nama) {
    this.nama = nama;
    this.count = 0;

    setInterval(function () {
        console.log(this); /** function deklaration dihoisting sehingga this mengarah pada object window */
    }, 1000);
};
//TODO : diable comment to run script
// const fikri = new persons("nama");
