var nom = document.getElementById('floatingInput');
var password = document.getElementById('floatingPassword');
var error = document.getElementById('error');
error.style.color = 'red';

var form = document.getElementById('formulario');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var mensajesError = [];

    if (nom.value === null || nom.value === 'haivher' && password.value === null || password.value === 'haivher123') {
        window.location = 'index2.html';
    }
    if (nom.value === null || nom.value === '') {
        mensajesError.push('Ingresa tu Usuario');
    }
    if (password.value === null || password.value === '') {
        mensajesError.push('Ingresa tu Contraseña');
    }

    error.innerHTML = mensajesError.join(' , ');

    return false;
});

function infor() {
    if ( nom.value != 'haivher' && password.value != 'haivher123' ) {
        alert("Datos Incorrectos, Intente Nuevamente");
        return false,
            window.location = 'index.html';
    }
}
