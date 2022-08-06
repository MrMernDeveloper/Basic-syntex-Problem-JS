// function giveSingara( number1 ,number2) {
   
//     var sum = number1 + number2;
//     return sum;
//     return number1;
// }

// var total = giveSingara(5, 10);
// console.log('ami taka disi:', total);

// function amounts(money) {
//    var piecesTaka = 10;
//     var pieces = money / piecesTaka;
//     return pieces;


// }

// var perPieces = amounts(50);
// console.log( 'amake ', perPieces, 'singara den');

// function functionNmae(parameter) {
//     function body
//         return value
// }

// var returnValue = function (perameter value);
// console.log(returnValue);

// function add(num1, num2) {
//     var sum = num1 + num2;
//     return sum;
// }
// const result1 = add(10, 5);
// const result2 = add(14, 12);
// const finalResult = add(result1, result2);
// console.log(finalResult);

// function assignmentMarks(assignment1, assigment2, assignment3) {
//     const totalMarks = assignment1 + assigment2 + assignment3;
//     const averageMarks = totalMarks / 3;
//     return averageMarks;
// }

// const assignment1 = 58;
// const assigment2 = 60;
// const assignment3 = 60;

// const average = assignmentMarks(assignment1, assigment2, assignment3);
// const averageMark = average.toFixed(2);
// console.log(averageMark);

// var mobile = {
//     brand: 'samsung',
//     camera: '48 MP',
//     price: 15500,
//     storage : '64 GB',
// }

// mobile= object ; brand , camera; price, storage = properties , 'samsung', '64 gb' , '48 mp' = values



// problem 1

// function bar() {
//     console.log('bar');
// }

// function foo() {
//     console.log('foo');
//     bar();
// }
// foo();

// problem2
// function make_ave(number1, number2, number3) {
//     const total = number1 + number2 + number3;
//     const ave = total / 3;
//     return ave;
// }

// const averagevalue = make_ave(5, 5, 5);
// console.log (averagevalue)


// problem-3

// function ArrayAvg(myArray) {
//     var i = 0, summ = 0, ArrayLen = myArray.length;
//     while (i < ArrayLen) {
//         summ = summ + myArray[i++];
//     }
//     var avg = summ / ArrayLen;
//     return avg;
// }
// var myArray = [1, 5, 2, 3, 7];
// var a = ArrayAvg(myArray);
// console.log(a);

//problem 5

// problem 4

// function odd_even(number) {
//     var blank_space = ""
//     if (number % 2 == 0) {
//         console.log('this is even nmber')
//     }
//     else {
//         console.log(' this is odd number');
//     }
//     return blank_space;
// }

// var number = 5;


// var a = odd_even(5);
// console.log(a);

// var signal = 'green';

// switch (signal) {
//     case 'red':
//         console.log(' it will be danger');
//         break;
//     case 'yellow':
//         console.log('you should stop');
//         break;
//     case 'green':
//         console.log(' you should cross the road');
//         break;
//     default:{
//         console.log('there has no singla.. please wait');
//         }

        
// }

// multipication table

// program to generate a multiplication table

// take input from the user


function multipleTable(number) {

   var blank_space = ''
    
    for (let i = 10; i >= 1; i--) {
      var  blank_space =''
        const result = i * number;

        console.log(`${number} * ${i} = ${result}`);
    }

    return blank_space;

    

}


var number = 13;
var a = multipleTable(number);
console.log(a);


