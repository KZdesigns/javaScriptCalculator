const defaultResult = 0;
let currentResult = defaultResult;

function parseIntUserInput() {
    return parseInt(userInput.value);
}

function add() {
    const enteredNumber = parseIntUserInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescription);
}

function subtract() {
    const enteredNumber = parseIntUserInput();
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calcDescription);
}

function multiply() {
    const enteredNumber = parseIntUserInput();
    const calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calcDescription);
}

function divide() {
    const enteredNumber = parseIntUserInput();
    const calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calcDescription);
}

function reset() {
    const calcDescription = `0`;
    currentResult = 0
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
resetBtn.addEventListener('click', reset);

