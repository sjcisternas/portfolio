const inicio = document.querySelector('#portadanav');
const sobremi = document.querySelector('#sobreminav');
const trabajos = document.querySelector('#trabajosnav');
const contacto = document.querySelector('#contactonav');
const secciones = document.querySelectorAll('.seccion');


const itemActivo = (entradas) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting && entrada.target.id === 'portada'){
            inicio.classList.add('selected');
            sobremi.classList.remove('selected');
            trabajos.classList.remove('selected');
            contacto.classList.remove('selected');
        }
        if(entrada.isIntersecting && entrada.target.id === 'sobremi'){
            inicio.classList.remove('selected');
            sobremi.classList.add('selected');
            trabajos.classList.remove('selected');
            contacto.classList.remove('selected');
        }
        if(entrada.isIntersecting && entrada.target.id === 'trabajos'){
            inicio.classList.remove('selected');
            sobremi.classList.remove('selected');
            trabajos.classList.add('selected');
            contacto.classList.remove('selected');
        }
        if(entrada.isIntersecting && entrada.target.id === 'contacto'){
            inicio.classList.remove('selected');
            sobremi.classList.remove('selected');
            trabajos.classList.remove('selected');
            contacto.classList.add('selected');
        }
    })
}

const observer = new IntersectionObserver(itemActivo, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3
});



secciones.forEach(seccion => observer.observe(seccion));