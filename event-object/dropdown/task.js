const dropdowns = document.querySelectorAll('.dropdown');

for(let i = 0; i < dropdowns.length; i++){
	dropdowns[i].addEventListener('click', dropdownClick);
	dropdownLinks = dropdowns[i].querySelectorAll('.dropdown__list > li > a.dropdown__link');
	for (let i = 0; i < dropdownLinks.length; i++) {
		dropdownLinks[i].addEventListener('click', itemClick)
	}
}


function dropdownClick(event) {
	let menu = event.target.parentElement.querySelector('ul.dropdown__list')
	if(menu){
		menu.classList.add('dropdown__list_active');
	}
}	

function itemClick(event){
	let menu = this.closest('ul.dropdown__list');
	menu.classList.remove('dropdown__list_active');
	this.closest('.dropdown').querySelector('.dropdown__value').textContent = event.target.textContent;
	event.preventDefault();
}