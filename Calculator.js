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
  console.log(mfinal);
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


calculator.addEventListener("click", (e) => {
  if (e.target.id != "" && Number.isInteger(Number(e.target.id)) == true) {   
    if (Number.isInteger(result) === true){
      firstNumber = "";
      newspan.textContent = "";
      firstNumber += e.target.id;
      newspan.textContent += e.target.id;
      result = "";//reset result every time these conditions are met because it is just there to tell us if the equal button was pressed before hand or not
    }    
    else if (operator == ""){
      {
      firstNumber += e.target.id;
      newspan.textContent += e.target.id;
      console.log (newspan.textContent); 
      }
    }
    else if (operator != ""){
      secondNumber += e.target.id;
      newspan.textContent += e.target.id;
    }
  }
  else if (e.target.id == "c"){
    newspan.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result == "";
  }
  else if (e.target.id == "." && operator == ""){
    if (firstNumber % 1 === 0 && firstNumber.slice(-1) != "."){ 
      firstNumber += e.target.id;
      newspan.textContent += e.target.id;
    }
  }
  else if (e.target.id == "." && operator != ""){
    if (secondNumber % 1 === 0 && secondNumber.slice(-1) != "."){
      secondNumber += e.target.id;
      newspan.textContent += e.target.id;
    }
  }
  else if(operator.length == 1 && e.target.id != ""){
    firstNumber = (operate(Number(firstNumber), Number(secondNumber), operator));
    secondNumber = "";    
    operator = e.target.id;
    newspan.textContent = `${firstNumber} ${operator} `;    
  } 
  else if(operator.length != 1 && e.target.id != ""){
    operator = e.target.id;
    newspan.textContent += ` ${operator} `;
  }
});

equal.addEventListener("click", (e) => {
  if ((firstNumber != "" || firstNumber == 0) && secondNumber != "" && operator != ""){
    firstNumber = (operate(Number(firstNumber), Number(secondNumber), operator));
    result = firstNumber;
    result = Math.round(result * 100)/100;
    secondNumber = "";
    operator = "";

    newspan.textContent = result;
  }
  else{
    console.log("nah");
  }
}
)
backspace.addEventListener("click", (e) => {
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

})

document.addEventListener("keyup", (e) => {
    let keyPressed = 0;
    if (e.key == 1){
        keyPressed = 1;
    }
    else if (e.key === 2){
        keyPressed = 2;
    } 
    if (e.key === 3){
        keyPressed = 3;
    }
    if (e.key === 4){
        keyPressed = 4;
    }
    if (e.key === 5){
        keyPressed = 5;
    }
    if (e.key === 6){
        keyPressed = 6;
    }
    if (e.key === 7){
        keyPressed = 7;
    }
    if (e.key === 8){
        keyPressed = 8;
    }
    if (e.key === 9){
        keyPressed = 9;
    }
    if (e.key === 0){
        keyPressed = 0;
    }
    if (e.key === "+"){
        keyPressed = "+";
    }
    if (e.key === 1){
        keyPressed = 1;
    }
    if (e.key === 1){
        keyPressed = 1;
    }
    console.log(keyPressed);
});