const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const input = document.querySelector('.input');
const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');

const inputValue = [];
const numArr = [];
let joinedValue;
let result; 

function operatorPressed() {
    let operator;
    for(let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', () => {
            operator = operators[i].value;
        })
    }
    return operator;
}
console.log(operatorPressed())

function numsPressed() {
    for(let i = 0; i < nums.length; i++) {
        nums[i].addEventListener('click', () => {
            inputValue.push(nums[i].value);
            joinedValue = Number(inputValue.join(''));
            input.innerText = joinedValue;
        })
    }
}

numsPressed()


function backspace() {
    backspaceBtn.addEventListener('click', () => {
        inputValue.splice(-1);
        joinedValue = Number(inputValue.join(''));
        input.innerText = joinedValue;
    })
}

backspace()

function clear() {
    clearBtn.addEventListener('click', () => {
        inputValue.length = 0;
        input.innerText = 0;
    })
}

clear();


// function multiply(arr) {
//     let sum = 1
//     for(let i = 0; i < arr.length; i++) {
//         sum *= arr[i];
//     }
//     return sum;
// }