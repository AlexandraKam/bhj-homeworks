document.getElementById("status").remove();
let div = document.querySelector(".card");
div.insertAdjacentHTML('afterbegin', '<div id="status"><span id="timer">59</span></div>');
let a = document.getElementById("timer");
let timer = a.textContent;
//function time() {
//	timer --;
//	a.textContent = timer;
	
//	if (timer === 0) {
//	alert("Вы победили в конкурсе!");
//	clearInterval(interval);
//	}
//}
//let interval = setInterval (Time, 1000);

//Повышенный уровень сложности 1

let newTimer = new Date();
newTimer.setHours(0,0,0,0);
newTimer.setSeconds(a.textContent);

function newTime() {
	newTimer.setSeconds(newTimer.getSeconds() - 1);
	a.textContent = newTimer.toTimeString().substring(0,8);
	if (newTimer.getHours() === 0 && newTimer.getMinutes() === 0 && newTimer.getSeconds() === 0) {
	alert("Вы победили в конкурсе!");
	clearInterval(interval);
	}

}
let interval = setInterval (newTime, 1000);