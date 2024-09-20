const input = document.getElementById("number");
const output = document.getElementById("output");
const button = document.getElementById("convert-btn");

button.addEventListener("click", validate);

let numerals = [];
function validate (){
  if 
      (input.value == "") {output.innerHTML = "Please enter a valid number"}
    else if
      (input.value <= 0) {output.innerHTML = "Please enter a number greater than or equal to 1"}
    else if
      (input.value >= 4000) {output.innerHTML = "Please enter a number less than or equal to 3999"}
    else {
      while (input.value >= 1000) {numerals.push("M"); input.value -= 1000;}
      while (input.value >= 900) {numerals.push("CM"); input.value -= 900;}
      while (input.value >= 500) {numerals.push("D"); input.value -= 500;}
      while (input.value >= 400) {numerals.push("CD"); input.value -= 400;}
      while (input.value >= 100) {numerals.push("C"); input.value -= 100;}
      while (input.value>= 90) {numerals.push("XC"); input.value -= 90;}
      while (input.value >= 50) {numerals.push("L"); input.value -= 50;}
      while (input.value >= 40) {numerals.push("XL"); input.value -= 40;}
      while (input.value >= 10) {numerals.push("X"); input.value -= 10;}
      while (input.value >= 9) {numerals.push("IX"); input.value -= 9;}
      while (input.value >= 5) {numerals.push("V"); input.value -= 5;}
      while (input.value >= 4) {numerals.push("IV"); input.value -= 4;}
      while (input.value >= 1) {numerals.push("I"); input.value -= 1;}           
            output.innerHTML = numerals.join("");
            numerals = [];
        }
};