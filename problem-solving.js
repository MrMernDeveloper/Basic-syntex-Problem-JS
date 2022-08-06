// problem 1:  take parameters in hours and give minutes , return minutes

// minutes = hour * 60;

// function convertHours(hours) {
//     var minutes = hours * 60;

//     return minutes;

// }

// var yourHours = 3;
// var yourMinutes = convertHours(yourHours);

// // console.log('your minutes is:', yourMinutes);

// // solved

// // ........................................................................................
// // // problem:2
// // // input random years from an arry and find out leapyears and print them into an arry
// // ............................................................................................

// function findLeapYears(years) {
//     var leapYears = [];
//     for (let i = 0; i < years.length; i++) {
//         var index = i;
//         var element = years[index];
//         if (element % 400 == 0) {
//             leapYears.push(element);
//         }
//         else if (element % 100 == 0) {
//             continue;
//         }
//         else if (element % 4 == 0) {
//             leapYears.push(element);
//         }
//         else {
//             continue;
//         }

//     }
//     return leapYears;
// }

// var givenyears = [2000, 2023, 2024, 2025, 2028, 2030, 2033, 2038, 2036, 1800];

// var Years = findLeapYears(givenyears);

// console.log('the leap-years:', Years);

// .........................................................

// another problem
// ..........................................................

// ..............................................................
// celcious to farenhight

// function converter(celsious) {
//     var fahrenheit = (celsious * 1.8) +  32;

//     return fahrenheit;
// }

// console.log('the farenheits is:', converter(1));
// .................................................................



// .....................................................................
// fahrenheit to celcious

// function converter(fahrenheit) {
//     var celcious = (fahrenheit - 32) / 1.8;

//     return celcious;
// }

// var inputFarenhight = 33.8;
// var yourFerinheight = converter(inputFarenhight);
// var result = yourFerinheight.toFixed(1);

// console.log( 'the celcious is:' ,result);
// ........................................................


// ৩.কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ + পাবে নাকি অন্য কোন গ্রেড পাবে।

// function resultInput(numbers) {
//     var stringNumber = ''
//     var result = numbers;
//     if (result >= 80) {
//         console.log('your garde is A+');
//     }
//     else if (result >= 70) {
//         console.log('your grade is A');

//     }
//     else if (result >= 60) {
//         console.log('your grade is A-');

//     }
//     else if (result >= 50) {
//         console.log('your grade is B');

//     }

//     else if (result >= 40) {
//         console.log('your grade is c');

//     }
//     else if (result >= 33) {
//         console.log('your grade is d');

//     }
//     else {
//         console.log('your grade failed');

//     }

//     return stringNumber ;
// }

// var yourNumber = 50;
// var result = resultInput(yourNumber);
// console.log(result);

// ............................................................................................
// ৪. মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে।

// 1 hour = 3600 sec;

// function inputHours(hours) {
//     result = hours * 3600;

//     return result;
// }
// var yourHours = 4;
// var result = inputHours(yourHours);
// console.log('the time is in second:', result);


// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

// function inputAge(ages) {
//     if (ages % 2 == 0) {
//         console.log('your age is even', ages)
//         return true;

//     }
//     else {
//         console.log('your age is odd', ages)
//         return false;
//     }
// }

// console.log(inputAge(21));

// var myArry = ['ajke', 'ami', 'hagu', 'korbo na'];

// for (let i = 1; i <= 10; i++){
//     console.log(i);
//     for (let i = 0; i < myArry.length; i++) {
//         var index = i;
//         var element = myArry[i];
//         console.log(element);
//     }
// }


// for (let i = 1; i <= 10; i++){
//     var result = 13;
//     output = result * i;
//     console.log (`${result} * ${i} = ${output} `)
// }



// function inputArry(arry) {
//     var sum = 0;
//     for (let i = 0; i < arry.length; i++){
//         var index = i;
//         var element = arry[index];
//         sum = sum + element;

//     }
//     return sum;
// }




// function oddNumber(arry) {
//     var oddArry = [];

//     for (let i = 0; i < arry.length; i++){
//         var index = i;
//         var element = arry[index];
//         if (element % 2 != 0) {
//             oddArry.push(element);
//         }
//     }
//     return oddArry;
// }

// var givenArry = [5,7,8,10,45,30];
// var result = oddNumber(givenArry);
// var sumOfOdd = inputArry(result);
// console.log('the sumation of the odd number is:', sumOfOdd);


// function evenNumber(arry) {
//     var evenArry = [];

//     for (let i = 0; i < arry.length; i++) {
//         var index = i;
//         var element = arry[index];
//         if (element % 2 == 0) {
//             eve.push(element);
//         }
//     }
//     return evenArry;
// }

// var givenArry = [1, 3, 5, 7, 2, 8, 10, 3];
// var result = evenNumber(givenArry);
// var sumEven = inputArry(result);
// // console.log('the sumation of the even number is:', sumEven);

// function number(value) {

//     if (value % 2 == 0) {
//         console.log(value, 'even')

//     }
//     else {
//         console.log(value, 'odd')

//     }


// }

// number(7);

// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।

// for (let i = 50; i <= 80; i++){
//     var index = i;
//     if (index % 2 != 0) {
//         console.log(index);
//     }
// }



// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা:



// const pizza = {

//     toppings: ['cheese', 'sauce', 'pepperoni'],

//     crust: 'deep dish',

//     serves: 2

// }

// এবং pepperoni প্রিন্ট করবা।

const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],

    crust: 'deep dish',

    serves: 2

}

var value = pizza['toppings'];
var result = value[2];
console.log(value);
console.log(result);

// ............................................................................


// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।

// function inputValue(number) {
//     let result = number * number;
//     return result;
// }
// var yourValue = 5;
// var SqureValue = inputValue(yourValue);
// console.log( 'the squre value is:' , SqureValue);