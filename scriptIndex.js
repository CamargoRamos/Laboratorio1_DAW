const boton = document.getElementById('cambiar-tema');
const cuerpo = document.body;
const nombres = document.querySelectorAll('.nombre');

boton.addEventListener('click', () => {
    if (cuerpo.style.backgroundColor === "rgb(44, 62, 80)") {
        cuerpo.style.backgroundColor = "#eecaf9";
        boton.innerText = "Modo Oscuro";
    } else {
        cuerpo.style.backgroundColor = "rgb(44, 62, 80)";
        boton.innerText = "Modo Claro";
    }

    nombres.forEach(nombre => {
        nombre.style.color = (nombre.style.color === "rgb(44, 62, 80)") ? "#3d054e" : "rgb(44, 62, 80)";
    });
});