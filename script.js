// Hay problemas con multiplicar y dividir despues de darle al igual


// Variables
let currentValue = '';
let secondValue = '';
let currentOperation = 'No operator';


// Functions

// Takes the operator and calls the corresponding function unless there's no second value to operate with.
function operate(operator, currentValue, secondValue) {
    if (secondValue === 0) return;
    switch(operator) {
        case '+':
            return sum(parseInt(currentValue),parseInt(secondValue));
        case '-':
            return subtraction(parseInt(currentValue),parseInt(secondValue));
        case '*':
            return multiplication(parseInt(currentValue),parseInt(secondValue));
        case '/':
            return division(parseInt(currentValue),parseInt(secondValue));

    }

}

function setValue(value) {
    // Uses the operator to determine if what's being updated is the first or the second value
    // Ex: 3 + 1, the + determines if we're still in the first term or not.
    // Values are being stored as strings so we can operate with numbers bigger than 10
    currentOperation === 'No operator' ? currentValue += `${value}` : secondValue += `${value}`;
}

function updateCurrentOperation(value) {
    // If there's no operator declares it, else  stores actual values and continues with new operator. This allows the calculator to do multiple operations in a row.    
    currentOperation === 'No operator' ? currentOperation = value : operate(currentOperation, currentValue, secondValue); updateValues(); currentOperation = value ;
}

function updateValues() {
    // DIsplays the result and resets the second value
    currentValue = display.textContent;
    secondValue = 0;
}

function displayUpdate(value) {
    // Used to display button presses on screen
    display.textContent += `${value}`;
}

function clear() {
    // Resets everything
    display.textContent = '';
    currentValue = '';
    secondValue = '';
    currentOperation = 'No operator';
}

// Math functions

function sum(currentValue,secondValue) {
    currentValue = currentValue + secondValue;
    display.textContent = currentValue;
}

function subtraction(currentValue,secondValue) {
    currentValue = currentValue - secondValue;
    display.textContent = currentValue;
}

function multiplication(currentValue,secondValue) {
    currentValue = currentValue * secondValue;
    display.textContent = currentValue;
}

function division(currentValue,secondValue) {
    secondValue === 0 ? alert("Can't divide by 0") : currentValue = currentValue / secondValue; display.textContent = currentValue;
}

// DOM
const body = document.body;

const header = document.createElement('div');
header.classList.add('header');
body.append(header);

// Display
const display = document.createElement('div');
display.classList.add('display');
display.textContent = '';
header.append(display);

// Button
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');
header.append(buttonContainer);

// Numbers
const numberContainer = document.createElement('div');
numberContainer.classList.add('numberContainer');
buttonContainer.append(numberContainer);

for (let i = 0; i < 10; i++) {
    let number = document.createElement('button');
    number.textContent = i;
    number.addEventListener('click', function(){displayUpdate(i); setValue(i)});
    numberContainer.append(number);    
}

// Operators
const operatorContainer = document.createElement('div');
operatorContainer.classList.add('operatorContainer');
buttonContainer.append(operatorContainer);


// Buttons call their respective functions and then update the display
const sumButton = document.createElement('button');
sumButton.textContent = '+';
sumButton.addEventListener('click', function(){updateCurrentOperation('+'); displayUpdate(' + ')});

const subtractionButton = document.createElement('button');
subtractionButton.textContent = '-';
subtractionButton.addEventListener('click', function(){updateCurrentOperation('-'); displayUpdate(' - ')});

const multiplicationButton = document.createElement('button');
multiplicationButton.textContent = '*';
multiplicationButton.addEventListener('click', function(){updateCurrentOperation('*'); displayUpdate(' * ')});

const divisionButton = document.createElement('button');
divisionButton.textContent = '/';
divisionButton.addEventListener('click', function(){updateCurrentOperation('/'); displayUpdate(' / ')});

// Solves what's being displayed and then updates values so calculator can continue
const equalButton = document.createElement('button');
equalButton.textContent = '=';
equalButton.addEventListener('click', function(){operate(currentOperation, currentValue, secondValue);updateValues()});

// Simply resets everything
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
clearButton.addEventListener('click', function(){clear()});

operatorContainer.append(sumButton, subtractionButton, multiplicationButton, divisionButton, equalButton, clearButton);