const elemModal_main = document.getElementById('modal_main');
elemModal_main.classList.add('modal_active');
const listElemModal_close = document.getElementsByClassName('modal__close');
for (let i = 0; i < listElemModal_close.length; i++) {
	listElemModal_close[i].onclick = function() {
		console.log('test',this, this.closest('.modal'))
		this.closest('.modal').remove('modal_active');
	}
}
const listElemShow_success = document.getElementsByClassName('show-success');
let firstElemShow_success = listElemShow_success.item(0);
const elemModal_success = document.getElementById('modal_success');
firstElemShow_success.addEventListener('click', function() {
	elemModal_success.classList.add('modal_active');
});