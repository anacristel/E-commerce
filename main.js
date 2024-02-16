const input_name = document.querySelector('#input-name'),
    textarea = document.querySelector('#textarea'),
    name_val = document.querySelector('#name_val'),
    texta_val = document.querySelector('#texta_val');


// redirección a inicio de se sesión
const btn_login = document.querySelector('#btn-login');
btn_login.addEventListener("click", (e) => {
    e.preventDefault();

    location.href = "formulario_login.html";
});

// redirección a todos los productos
const btn_verTodo = document.getElementsByClassName('boton-ver-todo');
function verTodo() {
    location.href = "productos.html";
}
for (var i = 0; i < btn_verTodo.length; i++) {
    btn_verTodo[i].addEventListener('click', verTodo, false);
}


//validacion formulario de contacto
const btn_form = document.querySelector('#btn-form-contacto');
btn_form.addEventListener("click", (e) => {
    e.preventDefault();

    if (input_name.value === '') {
        name_val.classList.add('error');
        name_val.innerText = 'Este campo no puede estar vacío.';
    } else {
        name_val.innerText = '';
    }

    if (textarea.value === '') {
        texta_val.classList.add('error');
        texta_val.innerText = 'Este campo no puede estar vacío.';
    } else {
        texta_val.innerText = '';
    }
});