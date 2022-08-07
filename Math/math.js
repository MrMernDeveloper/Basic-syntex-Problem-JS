// math power
// ............................................................
var number = Math.pow(3, 3);
// console.log(number);

// math  abs
// ............................................................
const male = 20;
const female = 35;

const result = Math.abs(male - female);
if (result <= 5) {
    console.log('you guys can be friend');
    
}
    
else {
    console.log('you guys stay apart');
}

// math round
// ............................................................

var number = Math.round(3.49);
// console.log(number);

// math ceil and floor
// ............................................................
let result1 = Math.ceil(3.1); // dosomiker por point thakle uporer purno sonkha dekhabe
let result2 = Math.floor(3.5);  //  point er number hake nicer purno sonkha dekhabe
// console.log(result1, result2);

// math Random
// ............................................................
console.log(Math.random()); // automatic generate random value

let ranDom = Math.round(Math.random() * 20);
// console.log(ranDom);

// ludu daies
// .................................................................

// for (let i = 1; i <= 7; i++){
//     let dise = Math.round(Math.random() * 6);      ///mdn math
//     console.log(dise);
// }


// termporay/ swap 
// wrong approch
let firstTm = 5;
let secondTm = 7;
console.log(firstTm, secondTm);

// 1st approch
// const temp = firstTm;
// firstTm = secondTm;
// secondTm = temp;
// console.log(firstTm, secondTm);

// second approch
[firstTm, secondTm] = [secondTm, firstTm];
console.log(firstTm, secondTm);

