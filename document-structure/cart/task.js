const quantity = document.querySelectorAll('.product__quantity-value');
const controlPlus = Array.prototype.slice.call(document.querySelectorAll('.product__quantity-control_inc'));
const controlMinus = Array.prototype.slice.call(document.querySelectorAll('.product__quantity-control_dec'));
for (let i = 0; i < controlPlus.length; i++) {
	controlPlus[i].onclick = function(event) {
		quantity[controlPlus.indexOf(event.currentTarget)].innerText ++;
	}
}
for (let i = 0; i < controlMinus.length; i++) {
	controlMinus[i].onclick = function(event) {
		if (quantity[controlMinus.indexOf(event.currentTarget)].innerText > 1) {
			quantity[controlMinus.indexOf(event.currentTarget)].innerText --;
		}
	}
}
const productAdd = document.querySelectorAll('.product__add');
const products = document.querySelector('.cart__products');
const product = document.querySelectorAll('.product');
const productImage = document.querySelectorAll('.product__image');
let basket = [];
for (let i = 0; i < productAdd.length; i++) {
	productAdd[i].onclick = function(event) {		
		let basketProduct = basket.find(function(elem) {return elem.id == event.target.closest('.product').dataset.id;});
		if (basketProduct) {
			let newCount = basketProduct.count + Number(event.target.closest('.product').getElementsByClassName('product__quantity-value')[0].innerText);
			document.querySelectorAll('.cart__product[data-id="' + basketProduct.id + '"] .cart__product-count')[0].innerText = newCount;
			basketProduct.count = newCount;
		} else {
			products.innerHTML += `
			<div class="cart__product" data-id= ` + event.target.closest('.product').dataset.id + ` >
				<img class="cart__product-image" src= ` + event.target.closest('.product').getElementsByTagName('img')[0].getAttribute('src') + ` >
				<div class="cart__product-count"> ` + event.target.closest('.product').getElementsByClassName('product__quantity-value')[0].innerText + ` </div>
			</div>`;
			basket.push({
				id: event.target.closest('.product').dataset.id,
				count: Number(event.target.closest('.product').getElementsByClassName('product__quantity-value')[0].innerText)
			});
		}
	}
}