const items = document.getElementById('items');
const loader = document.getElementById('loader');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
xhr.onload = function() {
	const data = JSON.parse(this.responseText);
	const valute = data.response.Valute;
	for (let a in valute) {
		items.insertAdjacentHTML('afterbegin', `
		<div class="item">
			<div class="item__code">
				` + valute[a].CharCode + `
			</div>
			<div class="item__value">
				` + valute[a].Value + `
			</div>
			<div class="item__currency">
				руб.
			</div>
		</div>`);
	}		
	loader.classList.remove('loader_active');		
}