//* ====================================================
//* Spread Operator ====================================
//* ====================================================

//* Memecah iterable menjadi single element
// const items = [1, 2, 3, 4, 5];
// console.log(...items);

//* Menggabungan 2 atau lebih array
// const mahasiswa = ["a", "b", "c"];
// const dosen = ["d", "e", "f"];

// const orang = [...mahasiswa, ...dosen];
// console.log(orang);

//* Mengcopy array
// const items = [1, 2, 3, 4];
// const newItems = [...items];
// newItems[3] = 10;
// console.log(items);
// console.log(newItems);

//* Nodelist To Array
// const lists = document.querySelectorAll("ul li");
// const items = [...lists]
//   .map((list) => list.textContent)
//   .map((li) => console.log(li));

//* String
const names = document.querySelector("h1");
const string = [...names.textContent]
  .map((name) => `<span>${name}</span>`)
  .join("");

names.innerHTML = string;
