let firstNumber = '';
let secondNumber = '';
let operation = '';
let doneCalculation = false;

let entry = document.querySelector('.secondDisplay');
let result = document.querySelector('.mainDisplay');
let power = document.querySelector('.powerButton');
let operator = document.querySelectorAll('.operator');


power.addEventListener('click', ()=>{
    console.log('clicked');
    power.style.color = "green";
    startCalculator(firstNumber);
})


function startCalculator(number){
    if(doneCalculation){
        operation = '';
        secondNumber = '';
        entry.innerText = number;
        getEntry(number);
    }
    else{
        operation = '';
        getEntry(number);
    }
}



function getEntry(number){

    doneCalculation = false;

    let one = document.querySelector('.num1');
    one.addEventListener('click', () => {
        number += '1';
        displayEntry(number);
    }); 

    let two = document.querySelector('.num2');
    two.addEventListener('click', () => {
        number += '2';
        displayEntry(number);
    }); 

    let three = document.querySelector('.num3');
    three.addEventListener('click', () => {
        number += '3';
        displayEntry(number);
    }); 

    let four = document.querySelector('.num4');
    four.addEventListener('click', () => {
        number += '4';
        displayEntry(number);
    }); 

    let five = document.querySelector('.num5');
    five.addEventListener('click', () => {
        number += '5';
        displayEntry(number);
    }); 

    let six = document.querySelector('.num6');
    six.addEventListener('click', () => {
        number += '6';
        displayEntry(number);
    }); 

    let seven = document.querySelector('.num7');
    seven.addEventListener('click', () => {
        number += '7';
        displayEntry(number);
    }); 

    let eight = document.querySelector('.num8');
    eight.addEventListener('click', () => {
        number += '8';
        displayEntry(number);
    }); 

    let nine = document.querySelector('.num9');
    nine.addEventListener('click', () => {
        number += '9';
        displayEntry(number);
    }); 

    let zero = document.querySelector('.num0');
    zero.addEventListener('click', () => {
        number += '0';
        displayEntry(number);
    }); 

    let point = document.querySelector('.point');
    point.addEventListener('click', () => {
        number += ".";
        displayEntry(number);
    }); 

    let allClear = document.querySelector('.allClearButton');
    allClear.addEventListener('click', ()=>{
        firstNumber = '';
        secondNumber = '';
        operation = '';
        number = '';
        entry.innerText = '0';
        result.innerText = 'Enter a number';
        result.style.textAlign = "centre";
        unblockOperator();
        getEntry(firstNumber);
    });

    let clear = document.querySelector('.clear');
    clear.addEventListener('click', ()=>{
        let slicedNumber = number.slice(0, -1);
        number = slicedNumber;
        displayEntry(number);
        
    });


    let divide = document.querySelector('#divide');
    divide.addEventListener('click', ()=>{
        firstNumber = number;
        operation = '??';
        blockOperator();
    });

    let multiply = document.querySelector('#multiply');
    multiply.addEventListener('click', ()=>{
        firstNumber = number;
        operation = '*';
        blockOperator();
    });

    let subtract = document.querySelector('#subtract');
    subtract.addEventListener('click', ()=>{
        firstNumber = number;
        operation = '-';
        blockOperator();
    });

    let add = document.querySelector('#add');
    add.addEventListener('click', ()=>{
        firstNumber = number;
        operation = '+';
        blockOperator();
    });

    let equalsTo = document.querySelector('#equalsTo');
    equalsTo.addEventListener('click', ()=>{
        if(operation === ''){
            result.innerText = number;
        }
        else{
            secondNumber = number;
            let calculation = checkOperator();
            result.innerText = calculation;
            unblockOperator();
            console.log('clicked');
            //startCalculator(calculation);
        }
    })
        

}

function blockOperator() {
    for (i=0; i<operator.length; i++){
        operator[i].disabled = true;
    }
    entry.innerText = firstNumber + operation;
    getEntry(secondNumber);
}

function unblockOperator(){
    for (i=0; i<operator.length; i++){
        operator[i].disabled = false;
    }
}

function displayEntry(number){
    if(operation === ''){
        if(number === ''){
            entry.innerText = 0;
        }
        else{
            entry.innerText = number;
        }
    }
    else{
        if(number === ''){
            result.style.textAlign = "end";
            result.innerText = 0;
        }
        else{
            result.style.textAlign = "end";
            result.innerText = number;
        }
    }
}

function checkOperator(){
    let calculation;
    let buttons = document.querySelectorAll('.button');

    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    entry.innerText = firstNumber + operation + secondNumber;
    if(operation === '+'){
        calculation = firstNumber + secondNumber;
    }

    else if(operation === '-'){
        calculation = firstNumber - secondNumber;
    }

    else if(operation === '??'){
        calculation = firstNumber / secondNumber;
    }

    else{
        calculation = firstNumber * secondNumber;
    }

    for ( let i=0 ; i < buttons.length; i++){
        buttons[i].addEventListener('click', () => doneCalculation = true);
    }

    return calculation;
}