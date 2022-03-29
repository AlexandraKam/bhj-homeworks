const card = document.querySelector('.card');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
xhr.onload = function() {
	let data = JSON.parse(this.responseText);
	let text = `
		<div class="poll">
    		<div class="poll__title" id="poll__title">
				` + data.data.title + `
			</div>
			<div class="poll__answers poll__answers_active" id="poll__answers">`
			for (let a in data.data.answers) {
				text += `
				<button class="poll__answer">
					` + data.data.answers[a] + `
				</button>`
			}					
			text += `
			</div>
		</div>`;
	card.insertAdjacentHTML('afterbegin', text);
	let pollAnswer = document.querySelectorAll('.poll__answer');
	for (let i = 0; i < pollAnswer.length; i++) {
		pollAnswer[i].onclick = function() {
			alert('Спасибо, ваш голос засчитан!');
		}		
	}	
}
