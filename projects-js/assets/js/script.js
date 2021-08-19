const students = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

const studies = [
  { id: 1, name: "d" },
  { id: 2, name: "e" },
  { id: 3, name: "f" },
];

const getStudents = new Promise((resolve) => {
  setTimeout(() => {
    resolve(students);
  }, 4000);
});

const getStudies = new Promise((resolve) => {
  setTimeout(() => {
    resolve(studies);
  }, 1000);
});

Promise.all([getStudents, getStudies]).then((res) => {
  const [students, studies] = res;
  console.log(studies);
  console.log(students);
});
