//manejo de errores
try {
    console.log("en el try se agrega el codigo a evaluar")
    noesxiste;
    console.log("segundo mensaje en el try")
} catch (error) {
    console.log("catch, captura cualquier error surgido o lanzado en el try")
    console.log(error)
}finally {
    console.log("se ejecutara siempre al final de un bloque try catch")
}

try {
    let numero = "tumama";
    if(isNaN(numero)){
        throw new Error("eta vaina tubo um error chamo, que bowe kike no es un numero")
    }

    console.log(numero * numero);
} catch(error) {
    console.log(`se produjo el siguiente error: ${error}`);
}