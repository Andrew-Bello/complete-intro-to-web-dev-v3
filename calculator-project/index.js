const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const input = document.querySelector('.input');
const cancelBtn = document.querySelector('.cancel');
const backspaceBtn = document.querySelector('.backspace');

const inputValue = [];
const numArr = [];
let joinedValue;
let result; 

function numsPressed() {
    for(let i = 0; i < nums.length; i++) {
        nums[i].addEventListener('click', () => {
            inputValue.push(nums[i].value);
            joinedValue = Number(inputValue.join(''));
            input.innerText = joinedValue;
            console.log(joinedValue, typeof joinedValue)
        })
    }
}

numsPressed()

function opsPressed() {
    for(let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('clcik', () => {
            console.log(operators[i].value)
        })
    }
}

opsPressed()

const newArr = [1,3,4,5];

function multiply(arr) {
    let sum = 1
    for(let i = 0; i < arr.length; i++) {
        sum *= arr[i];
    }
    return sum;
}

console.log(multiply(newArr));