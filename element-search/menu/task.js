const listElemMenu__link = document.querySelectorAll('ul > li > a.menu__link');

const lengthMenu = listElemMenu__link.length;

for (let i = 0; i < lengthMenu; i++) {
	listElemMenu__link[i].onclick = function() {
		let parentLink = listElemMenu__link[i].closest('li');
		let subMenu = parentLink.querySelector('ul.menu_sub');

		if (subMenu != null) {
			subMenu.classList.toggle('menu_active');
			return false;
	
		}
	}	
}
