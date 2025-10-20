let buffer = '0';
let runningTotal = 0;
let previousOperator;
const input = document.querySelector('.input');

function buttonClick(value) {
    if(isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    };

    rerender();
};

function handleNumber(number) {
    if (buffer === '0') {
        buffer = number;
    } else {
        buffer += number;
    };
};

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else if (previousOperator === '÷') {
        runningTotal /= intBuffer;
    };
};

function handleMath(value) {
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = value;
    buffer = '0';
};

function handleSymbol(symbol) {
    switch(symbol) {
        case 'C':
            buffer = '0';
            break;
        case '=':
            flushOperation(parseInt(buffer));
            buffer = '' + runningTotal;
            runningTotal = 0;
            previousOperator = null;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    };
};

function rerender() {
    input.innerText = buffer;
};

function init() {
    document.querySelector('.calc-buttons').addEventListener('click', (event) => {
        if (event.target.matches('button')) {
            buttonClick(event.target.innerText);
        } else {
            return;
        };
    });
};

init();

// ×
// ÷
// ←