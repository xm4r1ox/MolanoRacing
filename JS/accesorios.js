const lista = document.getElementById("lista-productos");

const nombresAccesorios = {
    acelerador_de_4ta: "Acelerador de 4ta",
    baul: "Baúl",
    espejos_de_lujo: "Espejos de lujo",
    fender: "Fender",
    gomas_de_lujo: "Gomas de lujo",
    lineas_blindadas: "Líneas blindadas",
    maniguetas_de_lujo: "Maniguetas de lujo",
    manubrios: "Manubrios",
    punos_UFO: "Puños UFO",
    tornilleria_de_lujo: "Tornillería de lujo"
};

for (const producto of accesoriosUniversales) {
    const archivo = producto.foto.split("/").pop().replace(/\.[^.]+$/, "");
    const nombre = nombresAccesorios[archivo] || archivo.replace(/_/g, " ");
    const texto = "Hola, quiero consultar por este accesorio universal: " + nombre;
    const enlace = "https://wa.me/573226683188?text=" + encodeURIComponent(texto);

    lista.innerHTML += `
        <div class="tarjeta-producto">
            <img src="${producto.foto}" alt="${nombre}">
            <h3>${nombre}</h3>
            <p>Consultar precio</p>
            <a href="${enlace}" class="boton">Consultar por WhatsApp</a>
        </div>
    `;
}
