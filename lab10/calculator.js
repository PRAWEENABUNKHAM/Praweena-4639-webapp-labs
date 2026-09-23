const readline = require("readline");

const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("Please enter two numbers");
    process.exit(1);
}

const num1 = Number(args[0]);
const num2 = Number(args[1]);

if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("Please enter numbers");
    process.exit(1);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("✓ add | subtract ", (operation) => {
    if (operation === "add") {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    } else if (operation === "subtract") {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    } else {
        console.log("Unknown operator");
    }

    rl.close();
});