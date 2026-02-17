function mostrarInfo() {
    const contenido = document.getElementById("infoExtra");
    const boton = document.querySelector("button");

    if (contenido.classList.contains("oculto")) {
        contenido.classList.remove("oculto");
        contenido.classList.add("visible");
        boton.textContent = "Ocultar información";
    } else {
        contenido.classList.remove("visible");
        contenido.classList.add("oculto");
        boton.textContent = "Mostrar más información";
    }
}
