let bebidas = [];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
console.log('Carrito inicial cargado desde localStorage:', carrito);

document.addEventListener('DOMContentLoaded', () => {
        loadBeverages();
        displayCart();
});


function showAlert(title, text, icon) {
        Swal.fire({
                title: title,
                text: text,
                icon: icon
        });
}


function loadBeverages() {
        console.log('Cargando bebidas desde el archivo JSON...');
        fetch('bebidas.json')  
                .then(response => {
                        if (!response.ok) {
                                throw new Error('Network response was not ok ' + response.statusText);
                        }
                        return response.json();
                })
                .then(data => {
                        bebidas = data;
                        console.log('Bebidas cargadas:', bebidas);
                        renderBeverages();
                        showAlert('Datos cargados', 'Las bebidas se han cargado correctamente.', 'success');
                })
                .catch(error => {
                        console.error('Hubo un problema con la carga de datos:', error);
                        showAlert('Error', 'No se pudieron cargar las bebidas.', 'error');
                });
}

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
        console.log('Bebidas renderizadas en la página.');
}

function addToCart(id) {
        const bebida = bebidas.find(b => b.id === id);
        if (bebida) {
                const itemInCart = carrito.find(item => item.id === id);
                if (itemInCart) {
                        itemInCart.cantidad += 1;
                        console.log(`Cantidad incrementada para ${bebida.nombre}. Nueva cantidad: ${itemInCart.cantidad}`);
                } else {
                        carrito.push({ ...bebida, cantidad: 1 });
                        console.log(`${bebida.nombre} añadido al carrito con cantidad 1.`);
                }
                localStorage.setItem('carrito', JSON.stringify(carrito));
                displayCart();
                showAlert('Añadido', `${bebida.nombre} ha sido añadido al carrito.`, 'success');
        }
}

function removeFromCart(index) {
        if (index > -1 && index < carrito.length) {
                const removedItem = carrito.splice(index, 1)[0];
                localStorage.setItem('carrito', JSON.stringify(carrito));
                displayCart();
                showAlert('Eliminado', `${removedItem.nombre} ha sido eliminado del carrito.`, 'info');
                console.log(`${removedItem.nombre} eliminado del carrito.`);
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
        <span>${item.nombre} - $${item.precio.toFixed(2)} x ${item.cantidad}</span>
        <button onclick="removeFromCart(${index})">Eliminar</button>
        `;

                cartDiv.appendChild(cartItemDiv);
                total += item.precio * item.cantidad;
        });

        const totalDiv = document.createElement('div');
        totalDiv.classList.add('total');
        totalDiv.textContent = `Total: $${total.toFixed(2)}`;
        cartDiv.appendChild(totalDiv);

        document.getElementById('cart-count').textContent = carrito.length;

        console.log('Carrito actualizado. Elementos en el carrito:', carrito);
        console.log('Total del carrito:', total.toFixed(2));
}





