// problem1.js — Prime Numbers Finder

/**
 * Checks whether the given input string is a valid positive integer.
 * Rejects: non-numeric text, negative numbers, floats, empty strings.
 * @param {string} input
 * @returns {boolean}
 */
function validateInput(input) {
  if (input === null || input.trim() === "") {
    return false;
  }
  const num = Number(input);
  if (Number.isNaN(num)) {
    return false;
  }
  if (!Number.isFinite(num)) {
    return false;
  }
  if (!Number.isInteger(num)) {
    return false;
  }
  if (num <= 0) {
    return false;
  }
  return true;
}

/**
 * Finds all prime numbers from 2 up to and including `limit`.
 * Uses a labeled loop so we can `continue` the outer loop as soon as
 * a divisor is found for the current candidate.
 * @param {number} limit
 * @returns {number[]}
 */
function findPrimes(limit) {
  const primes = [];

  outer: for (let candidate = 2; candidate <= limit; candidate++) {
    for (let divisor = 2; divisor <= Math.sqrt(candidate); divisor++) {
      if (candidate % divisor === 0) {
        continue outer; // not prime, skip to next candidate
      }
    }
    primes.push(candidate);
  }

  return primes;
}

/**
 * Shows the list of primes in an alert dialog.
 * @param {number[]} primes
 * @param {number} limit
 */
function displayPrimes(primes, limit) {
  if (primes.length === 0) {
    alert(`For n = ${limit} there are no prime numbers.`);
    return;
  }

  alert(`For n = ${limit} prime numbers are ${primes.join(",")}`);
}

// ===== Driver: keep prompting until a valid positive integer is entered =====
function runProblem1() {
  let input = prompt("Enter a positive integer:");

  while (!validateInput(input)) {
    input = prompt(
      "Invalid input. Please enter a positive integer (e.g. 10):"
    );
  }

  const limit = Number(input);
  const primes = findPrimes(limit);
  displayPrimes(primes, limit);
}

runProblem1();