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

alert("Calculation for three friends e.g who's actually payment is N10,000 and leave additional discount of 30%,You can try other Payment and Tip-Discount.")


const friends1 = prompt("Enter Payment amount: ");
const discount = prompt("Enter Tip-discount percent: ");
const friends2 = prompt("Number of Friends: ");

let number1 = (parseInt(discount) / 100) * parseInt(friends1);
let number = parseInt(friends1) + number1;
let total = number / friends2;
let payment = parseInt(friends1);
let fred = parseInt(friends2);
let dimi = (parseInt(discount) / 100);

//This is where i change question1 innerhtml 
hood.innerHTML = payment;
frid.innerHTML = fred;
diss.innerHTML = number1;
done.innerHTML = total;

console.log(number1);
console.log(number);
console.log(total);


//Number two question start from here.

alert("Question number two begins");
const fistdiscount = prompt("Enter you choice of purchase: ");

let dim = 2000;
let din = 5000;
let thousandtwo = 2000;
let flot = fistdiscount - dim;
let mean = flot / 100;
let price = fistdiscount - mean - 100;


dis.innerHTML = mean;
purd.innerHTML = fistdiscount;
pri.innerHTML = price;


if (fistdiscount < dim) {
    console.log("You are currently on 10% discount");
    alert("You are currently on 10% discount");
    dos.innerHTML = "Discount based on = 10%";
} else if (fistdiscount >= thousandtwo, fistdiscount <=5000) {
    console.log("You are currently on 20% discount");
    alert("You are currently on 20% discount");
    dos.innerHTML = "Discount based on = 20%";
}

if (fistdiscount > din) {
    console.log("You are currently on 30% discount");
    alert("You are currently on 30% discount");
    dos.innerHTML = "Discount based on = 30%";
}
