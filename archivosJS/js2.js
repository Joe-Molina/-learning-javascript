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


//OBJETO CONSOLE
/*
console.log(console);
console.error("this is an error");
console.warn("esto es un aviso");
console.info("esto es un emnsaje informativo");
console.log("un registro de lo qu ha pasado en nuestra aplicacion");

let nombre = "joe,"
    apellido = "molina",
    edad = 20;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad)
console.log(`hola mi nombre es ${nombre} y mi apellido es ${apellido} tengo ${edad} años.`)
console.log(`hola mi nombre es %s y mi apellido es %s tengo %d años.`,nombre, apellido, edad);
console.clear();

console.log(window);
console.log(document);
console.dir(window);
console.dir(document);

console.clear();


console.group(" cursos de jon chidos");
console.log("js");
console.log("node");
console.log("php");
console.log("next.js");
console.groupEnd();
console.log("tengo hambre");

console.clear();

console.log(console);
console.table(Object.entries(console).sort());

console.clear();

console.time("cuanto tiempo tarda mi codigo ")

const arreglo = Array(1000000);

for(let i = 0; i < arreglo.length ; i++){
    arreglo[i] = i;
}

console.timeEnd("cuanto tiempo tarda mi codigo ")

//console.log(arreglo)

console.clear();


for(let i = 0; i <= 100 ; i++){
    console.count("codigo for")
    console.log(i);
}

console.clear();
let x = 3,
    y = 2,
    pruebaXY = "se espera que X siempre sea menor que Y";

console.assert(x<y,(x,y,pruebaXY))
*/

//OBJETO DATE
/*
console.log(Date());

let fecha = new Date();
console.log(fecha);
//fecha del mes
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(Date.now());
let cumplejoe = new Date(2001,4,1);
console.log(cumplejoe)
*/

//Objeto Math
//es un objeto estatico
/*
console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-7.8));
console.log(Math.ceil(7.8));
console.log(Math.floor(7.8));
console.log(Math.round(7.8));
console.log(Math.sqrt(81));
console.log(Math.pow(2,5));
console.log(Math.sign(-7.8));//-1 0 1
console.log(Math.random());
console.log(Math.random()*1000);
console.log(Math.round(Math.random()*100));
*/


//OPERADOR DE CORTOCIRCUITO
/*
function saludar(nombre){
    nombre = nombre || "desconocido"
    console.log(`hola ${nombre}`);
}

saludar("joe")
saludar();

console.log("cadena"||"valor de la derecha")
console.log(false||"valor de la derecha")

console.log(false&&"valor de la derecha")
*/
/*
let alerta = console.log(window);
let confirmacion = window.confirm("esto es una confirmacion");
let promtt = prompt("hola esto es un promt y le permite al usuario ingresar un valor");

console.log(alerta);
console.log(confirmacion);
console.log(promtt);
*/
/*
//EXPRESIONES REGULARES
let cadena = "sdfsdf Loremadasdasdas adasd loremads asd"; 
//let expReg = new RegExp("lorem","i")
let expReg2 = /lorem/ig;

//console.log(expReg.test(cadena));
//console.log(expReg.exec(cadena));


console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
*/

//Funciones anonimas autoejecutables
/*
(function(){
   console.log("mi primer IIFE"); 

})();

(function(d,w,c){
    console.log("mi segunda IIFE"); 
    console.log(d);
    console.log(w);
    console.log(c);
    c.log("hola")
})(document,window,console);


(function(){

})()
*/



