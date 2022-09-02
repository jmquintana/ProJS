const formulario =document.getElementById('formularioResgistro');
const inputs = document.querySelectorAll('#formularioResgistro input');

const expresiones = {
	// Nombre= Letras y espacios, pueden llevar acentos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	//Password= 4 a 12 digitos. 
    password: /^.{4,12}$/, 
	// Correo= solo puede contener letras, numeros, puntos, guiones y guion bajo.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const campos = {
	nombre: false,
	password: false,
	correo: false,
}

const validarFormulario = (e) =>{
    switch(e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarrepetirpassword();
        break;
        case "repetirpassword":
            validarrepetirpassword();
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
    }
};

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarrepetirpassword = () => {
	const inputPassword = document.getElementById('password');
	const inputrepetirpassword = document.getElementById('repetirpassword');

	if(inputPassword.value !== inputrepetirpassword.value){
		document.getElementById(`grupo__repetirpassword`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__repetirpassword`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__repetirpassword i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__repetirpassword i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__repetirpassword .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__repetirpassword`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__repetirpassword`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__repetirpassword i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__repetirpassword i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__repetirpassword .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});

function validarCampos(e){
    e.preventDefault();
}