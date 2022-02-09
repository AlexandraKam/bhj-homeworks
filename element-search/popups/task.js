const elemModal_main = document.getElementById('modal_main');
elemModal_main.classList.add('modal_active');
const listElemModal_close = document.getElementsByClassName('modal__close');
let firstElemModal_close = listElemModal_close.item(0);
let thirdElemModal_close = listElemModal_close.item(2);
firstElemModal_close.onclick = function() {
	elemModal_main.classList.remove('modal_active');
}
const listElemShow_success = document.getElementsByClassName('show-success');
let firstElemShow_success = listElemShow_success.item(0);
const elemModal_success = document.getElementById('modal_success');
firstElemShow_success.onclick = function() {
	elemModal_success.classList.add('modal_active');
	elemModal_main.classList.remove('modal_active');
}
thirdElemModal_close.onclick = function() {
	elemModal_success.classList.remove('modal_active');
}