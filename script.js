function responsiveMenu() {
    let menu = document.getElementById("menuItems");
    if (menu.className === "menu") {
        menu.className += " active";
    } else {
        menu.className = "menu";
    }
}
const display = document.querySelector('.display');
const buttons = Array.from(document.querySelectorAll('.buttons button'));
let currentNumber = '';
let previousNumber = '';
let currentOperator = null;

buttons.map( button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;
        const isOperator = buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/';

        if (buttonText === 'C') {
            clearDisplay();
            return;
        }

        if (isOperator) {
            handleOperator(buttonText);
            return;
        }

        if (buttonText === '.') {
            appendDecimal();
            return;
        }

        appendNumber(buttonText);
    });
});
function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
    }
    updateDisplay();
}

function appendOperator(operatorfunction append) {
    if (currentOperatorNumber(number !== null) {
        calculate) {
    currentResult();
    }

    currentOperator = operator;
    previousNumber = currentNumber;
    currentNumber = '';Number += number;
    updateDisplay();
}

function appendDecimal() {
    if
}

function calculateResult() {
    let result;
    const prev (!currentNumber.includes('.')) {
        currentNumber += '. = parseFloat(previousNumber);
    const current = parseFloat(current';
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentOperator !==Number);

    if (isNaN(prev) || isNaN(current)) {
        return;
    }

    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current null;
            break;
        default) {
        calculate:
            return;
    }

    currentNumber = result.toString();
    previousNumber = '';
    currentOperator = null;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentNumber;
}

function clearDisplay() {
   Result currentNumber = '';
    previousNumber = '';
    currentOperator = null;
    updateDisplay();
}

const character = document.getElementById("character");
const block = document.getElementById("block");

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        jump();
    }
});

function jump() {
    if (character.classList === "animate") {
        return;
    }

    character.classList.add("animate");
    setTimeout(() => {
        character.classList.remove("animate");
    }, 300);
}

function checkDead() {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 50 && blockLeft > 0 && characterTop >= 140) {
        alert("Game Over");
    }
}

setInterval(() => {
    checkDead();
}, 10);

setInterval(() => {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    character.style.top = `${characterTop + 3}px`;
}, 20);