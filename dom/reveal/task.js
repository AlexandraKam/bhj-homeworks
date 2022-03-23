const body = document.getElementsByTagName('body')[0];
body.onscroll = function(event){
	const reveals = document.querySelectorAll('.reveal');
	for (let i = 0; i < reveals.length; i++) {
		const elementTop = reveals[i].getBoundingClientRect().top;
		const viewportHeight = body.offsetHeight;
		if (elementTop < viewportHeight && elementTop > 0) {
			reveals[i].classList.add('reveal_active');
		} else {
			reveals[i].classList.remove('reveal_active');
		}
	}
}