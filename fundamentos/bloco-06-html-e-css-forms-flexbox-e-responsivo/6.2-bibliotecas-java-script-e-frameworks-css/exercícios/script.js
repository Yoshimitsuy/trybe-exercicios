let inputName = document.getElementById('inputNameUser');
const nameUser = document.getElementById('input-name');

function noSubmit(event) {
  console.log(nameUser.value);
  event.preventDefault();
  
}

function limpaLimpas() {
  const inputElements = document.querySelectorAll('input');
  const inputTextArea = document.querySelectorAll('textarea');
  for (let index = 0; index < inputElements.length; index += 1) {
    const userInput = inputElements[index];
    userInput.value = '';
    userInput.checked = false;
    
  }
  inputTextArea.value = '';
}

window.onload = function () {
  const inputSubmit = document.querySelector('#buttonSubmit');
  inputSubmit.addEventListener('click', noSubmit);
  const reset = document.querySelector('#clearSubmit');
  reset.addEventListener('click', limpaLimpas);
}
