//Se declaran los array que se usan en el "carrito de compras", que amedida que se añadan productos se van llenando
let resultadoCarritos = [];

let carritoProductoFinal = []
// se crean los objetos de los productos y las funciones que se usan cuando el usuario selecciona alguna opción 
class misProductos {
    constructor(tipo, marca, modelo, precioString, precioUni) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.precioString = precioString;
        this.precioUni = precioUni;
    }
    agregarCarrito() {
        alert(`Se a añadido ${this.marca} ${this.modelo} a tu carrito`);
    }
    agregarPrecioAlCarrito() {
        return resultadoCarritos.push(this.precioUni);
    }
    escribirLasOpcionesYCarritoProductoFinal() {
        return `${this.marca} ${this.modelo}    ${this.precioString}  `;
    }
}

const teclado1 = new misProductos(`teclados`, `Logitech`, `G915 TKL`, `$ 820.000`, 820000);
const teclado2 = new misProductos(`teclado`, `Logitech`, `K400`, `$ 129.000`, 129000);
const teclado3 = new misProductos(`teclado`, `Kumara`, `OUTEMO`, `$ 170.000`, 170000);
const mouse1 = new misProductos(`mouse`, `Logitech`, `G502`, `$ 215.000`, 215000);
const mouse2 = new misProductos(`mouse`, `Razer`, `Viper mini`, `$ 140.000`, 140000);
const mouse3 = new misProductos(`mouse`, `Redragon`, `Griffin M607`, `$ 70.000`, 70900);
const mousepad1 = new misProductos(`mousepad`, `KlipXtreme`, `mousepad LP82`, `$ 80.000`, 80000);
const mousepad2 = new misProductos(`mousepad`, `Aoas`, `S4000`, `$ 50.000`, 50000);
const mousepad3 = new misProductos(`mousepad`, `Genius`, `G WMP 200M`, `$ 50.000`, 50000);

let miCarrito;
let entrada = true;
let productos;
let menuPre;

let primerMenu = "SHORPAD Tienda de componentes Externos para PC" +
    "\n" +
    "¿Que producto estas interesado en adquirir?" +
    "\n" +
    "1 - Teclados" +
    "\n" +
    "2 - Mouse" +
    "\n" +
    "3 - Mousepad" +
    "\n" +
    "\n" +
    "4 - Carrito" +
    "\n" +
    "5 - Salir";
//Todo el codigo se basa en condicionales, como if - else if - switch.
while (entrada) {
    productos = prompt(primerMenu);
    if (productos == "1") {

        menuPre = true;

        while (menuPre) {
            let teclados = "Teclados disponibles:" +
                "\n" +
                `1 - ${teclado1.escribirLasOpcionesYCarritoProductoFinal()}` +
                "\n" +
                `2 - ${teclado2.escribirLasOpcionesYCarritoProductoFinal()}` +
                "\n" +
                `3 - ${teclado3.escribirLasOpcionesYCarritoProductoFinal()}` +
                "\n" +
                "4 - Regresar";
            secTeclados = prompt(teclados);

            switch (secTeclados) {
                case "1":
                    teclado1.agregarCarrito();
                    teclado1.agregarPrecioAlCarrito();
                    carritoProductoFinal.push(`${teclado1.escribirLasOpcionesYCarritoProductoFinal()}`);
                    break;
                case "2":
                    teclado2.agregarCarrito();
                    teclado2.agregarPrecioAlCarrito();
                    carritoProductoFinal.push(`${teclado2.escribirLasOpcionesYCarritoProductoFinal()}`);
                    break;
                case "3":
                    teclado3.agregarCarrito();
                    teclado3.agregarPrecioAlCarrito();
                    carritoProductoFinal.push(`${teclado3.escribirLasOpcionesYCarritoProductoFinal()}`);
                    break;
                case "4":
                    menuPre = false;
                default:
                    break;
            }
        }
    }
    else if (productos == "2") {
        salirTec = true;
        while (salirTec) {
            let mouses = "Mouses disponibles" +
                "\n" +
                `1 - ${mouse1.escribirLasOpcionesYCarritoProductoFinal()}` +
                "\n" +
                `2 - ${mouse2.escribirLasOpcionesYCarritoProductoFinal()}` +
                "\n" +
                `3 - ${mouse3.escribirLasOpcionesYCarritoProductoFinal()}` +
                "\n" +
                "4 - Regresar";
            secMouses = prompt(mouses);
            switch (secMouses) {
                case "1":
                    mouse1.agregarCarrito();
                    mouse1.agregarPrecioAlCarrito();
                    carritoProductoFinal.push(`${mouse1.escribirLasOpcionesYCarritoProductoFinal()}`);
                    break;
                case "2":
                    mouse2.agregarCarrito();
                    mouse2.agregarPrecioAlCarrito();
                    carritoProductoFinal.push(`${mouse2.escribirLasOpcionesYCarritoProductoFinal()}`);
                    break;
                case "3":
                    mouse3.agregarCarrito();
                    mouse3.agregarPrecioAlCarrito();
                    carritoProductoFinal.push(`${mouse3.escribirLasOpcionesYCarritoProductoFinal()}`);
                    break;
                case "4":
                    salirTec = false;
                default:
                    break;
            }
        }
    } else if (productos == "3") {
        salirMou = true;
        while (salirMou) {
            let mousepad = "Mouse Pad Disponibles" +
                "\n" +
                `1 - ${mousepad1.escribirLasOpcionesYCarritoProductoFinal()}` +
                "\n" +
                `2 - ${mousepad2.escribirLasOpcionesYCarritoProductoFinal()}` +
                "\n" +
                `3 - ${mousepad3.escribirLasOpcionesYCarritoProductoFinal()}` +
                "\n" +
                "4 - Regresar";
            secMousepad = prompt(mousepad);

            switch (secMousepad) {
                case "1":
                    mousepad1.agregarCarrito();
                    mousepad1.agregarPrecioAlCarrito();
                    carritoProductoFinal.push(`${mousepad1.escribirLasOpcionesYCarritoProductoFinal()}`);
                    break;
                case "2":
                    mousepad2.agregarCarrito();
                    mousepad2.agregarPrecioAlCarrito();
                    carritoProductoFinal.push(`${mousepad2.escribirLasOpcionesYCarritoProductoFinal()}`);
                    break;
                case "3":
                    mousepad3.agregarCarrito();
                    mousepad3.agregarPrecioAlCarrito();
                    carritoProductoFinal.push(`${mousepad3.escribirLasOpcionesYCarritoProductoFinal()}`);
                    break;
                case "4":
                    salirMou = false;
                default:
                    break;
            }
        }
    } else if (productos == "4") {

        let sumarResultado = 0

        for (let i = 0; i < resultadoCarritos.length; i++) {
            sumarResultado += resultadoCarritos[i];
        }

        if (sumarResultado > 0) {
            let carritoCompras = "Mi carrito" +
                "\n" +
                `${carritoProductoFinal.join(",  ")}` +
                "\n" +
                "\n" +
                "Su cuenta total es de:   $" +
                `${sumarResultado}` +
                "cop" +
                "\n" +
                "\n" +
                "1 - Pagar" +
                "\n" +
                "2 - Salir del carrito";

            miCarrito = prompt(carritoCompras);

            switch (miCarrito) {
                case "1":
                    alert("El precio total de la factura fue cargado a la cuenta bancaria:" +
                        "\n" +
                        "****.****.****.**51" +
                        "\n" +
                        "\n" +
                        "¡Gracias por su compra! Esperamos verle pronto de nuevo en nuestra pagina.");
                    entrada = false;
                    break;
                case "2":
                    menuPre = false;
                    break;
                default:
                    break;
            }
        } else {
            alert("¡Parece que olvidaste poner productos en tu carrito!");
        }
    } else {
        entrada = false;
        alert("Ha salido de nuestra pagina, ¡vuelva pronto!")
    }
}
