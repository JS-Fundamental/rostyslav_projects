const blockOfPhotos = document.querySelector('.photo-block');
const imgTag = document.querySelector('img');
const liTags = document.querySelectorAll('li');

liTags.forEach(tag => {
  tag.addEventListener('click', (e) => {
    if (e.target.innerText == imgAng.getAttribute('alt')) {
      blockOfPhotos.innerHTML='';
      blockOfPhotos.appendChild(imgAng);
    } else if (e.target.innerText == imgLar.getAttribute('alt')) {
      blockOfPhotos.innerHTML = '';
      blockOfPhotos.append(imgLar);
    } else if (e.target.innerText = imgDja.getAttribute('alt')) {
      blockOfPhotos.innerHTML = '';
      blockOfPhotos.append(imgDja);
    }
  });
});
