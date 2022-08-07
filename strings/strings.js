let firstName = 'ena';
let updateName = firstName + 'poribahan';
// console.log(updateName);
// console.log(firstName.length);
var firstElement = firstName[0];
// console.log(firstElement);

const userName = 'blankpinK';
const userInput = 'blackpink';
// if (userName.toLowerCase == userInput.toLowerCase) {
//     console.log('valid user');
// }
// else {
//     console.log('invalid user');
// }


const lyric = 'ami bondhu kala pakhi , tmi jani ki ...? bosonto kale tomai , vulte pari ni';
const serachString = 'bosonto';
const doesExit = lyric.includes(serachString);
console.log(doesExit);
const search = lyric.includes('tmi');
// console.log(search);

// const newValue = serachString.toUpperCase();
// const newLyric = lyric.toUpperCase();
// const result = newLyric.includes(newValue);
// console.log(result);
const onlinePrint = lyric.toUpperCase().includes(serachString.toUpperCase());
console.log(onlinePrint);

// console.log(lyric.indexOf('kala'));
if (lyric.indexOf('kala') !== -1) {
    console.log('exits inside the string');
}
else {
    console.log('Dont exits inside the string');
}

console.log(lyric.startsWith('ami'));
console.log(lyric.endsWith('ni'));

