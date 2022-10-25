let firstNumber = '';
let secondNumber = 2;

let entry = document.querySelector('.secondDisplay');
let result = document.querySelector('.mainDisplay');


let one = document.querySelector('.num1');
one.addEventListener('click', () => {
    firstNumber += '1';
    entry.innerText = firstNumber;
}); 

let two = document.querySelector('.num2');
two.addEventListener('click', () => {
    firstNumber += '2';
    entry.innerText = firstNumber;
}); 

let three = document.querySelector('.num3');
three.addEventListener('click', () => {
    firstNumber += '3';
    entry.innerText = firstNumber;
}); 

let four = document.querySelector('.num4');
four.addEventListener('click', () => {
    firstNumber += '4';
    entry.innerText = firstNumber;
}); 

let five = document.querySelector('.num5');
five.addEventListener('click', () => {
    firstNumber += '5';
    entry.innerText = firstNumber;
}); 

let six = document.querySelector('.num6');
six.addEventListener('click', () => {
    firstNumber += '6';
    entry.innerText = firstNumber;
}); 

let seven = document.querySelector('.num7');
seven.addEventListener('click', () => {
    firstNumber += '7';
    entry.innerText = firstNumber;
}); 

let eight = document.querySelector('.num8');
eight.addEventListener('click', () => {
    firstNumber += '8';
    entry.innerText = firstNumber;
}); 

let nine = document.querySelector('.num9');
nine.addEventListener('click', () => {
    firstNumber += '9';
    entry.innerText = firstNumber;
}); 

let zero = document.querySelector('.num0');
zero.addEventListener('click', () => {
    firstNumber += '0';
    entry.innerText = firstNumber;
}); 

let point = document.querySelector('.point');
point.addEventListener('click', () => {
    firstNumber += ".";
    entry.innerText = firstNumber;
}); 

