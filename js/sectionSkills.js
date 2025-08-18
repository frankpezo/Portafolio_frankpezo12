// Seleccionamos el carrusel y la sección
const section = document.getElementById('skills');
const carousel = document.getElementById('carouselExampleCaptions');

// Función para actualizar fondo
function updateBackground() {
    const activeItem = carousel.querySelector('.carousel-item.active');
    const bg = activeItem.getAttribute('data-bg');
    section.style.backgroundImage = `url('${bg}')`;
}

// Al cargar la página, poner el fondo inicial
updateBackground();

// Escuchar cada vez que cambia el slide
carousel.addEventListener('slid.bs.carousel', updateBackground);