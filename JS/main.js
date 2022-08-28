document.getElementById("btnIniciarSesion").addEventListener("click",iniciarSecion);
document.getElementById("btnRegistrarse").addEventListener("click",registro);

window.addEventListener("resize", ajusteWidth);


// Declaración de variables
let contenedorLoginRegistro = document.querySelector(".contenedorLoginRegistro");
let formularioLogin = document.querySelector(".formularioLogin");
let formularioRegistro = document.querySelector(".formularioRegistro");
let cajaLogin = document.querySelector(".cajaLogin");
let cajaRegistro = document.querySelector(".cajaRegistro");

function ajusteWidth() {
    if(window.innerWidth > 850){
        cajaLogin.style.display = "block";
        cajaRegistro.style.display = "block";
    }
    else{
        cajaRegistro.style.display = "block";
        cajaRegistro.style.opacity = "1";
        cajaLogin.style.display = "none";
        formularioLogin.display = "block";
        formularioRegistro.display = "none";
        contenedorLoginRegistro.style.left = "0px";
    }
}

ajusteWidth();

function iniciarSecion(){
    if(window.innerWidth>850){
        formularioRegistro.style.display = "none";
        contenedorLoginRegistro.style.left = "10px";
        formularioLogin.style.display = "block";
        cajaRegistro.style.opacity = "1";
        cajaLogin.style.opacity = "0";
    }
    else{
        formularioRegistro.style.display = "none";
        contenedorLoginRegistro.style.left = "0px";
        formularioLogin.style.display = "block";
        cajaRegistro.style.display = "block";
        cajaLogin.style.display = "none";
    }

}

function registro(){
    if(window.innerWidth>850){
        formularioRegistro.style.display = "block";
        contenedorLoginRegistro.style.left = "410px";
        formularioLogin.style.display = "none";
        cajaRegistro.style.opacity = "0";
        cajaLogin.style.opacity = "1";
    }
    else{
        formularioRegistro.style.display = "block";
        contenedorLoginRegistro.style.left = "0px";
        formularioLogin.style.display = "none";
        cajaRegistro.style.display = "none";
        cajaLogin.style.display = "block";
        cajaLogin.style.opacity = "1";
    }

}

