


function recerseString(text) {
   var reverse = '';
    for (let i = text.length-1; i >= 0;  i--){
        const index = i;
        const element = text[index];
        reverse = reverse + element;
        
    }
    return reverse;
}

const myString = 'I am a good Boy';
const reverse = recerseString(myString);
console.log(reverse);