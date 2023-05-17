var formulario2 = document.getElementById('box_formulario');
var usuario = sessionStorage.getItem('userName');
var password = sessionStorage.getItem('passWord');
var correo = sessionStorage.getItem('correo');


formulario2.addEventListener('submit', (e) => {

    var userEmail = document.getElementById('user_email').value;
    var userPassword = document.getElementById('user_password').value;



    if ((usuario === userEmail || correo === userEmail) && password === userPassword) {
        sessionStorage.setItem('userLogin', 'true');
        formulario2.reset()
    } else {
        alert('Datos incorrecto, vuele a intentar');
        formulario2.reset();
        e.preventDefault();
    }


    

});