const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha = document.querySelector('.fecha');

document.addEventListener('DOMContentLoaded',() =>{
    mostrarMenu();
    ocultarMenu();
    fechaActual();
});

function mostrarMenu() {
    hamburguesa.addEventListener('click',()=>{
        // TOOGLE SIRVE PARA SI NO TIENE UN CLASE SE LA AÑADE Y VICEVERSA
        navegacion.classList.toggle('ocultar');
    });
};


function ocultarMenu() {
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click', (evento) =>{
            evento.preventDefault();
            const seccion = document.querySelector(evento.target.attributes.href.value);
            cambioSeccion(seccion);

            if (evento.target.tagName === 'A') {
                navegacion.classList.add('ocultar');
            } 
            else {
                console.log('Error...');
            }
        });
    });
};

function cambioSeccion(seccion) {
    seccion.scrollIntoView({
        behavior: 'smooth';
    })
}

function fechaActual() {
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}