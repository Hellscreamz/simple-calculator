const numOne = document.getElementById('numOne');
const numTwo = document.getElementById('numTwo');
const typeOfSign = document.getElementById('sign');
const display = document.getElementById('displayOutput');
const returnValue = document.getElementById('return');
const btn = document.getElementById('calculateBtn');

const calculate = () => {
  
    switch(typeOfSign.value){
      case "+":
      display.textContent = Number(numOne.value) + Number(numTwo.value);
      break;
      case "/":
      display.textContent = Number(numOne.value) / Number(numTwo.value);
      break;
      case "*":
      display.textContent = Number(numOne.value) * Number(numTwo.value);
      break;
      case "-":
      display.textContent = Number(numOne.value) - Number(numTwo.value);
      break;
    }
  
  

};

const returnOfCalculate = () => {
    returnValue.textContent = calculate();
};
btn.addEventListener('click', returnOfCalculate);

