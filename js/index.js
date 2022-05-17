//Se declaran las variables con las que se obtienen objetos del DOM y se crea el carrito
let carrito = [];
const divisa = '$';
const getElementos = document.querySelector('#elementos');
const getCarrito = document.querySelector('#carrito');
const getTotal = document.querySelector('#total');
const getBotonVaciar = document.querySelector('#boton-vaciar');
const miLocalSrorage = window.localStorage;
//Se escriben las funciones con las que trabaja el codigo
//Funcion para crear cada una de las tarjetas donde estan los productos en el html
function escribirProductos() {
    productos.forEach((info) => {
        const nodoDiv = document.createElement('div');
        nodoDiv.classList.add('card', `productolst${info.id}`);
        const bodyCard = document.createElement('div');
        bodyCard.classList.add('card-body');
        const tituloCard = document.createElement('h5');
        tituloCard.classList.add('card-title');
        tituloCard.textContent = info.nombre;
        const imagenCard = document.createElement('img');
        imagenCard.classList.add('img-fluid');
        imagenCard.setAttribute('src', info.imagen);
        const precioCard = document.createElement('p');
        precioCard.classList.add('card-text');
        precioCard.textContent = `${divisa} ${info.precio}`;
        const botonCard = document.createElement('button');
        botonCard.classList.add('btn', 'btn-warning');
        botonCard.textContent = 'Añadir al carrito';
        botonCard.setAttribute('marcador', info.id);
        botonCard.addEventListener('click', anyadirProductoAlCarrito);
        bodyCard.appendChild(tituloCard);
        bodyCard.appendChild(imagenCard);
        bodyCard.appendChild(precioCard);
        bodyCard.appendChild(botonCard);
        nodoDiv.appendChild(bodyCard);
        getElementos.appendChild(nodoDiv);
    });
}
function anyadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'));
    actualizarCarrito();
    guardarCarritoEnLocalStorage();

}
//Funcion para crear loa elementos del carrito y evitar que se dupliquen los elementos
function actualizarCarrito() {
    getCarrito.textContent = '';
    const quitarDuplicados = [...new Set(carrito)];
    quitarDuplicados.forEach((elemento) => {
        const miElemento = productos.filter((elementoProductos) => {
            return elementoProductos.id === parseInt(elemento);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === elemento ? total += 1 : total;
        }, 0);
        const nodoDiv = document.createElement('li');
        nodoDiv.classList.add('list-group-item', 'text-right', 'mx-2');
        nodoDiv.textContent = `${numeroUnidadesItem} x ${miElemento[0].nombre} = ${divisa} ${miElemento[0].precio}`;
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger');
        miBoton.textContent = 'X';
        miBoton.dataset.elemento = elemento;
        miBoton.addEventListener('click', borrarItemCarrito);
        nodoDiv.appendChild(miBoton);
        getCarrito.appendChild(nodoDiv);
    });
    getTotal.textContent = calcularTotal();
}
function borrarItemCarrito(evento) {
    const id = evento.target.dataset.elemento;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    actualizarCarrito();
    guardarCarritoEnLocalStorage();
}
function calcularTotal() {
    return carrito.reduce((total, elemento) => {
        const miElemento = productos.filter((elementoProductos) => {
            return elementoProductos.id === parseInt(elemento);
        });
        return total + miElemento[0].precio;
    }, 0).toFixed(2);
}
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
    localStorage.clear();
}
//funciones para guardar y sacar datos del localStorage
function guardarCarritoEnLocalStorage() {
    miLocalSrorage.setItem(`carrito`, JSON.stringify(carrito));
}
function cargarCarritoDeLocalStorage() {
    if (miLocalSrorage.getItem(`carrito`) !== null) {
        carrito = JSON.parse(miLocalSrorage.getItem(`carrito`));
    }
}
getBotonVaciar.addEventListener('click', vaciarCarrito);
cargarCarritoDeLocalStorage();
escribirProductos();
actualizarCarrito();