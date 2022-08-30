botonIngresar.onclick = () =>{
    
    let sEmailIngresado = '';
    let sClaveIngresada = '';
    let bAcceso = false;

    sEmailIngresado = document.querySelector('#txtEmailIngresado').value;
    sClaveIngresada = document.querySelector('#txtClaveIngresada').value;

    bAcceso = validarCredenciales(sEmailIngresado, sClaveIngresada);
   
    if( bAcceso == true){
        ingresar ();
    }
}

function ingresar(){
    let roll = sessionStorage.getItem('rollUsuarioActivo');
    switch(roll){
        case 'Administrador':
            window.location.href = './pages/userAdim.html';
        break;
        case 'Usuario Cliente':            
            window.location.href = './pages/userCliente.html';
        break;
    }
}