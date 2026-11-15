// MENÚ DE CELULAR
// Este archivo hace que el botón de las tres rayitas abra y cierre el menú.

// Buscamos en el HTML el botón y el menú usando su id
const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");

// Cuando alguien hace clic en el botón...
botonMenu.addEventListener("click", function () {
    // ...le ponemos o le quitamos la clase "activo" al menú.
    // En el CSS, la clase "activo" es la que hace que el menú se vea.
    menu.classList.toggle("activo");
});
