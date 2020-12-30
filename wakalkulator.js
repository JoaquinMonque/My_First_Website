var result = 0;
var newValue = null;
var lastClicked = null;
var operator = null;
var isFirst = true;

function clearCalculator() {
  result = 0;
  newValue = null;
  lastClicked = null;
  operator = null;
  isFirst = true;
}

//prints the value of button clicked
function onButtonClick(event) {
  var value = event.target.innerText;
  var isItANumber = !isNaN(value);

  if (isFirst) {
    if (isItANumber) {
      newValue = value;
    } else {
      operator = value;
    }
    isFirst = false;
  } else {
    if (isItANumber) {
      if (newValue == null) {
        newValue = value;
      } else {
        newValue = newValue + value;
      }
    } else {
      operator = value;
    }
  }

  if (operator === "AC") {
    clearCalculator();
  }

  console.log(newValue, isItANumber, operator);
}

//add event listener to the buttons
document.querySelectorAll(".button").forEach((item) => {
  item.addEventListener("click", (event) => {
    onButtonClick(event);
  });
});

//function for multiply
