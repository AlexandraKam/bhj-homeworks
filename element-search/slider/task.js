const elemPrev = document.querySelector('div.slider__arrow_prev');
const elemNext = document.querySelector('div.slider__arrow_next');

elemPrev.onclick = prev;

elemNext.onclick = next;
const listElemSlider__item = document.querySelectorAll('div.slider__item');
const lengthSlider = listElemSlider__item.length;
let currentSlide = 0;
function prev() {
	listElemSlider__item[currentSlide].classList.remove('slider__item_active');
	currentSlide --;
		
	if (currentSlide < 0) {
		currentSlide = lengthSlider - 1;
		
	}
	listElemSlider__item[currentSlide].classList.add('slider__item_active');
}
function next() {
	listElemSlider__item[currentSlide].classList.remove('slider__item_active');
	currentSlide ++;

	if (currentSlide >= lengthSlider) {
		currentSlide = 0;
	}
	listElemSlider__item[currentSlide].classList.add('slider__item_active');
}