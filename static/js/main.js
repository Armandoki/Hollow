let respuestaArray = []
let respuestaString = ''
let respuestaNumber = 0
let operacionActual = crearOperacion()

let puntosReales = 0
let mejorRacha = 0

mostrarInfomacion()

function actualizarDatos(){
    respuestaString = respuestaArray.join('')
    respuestaNumber = parseInt(respuestaString)
}

function crearNumero(){
    return Math.round(Math.random() * (10 - 0) + 0);
}

function seleccionOperacionAritmetica(){
    let numeroOperacion = Math.round(Math.random() * (3 - 1) + 1);

    if(numeroOperacion==1){return 'SUMA'}
    else if(numeroOperacion==2){return 'RESTA'}
    else{return 'MULTIPLICACION'}
}

function crearOperacion(){
    let numero1 = crearNumero()
    let numero2 = crearNumero()
    let operacion = seleccionOperacionAritmetica()

    if(operacion == 'SUMA'){return ['SUMA', `${numero1} + ${numero2}`, numero1, numero2]}
    else if(operacion == 'RESTA'){return ['RESTA', `${numero1} - ${numero2}`, numero1, numero2]}
    else{return ['MULTIPLICACION', `${numero1} x ${numero2}`, numero1, numero2]}
}

function ingresarNumero(numeroIngresado){
    if(numeroIngresado==10){
        respuestaArray.push('-')
    }
    else{
        respuestaArray.push(numeroIngresado)
    }
    mostrarInfomacion()
}

function eliminarUltimoIngreso(){
    respuestaArray.pop()
    mostrarInfomacion()
}

function borrarIngreso(){
    respuestaArray = []
    mostrarInfomacion()
}

function validarRespuesta(){
    if(operacionActual[0] == 'SUMA'){

        if(operacionActual[2] + operacionActual[3] == respuestaNumber){
            puntosReales = puntosReales + 1

            if(mejorRacha < puntosReales){
                mejorRacha = puntosReales
            }
            cambiarColores('BIEN')
        }
        else{
            if(mejorRacha < puntosReales){
                mejorRacha = puntosReales
            }
            puntosReales = 0
            cambiarColores('MAL')
        }
    }
    else if(operacionActual[0] == 'RESTA'){

        if(operacionActual[2] - operacionActual[3] == respuestaNumber){
            puntosReales = puntosReales + 1

            if(mejorRacha < puntosReales){
                mejorRacha = puntosReales
            }
            cambiarColores('BIEN')
        }
        else{
            if(mejorRacha < puntosReales){
                mejorRacha = puntosReales
            }
            puntosReales = 0
            cambiarColores('MAL')
        }
    }
    else{

        if(operacionActual[2] * operacionActual[3] == respuestaNumber){
            puntosReales = puntosReales + 1

            if(mejorRacha < puntosReales){
                mejorRacha = puntosReales
            }
            cambiarColores('BIEN')
        }
        else{
            if(mejorRacha < puntosReales){
                mejorRacha = puntosReales
            }
            puntosReales = 0
            cambiarColores('MAL')
        }
    }

    operacionActual = crearOperacion()
    borrarIngreso()
    mostrarInfomacion()
}

function mostrarInfomacion(){
    actualizarDatos()
    let cajaRespuesta = document.getElementById('respuesta')

    if(respuestaString.length == 0){
        cajaRespuesta.innerText = '...'
    }
    else{cajaRespuesta.innerText = respuestaString}

    document.getElementById('operacion').innerText = operacionActual[1]
    document.getElementById('mejorRacha').innerText = `MEJOR RACHA: ${mejorRacha}`
    document.getElementById('puntosReales').innerText = `PUNTOS: ${puntosReales}`
}

function cambiarColores(parametro){
    if(parametro=='BIEN'){ 
        document.getElementById('cuerpo').classList.replace('fondo-cuerpo-normal', 'fondo-cuerpo-bien')
        setTimeout(function(){
            document.getElementById('cuerpo').classList.replace('fondo-cuerpo-bien', 'fondo-cuerpo-normal')
        },100)
    }
    else{
        document.getElementById('cuerpo').classList.replace('fondo-cuerpo-normal', 'fondo-cuerpo-mal')
        setTimeout(function(){
            document.getElementById('cuerpo').classList.replace('fondo-cuerpo-mal', 'fondo-cuerpo-normal')
        },100)
    }

}
