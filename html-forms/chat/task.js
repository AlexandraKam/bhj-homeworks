const chat = document.querySelectorAll('.chat-widget');
chat[0].onclick = function() {
	chat[0].classList.add('chat-widget_active');
}
const messages = document.querySelector('.chat-widget__messages');
const messageEnter = document.getElementById('chat-widget__input');
messageEnter.onkeyup = function(event) {
	console.log(event.target.value)
	if ((event.code === 'Enter' || event.code === 'NumpadEnter') && event.target.value != '') {		
		messages.innerHTML += `
		<div class="message message_client">
			<div class="message__time">` + (new Date()).toLocaleTimeString() + `</div>
			<div class="message__text">
				` + event.target.value + `
			</div>
		</div>`;
		messages.innerHTML += `
		<div class="message">
			<div class="message__time">` + (new Date()).toLocaleTimeString() + `</div>
			<div class="message__text">
				` + answers[Math.floor(Math.random() * answers.length)] + `
			</div>
		</div>`;
	}
}
let answers = ['Здравствуйте', 'Чем я могу вам помочь?', 'До свидания'];