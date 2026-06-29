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
newspan.id = "spanning";
display.append(newspan);

calculator.addEventListener("click", (e) => {
  if (e.target.id != "" && Number.isInteger(Number(e.target.id)) == true) {   
    if (operator == ""){
      if (result != ""){
        firstNumber = "";
        newspan.textContent = "";
        firstNumber += e.target.id;
        newspan.textContent += e.target.id;
        result = "";//reset result every time these conditions are met because it is just there to tell us if the equal button was pressed before hand or not
      }
      else {
      firstNumber += e.target.id;
      newspan.textContent += e.target.id;
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
  else if (e.target.id == "."){
    firstNumber += e.target.id;
    newspan.textContent += e.target.id;
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
    secondNumber = "";
    operator = "";

    newspan.textContent = result;
  }
  else{
    console.log("nah");
  }

})
