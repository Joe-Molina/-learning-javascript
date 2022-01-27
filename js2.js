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
/*
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
    */


//ARROW FUNCTIONS
/*
const saludar = ()=> {
    console.log("HOLA")
}

const saludar2 = nombre => console.log(`hola ${nombre}`)
saludar();
saludar2("irma");

const sumar = function(a,b){
    return a + b;

};

console.log(sumar(3,5))

const sumar2 = (a,b)=> a+b;

console.log(sumar2(2,6))

const funcionDeVariasLineas = ()=> {
    console.log("uno");
    console.log("dos");
    console.log("tres");
};

funcionDeVariasLineas();

const numeross = [1,2,3,4,5]

numeross.forEach((el,index)=>
    console.log(` ${el} esta en la posicion ${index}`));
*//*
function perro (){
    console.log(this);
}

perro()
*/
/*
const perro = {
    nombre: "kitty",
    ladrar(){console.log(this)
}}

perro.ladrar()
*/
/*
//Clases y herencias

 class Animal{
constructor(nombre,genero){
    this.nombre = nombre;
    this.genero = genero;
}

// metodos
sonar(){
    console.log("hago sonidos por que estoy vivo");

}

saludar(){
    console.log(`hola me llamo ${this.nombre}`);
}
 }

 class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        //es un metodod que manda a llamar el constructor de la clase padre
        super(nombre,genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar(){
        console.log("soy un perro y mi sonido es un ladrido")
    }

    ladrar(){
        console.log("guau guau")
    }

    //metodos estaticos

    static queEres(){
        console.log("un perro pe");
    }

    //los setters y getters son metodos especiales 
    //que nos permiten establecer y obtener los
    //valores de atributos de nuestra clase

    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }

 }

 Perro.queEres();
 

 const mimi = new Animal("mimi","hembra"),
    scooby = new Perro("scooby","macho","gigante");

    console.log(mimi);
    mimi.saludar();
    console.log(scooby);
    scooby.sonar();
    scooby.ladrar();
    console.log(scooby.getRaza);
    scooby.setRaza = "gran danes";
    console.log(scooby.getRaza)
    */




