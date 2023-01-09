const inputData = [];
const formTag = document.querySelector('form');
const container = document.querySelector('.container');
const inputTags = document.querySelectorAll('input');
const selectTag = document.querySelector('select');
const buttonTag = document.querySelector('.btn');

buttonTag.addEventListener('click', (e) => {
  e.preventDefault();
  inputTags.forEach(elem => inputData.push(elem.value));
  inputData.push(selectTag.value);
  
  formTag.remove();

  // Rendering info about user  
  const ul = document.createElement('ul');
  document.querySelector('.container').appendChild(ul);
  
  for (let i = 0; i < inputData.length; i++) {
    ul.innerHTML += (`<li>${inputData[i]}</li>`);
  }
});




