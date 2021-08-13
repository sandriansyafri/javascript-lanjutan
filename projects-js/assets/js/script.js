//TODO disable comment for run script

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//* ==================================
//* FILTER LOOPING FOR ===============
//* ==================================

const newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 5) {
        newNumbers.push(numbers[i]);
    }
}
// console.log(newNumbers);

//* ==================================
//* FILTER ===========================
//* ==================================

const filterNumber = numbers.filter((number) => number <= 3);
// console.log(filterNumber);

//* ==================================
//* MAP ==============================
//* ==================================

const resultMap = numbers.filter((number) => number > 2 && number);
// console.log(resultMap);

//* ==================================
//* REDUCE ===========================
//* ==================================

const resultReduce = numbers.reduce((firstValue, nextValue) => firstValue + nextValue, 0);
// console.log(resultReduce);

//* ==================================
//* CHANING ==========================
//* ==================================

const chainNumber = numbers
    .filter((number) => number < 5)
    .map((number) => number * 3)
    .reduce((firstValue, nextValue) => firstValue + nextValue, 0);
// console.log(chainNumber);
