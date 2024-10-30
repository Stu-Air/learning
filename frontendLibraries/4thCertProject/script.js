const screen = document.getElementById("display");
const btn = document.querySelectorAll(".button");
const operators = ["+", "*", "/", "-"];

display.innerHTML = 0;
let displayArr = [];
let equals = [];
let dot = [];
let decimal = [];
let operator = [];

btn.forEach((abutton) => {
  abutton.addEventListener("click", function () {
    // stops multi 0's
    if (displayArr[0] == 0 && abutton.id === "zero") {
      displayArr.shift();
      return;
    }

    //operators

    if (
      abutton.innerHTML == "/" ||
      abutton.innerHTML == "+" ||
      abutton.innerHTML == "*" ||
      abutton.innerHTML == "-"
    ) {
      for (let i = 0; i < operators.length; i++) {
        if (
          (displayArr[displayArr.length - 1] == operators[i] &&
            abutton.innerHTML == "/") ||
          (displayArr[displayArr.length - 1] == operators[i] &&
            abutton.innerHTML == "+") ||
          (displayArr[displayArr.length - 1] == operators[i] &&
            abutton.innerHTML == "*")
        ) {
          displayArr.pop();
          operator.pop();
          //operator.push(abutton.innerHTML)
        }
        if (
          operator.length >= 1 &&
          displayArr[displayArr.length - 1] == "-" &&
          abutton.innerHTML == operators[i]
        ) {
          displayArr.pop();
          displayArr.pop();
          displayArr.push("-");
          operator.pop();
          operator.pop();
          operator.push("-");
        }
      }
      decimal = [];
      operator.push(abutton.innerHTML);
      //displayArr.push(abutton.innerHTML);
    }

    // clears all
    if (abutton.id == "clear") {
      displayArr = [];
      equals = [];
      decimal = [];
      operator = [];
      display.innerHTML = 0;
      return;
    }

    // result
    else if (abutton.id == "equals") {
      equals.push(parseFloat(eval(displayArr.join(""))));
      displayArr = [];
      displayArr.push(equals);
      return (display.innerHTML = parseFloat(eval(displayArr.join("")))); //.toFixed(1);
    } else {
      // array for displaying
      displayArr.push(abutton.innerHTML);
    }

    // stops duplicate decimals
    if (abutton.innerHTML == ".") {
      if (!decimal[0] && abutton.innerHTML == ".") {
        decimal.push(abutton.innerHTML);
      } else if (decimal.length == 1 && abutton.innerHTML === ".") {
        displayArr.pop();
      }
    }

    console.log(operator);
    //console.log(displayArr);
    display.innerHTML = displayArr.join("");
  });
});

/*

const screen = document.getElementById("display");
const btn = document.querySelectorAll(".button");
const operators = ["+", "*", "/", "-"];

display.innerHTML = 0;
let displayArr = [];
let equals = [];
let dot = [];
let decimal = [];
let operator = [];

btn.forEach((abutton) => {
  abutton.addEventListener("click", function () {
    // stops multi 0's
    if (displayArr[0] == 0 && abutton.id === "zero") {
      displayArr.shift();
      return;
    }

    //operators



    if (
      abutton.innerHTML == "/" ||
      abutton.innerHTML == "+" ||
      abutton.innerHTML == "*" ||
      abutton.innerHTML == "-"
    ) {
      for (let i = 0; i < operators.length; i++) {
       //if (displayArr[displayArr.length - 1] == "-" && abutton.innerHTML == !operators[i]) {}else 
        if (
          ( displayArr[displayArr.length - 1] == operators[i] && abutton.innerHTML == "/" ||
            displayArr[displayArr.length - 1] == operators[i] && abutton.innerHTML == "+" ||
            displayArr[displayArr.length - 1] == operators[i] && abutton.innerHTML == "*" || 
            displayArr[displayArr.length - 1] == operators[i] && abutton.innerHTML == "-" )
        ) {
          displayArr.pop();
          //decimal = []
          //displayArr.push(abutton.innerHTML)
        }
      }
      decimal = [];
      //displayArr.push(abutton.innerHTML);
    }




    // clears all
    if (abutton.id == "clear") {
      displayArr = [];
      equals = [];
      decimal = [];
      operator = [];
      display.innerHTML = 0;
      return;
    }

    // result
    else if (abutton.id == "equals") {
      equals.push(parseFloat(eval(displayArr.join(""))));
      displayArr = [];
      displayArr.push(equals);
      return (display.innerHTML = parseFloat(eval(displayArr.join("")))); //.toFixed(1);
    } else {
      // array for displaying
      displayArr.push(abutton.innerHTML);
    }

    // stops duplicate decimals
    if (abutton.innerHTML == ".") {
      if (!decimal[0] && abutton.innerHTML == ".") {
        decimal.push(abutton.innerHTML);
      } else if (decimal.length == 1 && abutton.innerHTML === ".") {
        displayArr.pop();
      }
    }

    console.log(operator);
    //console.log(displayArr);
    display.innerHTML = displayArr.join("");
  });
});

*/
