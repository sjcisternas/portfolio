//DOM
const form = document.querySelector('#form-contacto');
const mail = document.querySelector('#form-mail');
const nombre = document.querySelector('#form-nombre');
const msg = document.querySelector('#form-msg');
const mailError = document.querySelector('#mail-error');
const nombreError = document.querySelector('#nombre-error');
const exito = document.querySelector('#form-exito');


//regexp
const regExpNombre = /^[a-zA-Z0-9_-]{3,20}$/ //exp regular nombre. Incluye minúsculas, mayúsculas, numeros, guión bajo y medio
const regExpMail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/



form.addEventListener('submit', (e) => {
    e.preventDefault();

    //array errores
    const errores = [];

    mailError.classList.add('d-none');
    nombreError.classList.add('d-none');
    exito.classList.add('d-none');
    nombre.classList.remove('errorForm');
    mail.classList.remove('errorForm');

    if(!regExpNombre.test(nombre.value)){
        errores.push({
            tipo: nombreError,
            msg: 'Nombre no valido'
        });
    }

    if(!regExpMail.test(mail.value) || !mail.value.trim()){
        errores.push({
            tipo: mailError,
            msg: 'Email no valido.'
        });
    }

    if(errores.length !== 0){
        if(errores.length === 1 && errores[0].tipo === nombreError){
            nombreInvalido();
            nombre.classList.add('errorForm');
        }
        if(errores.length === 1 && errores[0].tipo === mailError){
            mailInvalido();
            mail.classList.add('errorForm');
        }
        if(errores.length === 2){
            nombreInvalido();
            mailInvalido();
            nombre.classList.add('errorForm');
            mail.classList.add('errorForm');
        }
        return;
    }

    mostrarExito();
});

//mostrar exito
const mostrarExito = () => {
    exito.classList.remove('d-none');
}

//mostrar error nombre
const nombreInvalido = () => {
    nombreError.classList.remove('d-none');
}

//mostrar error mail
const mailInvalido = () => {
    mailError.classList.remove('d-none');
}