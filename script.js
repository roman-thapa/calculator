let firstNumber = '';
let secondNumber = '';

let entry = document.querySelector('.secondDisplay');
let result = document.querySelector('.mainDisplay');
let power = document.querySelector('.powerButton')


power.addEventListener('click', ()=>{
    getEntry(firstNumber);
    power.style.color = "green";
})



function getEntry(number){

let one = document.querySelector('.num1');
one.addEventListener('click', () => {
    number += '1';
    entry.innerText = number;
}); 

let two = document.querySelector('.num2');
two.addEventListener('click', () => {
    number += '2';
    entry.innerText = number;
}); 

let three = document.querySelector('.num3');
three.addEventListener('click', () => {
    number += '3';
    entry.innerText = number;
}); 

let four = document.querySelector('.num4');
four.addEventListener('click', () => {
    number += '4';
    entry.innerText = number;
}); 

let five = document.querySelector('.num5');
five.addEventListener('click', () => {
    number += '5';
    entry.innerText = number;
}); 

let six = document.querySelector('.num6');
six.addEventListener('click', () => {
    number += '6';
    entry.innerText = number;
}); 

let seven = document.querySelector('.num7');
seven.addEventListener('click', () => {
    number += '7';
    entry.innerText = number;
}); 

let eight = document.querySelector('.num8');
eight.addEventListener('click', () => {
    number += '8';
    entry.innerText = number;
}); 

let nine = document.querySelector('.num9');
nine.addEventListener('click', () => {
    number += '9';
    entry.innerText = number;
}); 

let zero = document.querySelector('.num0');
zero.addEventListener('click', () => {
    number += '0';
    entry.innerText = number;
}); 

let point = document.querySelector('.point');
point.addEventListener('click', () => {
    number += ".";
    entry.innerText = number;
}); 

let allClear = document.querySelector('.allClearButton');
allClear.addEventListener('click', ()=>{
    firstNumber = '';
    secondNumber = '';
    number = '';
    entry.innerText = '0';
    result.innerText = 'Enter a number';
})

    
}