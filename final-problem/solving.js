

// for (var i = 0; i < 100; i++){
//     console.log('aske amar mon valo nei');
//     console.log(i);
// }

// var iteams = ['table', 'khata', 'pen', 'book'];
// iteams.pop();
// iteams.push('rubber');
// iteams.unshift('rice');
// iteams.shift();

// console.log(5<5);

// problem 24
// <80000 tk macbook, 60000 tk gaming laptop, 40000 tk lenovo yaga , 20000 tk old laptop , else mobile diye kaj calabe

amoutOfTaka = 70000 ;

// if (amoutOfTaka >= 80000) {
//     console.log('I will buy Macbook');
// }
// else if (amoutOfTaka >= 6000) {
//     console.log('I wil buy Gamming laptop');
// }
// else if (amoutOfTaka >= 40000) {
//     console.log('I wil buy lenovo yaga ');
// }
// else if (amoutOfTaka >= 2000) {
//     console.log('I wil buy oldlaptop');
// }
// else {
//     console.log('mobile diye kaj caliye nebo');
// }
// 58-98
// for (i = 58; i <= 98; i++){
//     console.log(i);
// }

// 412-456
// for (i = 412; i <= 456; i = i + 2){
//     console.log(i);
// }

// 581-623


// var i = 1;
// while (i <= 39) {
//     console.log('ajke amar mon valo nei');
//     i++;
    
// }

// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও

// for (var i = 30; i <= 86; i++){
    
//     if (i > 44) {
//         break;
//     }
//     console.log(i);
// }

// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও

// var mobileBrands = ['Nokia', 'Shymphony', 'Xiomi', 'Realme'];

// var i = 0;
// while (i < mobileBrands.length) {
//     var mobile = mobileBrands[i];
//     console.log(mobile);
//     i++;
// }

// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

// var learningList = ['HTML', 'CSS', 'BOOTSTRAP', 'TAILWIND', 'BASIC-JAVASCRIPT'];
// for (var i = 0; i < learningList.length; i++){
//     var singleLaerning = learningList[i];
//     console.log(singleLaerning);
// }

var numbers = [1, 2, 3, 4, 5,];
var include = numbers.includes(2);
console.log(include);