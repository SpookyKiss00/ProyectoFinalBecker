function ruleta(){
    let tipoApuesta = document.getElementById("tipoApuesta")
    tipoApuesta.innerHTML = '<button id="botonNumero" type="button" class="btn btn-primary">A número</button> <button id="botonColor" ="button" class="btn btn-success">A color</button>'

    // console.log(cantidadNumeros.value)

    function NumeroRandom (){
        apuesta = parseInt(numeroApuesta.value)
        cantidad = parseInt(cantidadNumeros.value)
        let resultadoApuesta = (apuesta < 0 || apuesta > cantidad || isNaN(apuesta)) ?
        (alert ("El número debe ser los de la ruleta, entre 0 y " + cantidad), null)
        :
        (() => {
            let numeroRuleta = Math.floor(Math.random() * cantidad);
            return (numeroRuleta == apuesta) ?
                (Swal.fire({
                    title: "Ganaste",
                    text: 'GANASTE! c: De ' + cantidad + ' numeros dijiste ' + apuesta + ' y el número de la ruleta fue ' + numeroRuleta,
                    icon: "success",
                }), '<div class="alert alert-primary" role="alert">Total de Números: ' + cantidad + '; Apuesta: ' + apuesta + '; Resultado: ' + numeroRuleta + '</div>')
                :
                (Swal.fire({
                    title: "Perdiste",
                    text: 'Perdiste :c De ' + cantidad + ' numeros dijiste ' + apuesta + ' y el número de la ruleta fue ' + numeroRuleta,
                    icon: "error"
                }), '<div class="alert alert-danger" role="alert">Total de Números: ' + cantidad + '; Apuesta: ' + apuesta + '; Resultado: ' + numeroRuleta + '</div>');
        })();

    }
    
    function ColorRandom (color){
        apuesta = color
        cantidad = parseInt(cantidadNumeros.value)
        let numeroRuleta = Math.floor(Math.random()*(cantidad))
        let colorReal="color"

        numeroRuleta==0 ? colorReal = "verde" : numeroRuleta%2==0 ? colorReal = "rojo" : colorReal = "negro"
    
        //Resultado
        let resultadoApuesta = (colorReal == apuesta) ?
        (() => {
            Swal.fire({
                title: "Ganaste",
                text: 'GANASTE! c: De ' + cantidad + ' numeros dijiste ' + apuesta + ' y el número de la ruleta fue ' + numeroRuleta + ' por ende el color fue ' + colorReal,
                icon: "success",
            });
            return '<div class="alert alert-primary" role="alert">Total de Números: ' + cantidad + '; Apuesta: ' + apuesta + '; Resultado: ' + numeroRuleta + '</div>';
        })()
        :
        (() => {
            Swal.fire({
                title: "Perdiste",
                text: 'Perdiste :c De ' + cantidad + ' numeros dijiste ' + apuesta + ' y el número de la ruleta fue ' + numeroRuleta + ' por ende el color fue ' + colorReal,
                icon: "error",
            });
            return '<div class="alert alert-danger" role="alert">Total de Números: ' + cantidad + '; Apuesta: ' + apuesta + '; Resultado: ' + numeroRuleta + '</div>';
        })();
    }

    //Tipo de apuesta por número---------------------------
    let apostarNumero = document.getElementById("botonNumero").addEventListener('click', apuestaNumero)

    function apuestaNumero(){
        let contenedorApuestas = document.getElementById("contenedorApuestas").innerHTML = '<span class="input-group-text" id="basic-addon1">:D</span> <input id="numeroApuesta" type="number" class="form-control" placeholder="N° a apostar" required> <button id="botonApostar" type="button" class="btn btn-primary">Apostar</button>'

        let numeroApuesta = document.getElementById("numeroApuesta")
        let apostarNumero = document.getElementById("botonApostar").addEventListener('click', NumeroRandom);
    }

    //Tipo de apuesta por color---------------------------
    let apostarColor = document.getElementById("botonColor").addEventListener('click', apuestaColor)

    function apuestaColor() {
        let contenedorApuestas = document.getElementById("contenedorApuestas").innerHTML = '<button id="colorRojo" value="rojo" type="button" class="btn btn-danger">Rojo (Pares)</button> <button id="colorVerde" value="verde" type="button" class="btn btn-success">Verde (N° 0)</button> <button id="colorNegro" value="negro" type="button" class="btn btn-dark">Negro (Impares)</button>'

        let colorRojo = document.getElementById("colorRojo")
        colorRojo.addEventListener('click', function() {
            ColorRandom("rojo");
        });

        let colorVerde = document.getElementById("colorVerde")
        colorVerde.addEventListener('click', function() {
            ColorRandom("verde");
        });

        let colorNegro = document.getElementById("colorNegro")
        colorNegro.addEventListener('click', function() {
            ColorRandom("negro");
        });
    }

    }

//Consultar acerca de la cantidad de números que tiene la ruleta

let cantidadNumeros = document.getElementById("cantidadNumeros")
cantidadRuleta = cantidadNumeros.addEventListener('input', ruleta)

nombreJugador = localStorage.getItem('nombre')
let jugador = document.getElementById('jugador').innerHTML = '<h3>¡'+ nombreJugador + ', indícanos con cuántos números quieres jugar a la ruleta!</h3>'

function tiendaPremios(){
    fetch('https://fakestoreapi.com/products?limit=3')
    .then(respuesta => respuesta.json())
    .then(data => {
        let contenido =""
        for (const product of data){
            contenido += `<div class="premiosCards card">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="fichas card-body">
              <h5 class="card-title">${product.title}</h5>
            </div>
          </div>`
        }

        document.getElementById('premiosCards').innerHTML = contenido
    })
    .catch(error => {
        document.getElementById('premiosCards').innterHTML = `<div class="alert alert-danger" role="alert">
        Error, no se encuentra la URL deseada a acceder
        </div>`
    })
}

tiendaPremios()

//Tiene sólo 1 minuto para jugar
setTimeout(()=> {
    Swal.fire({
        title: "Se acabó el tiempo",
        text: "Serás redireccionado en 3 segundos",
        icon: "warning"
      });
      setTimeout(()=> {
        window.location.href = "../index.html"
        }, 3000)
    // window.location.href = "../index.html"
    }, 180000)