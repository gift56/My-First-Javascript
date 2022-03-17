// alert("Welcome to Atc-Hub: Question");
// let userName = prompt("Enter your name: ");
// uname.innerHTML = userName;

// let Useradd = prompt("Enter your address: ");
// add.innerHTML = Useradd;
// console.log(Useradd);

// let Userage = prompt("Enter your age: ");
// age.innerHTML = Userage;

//added onclick function on an Id dat to display date
// function displayDate() {
//     dat.innerHTML = Date();
// }

// let task = 1 + "week", Task = 6024800 + "s";

// function myBtn() {
//     minute.innerHTML = task;
//     second.innerHTML = Task;
// }
// alert("Looking good");

alert("Calculation for three friends who's actually payment is N10,000 and leave additional discount of 30%")

const friends1 = prompt("Enter Payment number: ");
const discount = prompt("Enter Tip-discount percent: ");
const friends2 = prompt("Number of Friends: ");

let number1 = (parseInt(discount) / 100) * parseInt(friends1);
let number = parseInt(friends1) + number1;
let total = number / 3;
let payment = parseInt(friends1);
let fred = parseInt(friends2);
let dimi = (parseInt(discount) / 100);


document.getElementById("hood").innerHTML = payment;
document.getElementById("frid").innerHTML = fred;
document.getElementById("diss").innerHTML = number1;
document.getElementById("done").innerHTML = total;

console.log(number1);
console.log(number);
console.log(total);

