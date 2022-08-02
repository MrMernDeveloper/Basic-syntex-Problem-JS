// 1st  problem

// given arry var fruits = ['apple', 'banana', 'orrange'];
//( a) find the index of 'banana' and replace  'banana' with 'mango'
// (b) remove orange and added 'watermelon'.

var fruits = ['apple', 'banana', 'orrange'];
var banana = fruits.indexOf('banana');
console.log(banana); //ans index: 1
fruits[1] = ('mango');
console.log(fruits); // ans [ 'apple', 'mango' ,  'orrange']

fruits.pop('orrange');
fruits.push('watermelon');
console.log(fruits); // ans: ['apple', 'banana', 'watermelon'];



// //problem -2
// 80 or avode A grade
// 60 or avode B grade
// 50 or avode C grade
// 40 or avode D grade
// 39 <= F GRADE

var mark = 80; // input your mark

if (mark >= 80) {
    console.log("A grade");
}
else if (mark >= 60) {
    console.log('B grade');
}
else if (mark >= 50) {
    console.log('C grade');
}
else if (mark >= 40) {
    console.log('D grade');
}

else {
    console.log('F Grade');

}


// problem 3

// (a) given number 13, 79, 45


var numbers = [13, 79, 45];
if (numbers[0] > numbers [1] && numbers[0] > numbers[1] && numbers[0] > numbers[2]) {
    console.log( numbers[0]);

}
else if (numbers[1] > numbers[0] && numbers[1] > numbers[2]) {
    console.log(numbers[1]);
}

else {
    console.log(numbers[2]);
}


// (b) trianges side 9,8,9 condition // condition isosceles => two side are equl

var sides = [9, 8, 9];
if (sides[0] == sides[1]) {
    console.log('The Triange is isosceles');
}
else if (sides[0] == sides[2]) {
    console.log('The Triange is isosceles');
}
else if (sides[1] == sides[2]) {
    console.log('The Triange is isosceles');
}
else {
    console.log('The Triange is not isosceles');
}

var arry = [3, 7, 10];
var find1 = arry.indexOf[1];
console.log(find1);
console.log(6 != 6);






