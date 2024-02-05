const email = document.querySelector("#email"),
    password = document.querySelector("#password"),
    btn = document.querySelector("#boton-login");


//funcion que muestra el error en la validacion del input
const setError = (id, element, message) => {
    const errorDisplay = document.getElementById(id);
    errorDisplay.innerText = message;
    errorDisplay.classList.add('error');
}

//funcion que muestra aprobada la validacion del input
const setSuccess = (id) => {
    const errorDisplay = document.getElementById(id);
    errorDisplay.innerText = '';
};


const isVAlidEmail = regEx_url => {
    const re = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
    return re.test(String(regEx_url));
}

const isValidPassword = regEx_url => {
    const re = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,70}$/;
    return re.test(String(regEx_url));
}


btn.addEventListener("click", (event) => {
    event.preventDefault();

    if (email.value === '') {
        setError('email_validation', email, 'Este campo no puede estar vacío.');
    } else if (!isVAlidEmail(email.value)) {
        setError('email_validation', email, 'El email ingresado es incorrecto.');
    } else {
        setSuccess('email_validation', email);
    }

    if (password.value === '') {
        setError('password_validation', password, 'Este campo no puede estar vacío.');
    } else if (!isValidPassword(password.value)) {
        setError('password_validation', password, 'La contraseña debe tener un mínimo de 8 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.');
    } else {
        setSuccess('password_validation', email);
    }
});