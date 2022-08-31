botonIngresar.onclick = (e) =>{
    e.preventDefault();
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
    let rol = sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case 'Administrador':
            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                color: '#007fff',
                iconColor:'#1affd5',
                backgroundColor:'007fff',
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                  toast.addEventListener('mouseleave', function timeOutAdmin(){
                    setTimeout(function(){window.location.href = './pages/userAdim.html'; },1000);
                  })
                }
              })
              Toast.fire({
                icon: 'success',
                title: 'Verificando credenciales'
              })
              
        break;
        case 'Usuario Cliente':
            const Toast1 = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                color: '#007fff',
                iconColor:'#1affd5',
                backgroundColor:'007fff',
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast1) => {
                  toast1.addEventListener('mouseenter', Swal.stopTimer)
                  toast1.addEventListener('mouseleave', Swal.resumeTimer)
                  toast1.addEventListener('mouseleave',   function timeOutCliente(){
                    setTimeout(function(){window.location.href = './pages/userCliente.html'; },1000);
                  })                  
                }
              })
              Toast1.fire({
                icon: 'success',
                title: 'Verificando credenciales'
              })
            
        break;
    }
}