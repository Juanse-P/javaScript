//Desclaración de variables para acceder al DOM y de las variables que el codigo necesita
let carrito = [];
const divisa = '$';
const getElementos = document.querySelector('.elementos');
const getCarrito = document.querySelector('.carrito');
const getTotal = document.querySelector('.total');
const getBotonVaciar = document.querySelector('#boton-vaciar');
const getBotonBuscar = document.querySelector(`#boton-buscar`)
const getCajaBusqueda = document.querySelector(`.barra-busqueda`);
const getBuscador = document.querySelector(`#buscador`)
const miLocalSrorage = window.localStorage;
let data