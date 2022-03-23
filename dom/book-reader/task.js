const fontSize = document.querySelectorAll('.font-size');
const book = document.getElementById('book');
for (let i = 0; i < fontSize.length; i++) {
	fontSize[i].onclick = function() {
		document.querySelector('.font-size_active').classList.remove('font-size_active');
		fontSize[i].classList.add('font-size_active');
		if (fontSize[i].classList.contains('font-size_small')) {
			book.classList.add('book_fs-small');
		} else if (fontSize[i].classList.contains('font-size_big')) {
			book.classList.add('book_fs-big');
		} else {
			book.classList.remove('book_fs-small');
			book.classList.remove('book_fs-big');
		}
		return false;
	}
}
