const parametros = new URLSearchParams(window.location.search);
const marca = parametros.get("marca");
const modelo = parametros.get("modelo");

const lista = document.getElementById("lista-productos");
const titulo = document.getElementById("titulo-moto");
const mensaje = document.getElementById("mensaje-catalogo");

function nombreComercial(foto, modelo) {
    const archivo = foto.split("/").pop().replace(/\.[^.]+$/, "");
    const nombres = {
        bandas_de_freno: "Bandas de freno",
        bandas_de_frenos: "Bandas de freno",
        bandas_traseras: "Bandas de freno traseras",
        bandas_de_freno_traseras: "Bandas de freno traseras",
        bujia: "Bujía",
        discos_de_clutch: "Discos de clutch",
        filtro: "Filtro",
        filtro_aceite: "Filtro de aceite",
        filtro_de_aceite: "Filtro de aceite",
        filtro_aire: "Filtro de aire",
        filtro_de_aire: "Filtro de aire",
        fltro_de_aire: "Filtro de aire",
        fitro_de_aire: "Filtro de aire",
        guaya_acelerador: "Guaya de acelerador",
        guaya_de_acelerador: "Guaya de acelerador",
        guaya_clutch: "Guaya de clutch",
        guaya_de_clutch: "Guaya de clutch",
        kit_de_arrastre: "Kit de arrastre",
        maniguetas: "Maniguetas",
        pastillas: "Pastillas de freno",
        pastillas_de_freno: "Pastillas de freno",
        pastillas_de_frenos: "Pastillas de freno",
        pastillas_de_freno_delanteras: "Pastillas de freno delanteras",
        pastillas_delanteras: "Pastillas de freno delanteras",
        pastillas_traseras: "Pastillas de freno traseras",
        retenedor_de_barras: "Retenedores de barras",
        retenedores: "Retenedores de barras",
        retenedores_de_barras: "Retenedores de barras",
        retenes_de_barras: "Retenedores de barras",
        pinon_de_salida: "Piñón de salida",
        correa_de_transmision: "Correa de transmisión",
        guaya_de_freno: "Guaya de freno",
        tensor_de_cadena: "Tensor de cadena",
        punos: "Puños",
        punos_ufo: "Puños UFO",
        lineas_blindadas: "Líneas blindadas"
    };
    const nombreParte = nombres[archivo] || archivo.replace(/_/g, " ");
    return nombreParte + " " + modelo;
}

if (marca) {
    document.body.classList.add(marca);
}

const productos = repuestos[modelo];

if (productos === undefined) {
    titulo.textContent = "Repuestos";
    mensaje.textContent = "Pronto tendremos repuestos para esta moto.";
} else {
    titulo.textContent = "Repuestos " + modelo;

    for (const producto of productos) {
        const nombre = nombreComercial(producto.foto, modelo);
        const texto = "Hola, quiero consultar por " + nombre;
        const enlace = "https://wa.me/573226683188?text=" + encodeURIComponent(texto);

        lista.innerHTML += `
            <div class="tarjeta-producto">
                <img src="${producto.foto}" alt="${nombre}">
                <h3>${nombre}</h3>
                <p>Consultar precio</p>
                <p>Compatible con: ${modelo}</p>
                <a href="${enlace}" class="boton">Consultar por WhatsApp</a>
            </div>
        `;
    }
}
