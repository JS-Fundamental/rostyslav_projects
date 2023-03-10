document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('toggle')) {
    return;
  }
  
  let content = document.querySelector(e.target.hash);
  // e.target.hash gives us the hash value of tag <a>
  if (!content) {
    return;
  }

  e.preventDefault();
  if (content.classList.contains('active')) {
    content.classList.remove('active');
    return;
  }
  content.classList.toggle('active');
});

const manageAccordion = () => {
  let accordions = document.querySelectorAll('.accordion.active');
  for (let i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove('active');
  }
}

