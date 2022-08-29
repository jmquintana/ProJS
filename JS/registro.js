botonGuardar.onclick = () =>{
    let nombreIngresado = document.getElementById('txtNombreCompleto').value;
    let emailElectronico = document.getElementById('txtEmailUsuario').value;
    let claveIngresada = document.getElementById('txtClaveUsuario').value; 

    localStorage.setItem("nombre",nombreIngresado);
}


