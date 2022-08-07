const lyric = '  tumi bondhu kala pakhi ami jani ki. bosonto kale tomai vulte pari ni. kala kala sada';
const part = lyric.split(' ');
console.log(part);
const sentences = lyric.split('.');
console.log(sentences);
const char = lyric.split('');
console.log(char);
const partial = lyric.slice(5, 8);
console.log(partial);
const subString = lyric.substring(5, 8);
console.log(subString);

// .......................................................
// trim 
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";

// .......................................................
// concetanation with join

const lines = [
    'tmi bondu kala pakhi',
    'ami jani ki',
    'bosonto kale tomai vulte pari ni',
    'kala kala sada sada'
]

const Join = lines.join('. ');
console.log(Join);
