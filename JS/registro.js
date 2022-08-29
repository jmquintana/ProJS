class Subscirptor{
    constructor(obj){
        this.nombre = obj.nombre;
        this.email = obj.email;
        this.clave = obj.clave;
        this.roll = obj.roll;
    }
}

let ArrayDeSubscriptores = [];

Verificar()

botonGuardar.onclick = () =>{
    let nombreIngresado = document.getElementById('txtNombreCompleto').value;
    let emailUsuario = document.getElementById('txtEmailUsuario').value;
    let claveIngresada = document.getElementById('txtClaveUsuario').value; 
    let rollUsuario = document.getElementById('mySelect').value;

    let objUsuario = {nombre: nombreIngresado, email: emailUsuario, clave: claveIngresada, roll: rollUsuario}

    ArrayDeSubscriptores.push(new Subscirptor(objUsuario));

    // Guardamos al nuevo subscriptor
    localStorage.setItem("ListadoSubscriptores",JSON.stringify(ArrayDeSubscriptores));
}


