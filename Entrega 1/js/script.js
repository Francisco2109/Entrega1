class Usuario{
    constructor(email, password, nombre){
        this.email = email;
        this.password = password;
        this.nombre = nombre;
    }

    mostrarUsuario(){
        console.log(`Nombre: ${this.nombre} \nEmail: ${this.email} \nPassword: ${this.password}`);
    }

}

const usuarios = [
    new Usuario("admin", "admin1234", "admin")
];

function validarInput(input){
    if(input==""){
        return false;
    }
    else{
        return true;
    }
}

function ingresarUsuario(){
    let emailInput;
    let passwordInput;
    emailInput = prompt("Ingrese su Email: ");
    if(!validarInput(emailInput)){
        alert("Necesita Ingresar un Email!")
    }
    else{
        passwordInput = prompt("Ingrese su Contraseña: ");
        if(!validarInput(passwordInput)){
            alert("Necesita Ingresar una Contraseña!")
        }
        else{
            let verificacion = false;
            let nombre;

            for (let i= 0; i < usuarios.length; i++){
                if(emailInput == usuarios[i].email && passwordInput == usuarios[i].password){
                verificacion = true;
                    nombre = usuarios[i].nombre;
                    break;
                }
            }
            if(verificacion){
                alert("Bienvenido " + nombre + "!");
            }
            if(!verificacion){
                alert("Datos de Inicio de Sesion Erroneos!");
            }
        }
        
    }


}

function registrarUsuario(){
        let nombreInput = prompt("Ingrese su Nombre");
        let emailInput;
        let passwordInput;

        emailInput = prompt("Ingrese su Email: ")
        if(!validarInput(emailInput)){
            alert("Necesita Ingresar un Email!")
        }
        else{
            passwordInput = prompt("Ingrese su Contraseña: ")
            if(!validarInput(passwordInput)){
                alert("Necesita Ingresar una Contraseña!")
            }
            else{
                if(confirm("Seguro que desea Registrarse?")){
                    usuarios.push(new Usuario(emailInput,passwordInput,nombreInput));
                    alert("Usuario Registrado!");
                }

                for(const item of usuarios){
                    item.mostrarUsuario();
                }
                console.log("Hay " + usuarios.length + " Usuarios Registrados.");
            }
        }
        
}