let a = '';
let b = '';
let operator = '';

const numsBtn = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const clearBtn = document.querySelector('.clear');
const operatorBtn = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');
const decimalBtn = document.querySelector('.decimal');

equalBtn.addEventListener('click', (e) => {
    if (a !== '' && b !== '' && operator !== '') {
        let temp = operate(operator, Number(a), Number(b));
        display.textContent = temp;
        a = temp.toString();
        b = '';
        operator = '';
        return;
    }
})

clearBtn.addEventListener('click', (e) => {
    clear();    
})

decimalBtn.addEventListener('click', (e) => {
    if (b.includes('.')) {
        return;
    } else 
    if (a === '' && (b === '' || b !== '') && operator === ''){
        display.textContent += e.target.innerText;
        b = display.textContent;
        console.log(b);
        return;
    } 
    if (a !== '' && b === '' && operator !== '' ){
        display.textContent = e.target.innerText;
        b = display.textContent;
        console.log(b);
        return;
        } 
    if (a !== '' && b !== '' && operator !== '' ){
        display.textContent += e.target.innerText;
        b = display.textContent;
        console.log(b);
        return;
        }
});

numsBtn.forEach((num) => {
    num.addEventListener('click', (e) => {
        if (a === '' && (b === '' || b !== '') && operator === ''){
            display.textContent += e.target.innerText;
            b = display.textContent;
            console.log(b);
            return;
        } 
        if (a !== '' && b === '' && operator !== '' ){
            display.textContent = e.target.innerText;
            b = display.textContent;
            console.log(b);
            return;
            } 
        if (a !== '' && b !== '' && operator !== '' ){
            display.textContent += e.target.innerText;
            b = display.textContent;
            console.log(b);
            return;
            }
    });
});


operatorBtn.forEach((oper) => {
    oper.addEventListener('click', (e) => {
        if (a === '' && b === ''){
            return
        } 
        if (a === '' && b !== '' && operator === ''){
            a = b;
            b = '';
            display.textContent = '';
            operator = e.target.innerText;
            console.log(operator);
            return
        }
        if (a !== '' && b === '' && operator === '') {
            operator = e.target.innerText;
            display.textContent = '';
            console.log(operator);
            return;
        }
        if (a !== '' && b !== '' && operator !== '') {
            let temp = operate(operator, Number(a), Number(b));
            display.textContent = temp;
            a = temp.toString();
            b = '';
            operator = e.target.innerText;
            return;
        }
        }
    );
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

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
                return 'No';
            } else {
            return divide(a, b);
            }
            break;
        default:
            return
    }
}

function clear(){
    a = '';
    b = '';
    operator = '';
    display.textContent = '';
}

