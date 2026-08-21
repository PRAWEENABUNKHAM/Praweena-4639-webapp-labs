// problem3.js

// ===== Arrow functions: validation =====

const isValidNumber = (input) => {
  if (input === null) {
    return false;
  }

  if (input.trim() === "") {
    return false;
  }

  const number = Number(input);

  return Number.isFinite(number);
};

const parseValidNumber = (input) => {
  if (isValidNumber(input)) {
    return Number(input);
  }

  return null;
};


// ===== Function expressions: operations =====

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b === 0) {
    return null;
  }

  return a / b;
};

const getOperationFunction = function (op) {
  if (op === "+") {
    return add;
  }

  if (op === "-") {
    return subtract;
  }

  if (op === "*") {
    return multiply;
  }

  if (op === "/") {
    return divide;
  }

  return null;
};


// ===== Part 2 building blocks =====

const readNumbers = function () {
  const numbers = [];

  while (true) {
    const input = prompt("Enter a number:");

    // Stop when user presses Cancel
    if (input === null) {
      break;
    }

    // Stop when input is empty
    if (input === "") {
      break;
    }

    const number = parseValidNumber(input);

    if (number === null) {
      alert("Invalid number format");
      continue;
    }

    numbers.push(number);

    alert("Current numbers: " + numbers.join(", "));
  }

  return numbers;
};


const performCalculationOnNumbers = function (numbers, operationCallback) {
  if (numbers.length === 0) {
    return null;
  }

  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    result = operationCallback(result, numbers[i]);

    if (result === null) {
      return null;
    }
  }

  return result;
};


// ===== Part 1: Two-Number Calculator =====

const runTwoNumberCalculator = function () {

  // 1. Get operation
  let operation;
  let operationFunction;

  while (true) {
    operation = prompt("Enter operation (+, -, *, /):");

    operationFunction = getOperationFunction(operation);

    if (operationFunction !== null) {
      break;
    }

    alert("Invalid operation");
  }


  // 2. Get first number
  let firstNumber;

  while (true) {
    const input = prompt("Enter first number:");

    firstNumber = parseValidNumber(input);

    if (firstNumber !== null) {
      break;
    }

    alert("Invalid number format");
  }


  // 3. Get second number
  let secondNumber;

  while (true) {
    const input = prompt("Enter second number:");

    secondNumber = parseValidNumber(input);

    if (secondNumber !== null) {
      break;
    }

    alert("Invalid number format");
  }


  // 4. Calculate
  const result = operationFunction(firstNumber, secondNumber);


  // 5. Handle divide by zero
  if (result === null) {
    alert("Cannot divide by zero");
    return;
  }


  // 6. Show full expression
  alert(
    firstNumber +
    " " +
    operation +
    " " +
    secondNumber +
    " = " +
    result
  );
};


// ===== Part 2: Multiple-Number Calculator =====

const runMultipleNumberCalculator = function () {

  // 1. Get operation
  let operation;
  let operationFunction;

  while (true) {
    operation = prompt("Enter operation (+, -, *, /):");

    operationFunction = getOperationFunction(operation);

    if (operationFunction !== null) {
      break;
    }

    alert("Invalid operation");
  }


  // 2. Read numbers
  const numbers = readNumbers();


  // 3. Check if array is empty
  if (numbers.length === 0) {
    alert("No numbers entered");
    return;
  }


  // 4. Perform calculation
  const result = performCalculationOnNumbers(
    numbers,
    operationFunction
  );


  // 5. Handle divide by zero
  if (result === null) {
    alert("Cannot divide by zero");
    return;
  }


  // 6. Create full expression
  const expression = numbers.join(" " + operation + " ");

  alert(expression + " = " + result);
};


// ===== Driver =====

// calculator type:
// 0 = Two-Number Calculator
// 1 = Multiple-Number Calculator

const calculatorType = prompt(
  "Enter calculator type:\n0 = Two numbers\n1 = Multiple numbers"
);

if (calculatorType === "0") {
  runTwoNumberCalculator();
}
else if (calculatorType === "1") {
  runMultipleNumberCalculator();
}
else {
  alert("No calculator selected");
}