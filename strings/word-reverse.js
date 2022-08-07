
// problem: input a string and insert in a arry and show it  in reverse arry. and finally join them into a string.

function reverseArry(text) {
    const newArry = text.split(' ');
    const reverseArry = [];
    for (let i = newArry.length - 1; i >= 0; i--){
        const index = i;
        const element = newArry[index];
        reverseArry.push(element);
        
    }

    const result = reverseArry.join(' ');
    return result;

    
}


const myString = 'I am a good boy'
const reverse = reverseArry(myString);

console.log(reverse);