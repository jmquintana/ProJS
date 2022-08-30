class Subscirptor{
    constructor(obj){
        this.nombre = obj.nombre;
        this.email = obj.email;
        this.clave = obj.clave;
        this.rol = obj.rol;
    }
}

let ArrayDeSubscriptores = [];

Verificar()

botonGuardar.onclick = () =>{
    let nombreIngresado = document.getElementById('txtNombreCompleto').value;
    let emailUsuario = document.getElementById('txtEmailUsuario').value;
    let claveUsuario = document.getElementById('txtClaveUsuario').value; 
    let rolUsuario = document.getElementById('mySelect').value;

    let objUsuario = {nombre: nombreIngresado, email: emailUsuario, clave: claveUsuario, rol: rolUsuario}

    ArrayDeSubscriptores.push(new Subscirptor(objUsuario));

    // Guardamos al nuevo subscriptor
    localStorage.setItem("ListadoSubscriptores",JSON.stringify(ArrayDeSubscriptores));
}


