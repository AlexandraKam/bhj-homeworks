const items = document.getElementById('items');
const loader = document.getElementById('loader');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) {
		let data = JSON.parse(this.responseText);
		let valute = data.response.Valute;
		for (let a in valute) {
			items.innerHTML += `
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
			</div>`;
		}		
		loader.classList.remove('loader_active');		
	}
}