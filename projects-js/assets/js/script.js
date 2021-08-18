//* =========================================
//* TEMPLATE STRINGS ========================
//* =========================================

//* STRING 
const firstName = 'Sandrian';
const lastName = 'Syafri';

const fullName = `${firstName} ${lastName}`;
const sayHi = `Hello ${fullName}`;
// console.log(sayHi);

//* EXPRESSION
const x = 10;
const y = 20;
const result = `${x + y == 30 ? 'x + y = 30' : ''}`;

//* HTML FRAGMENT
const message = 'Hello World';
const el = `<div>
    <h1>${message}</h1>
</div>`;
// document.body.innerHTML = el;
