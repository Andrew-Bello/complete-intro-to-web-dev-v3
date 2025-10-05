const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const input = document.querySelector('.input');
const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');

const inputValue = [];
const calcArr = [];
let operatorClicked = false;
let operator;
let joinedValue;
let result; 

function calc(arr) {
    let result = arr[0];
    for(let i = 0; i < arr.length; i++) {
        
    }
}

function reset() {
    inputValue.length = 0
    joinedValue = 0;
    input.innerText = 0;
}

function operatorPressed() {
    for(let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', () => {
            operator = operators[i].value;
            operatorClicked = true;
            if(operatorClicked = true) {
                calcArr.push(joinedValue);
                calcArr.push(operators[i].value)
                reset();
            }
            if(calcArr[calcArr.length - 1] === '=') {
                calcArr.pop();
                calc(calcArr);
            }           
        })
    }
}
operatorPressed()

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
        console.log(inputValue, typeof joinedValue, joinedValue)
    })
}

backspace()

function clear() {
    clearBtn.addEventListener('click', () => {
        reset()
        calcArr.length = 0
    })
}

clear();