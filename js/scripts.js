//Validar formulario

const inputs = document.querySelectorAll('form .campo input');

const validarInput = e => {
    const estado = ['valido', 'no-valido'];

    let clase;
    if(e.target.value.length === 0){
        clase = estado[1]
    }else{
        clase = estado[0];
    }

    e.target.classList.remove(...estado);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    //Inyectar dinamicamente el error 
    if(clase === 'no-valido'){
        if(e.target.parentElement.nextElementSibling.classList[0] !== 'alerta'){
            //Construir el mensaje de error
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alerta');
            //insertar el error
            e.target.parentElement.parentElement.insertBefore(errorDiv, 
            e.target.parentElement.nextElementSibling);
        }
    }else{
        //Limpiar ese mensaje de error
        if(e.target.parentElement.nextElementSibling.classList[0] === 'alerta'){
            e.target.parentElement.nextElementSibling.remove()
        }
    }
}

//mostrar y ocultar password
const mostrarPasswordBtn = document.querySelector('form .campo span');
mostrarPasswordBtn.addEventListener('click', e => {
    const passwordInput = document.querySelector('#password');

    if(e.target.classList.contains('mostrar')){
        //Mostrar el texto
        e.target.classList.remove('mostrar');

        //Cambiar el texto
        e.target.textContent = 'Ocultar';

        //Cambiamos a password
        passwordInput.type = 'text';
        
    }else{
        //Mostar el password
        e.target.classList.add('mostrar');

        //Cambiar el texto
        e.target.textContent = 'Mostrar';

        //Cambiamos a password
        passwordInput.type = 'password';
    }
})

//Listener a los inputs
inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
})
inputs.forEach(input => {
    input.addEventListener('input', validarInput);
})

