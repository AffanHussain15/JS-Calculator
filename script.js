function simpleCalculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    if (isNaN(num1)) {
        alert("Invalid input.");
        return;
    }

    let num2 = parseFloat(prompt("Enter the second number:"));
    if (isNaN(num2)) {
        alert("Invalid input.");
        return;
    }

    let operator = prompt("Enter an operator (+, -, *, /):");

    let result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            alert("Error: Division by zero is not allowed.");
            return;
        }
        result = num1 / num2;
    } else {
        alert("Invalid operator. Please use one of the following: +, -, *, /.");
        return;
    }

    alert("Result: " + result);
}

simpleCalculator();
