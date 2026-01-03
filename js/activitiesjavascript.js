document.addEventListener('DOMContentLoaded', function() {
  var carousel = document.querySelector('.carousel');
  var images = carousel.getElementsByTagName('img');
  var currentIndex = 0;

  
  images[currentIndex].classList.add('active');

  
  function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }

 
  function showPrevImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('active');
  }

  
  setInterval(showNextImage, 3000);

  
  carousel.querySelector('.prev').addEventListener('click', showPrevImage);
  carousel.querySelector('.next').addEventListener('click', showNextImage);

});
let preveiwactivitiese = document.querySelector('.activities-preview');
let previewBox = preveiwactivitiese.querySelectorAll('.preview');

document.querySelectorAll('.activities-container .activities').forEach(product =>{
product.onclick = () =>{
  preveiwactivitiese.style.display = 'flex';
  let name = product.getAttribute('data-name');
  previewBox.forEach(preview =>{
    let target = preview.getAttribute('data-target');
    if(name == target){
      preview.classList.add('active');
    }
  });
};
});

previewBox.forEach(close =>{
close.querySelector('.fa-xmark').onclick = () =>{
  close.classList.remove('active');
  preveiwactivitiese.style.display = 'none';
};
});
