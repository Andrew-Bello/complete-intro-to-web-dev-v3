const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const input = document.querySelector('.input');
const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');

const inputValue = [];
const calcArr = [];
const operatorArr = [];
let operatorClicked = false;
let operator;
let joinedValue;
let result;

function calc(numbers,opArr) {
    result = numbers[0];
    for(let i = 0; i < opArr.length; i++) {
        const op = opArr[i];
        const nextNum = numbers[i + 1];

        switch (op) {
            case '+':
            result = result + nextNum;
            break;
            case '-':
            result = result - nextNum;
            break;
            case '*':
            result = result * nextNum;
            break;
            case '/':
            result = result / nextNum;
            break;
        }
    }

    return input.innerText = result;
}

function reset() {
    inputValue.length = 0;
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
                operatorArr.push(operators[i].value);
                reset();
            }
            if(operatorArr[operatorArr.length - 1] === '=') {
                operatorArr.pop();
                calc(calcArr,operatorArr);
                console.log(calcArr)
                
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
    })
}

backspace()

function clear() {
    clearBtn.addEventListener('click', () => {
        reset()
        calcArr.length = 0;
        operatorArr.length = 0;
    })
}

clear();