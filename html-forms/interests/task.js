const interestCheck = document.querySelectorAll('div > ul > li > label > .interest__check');

for (let i = 0; i < interestCheck.length; i++) {
	interestCheck[i].addEventListener('change', checkboxChange);
}
function checkboxChange(event) {
	const interestChecks = event.target.closest('li').querySelectorAll('ul > li > label > .interest__check');
	for (let i = 0; i < interestChecks.length; i++) {
		interestChecks[i].checked = event.target.checked;
	}
}