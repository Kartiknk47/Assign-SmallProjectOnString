function convertToUpperCase(){
    let text = document.getElementById("Text").value;
    let uppercaseText = 
    text.toUpperCase()
    document.getElementById('result').innerHTML = uppercaseText
    
}
// convertToUpperCase()
function convertToLowerCase(){
let text = document.getElementById("Text").value;
let uppercaseText = 
text.toLowerCase()
document.getElementById('result').innerHTML = uppercaseText

}

//ConvertCamelCase()
function convertToCamelCase(){
let text = document.getElementById("Text").value;
let words = text.split(' ')
let camelCaseText = words[0].toLowerCase();
for(i=1;i<words.length;i++){
    camelCaseText += 
    words[i].charAt(0).toUpperCase() +
    words[i].slice(1).toLowerCase();
}
document.getElementById("result").innerHTML = camelCaseText;
}

// convertToReverseString
function convertToReverseString() {
    let text = document.getElementById("Text").value;
    let reverse = ''; 

    for (let i = text.length - 1; i >= 0; i--) {
        reverse += text[i]; 
    }

    document.getElementById("result").innerHTML = reverse;
}

function CountVowels() {
    let count = 0;
    let vowels = 'aeiouAEIOU';
    let text = document.getElementById("Text").value;

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
        }
    }
    document.getElementById("result").innerHTML = count;
}

// CountConsonants
function CountConsonants(){
    let count = 0;
    let consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    let text = document.getElementById("Text").value;

    for (let i = 0; i < text.length; i++) {
        if (consonants.includes(text[i])) {
            count++;
        }
    }
    document.getElementById("result").innerHTML = count;
}

// CountWords
function CountWords() {
    let text = document.getElementById("Text").value;
    
    let words = text.trim().split(/\s+/); 
    let count = words.length > 0 && words[0] !== "" ? words.length : 0;

    document.getElementById("result").innerHTML = count;
}

// FrequentChar
// function FrequentChar(){
    
// }

// checkAnagrams
// function checkAnagrams(){

// }

// longestWords
function longestWords(){
    let text = document.getElementById("Text").value;

    let words = text.split(/\s+/); 
    let = longestWords = ''

    for(let word of words){
        word = word.replace(/[^a-zA-Z]/g, '');

    if(word.length > longestWords.length){
        longestWords = word
    }

}

document.getElementById('result').innerHTML = longestWords

}







