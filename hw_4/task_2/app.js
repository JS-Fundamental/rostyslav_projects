//////// constants, variables /////////
const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const button = document.querySelector('.btn');
const result = document.querySelector('.out');
let lengthResult;
let widthResult;

//////// DOM /////////
widthInput.addEventListener('keyup', (e) => {
  widthResult = widthInput.value;
  if (e.key == 'Enter') {
    lengthInput.focus();
  }
});

lengthInput.addEventListener('keyup', (e) => {
  lengthResult = lengthInput.value;
  if (e.key == 'Enter') {
    button.focus();
  }
});

button.addEventListener('click', (e) => {
  result.style.height = `${widthResult}px`;
  result.style.width = `${lengthResult}px`;
  result.style.backgroundColor = 'red';
  widthInput.value = '';
  lengthInput.value = '';
}); 
  
 
