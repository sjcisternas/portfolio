/* const sendMail = () => {
    let params = {
        name: document.getElementById('form-nombre').value,
        email: document.getElementById('form-mail').value,
        msg: document.getElementById('form-msg').value
    }

    const serviceID = 'service_0woeck8';
    const templateID = 'template_xo3yxyl';

    emailjs.send(serviceID, templateID, params)
    .then(
        res =>{
            document.getElementById('form-nombre').value = '';
            document.getElementById('form-mail').value = '';
            document.getElementById('form-msg').value = '';
            console.log(res);
    })
    .catch((err) => console.log(err));
}; */

