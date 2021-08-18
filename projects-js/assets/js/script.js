//* ========================================================
//* DESTRUCTURING ASSIGNMENT ===============================
//* ========================================================

//*Destructuring Array 
//TODO disable to run script
// const names = ['Hafid', 'Fikri', 'Yogi', 'sandrian', 'faiz'];
// const [ketua, wakil, ...anggota] = names;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);

//*Swap items
//TODO disable to run script

// let a = 10;
// let b = 20;

// console.log(`a : ${a}`);
// console.log(`b : ${b}`);

// [a, b] = [b, a];
// console.log(`a : ${a}`);
// console.log(`b : ${b}`);


//* Return Value pada Function 
//TODO disable to run script
// const coba = function () {
//     return ['hafid', 'fikri', 'sandrian'];
// }

// const [ketua, ...anggota] = coba();
// console.log(ketua);
// console.log(anggota);


//* Rest Parameter
//TODO disable to run script
// const names = ['a', 'b', 'c', 'd', 'e'];
// const [...anggota] = names;
// console.log(anggota);


//* Destructuring Object
//TODO disable to run script

// const profile = {
//     name: 'Sandrian',
//     age: 23,
//     date_of_birth: 'Muara Bungo, 17-05-1998',
// }

// const { name, age, date_of_birth } = profile;
// console.log(name);
// console.log(age);
// console.log(date_of_birth);

//* Destructuring Object - DEFAULT VALUE & ALIAS
//TODO disable to run script

// const profile = {
//     age: 23,
// }

// const { name = 'name', age: a = 'age', date_of_birth = 'date_of_birth' } = profile;
// console.log(name);
// console.log(a);
// console.log(date_of_birth);
//* Descturing Object - Function
//TODO disable to run script

const profile = {
    id: 1,
    name: 'Sandrian Syafri',
    age: 23
};

const getProfileId = function ({ id }) {
    console.log(1);
}

getProfileId(profile);




