/* Declaracion de todas las funciones que luego son llamadas en el index.js */

//Funcion encargada de crear las cards dentro del HTML
function escribirProductos() {
    getElementos.innerHTML = ``;
    data.forEach((info) => {
        let botonCard = document.createElement('button');
        botonCard.classList.add('btn', 'btn-warning');
        botonCard.textContent = 'Añadir al carrito';
        botonCard.setAttribute('marcador', info.id);
        botonCard.addEventListener('click', anadirProductoAlCarrito);
        let nodoDiv = document.createElement('div');
        nodoDiv.classList.add('card', `img-fluid`, `productolst`, `productolst${info.id}`);
        nodoDiv.innerHTML = `<div class="card-body">
                            <div> <h5 class="card-title">${info.nombre}</h5></div> 
                            <div> <img class="img-fluid" src="${info.imagen}"></div>
                            <div> <p class="card-text">${divisa} ${info.precio}</p> </div> 
                            </div>`
        nodoDiv.appendChild(botonCard)
        getElementos.appendChild(nodoDiv);
    });
}
/* ---------------------------------------- */
function anadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'));
    actualizarCarrito();
    guardarCarritoEnLocalStorage();
}
/* ---------------------------------------- */
//Funcion para evitar los duplicados dentro del carrito, y para actualizarlo cada que se añade un nuevo producto
function actualizarCarrito() {
    getCarrito.textContent = '';
    const quitarDuplicados = [...new Set(carrito)];
    quitarDuplicados.forEach((elemento) => {
        const miElemento = data.filter((elementoProductos) => {
            return elementoProductos.id === parseInt(elemento);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === elemento ? total += 1 : total;
        }, 0);
        const nodoDiv = document.createElement('li');
        nodoDiv.classList.add('list-group-item', 'text-right', 'mx-2');
        nodoDiv.innerHTML = `<img class="img-fluid" src="${miElemento[0].imagen}" class="img-fluid">
                            <p>${numeroUnidadesItem} x ${miElemento[0].nombre} = ${divisa} ${miElemento[0].precio}</p>`;
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
/* ---------------------------------------- */
function borrarItemCarrito(evento) {
    const id = evento.target.dataset.elemento;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    actualizarCarrito();
    guardarCarritoEnLocalStorage();
}
/* ---------------------------------------- */
function calcularTotal() {
    return carrito.reduce((total, elemento) => {
        const miElemento = data.filter((elementoProductos) => {
            return elementoProductos.id === parseInt(elemento);
        });
        return total + miElemento[0].precio;
    }, 0).toFixed(0);
}
/* ---------------------------------------- */
function vaciarCarrito() {
    Swal.fire({
        title: 'Estas seguro de vaciar tu carrito?',
        text: "Si lo vacias no podras recuperarlo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero vaciarlo!'
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            actualizarCarrito();
            localStorage.clear();
            Swal.fire(
                'Se ha eliminado tu carrito!',
                'Vuelve a armar tu carrito con nustros productos',
                'success',
            )
        }
    })
}
/* ---------------------------------------- */
function guardarCarritoEnLocalStorage() {
    miLocalSrorage.setItem(`carrito`, JSON.stringify(carrito));
}
/* ---------------------------------------- */
function cargarCarritoDeLocalStorage() {
    if (miLocalSrorage.getItem(`carrito`) !== null) {
        carrito = JSON.parse(miLocalSrorage.getItem(`carrito`));
    }
}