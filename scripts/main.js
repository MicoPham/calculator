const numsBtn = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const clearBtn = document.querySelector('.clear');
const operatorBtn = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');
const decimalBtn = document.querySelector('.decimal');
const backBtn = document.querySelector('.backspace');

clearBtn.addEventListener('click', clear);    

backBtn.addEventListener('click', backspace);

numsBtn.forEach((num) => {
    num.addEventListener('click', (e) => clickedBtn(e));});

operatorBtn.forEach((oper) => {
    oper.addEventListener('click', (e) => clickedOperation(e));});

decimalBtn.addEventListener('click', (e) => {
    if (b.includes('.')) {
        return;
    } 
    clickedBtn(e);
});

equalBtn.addEventListener('click', () => equals());

let a = '';
let b = '';
let operator = '';

let add = (a, b) => a + b;

let subtract = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => a / b;

let round = (num) => Math.round(num * 10000) / 10000;

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            if (b === 0) {
                return 'lol';
            } else {
            return divide(a, b);
            }
    }
}

function clear(){
    a = '';
    b = '';
    operator = '';
    display.textContent = '';
}

function equals(){
    if (a !== '' && b !== '' && operator !== '') {
        let temp = round(operate(operator, Number(a), Number(b)));
        display.textContent = temp;
        a = temp.toString();
        b = '';
        operator = '';
    }
    }

function clickedBtn(e) {
    if (a === '' && (b === '' || b !== '') && operator === ''){
        display.textContent += e.target.innerText;
        b = display.textContent;
        return;
    } 
    if (a !== '' && b === '' && operator !== '' ){
        display.textContent = e.target.innerText;
        b = display.textContent;
        return;
        } 
    if (a !== '' && b !== '' && operator !== '' ){
        display.textContent += e.target.innerText;
        b = display.textContent;
        }
}

function clickedOperation(e) {
    if (a === '' && b === ''){
        return
    } 
    if (a === '' && b !== '' && operator === ''){
        a = b;
        b = '';
        display.textContent = '';
        operator = e.target.innerText;
        return
    }
    if (a !== '' && b === '' && operator === '') {
        operator = e.target.innerText;
        display.textContent = '';
        return;
    }
    equals();
}

function backspace() {
    b = b.slice(0, -1);
    display.textContent = b;
}