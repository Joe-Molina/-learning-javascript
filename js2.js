//manejo de errores
/*try {
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
}*/


/*const numeros = [1,2,3,4,5,6,7,8,9,0]

for(let i = 0; i < numeros.length; i++){
    if(i === 5){
        break;//sale de la estructura en la qu esta 
    }
    console.log(numeros[i])
}

for(let i = 0; i < numeros.length; i++){
    if(i === 5){
        continue;//se va a saltar la iteracion que gustes y seguira con la ejecucion normal
    }
    console.log(numeros[i])
}
*/

// destructuracion

//forma de asiganar valores a objetos o arrays

// sin destructuracion
/*
let numeros = [1,2,3];

let uno  = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

//con destructuracion
const[one,two,three] = numeros;
console.log(one, two, three)

const persona = {
    nombre: "joe",
    apellido: "molina",
    edad: 35
};

let {nombre,apellido,edad} = persona;
console.log(nombre,apellido,edad);
*/

//OBEJTOS LITERALES

/*
let nombre = "kenai",
edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log("guau guau")
    }

}

console.log(perro);
perro.ladrar();

const dog = {
    nombre,
    edad,
    raza: "callejero",
    ladrar(){
        console.log("guau guau guau")
    }
};

console.log(dog)
*/
 
//PArAMETROS REST y OPERADOR SPREAD
//agregar parametros infinitos a una funcion o algo asi xd

//paprametros rest
function sumar(a,b, ...c){
    let resultado = a+b;

    c.forEach(function(n){
        resultado += n
    })

    return resultado;
};

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));

//operador spread
const arr1 = [1,2,3,4,5],
    arr2 = [6,7,8,9,0];
    console.log(arr1, arr2,)

    const arr3 = [...arr1, ...arr2];
    console.log(arr3);