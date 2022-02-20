 const button = document.querySelector('#buttonSubmit');
 let inputNameUser = document.querySelector('#inputNameUser');
 const nameUser = document.querySelector('#nameUser');

 function getUserValue(event) {
   event.preventDefault();
   console.log(inputNameUser.value);
   nameUser.innerHTML = inputNameUser.value;
 }
 button.addEventListener('click', getUserValue);