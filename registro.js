function crearUsuario(array){ //Registro del usuario: Habrán varios usuarios ingresados, la idea será comprobar usuario y contraseña
    let nombreExistente = true //a cambiar si el nombre a crear en realidad no existe
    let nombre = "";
    while(nombre === ""){
        nombre = prompt("Ingresa un nombre válido").toLocaleLowerCase()
    }
    let nombreCreado = "base"
    let contrasenaCreada = "base"

    while (nombreExistente === true){
        if (array.find(objeto => objeto.nombre === nombre)){
            nombre = "";
            while(nombre === ""){
                nombre = prompt("Ingresa otro nombre válido, el que indicaste ya existe").toLocaleLowerCase()
            }
        }
        else{
            nombreExistente = false
            nombreCreado = nombre
        }
    }

    let contrasena = prompt("Dame la contraseña") //Pedir contraseña para asociar

    if (nombreExistente == false){
        const nuevoUsuario = {
            nombre: nombre,
            contrasena: contrasena
        };
        contrasenaCreada = contrasena
        array.push(nuevoUsuario)
    }
    alert ("Usuario creado correctamente, nombre de usuario: " + nombreCreado + ", contraseña creada: " + contrasenaCreada) //Agregar en esta alerta el nombre de usuario y la contraseña
    return array
}

const usuariosRegistrados = [{nombre: "luffy", contrasena: "monkey"}, {nombre: "zoro", contrasena: "roronoa"}, {nombre: "nami", contrasena: "nami"}]

crearUsuario(usuariosRegistrados)