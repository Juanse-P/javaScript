//Se declaran las variables, los array, los objetos dentro de los array y las funciones que permiten crear tanto los nombres de los productos como permite pushear los datos a los arregos
let resultadoCarrito = []
let resumenCompra = []
let arrayProductos = [
    { tipo: `Teclado`, marca: `Logitech`, modelo: `G915`, precioString: `$ 820.000`, precioUni: 820000 },
    { tipo: `Teclado`, marca: `Logitech`, modelo: `K400`, precioString: `$ 129.000`, precioUni: 129000 },
    { tipo: `Teclado`, marca: `Kumara`, modelo: `OUTEMO`, precioString: `$ 170.000`, precioUni: 170000 },
    { tipo: `Mouses`, marca: `Logitech`, modelo: `G502`, precioString: `$ 215.000`, precioUni: 215000 },
    { tipo: `Mouses`, marca: `Razer`, modelo: `Viper mini`, precioString: `$ 140.000`, precioUni: 140000 },
    { tipo: `Mouses`, marca: `Redragon`, modelo: `Griffin M607`, precioString: `$ 70.900`, precioUni: 70900 },
    { tipo: `Mousepad`, marca: `KlipXtreme`, modelo: `mousepad LP82`, precioString: `$ 80.000`, precioUni: 80000 },
    { tipo: `Mousepad`, marca: `Aoas`, modelo: `S4000`, precioString: `$ 50.000`, precioUni: 50000 },
    { tipo: `Mousepad`, marca: `Genius`, modelo: `G WMP 200M`, precioString: `$50.000`, precioUni: 50000 }
]
function escribirDentroProductos(posArray) {
    return `${arrayProductos[posArray].marca} ${arrayProductos[posArray].modelo}  ${arrayProductos[posArray].precioString}`;
}
function alertaAnidado(posArray) {
    return alert(`Se ha añadido ${escribirDentroProductos(posArray)}   a tu carrito`);
}
function subirPrecio(posArray) {
    return resultadoCarrito.push(arrayProductos[posArray].precioUni);
}
function subirProducto(posArray) {
    return resumenCompra.push(`${escribirDentroProductos(posArray)}`);
}
function dentroProductos(posArray) {
    alertaAnidado(posArray);
    subirPrecio(posArray);
    subirProducto(posArray);
}
let carroDeCompras;
let entrar = true;
let eleccionMenu;
let preMenu;
//Todo el codigo se basa en condicionales, como el uso de if o de switch
while (entrar) {
    eleccionMenu = prompt(`SHORPAD Tienda de componentes externos para PC \n \n ¿Que producto esta interesado en adquirir? \n 1 - Teclados \n 2 - Mouse \n 3 - Mousepad \n \n 4 - Filtrar \n 5 - Carrito \n 6 o cualquier otro numero - Salir`);
    preMenu = true;
    if (eleccionMenu == "1") {
        preMenu = true;
        while (preMenu) {
            let teclados = prompt(`Los teclados disponibles son: \n \n 1 - ${escribirDentroProductos(0)} \n 2 - ${escribirDentroProductos(1)} \n 3 - ${escribirDentroProductos(2)} \n \n 4 - Salir`);
            seccionTeclados = teclados;
            switch (seccionTeclados) {
                case "1":
                    dentroProductos(0);
                    break;
                case "2":
                    dentroProductos(1);
                    break;
                case "3":
                    dentroProductos(2);
                    break;
                case "4":
                    preMenu = false;
                default:
                    break;
            }
        }
    } else if (eleccionMenu == "2") {
        entradaMouse = true;
        while (entradaMouse) {
            let mouses = prompt(`Los mouses disponibles son: \n \n 1 - ${escribirDentroProductos(3)} \n 2 - ${escribirDentroProductos(4)} \n 3 - ${escribirDentroProductos(5)} \n \n 4 - Salir`);
            seccionMouses = mouses;
            switch (seccionMouses) {
                case "1":
                    dentroProductos(3);
                    break;
                case "2":
                    dentroProductos(4);
                    break;
                case "3":
                    dentroProductos(5);
                    break;
                case "4":
                    entradaMouse = false;
                default:
                    break;
            }
        }
    } else if (eleccionMenu == "3") {
        entradaMousepad = true;
        while (entradaMousepad) {
            let mousepads = prompt(`Los mousepad disponibles son: \n \n 1 - ${escribirDentroProductos(6)} \n 2 - ${escribirDentroProductos(7)} \n 3 - ${escribirDentroProductos(8)} \n \n 4 - Salir`);
            seccionMousepad = mousepads;
            switch (seccionMousepad) {
                case "1":
                    dentroProductos(6);
                    break;
                case "2":
                    dentroProductos(7);
                    break;
                case "3":
                    dentroProductos(8);
                    break;
                case "4":
                    entradaMousepad = false;
                default:
                    break;
            }
        }
    } else if (eleccionMenu == "4") {
        entradaFiltro = true;
        while (entradaFiltro) {
            let filtro = prompt(`Puedes filtrar por 1 criterio, poniendo la marca del elemento que buscas \n 1 - Filtrar \n \n 2 - Salir`);
            secFiltro = filtro;
            switch (secFiltro) {
                case "1":
                    let filtro1 = prompt(`Escribe el filtro que quieres aplicar (Logitech, Redragon, Genius, etc). En caso de que la alerta salga vacia significa que no hay productos con esta caracteristica.`)
                    filtrado = filtro1;
                    let primerFiltro = arrayProductos.filter((ele) => ele.marca === filtrado)
                    str = JSON.stringify(primerFiltro, null, 4);
                    alert(str)
                    console.log(primerFiltro);

                    break;
                case "2":
                    entradaFiltro = false;
                default:
                    break;
            }
        }
    } else if (eleccionMenu == "5") {
        let sumarTotal = 0
        for (let i = 0; i < resultadoCarrito.length; i++) {
            sumarTotal += resultadoCarrito[i];
        }
        if (sumarTotal > 0) {
            let carritoDeCompras = prompt(`Mi carrito: \n ${resumenCompra.join("\n")} \n \n La cuenta total es de:  $ ${sumarTotal} cop \n \n 1 - pagar \n 2 - Abandonar carrito`);
            miCarrito = carritoDeCompras;
            switch (miCarrito) {
                case "1":
                    alert(`El precio total de la factura due cargado a la cuenta bancaria: \n ****.****.****.**51 \n \n ¡Gracias por su compra! Esperamos verle pronto de nuevo en nuestra pagina!`);
                    entrar = false;
                    break;
                case "2":
                    preMenu = false;
                    break;
                default:
                    break;
            }
        } else {
            alert(`¡Parece que olvidaste poner productos en tu carrito!`);
        }
    } else {
        entrar = false;
        alert(`Ha salido de nuestra pagina, ¡Vuelva pronto!`)
    }
}