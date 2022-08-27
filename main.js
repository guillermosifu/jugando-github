function validarSiEsNumero(numero, tipo){
    // ? es un operador ternario, para reemplazar a un IF
   return isNaN(numero) ? `mensaje error: No se puede ${tipo}`:numero;
    }
    



function sumar(numero1, numero2){
    const suma= +numero1 + +numero2;
    return validarSiEsNumero(suma, "sumar")
}


function restar(numero1, numero2){
    const calcResta= +numero1 - +numero2;
    return validarSiEsNumero(calcResta, "restar")
}


function multiplicar(numero1, numero2){
    const calcMultiplicar= +numero1 * +numero2;
    return validarSiEsNumero(calcMultiplicar, "multiplicar")
}


function dividir(numero1, numero2){
    const calcDividir= +numero1 / +numero2;
    return validarSiEsNumero(calcDividir, "dividir")
}