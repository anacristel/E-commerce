const input_url = document.querySelector("#input_url"),
    input_nombre = document.querySelector("#input_nombre"),
    input_categoria = document.querySelector("#input_categoria"),
    input_precio = document.querySelector("#input_precio"),
    btn = document.querySelector("#btn_agregar");

//funcion que muestra el error en la validacion del input
const setError = (id, element, message) => {
    const errorDisplay = document.getElementById(id);
    errorDisplay.innerText = message;
    errorDisplay.classList.add('val_message');
}

//funcion que muestra aprobada la validacion del input
const setSuccess = (id) => {
    const errorDisplay = document.getElementById(id);
    errorDisplay.innerText = '';
};

//expresion regular para validar url
const isValidUrl = regEx_url => {
    const re = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    return re.test(String(regEx_url));
}

//evento del boton agregar que valida los inputs
btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (input_url.value === '') {
        setError('url', input_url, 'Este campo no puede estar vacío.');
    } else if (!isValidUrl(input_url.value)) {
        setError('url', input_url, 'Ingrese una URL correcta.');
    } else {
        setSuccess('url', input_url);
    }

    if (input_categoria.value === '') {
        setError('categoria', input_url, 'Este campo no puede estar vacío.');
    } else {
        setSuccess('categoria', input_categoria);
    }

    if (input_nombre.value === '') {
        setError('nombre', input_url, 'Este campo no puede estar vacío.');
    } else {
        setSuccess('nombre', input_nombre);
    }

    if (input_precio.value === '') {
        setError('precio', input_url, 'Este campo no puede estar vacío.');
    } else {
        setSuccess('precio', input_precio);
    }
});
