/* 
  10) зробити список, після останього елементу списку має бути поле(інпут) та кнопка щоб додати новий елемент списку. Біля кожного елементу списку має бути знак - який видаляє даний елемент списку. Список зберігати в масиві.
*/
const ulTag = document.querySelector('ul');
const inputTag = document.querySelector('input');

// Creating list item
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
  ulTag.lastChild.addEventListener('click', (event) => {
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
