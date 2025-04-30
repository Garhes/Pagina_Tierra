const btn = document.getElementById("btnMostrar");
const datos = document.getElementById("datosCuriosos");

btn.addEventListener("click", () => {
    datos.classList.toggle("visible");
});
