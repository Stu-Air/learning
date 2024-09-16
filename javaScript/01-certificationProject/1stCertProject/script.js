const textBox = document.getElementById("text-input");
const result = document.getElementById("result");
const button = document.getElementById("check-btn");


button.addEventListener("click", validate);
//



function validate (){
  if (textBox.value == "") {alert("Please input a value")}
    else if
      (flip(cleanString(textBox.value)).toLowerCase() == cleanString(textBox.value).toLowerCase()) 
      {result.innerHTML = textBox.value + " is a palindrome"}
    else 
      {result.innerHTML = textBox.value + " is not a palindrome"}  
};


const str = textBox.value

function cleanString(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
};

function alphanumeric(str){
  return str.match(/^[\W\d\s\D]+$/g, '');
};

function flip(str) {
  return [...str].reverse().join('');
};

function lower(str) {
 str.toLowercase();
};
