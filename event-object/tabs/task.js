const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content');
const lengthTabs = tabs.length;
for (let i = 0; i < lengthTabs; i++) {
	tabs[i].onclick = function(event) {
		document.querySelector('.tab_active').classList.remove('tab_active');
		event.currentTarget.classList.add('tab_active');
		document.querySelector('.tab__content_active').classList.remove('tab__content_active');
		tabsContent[i].classList.add('tab__content_active');
	}
}