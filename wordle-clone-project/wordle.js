let letterNumber = 0;
let rowChange = 4;
let inputLetter;
const secretWord = 'trash';
const guessContainer = document.querySelector('.guess-container');
const letterBox = document.querySelectorAll('.letter-box');

function handleLetters(letter) {
    inputLetter = document.querySelector(`.letter-${letterNumber}`);
    if (letterNumber <= rowChange) {
        inputLetter.innerText = letter;
        letterNumber++;
    }
    console.log(inputLetter)
    console.log(letterNumber)
};

function handleEnter() {
    if (rowChange >= 30) {
        rowChange = 30;
        console.log(rowChange)
    } else {
        rowChange += 5
        console.log(rowChange)
    }
}

function handleBackspace() {   
    if (letterNumber > 0) {
        document.querySelector(`.letter-${letterNumber - 1}`).textContent = '';
        letterNumber--;
        rowNumber--;
        console.log(inputLetter)
    } else {
        letterNumber = 0
        document.querySelector(`.letter-0`).textContent = '';
    }

    console.log(letterNumber)
}

function keysClicked(value) {
    if (value === 'Backspace') {
        console.log(0);
        handleBackspace();
    } else if (value === 'Enter') {
        handleEnter();
    } else {
        handleLetters(value);
    }
};

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
};

function rerender() {

} 

function isEnterAndBackspace(event) {
    return event.key !== 'Enter' && event.key !== 'Backspace';
};

function init() {
    document.querySelector('body').addEventListener('keydown', (event) => {
        if (!isLetter(event.key) && isEnterAndBackspace(event)) {
            event.preventDefault();
        } else {
            keysClicked(event.key);
        }
    })
};

init();

const arr = ['a', 'b', 'c', 'd', 'e']

console.log(arr)

const splitWord = secretWord.split('')
console.log(splitWord)

// for (let i = 0; i < splitWord.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         // console.log(splitWord[i], arr[j])
//         if (splitWord[i] === arr[j]) {
//             console.log()
//         }
//     }
// }

const matching = splitWord.match(arr);
console.log(matching);