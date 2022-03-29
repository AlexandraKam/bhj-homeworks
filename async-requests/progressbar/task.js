const progress = document.getElementById('progress');
const form = document.getElementById('form');
form.onsubmit = function() {
	event.preventDefault();
	let input = document.getElementById('file');
	let file = input.files[0];
	if (!file) {
		return false;
	}
	let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', function(event) {
		if (event.lengthComputable) {
            let complete = (event.loaded / event.total | 0);
            progress.value = complete;
        }
	});
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	xhr.send(file);
}