const Cookie = document.getElementById("cookie");
let clicker = document.getElementById("clicker__counter")
let clicker__counter = clicker.textContent;
let speed = [];
let prevTime = new Date();
let currentTime;

function change() {
	clicker__counter ++;
	clicker.textContent = clicker__counter;
	if (Cookie.width === 200) {
		Cookie.width = 150;
	} else {
		Cookie.width = 200;
	}
	currentTime = new Date();
	speed.push(1/((currentTime - prevTime)/1000));
	prevTime = currentTime;
	document.getElementById("clicker__speed").textContent = avgArray(speed).toFixed(2);

}
Cookie.onclick = change;


let div = document.getElementById("clicker__counter");
div.insertAdjacentHTML('afterend', '<div>Скорость клика: <span id="clicker__speed">0</span></div>');

function avgArray(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return arr.length == 0 ? 0 : sum/arr.length;
}