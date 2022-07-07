/** @format */

/** @format */

const defaultResult = 0;
let currentResult = defaultResult;

let logEntries = [];
let mathOperator;

function getUserInput() {
  return +userInput.value;
}

function createOutput(operator, resultBeforeCalc, CalcNumber) {
  const calcDiscription = `${resultBeforeCalc} ${operator} ${CalcNumber}`;
  outputResult(currentResult, calcDiscription);
}

function addToLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    enterednumber: operationNumber,
    previousresult: prevResult,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  if (
    calculationType === "ADD" ||
    calculationType === "SUBTRACT" ||
    calculationType === "MULTIPLY" ||
    calculationType === "DIVIDE"
  ) {
    const enterdNumber = getUserInput();
    const initialResult = currentResult;
    if (calculationType === "ADD") {
      currentResult += enterdNumber;
      mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
      currentResult -= enterdNumber;
      mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
      currentResult *= enterdNumber;
      mathOperator = "*";
    } else if (calculationType === "DIVIDE") {
      currentResult /= enterdNumber;
      mathOperator = "/";
    }

    const calcDiscription = `${currentResult} + ${enterdNumber}`;

    createOutput(mathOperator, initialResult, enterdNumber);
    addToLog(calculationType, initialResult, enterdNumber, currentResult);
  }
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function divide() {
  calculateResult("DIVIDE");
}

function multiply() {
  calculateResult("MULTIPLY");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);
