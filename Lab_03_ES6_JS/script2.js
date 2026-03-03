function calculate() {
  const num1Field = document.getElementById('num1');
  const num2Field = document.getElementById('num2');
  const operationField = document.getElementById('operation');
  const resultBox = document.getElementById('result');

  const num1 = Number(num1Field.value);
  const num2 = Number(num2Field.value);
  const operation = operationField.value;

  let result;

  // Validate inputs
  if (num1Field.value === "" || num2Field.value === "") {
    resultBox.textContent = "⚠️ Please enter both numbers!";
    resultBox.style.backgroundColor = "#ffcccc";
    return;
  }

  if (operation === "divide" && num2 === 0) {
    resultBox.textContent = "❌ Error: Division by zero!";
    resultBox.style.backgroundColor = "#ffcccc";
    return;
  }

  // Perform calculation
  if (operation === "add") {
    result = num1 + num2;
  } else if (operation === "subtract") {
    result = num1 - num2;
  } else if (operation === "multiply") {
    result = num1 * num2;
  } else if (operation === "divide") {
    result = num1 / num2;
  }

  // Display result
  resultBox.textContent = "Result: " + result;

  // Bonus: background color based on result
  if (result > 0) {
    resultBox.style.backgroundColor = "#d4edda"; // green
  } else if (result < 0) {
    resultBox.style.backgroundColor = "#f8d7da"; // red
  } else {
    resultBox.style.backgroundColor = "#fff3cd"; // yellow
  }
}
