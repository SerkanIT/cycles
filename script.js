// Циклы //
// for, while, for of //
// let i = 10;
// While

// while (i) {
//   console.log(i);
//   i--;
// }

// for (let i = 10;  i < 0; i) {
//     console.log(i);
// }
// let myName = "Serkan
// let sum = "";
// let random = "Hello";
// let rndm = "";
// let massiv = [
//   "Serkan",
//   "Diyora",
//   "Hasan",
//   "MuhammadAli",
//   "MuhammadQodir",
//   "Ulugbek",
// ];

// for (let i = 0; i < 6; i++) {
//   // sum += myName+ " "//sum = sum + myName
//   rndm += random + "a   "; //rndm = rndm + random
// }

// console.log(rndm);

// let raqamlar = [5, 7, 2, 1];
// let summ = 0
// for (let i = 0; i < raqamlar.length; i++) {
//   summ += raqamlar[i]
// }

// console.log(summ);

// Создаем массив с именами
let fruits = ["Apple", "Banana", "Mango", "Coconut", "Orange"];

let fruit = "";

for (let i = 0; i < fruits.length; i++) {
  fruit += fruits[i];
  if (i < fruits.length - 1) {
    fruit += ", ";
  }
}

console.log(fruit);
