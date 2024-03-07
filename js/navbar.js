const inicio = document.querySelector('#portadanav');
const sobremi = document.querySelector('#sobreminav');
const trabajos = document.querySelector('#trabajosnav');
const contacto = document.querySelector('#contactonav');
const secciones = document.querySelectorAll('.seccion');
const navbar = document.getElementById('navbar');
const navbarIdioma = document.getElementById('navbar-idioma');
const btnAbrir = document.getElementById('abrir');
const btnCerrar = document.getElementById('cerrar');
const cerrarImg = document.getElementById('cerrar-img');
const abrirImg = document.getElementById('abrir-img');
const logo = document.getElementById('logo');

//Funcion focus sección activa
const itemActivo = (entradas) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting && entrada.target.id === 'portada'){
            inicio.classList.add('selected');
            sobremi.classList.remove('selected');
            trabajos.classList.remove('selected');
            contacto.classList.remove('selected');
            if(window.innerWidth > 724){
                logo.classList.add('d-none');
            }
            logo.classList.remove('nav-visible');
        }
        console.log(entrada.target.id)
        if(entrada.isIntersecting && entrada.target.id === 'sobremi'){
            inicio.classList.remove('selected');
            sobremi.classList.add('selected');
            trabajos.classList.remove('selected');
            contacto.classList.remove('selected');
            if(window.innerWidth <= 724){
                logo.classList.remove('d-none');
                logo.classList.add('nav-visible');
            }
        }
        console.log(entrada.target.id)
        if(entrada.isIntersecting && entrada.target.id === 'trabajos'){
            inicio.classList.remove('selected');
            sobremi.classList.remove('selected');
            trabajos.classList.add('selected');
            contacto.classList.remove('selected');
            if(window.innerWidth <= 724){
                logo.classList.remove('d-none');
                logo.classList.add('nav-visible');
            }
        }
        if(entrada.isIntersecting && entrada.target.id === 'contacto'){
            inicio.classList.remove('selected');
            sobremi.classList.remove('selected');
            trabajos.classList.remove('selected');
            contacto.classList.add('selected');
            if(window.innerWidth <= 724){
                logo.classList.remove('d-none');
                logo.classList.add('nav-visible');
            }
        }
    })
}

// declaración observador itemActivo
const observer = new IntersectionObserver(itemActivo, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3
});

//funcion para poner o sacar d-none del logo según ancho de pantalla
let anchoVentana = window.innerWidth;


if(window.innerWidth > 724){
    logo.classList.add('d-none');
    navbar.classList.remove('translate');
    navbarIdioma.classList.remove('translate');
}else{
    logo.classList.remove('d-none');
    navbar.classList.add('translate');
    navbarIdioma.classList.add('translate');
}

window.onresize = function(){
    anchoVentana = window.innerWidth;
    if(window.innerWidth > 724){
        logo.classList.add('d-none');
        navbar.classList.remove('translate');
        navbarIdioma.classList.remove('translate');
    }else{
        logo.classList.remove('d-none');
        navbar.classList.add('translate');
        navbarIdioma.classList.add('translate');
    }
};


//llamada obesrvador
secciones.forEach(seccion => observer.observe(seccion));

//funcion abrir/cerrar menú
document.addEventListener('click',(e) => {
    if(e.target.id === btnAbrir.id || e.target.id === abrirImg.id){
        navbar.classList.add('nav-visible');
        navbarIdioma.classList.add('nav-visible');
        navbar.classList.remove('translate');
        navbarIdioma.classList.remove('translate');
    }
    if((e.target.id === btnCerrar.id || e.target.id === cerrarImg.id || e.target.id === inicio.id || e.target.id === sobremi.id || e.target.id === trabajos.id || e.target.id === contacto.id) && window.innerWidth < 724){
        navbar.classList.remove('nav-visible');
        navbarIdioma.classList.remove('nav-visible');
        navbar.classList.add('translate');
        navbarIdioma.classList.add('translate');
    }
});