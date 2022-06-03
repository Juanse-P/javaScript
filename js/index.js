/* ---------------------------------------- */
//funcion principal para acceder a la base de datos (el archivo .json) y enviar los datos a las demas funciones
async function getData() {
    let response = await fetch(`../json/data.json`);
    data = await response.json();
    getBotonVaciar.addEventListener('click', vaciarCarrito);
    cargarCarritoDeLocalStorage();
    escribirProductos();
    actualizarCarrito();
}
/* ---------------------------------------- */
getData();