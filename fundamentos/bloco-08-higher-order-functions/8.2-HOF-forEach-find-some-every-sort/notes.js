const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2 = ${element * 2}`);
};

numbers.forEach(multipliesFor2);

const multipliesFor3 = (element) => console.log(`${element} * 3 = ${element * 3}`); console.log(' \n \n');

numbers.forEach(multipliesFor3);
