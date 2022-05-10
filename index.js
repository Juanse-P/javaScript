class Producto {
    constructor(tipo, marca, modelo, precioString, precioUni, imagen) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.precioString = precioString;
        this.precioUni = precioUni;
        this.imagen = imagen;
    }
}
let productos = [];
let escritor = document.getElementsByClassName("contenedorPr")
productos.push(new Producto(`teclado`, `Logitech`, `G915 TKL`, `$ 820.000`, 820000, `./multimedia/teclados/Teclado_Logitech-G915-TKL_lightspeed_RGB.webp`));
productos.push(new Producto(`teclado`, `Logitech`, `K400`, `$ 129.000`, 129000, `./multimedia/teclados/Taclado_inalambrico_Logitech_K400-plus_español.webp`));
productos.push(new Producto(`teclado`, `Kumara`, `OUTEMO`, `$ 170.000`, 170000, `./multimedia/teclados/Teclado_gamer_Kumara-QWERTY-OUTEMU_español.webp`));
productos.push(new Producto(`mouse`, `Logitech`, `G502`, `$ 215.000`, 215000, `./multimedia/mouse/Mouse_De_Juego_Logitech-G-Series-G502_Negro.webp`));
productos.push(new Producto(`mouse`, `Razer`, `Viper mini`, `$ 140.000`, 140000, `./multimedia/mouse/Mouse_De_Juego_Razer-Viper-MiniNegro.webp`));
productos.push(new Producto(`mouse`, `Redragon`, `Griffin M607`, `$ 70.000`, 70900, `./multimedia/mouse/Mouse_De_Juego_Redragon_Griffin-M607-NG.webp`));
productos.push(new Producto(`mousepad`, `KlipXtreme`, `mousepad LP82`, `$ 80.000`, 80000, `./multimedia/mousepad/Mousepad_Ergonomico_Con_Gel_Klipxtreme_KMP-100b_NG.webp`));
productos.push(new Producto(`mousepad`, `Aoas`, `S4000`, `$ 50.000`, 50000, `./multimedia/mousepad/Mousepad_Gamer_Aoas-S4000De_Caucho_YPoliuretano_XL_30cmx80cmx0.4cm_NG.webp`));
productos.push(new Producto(`mousepad`, `Genius`, `G WMP 200M`, `$ 50.000`, 50000, `./multimedia/mousepad/Mousepad_Gamer_Genius-G-WMP-200M-GX_Gaming_De_Goma_M_160mmx900mmx3cm_NG.webp`));
for (const producto of productos) {
    let div = document.createElement("div");
    div.id = "fondo";
    div.innerHTML = `<div>
                     <h2>${producto.tipo} ${producto.marca} ${producto.modelo}</h2>
                     <img src="${producto.imagen}">
                     <p>${producto.precioString} cop</p>
                     <button id='${producto.precioUni}'>Enviar al carrito</button>
                     <hr>
                     </div>`;
    document.body.appendChild(div);
}