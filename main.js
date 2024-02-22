const campoEmail = document.getElementById('email');

function redirigirASuscribe() {
    // Obtén el valor del campo de correo electrónico
    const email = campoEmail.value;

    // Valida el correo electrónico usando la función validarEmail
    if (!validarEmail(email)) {
        alert("Correo electrónico no válido. Por favor, ingresa un formato válido.");
    } else {
        alert('Redirigiendo a la otra página...');
        // Si la validación es exitosa, redirige a la otra página
        window.location.href = "suscribe.html";
    }
}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
   