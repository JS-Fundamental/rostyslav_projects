const ulTag = document.querySelector('ul');
const inputTag = document.querySelector('input');

// Function to create a list item
const createLiTag = word => {
  let liTag = `<li>${word}<span>x</span></li>`;
  return liTag;
};

// Adding item to the list
inputTag.addEventListener('change', (event) => {
  ulTag.insertAdjacentHTML('beforeend', createLiTag(event.target.value));
  toDoList.push(event.target.value);
  inputTag.value = '';

  // Removing item from the list  
  ulTag.lastChild.children[0].addEventListener('click', (event) => {
    event.target.parentElement.remove();
    removeElement(event);
  })
});

// Function to remove items from array
const removeElement = (word) => {
  let cleanWord = word.target.parentElement.textContent.slice(0, -1);
  if (toDoList.includes(cleanWord)) {
    const index = toDoList.indexOf(cleanWord);
    return toDoList.splice(index, 1);
  }
}
