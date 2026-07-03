let firstNumber = "";
let secondNumber = "";
let result = "";
let operator = "";

function add(num1, num2) {
  let afinal = num1 + num2;
  return afinal;
}
function subtract(num1, num2) {
  let sfinal = num1 - num2;
  return sfinal;
}
function multiply(num1, num2) {
  let mfinal = num1 * num2;
  return mfinal;
}
function divide(num1, num2) {
  let dfinal = num2 / num1;
  return dfinal;
}

//Define the function to see which operation should be used
function operate(firstNumber, secondNumber, operator) {
  let result = 0
  if (operator == "+") {
    result = add(firstNumber, secondNumber);
  }
  if (operator == "-") {
    result = subtract(firstNumber, secondNumber);
  }
  if (operator == "*") {
    result = multiply(firstNumber, secondNumber);
  }
  if (operator == "/") {
    result = divide(secondNumber, firstNumber);
  }
  return result;
}


//Adding query selectors for each button

let calculator = document.querySelector(".container");
let equal = document.querySelector(".equal");
let display = document.querySelector(".display");
let newspan = document.createElement("span");
let backspace = document.querySelector(".backspace");

newspan.id = "spanning";

display.append(newspan);

function calculating(button){
    if (button != "" && Number.isInteger(Number(button)) == true) {   
      if (Number.isInteger(result) === true && operator == ""){
        firstNumber = "";
        newspan.textContent = "";
        firstNumber += button;
        newspan.textContent += button;
        operator = "";
        result = "";//reset result every time these conditions are met because it is just there to tell us if the equal button was pressed before hand or not
      }    
    else if (operator == ""){
      {
      firstNumber += button;
      newspan.textContent += button;
      console.log (newspan.textContent); 
      }
    }
    else if (operator != ""){
      secondNumber += button;
      newspan.textContent += button;
    }
  }
  else if (button == "c"){
    newspan.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result == "";
  }
  else if (button == "." && operator == ""){
    if (firstNumber % 1 === 0 && firstNumber.slice(-1) != "."){ 
      firstNumber += button;
      newspan.textContent += button;
    }
  }
  else if (button == "." && operator != ""){
    if (secondNumber % 1 === 0 && secondNumber.slice(-1) != "."){
      secondNumber += button;
      newspan.textContent +=  button;
    }
  }
  else if(operator.length == 1 && button != ""){
    firstNumber = (operate(Number(firstNumber), Number(secondNumber), operator));
    secondNumber = "";    
    operator = button;
    newspan.textContent = `${firstNumber} ${operator} `;    
  } 
  else if(operator.length != 1 && button != ""){
    operator = button;
    newspan.textContent += ` ${operator} `;
  }
}
function equalFunc(){
  if ((firstNumber != "" || firstNumber == 0) && secondNumber != "" && operator != ""){
    firstNumber = (operate(Number(firstNumber), Number(secondNumber), operator)); 
    result = Math.round(firstNumber * 100)/100;
    secondNumber = "";
    operator = "";

    newspan.textContent = result;
  }
  else{
    console.log("nah");
  }
}
function backspaceFunc(){
  if (secondNumber == "" && operator != ""){ 
    operator = "";
    newspan.textContent = firstNumber;    
  }
  else if (secondNumber == ""){
    firstNumber = String(firstNumber).slice(0,(String(firstNumber).length) - 1);
    newspan.textContent = firstNumber;
  }
  else{
    secondNumber = secondNumber.slice(0,(secondNumber.length) - 1);
    result = ((newspan.textContent).slice(0,(newspan.textContent).length - 1));
    newspan.textContent = result;    
  }
}
calculator.addEventListener("click", (e) => {
  let numorsymbol = e.target.id;
  calculating(numorsymbol);
});

equal.addEventListener("click", (e) => {
  equalFunc();
})
backspace.addEventListener("click", (e) => {
  backspaceFunc();
})

document.addEventListener("keydown", (e) => {
    let keyPressed = "";
    if (e.key == 1){
      keyPressed = 1;
    }
    else if (e.key == 2){
      keyPressed = 2;
    } 
    else if (e.key == 3){
      keyPressed = 3;
    }
    else if (e.key == 4){
      keyPressed = 4;
    }
    else if (e.key == 5){
      keyPressed = 5;
    }
    else if (e.key == 6){
      keyPressed = 6;
    }
    else if (e.key == 7){
      keyPressed = 7;
    }
    else if (e.key == 8){
      keyPressed = 8;
    }
    else if (e.key == 9){
      keyPressed = 9;
    }
    else if (e.key == 0){
      keyPressed = "0";
    }
    else if (e.key == "+"){
      keyPressed = "+";
    }
    else if (e.key == "-"){
      keyPressed = "-";
    }
    else if (e.key == "/"){
      keyPressed = "/";
    }
    else if (e.key == "*"){
      keyPressed = "*"
    }
    else if (e.key == "."){
      keyPressed = "."
    }
    else if (e.key == "c"){
      keyPressed = "c"
    }   
    else if (e.key == "Enter"){
      equalFunc();
    }
    else if (e.key == "Backspace"){
      backspaceFunc();
    }
    calculating(keyPressed);
});