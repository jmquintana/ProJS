botonIngresar.onclick = (e) =>{
    e.preventDefault();
    let sCorreoIngresado = '';
    let spasswordIngresada = '';
    let bAcceso = false;

    sCorreoIngresado = document.querySelector('#txtCorreoIngresado').value;
    spasswordIngresada = document.querySelector('#txtpasswordIngresada').value;

    bAcceso = validarCredenciales(sCorreoIngresado, spasswordIngresada);

    if( bAcceso == true){
        ingresar ();
    }
    else{
      Swal.fire({
        icon: 'error',
        iconColor:'red',
        title: 'Ups...',
        text: 'Usuario y/o contraseña incorrecto.',
        confirmButtonText:'Intentalo nuevamente',
        confirmButtonColor:'#007fff',
        customClass: "Custom_Cancel"
      })
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
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                  toast.addEventListener('mouseleave', timeOutAdmin())
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
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast1) => {
                  toast1.addEventListener('mouseenter', Swal.stopTimer)
                  toast1.addEventListener('mouseleave', Swal.resumeTimer)
                  toast1.addEventListener('mouseleave',  timeOutCliente())                  
                }
              })
              Toast1.fire({
                icon: 'success',
                title: 'Verificando credenciales'
              })
            
        break;
    }
}