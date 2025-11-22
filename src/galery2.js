const slides = document.querySelectorAll('.gallery__item');
let slideIndex = 0;
console.log(125);
slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    slides[slideIndex].classList.remove('active');
    slideIndex = (index + 1) % slides.length;
    slides[slideIndex].classList.add('active');
    console.log('-');
  });
});
