// problem2.js — Statistics Calculator

/**
 * Prompts repeatedly for positive integers.
 * - Non-numeric (invalid) entries are discarded and the app keeps asking.
 * - Stops as soon as a negative integer is entered.
 * @returns {number[]} the list of positive integers entered
 */
function readInput() {
  const list = [];

  while (true) {
    const input = prompt("Enter an integer (a negative integer to quit):");
    const num = Number(input);

    if (input === null || input.trim() === "" || Number.isNaN(num)) {
      continue;
    }

    if (num < 0) {
      break; 
    }

    list.push(num);
  }

  return list;
}

/**
 * Computes and shows the average (2 decimals), min, and max of the list.
 * Uses a ternary to handle the empty vs non-empty cases.
 * @param {number[]} list
 */
function displayStats(list) {
  const average = list.length > 0
    ? (list.reduce((sum, n) => sum + n, 0) / list.length).toFixed(2)
    : (0).toFixed(2);

  const min = list.length > 0 ? Math.min(...list) : 0;
  const max = list.length > 0 ? Math.max(...list) : 0;

  alert(
    `For the list ${list.join(",")}, the average is ${average}, the minimum is ${min}, and the maximum is ${max}`
  );
}

function runProblem2() {
  const numbers = readInput();
  displayStats(numbers);
}

runProblem2();