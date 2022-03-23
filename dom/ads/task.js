const rotator = Array.prototype.slice.call(document.querySelectorAll('.rotator__case'));
function time() {
	let currentCase = rotator.findIndex(function(elem) {return elem.classList.contains('rotator__case_active');});
	rotator[currentCase].classList.remove('rotator__case_active');
	currentCase ++;
	if (currentCase >= rotator.length) {
		currentCase = 0;
	}
	rotator[currentCase].classList.add('rotator__case_active');
}
let interval = setInterval (time, 1000);