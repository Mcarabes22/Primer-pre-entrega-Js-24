
let bebidas = [
        { id: 1, nombre: "Fanta", img: "js/img/fanta.jpg", precio: 1.5 },
        { id: 2, nombre: "Coca-Cola", img: "js/img/coca.jpg", precio: 1.7 },
        { id: 3, nombre: "Sprite", img: "js/img/sprite.jpg", precio: 1.6 },
        { id: 4, nombre: "Pepsi", img: "js/img/pepsi.jpg", precio: 1.5 },
        { id: 5, nombre: "Manaos", img: "js/img/manaos.jpg", precio: 1.2 },
        { id: 6, nombre: "Pritty", img: "js/img/pritty.jpg", precio: 1.4 }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

document.addEventListener('DOMContentLoaded', () => {
        renderBeverages();
        displayCart();
});

function renderBeverages() {
        const beverageList = document.querySelector('.beverage-list');
        beverageList.innerHTML = ''; 
        bebidas.forEach(bebida => {
                const bebidaDiv = document.createElement('div');
                bebidaDiv.classList.add('beverage');

                bebidaDiv.innerHTML = `
                <h3>${bebida.nombre}</h3>
                <img src="${bebida.img}" alt="${bebida.nombre}">
                <p>Precio: $${bebida.precio.toFixed(2)}</p>
                <button onclick="addToCart(${bebida.id})">Añadir al carrito</button>
        `;

                beverageList.appendChild(bebidaDiv);
        });
}

function addToCart(id) {
        const bebida = bebidas.find(b => b.id === id);
        if (bebida) {
                carrito.push(bebida);
                localStorage.setItem('carrito', JSON.stringify(carrito));
                displayCart();
        }
}

function removeFromCart(index) {
        if (index > -1 && index < carrito.length) {
                carrito.splice(index, 1);
                localStorage.setItem('carrito', JSON.stringify(carrito));
                displayCart();
        }
}

function displayCart() {
        const cartDiv = document.getElementById('cart');
        cartDiv.innerHTML = '<h2>Carrito de Compras:</h2>';
        let total = 0;

        carrito.forEach((item, index) => {
                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');

                cartItemDiv.innerHTML = `
                <span>${item.nombre} - $${item.precio ? item.precio.toFixed(2) : '0.00'}</span>
                <button onclick="removeFromCart(${index})">Eliminar</button>
        `;

                cartDiv.appendChild(cartItemDiv);
                total += item.precio || 0;
        });

        const totalDiv = document.createElement('div');
        totalDiv.classList.add('total');
        totalDiv.textContent = `Total: $${total.toFixed(2)}`;
        cartDiv.appendChild(totalDiv);

        
        document.getElementById('cart-count').textContent = carrito.length;
}


