//Desclaración de variables para acceder al DOM y de las variables que el codigo necesita 
let carrito = [];
const divisa = '$';
const getElementos = document.querySelector('.elementos');
const getCarrito = document.querySelector('.carrito');
const getTotal = document.querySelector('.total');
const getBotonVaciar = document.querySelector('#boton-vaciar');
const getBotonPagar = document.querySelector(`#boton-pagar`);
const getEliminable = document.querySelector(`.eliminable`);
const getEliminable2 = document.querySelector(`.eliminable2`);
const getEliminable3 = document.querySelector(`.eliminable3`);
const getAsideLat = document.querySelector(`.asideLat`);
let getNombreForm = document.querySelector(`#nombre`);
let getApellidoForm = document.querySelector(`#apellido`);
let getEmailForm = document.querySelector(`#email`);
let getNumeroForm = document.querySelector(`#celular`);
let getContenedorBoton = document.querySelector(`.acaBoton`);
const miLocalSrorage = window.localStorage;
let data
