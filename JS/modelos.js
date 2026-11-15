const parametros = new URLSearchParams(window.location.search);
const marca = parametros.get("marca");

const lista = document.getElementById("lista-modelos");
const titulo = document.getElementById("titulo-marca");

const modelosDeLaMarca = motos[marca];

if (modelosDeLaMarca === undefined) {
    titulo.textContent = "Marca no encontrada";
} else {
    titulo.textContent = "Modelos " + marca.toUpperCase();

    document.body.classList.add(marca);

    for (const modelo of modelosDeLaMarca) {
        const nombreFoto = modelo.toLowerCase().replaceAll(" ", "-");
        lista.innerHTML += `
            <a href="catalogo-repuestos.html?marca=${marca}&modelo=${modelo}" class="tarjeta-modelo">
                <img src="IMG/motos/${nombreFoto}.jpg" alt="${modelo}">
                <h3>${modelo}</h3>
            </a>
        `;
    }
}
