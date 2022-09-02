const formulario =document.getElementById('formularioResgistro');
const inputs = document.querySelectorAll('#formularioResgistro input');

const expresiones = {
	// Nombre= Letras y espacios, pueden llevar acentos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	//Password= >6 y <15 caracteres. Al menos 1 mayúscula, al menos 1 minúscula, al menos 1 digito, al menos 1 carácter especial. Sin espacios en blanco.
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,15}/, 
	// Correo= solo puede contener letras, numeros, puntos, guiones y guion bajo.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const validarFormulario = (e) =>{
    switch(e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__nombre i').classList.add('');
                document.querySelector('#grupo__nombre i').classList.remove('');
            }else{
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
            }
        break;
        case "password":
            
        break;
        case "repetirpassword":
            
        break;
        case "correo":
            
        break;
    }
};

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});

function validarCampos(e){
    e.preventDefault();
}