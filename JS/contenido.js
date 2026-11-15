const lista = document.getElementById("lista-videos");
for (const video of videos) {
    lista.innerHTML += `
        <div class="tarjeta-video">
            <video controls poster="${video.miniatura}">
                <source src="${video.archivo}" type="video/mp4">
            </video>
            <h3>${video.titulo}</h3>
            <p>${video.descripcion}</p>
        </div>
    `;
}
