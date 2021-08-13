//* ===========================================
//* FUNTION EXPRESSION ========================
//* ===========================================

const fnExpression = function () {
    console.log(`ini adalah fn expresstion`);
};
// TODO : disable script below to run application
// console.log(fnExpression());

//* ===========================================
//* FUNTION DECLARATION =======================
//* ===========================================

function fnDeclaration() {
    console.log(`ini adalah fn decralartion`);
}

// TODO : disable script below to run application
// console.log(fnDeclaration());

//* ===========================================
//* FUNTION ARROW FUNCTION ====================
//* ===========================================

//* CONTOH PENGGUNAAN ARROW FUNCTION
const fnArrow1 = () => console.log(`Hello`);
const fnArrow2 = (nama) => console.log(`Hello ${nama}`);
const fnArrow3 = (nama, umur) => console.log(`Hello ${nama} , gak kerasa ya udah ${umur} tahun `);
const fnArrow4 = (nama, energi) => {
    return `Halo ${nama} energi kamu sekarang ${energi}`;
};

// console.log(fnArrow1());
// console.log(fnArrow2("sandrian"));
// console.log(fnArrow3("sandrian", 23));
// console.log(fnArrow4("sandrian", 100));

//* LATIHAN ARROW FUNCTION
const students = ["Sandrian", "Fikri", "Faiz"];
const charName = students.map((student) => ({ name: student, char: student.length }));

// TODO : disable script below to run application
// console.table(charName);
