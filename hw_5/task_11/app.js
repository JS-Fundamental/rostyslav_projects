// Ages 18, 60 doesn't show anything as per requirements.
const inputAge = document.querySelector('#age');
const formTag = document.querySelector('form');
const bodyTag = document.querySelector('body');
const divTag = document.createElement('div');

inputAge.addEventListener('change', (e) => {
  if (e.target.value < 18) {
    formTag.remove();
    divTag.innerHTML = 
    `
    <img src="./Disney.jpg" alt="duck" class="cartoon">
    <p>${pixar}</p>
    <p>${disney}</p>
    `;

    bodyTag.prepend(divTag);
  }

  if (e.target.value > 18 && e.target.value < 60) {
    formTag.setAttribute('action', './Cars.jpg');
  };
  
  if (e.target.value > 60) {
    console.log(e.target.value);
    formTag.setAttribute('action', news);
  };
});


