// global scope variables
var result = 0;
var newValue = null;
var lastClicked = null;
var operator = null;
var isFirst = true;

function updateResult(isResult = false) {
  if (isResult) {
    document.querySelector(".result-box").innerText = result;
  } else {
    document.querySelector(".result-box").innerText = newValue;
  }
}

// re-initialize calculator
function clearCalculator() {
  result = 0;
  newValue = null;
  lastClicked = null;
  operator = null;
  isFirst = true;
  updateResult();
}

function calculateOperation() {
  try {
    switch (operator) {
      case "+": {
        result = result + newValue;
        break;
      }
      case "-": {
        result = result - newValue;
        break;
      }
      case "X": {
        result = result * newValue;
        break;
      }
      case "/": {
        result = result / newValue;
        break;
      }
    }
    updateResult(true);
  } catch (error) {
    console.log(error);
  }
}

//prints the value of button clicked
function onButtonClick(event) {
  var value = event.target.innerText;
  var isItANumber = !isNaN(value);

  if (value == "AC") {
    return clearCalculator();
  } else if (value == "%") {
    newValue = newValue / 100;
    updateResult();
    return;
  } else if (value == "=") {
    calculateOperation();
    return;
  }

  // check if its first click
  if (isItANumber) {
    if (newValue == null) {
      newValue = value;
    } else {
      newValue = newValue + value;
    }
  } else {
    operator = value;
    result = newValue;
    newValue = null;
  }
  updateResult();
}

//add event listener to the buttons
document.querySelectorAll(".button").forEach((item) => {
  item.addEventListener("click", (event) => {
    onButtonClick(event);
  });
});

//function for multiply
