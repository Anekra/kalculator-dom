const inputOne = document.querySelector("input#inputOne")
const inputTwo = document.querySelector("input#inputTwo")
const result = document.querySelector("input#result")

const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");
const resetBtn = document.getElementById("resetBtn");

plusBtn.addEventListener("click", () => {
  result.value = calculate(inputOne.value, inputTwo.value, "+")
});
minusBtn.addEventListener("click", () => {
  result.value = calculate(inputOne.value, inputTwo.value, "-")
});
multiplyBtn.addEventListener("click", () => {
  result.value = calculate(inputOne.value, inputTwo.value, "*")
});
divideBtn.addEventListener("click", () => {
  result.value = calculate(inputOne.value, inputTwo.value, "/")
});
resetBtn.addEventListener("click", () => {
  inputOne.value = ""
  inputTwo.value = ""
  result.value = ""
});

function calculate(firstValue, secondValue, operator) {
  const num1 = parseFloat(firstValue);
  const num2 = parseFloat(secondValue);

  if (isNaN(num1) || isNaN(num2)) {
    return 'Invalid input';
  }

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return 'Division by zero';
      }
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}