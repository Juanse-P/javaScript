class Producto {
    constructor(id, tipo, marca, modelo, precioString, precioUni, imagen) {
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.precioString = precioString;
        this.precioUni = precioUni;
        this.imagen = imagen;
    }
}
let arrayCarrito = [];
let cuentaCarrito = [];
let escritor = document.getElementsByClassName("contenedorPr")
let productos = [];
productos.push(new Producto(1, `teclado`, `Logitech`, `G915 TKL`, `$ 820.000`, 820000, `./multimedia/teclados/Teclado_Logitech-G915-TKL_lightspeed_RGB.webp`));
productos.push(new Producto(2, `teclado`, `Logitech`, `K400`, `$ 129.000`, 129000, `./multimedia/teclados/Taclado_inalambrico_Logitech_K400-plus_español.webp`));
productos.push(new Producto(3, `teclado`, `Kumara`, `OUTEMO`, `$ 170.000`, 170000, `./multimedia/teclados/Teclado_gamer_Kumara-QWERTY-OUTEMU_español.webp`));
productos.push(new Producto(4, `mouse`, `Logitech`, `G502`, `$ 215.000`, 215000, `./multimedia/mouse/Mouse_De_Juego_Logitech-G-Series-G502_Negro.webp`));
productos.push(new Producto(5, `mouse`, `Razer`, `Viper mini`, `$ 140.000`, 140000, `./multimedia/mouse/Mouse_De_Juego_Razer-Viper-MiniNegro.webp`));
productos.push(new Producto(6, `mouse`, `Redragon`, `Griffin M607`, `$ 70.000`, 70000, `./multimedia/mouse/Mouse_De_Juego_Redragon_Griffin-M607-NG.webp`));
productos.push(new Producto(7, `mousepad`, `KlipXtreme`, `mousepad LP82`, `$ 80.000`, 80000, `./multimedia/mousepad/Mousepad_Ergonomico_Con_Gel_Klipxtreme_KMP-100b_NG.webp`));
productos.push(new Producto(8, `mousepad`, `Aoas`, `S4000`, `$ 50.000`, 50000, `./multimedia/mousepad/Mousepad_Gamer_Aoas-S4000De_Caucho_YPoliuretano_XL_30cmx80cmx0.4cm_NG.webp`));
productos.push(new Producto(9, `mousepad`, `Genius`, `G WMP 200M`, `$ 50.000`, 50000, `./multimedia/mousepad/Mousepad_Gamer_Genius-G-WMP-200M-GX_Gaming_De_Goma_M_160mmx900mmx3cm_NG.webp`));
productos.push(new Producto(10, `monitor`, `Monitor Samsung`, `C27R500FHL-LED`, `$ 950.000`, 950000, `./multimedia/monitor/Monitor_Gamer_Curvo__Samsung-C27R500FHL-Led-27-Dark_Blue_Gray_100V240V.webp`));
productos.push(new Producto(11, `monitor`, `Monitor Azus`, `curvo de 23.6"`, `$ 1'029.900`, 1029900, `./multimedia/monitor/Monitor_Gamer_Curvo_Asus-TUF-Gaming-VG24VQ-Led_23.6_Negro.webp`));
productos.push(new Producto(12, `monitor`, `Monitor LG`, `curvo de 34"`, `$ 2'500.000`, 2500000, `./multimedia/monitor/Monitor_Gamer_Curvo_LG_UltraGear-34GL750_Led_34_Negro_Y_Rojo.webp`));
productos.push(new Producto(13, `mando`, `Mando`, `PS4 blanco`, `$ 100.000`, 100000, `./multimedia/Mandos/Mando_Inalambrico_Bluetooth_Gamepad_Blanco.webp`));
productos.push(new Producto(14, `mando`, `Msndo PS5`, `DualSense`, `$ 350.000`, 350000, `./multimedia/Mandos/Control_Joystick_Inalambrico_Sony_PlayStation_DualSende_5_CFI-ZCT1_Cosmic_Red.webp`));
productos.push(new Producto(15, `mando`, `back buttom`, `para PS4`, `$ 150.000`, 150000, `./multimedia/Mandos/Boton_Trasero_Back_Button_Ps4.webp`));
productos.push(new Producto(16, `microfono`, `Technica`, `20 AT2020`, `$ 380.000`, 380000, `./multimedia/microfono/Microfono_Audio-Technica-20-AT2020_Condensador_cardioide_Negro.webp`));
productos.push(new Producto(17, `microfono`, `Microfono`, `Blue Yeti`, `$ 450.000`, 450000, `./multimedia/microfono/Microfono_Blue_Yeti_Condensador_Multipatron_Blackout.webp`));
productos.push(new Producto(18, `microfono`, `Boya`, `BY-M1`, `$ 45.000`, 45000, `./multimedia/microfono/Microfono_Boya_BY-M1_Condensador_Omnidireccional_Negro.webp`));
productos.push(new Producto(19, `audifonos`, `Corsair`, `inalambricos Void Elite`, `$ 380.000`, 380000, `./multimedia/audifonos/Audifonos_Gamer_Inalambricos_Corsair_VOID_elite_Wireless_Blanco_Con_Luz_RGB_Led.webp`));
productos.push(new Producto(20, `audifonos`, `Logitech`, `Series G733`, `$ 630.000`, 630000, `./multimedia/audifonos/Audifonos_Gamer_Inalambricos_Logitech-G-Series-G733-Kda_Con_Luz_RGB_Led.webp`));
productos.push(new Producto(21, `audifonos`, `Logitech`, `G935`, `$ 800.000`, 800000, `./multimedia/audifonos/Audifonos_Gamer_Inalambricos_Logitech-G-Series-G935_Negro_Y_Azul_Con_Luz_RGB_Led.webp`));
productos.push(new Producto(22, `camara`, `Camara Para PC`, `Con microfono`, `$ 90.000`, 90000, `./multimedia/camara/Camara_Web-1080_Para_Pc_Laptop_USB_Cam_Com_Microfono.webp`));
productos.push(new Producto(23, `camara`, `Redragon`, `GW800 1080p`, `$ 200.000`, 200000, `./multimedia/camara/Camara_Web_Redragon-GW800_Hitman_Webcam_Para_Streaming_1080p.webp`));
productos.push(new Producto(24, `camara`, `Logitech`, `C9205 Full HD`, `$ 360.000`, 360000, `./multimedia/camara/Logitech-C920S_Pro_Webcam_HD_Videochats_En_FULL_HD_1080.webp`));


let contenedorPr = document.querySelector(".sigcont")
contenedorPr.innerHTML = `<div class="contlat">
                            <aside class="asidelat">
                                <div class="categorias">
                                    <hr>
                                    <h5>Tipo de producto</h5>
                                    <form class="formulario" onsubmit="" class="tipoProducto">
                                        <div class="dentroCategorias">
                                            <input type="radio" name="encontrador" value="teclado" id="teclado">
                                            <label for="teclado">Teclados</label>
                                        </div>
                                        <div class="dentroCategorias">
                                            <input type="radio" name="encontrador" value="mouse" id="mouse">
                                            <label for="mouse">Mouse</label>
                                        </div>
                                        <div class="dentroCategorias">
                                            <input type="radio" name="encontrador" value="mousepad" id="mousepad">
                                            <label for="mousepad">Mousepad</label>
                                        </div>
                                        <div class="dentroCategorias">
                                            <input type="radio" name="encontrador" value="monitor" id="monitor">
                                            <label for="monitor">Monitor</label>
                                        </div>
                                        <div class="dentroCategorias">
                                            <input type="radio" name="encontrador" value="mando" id="mando">
                                            <label for="mando">Mando</label>
                                        </div>
                                        <div class="dentroCategorias">
                                            <input type="radio" name="encontrador" value="microfono" id="microfono">
                                            <label for="microfono">Microfóno</label>
                                        </div>
                                        <div class="dentroCategorias">
                                            <input type="radio" name="encontrador" value="audifono" id="audifono">
                                            <label for="audifono">Audifonos</label>
                                        </div>
                                        <div class="dentroCategorias">
                                            <input type="radio" name="encontrador" value="camara" id="camara">
                                            <label for="camara">Cámara</label>
                                        </div>
                                        <input class="btn btn-warning" type="submit" value="aplicar">
                                    </form>
                                    <hb></hb>
                                    <hb></hb>
                                    <hb></hb>
                                    <hr>
                                </div>
                            </aside>
                        </div>`
contenedorPr.outerHTML;

for (const producto of productos) {
    let div = document.createElement("div");
    div.className = `card productolst productolst${producto.id}`;
    div.innerHTML = `<p>${producto.marca} ${producto.modelo}</p>
                     <div>
                        <img class="img-fluid" src="${producto.imagen}">
                     </div>
                     <div class="intern card-body">
                        <button class="btn boton btn-warning" href="" id="anadir${producto.id}">Añadir al carrito</button>
                        <p>${producto.precioString}</p>
                     </div>`;
    contenedorPr.insertAdjacentElement("beforeend", div);
    let botones = document.getElementById(`anadir${producto.id}`)
    botones.onclick = () => { alert(`Se ha añadido ${producto.marca} ${producto.modelo} a tu carrito`), cuentaCarrito.push(producto.precioUni), arrayCarrito.push(`${producto.marca} ${producto.modelo}    ${producto.precioString}`) }
}
let sumaCarrito = 0
let botonCarrito = document.getElementById("botonCarrito");
botonCarrito.onclick = () => {
    for (let i = 0; i < cuentaCarrito.length; i++) {
        sumaCarrito += cuentaCarrito[i];
    } alert(`carrito: \n ${arrayCarrito.join("\n")} \n \n \n y el costo total es ${sumaCarrito} cop`)
}