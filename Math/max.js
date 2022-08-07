
// max between 2 people

// let jim = 75;
// let dela = 97;
// let chinku = 75;

// if (jim > dela) {
//     console.log('jim will gwt the tasty cake');
// }
// else {
//     console.log('dela will get the tasty cake');
// }

// // max between 3people
// let jim = 75;
// let dela = 97;
// let chinku = 100;


// if (jim > dela && jim > chinku) {
//     console.log(' jim will get the cake');
// }
// else if (dela > jim && dela > chinku) {
//     console.log(' dela will get the cake');
// }
// else {
//     console.log('chinku will get the cake');
// }

// // console.log(Math.max(10, 15, 25, 30));
// // console.log(Math.min(10, 15, 25, 30));

// function maxNumber(number1, number2, number3) {
    
//     var result = Math.max(number1, number2, number3);
//     return result;
    
    
// }

// console.log(maxNumber(10, 12, 14));

// function minNumber(number1, number2, number3) {

//     var result = Math.min(number1, number2, number3);
//     return result;


// }

// console.log(minNumber(10, 12, 14));

// function maxNumber(number1, number2, number3) {
//     if (number1 > number2 && number1 > number3) {
//         return number1;
//     }
//     else if (number2 > number1 && number2 > number3) {
//         return number2
//     }
//     else {
//         return number3;
//     }
// }

// console.log(maxNumber(10, 11, 12));


// ..........................................................................

// tallest number


// function larGest(number) {
//     let result = 0;
//     for (let i = 0; i <number.length; i++){
//         let index = i;
//         let element = number[index];
//         if (element > result) {
//             result = element;
//         }

//     }
//     return result;
// }

// var inputNumber = [1, 2, 3, 4, 19, 5];
// var result = larGest(inputNumber);
// console.log(result);

// lowest number
// ...........................................................................

// const min = function (numbers) {
//     let smallestNum = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < smallestNum) {
//             smallestNum = numbers[i];
//         }
//     }
//     return smallestNum;
// };
function lowEst(number) {
    let smallestNum = number[0];
    for (let i = 0; i < number.length; i++) {
        let index = i;
        let element = number[index];
        if (element < smallestNum) {
            smallestNum = element;
            
        }
        
    }
    return smallestNum;
}

var inputNumber = [5,10,15,2,16];
var outPut = lowEst(inputNumber);
console.log(outPut);

