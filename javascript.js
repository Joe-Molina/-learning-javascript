function estoEsUnaFuncion (){
    console.log("uno")
    console.log("dos")
    console.log("tre")
}

//estoEsUnaFuncion();


// esta funcion ni tiene parametros ni devuelve valores

function unaFUncionQueDevuelveValor(){
    console.log("uno")
    console.log("dos")
    console.log("tre")
    return "la funcion ha retornado una cadeda de texto"
}

//let valoreFUncion = unaFUncionQueDevuelveValor();

//console.log(valoreFUncion)

function saludar(nombre = "desconocido", edad = 0){
    console.log(`hola mi nombre es ${nombre} y tengo ${edad} años `)
}

saludar("kitty", 3);
saludar();

funcionDeclarada();

function funcionDeclarada() {
    console.log("funcion funciondeclaradaa")
}

funcionDeclarada();

//funcion anonima = funcion sin nombre
const funcionExpresada = function() {
console.log("esto es una funcion expresada, es decir una funcion que se le a dado como valor a una variable")
}
funcionExpresada()

//ARRAYS

/*
const a = [];
const b = [1, true, "hola",["a","b","c"]]
console.log(a);
console.log(b);
console.log(b.length);//te devuelve el numero de elementos en el array
console.log(b[2]);
console.log(b[3][2]);

const c = Array.of("x","y","z",9,8,7);

console.log(c);

const d = Array(100).fill(false)
console.log(d)

//metodos array

const colores = ["rojo","verde","azul"]
console.log(colores);

colores.push("negro")// push agrega un array
console.log(colores);

colores.pop();// pop quita el ultimo elemento 
console.log(colores);

colores.forEach(function(el, index){
    console.log(`<li id="${index}">${el}</li>`)
}); 
*/



const bb = {}
console.log(bb);

const joe = {
    nombre: "joe",
    apellido: "Molina",
    edad: 20,
    pasatiempo: ["perder el tiempo","ver partidas de lol","estudiar"],
    casado: false,
    contacto: {
        email: "joedodaniljr123@gmail.com",
        instragram: "joe.molina01",
        movil: "04243308433",
    },
    saludar:function(){
    console.log("hola :)")
    },

    decirMiNombre: function(){
        console.log(`hola soy ${this.nombre} y mi apellido es ${this .apellido}`)
    }
};
// dentro de un objeto a las variables se le llaman atributo o propiedades
// y las funciones metodos
console.log(joe);
console.log(joe["nombre"]);
console.log(joe["edad"]);
console.log(joe.nombre);
console.log(joe.casado)
console.log(joe.pasatiempo[0])
console.log(joe.contacto)
console.log(joe.contacto.instragram)
joe.saludar();
joe.decirMiNombre();


/* operadores */ 
// aritemeticos //

let aa = 5 + 5 - 10 * 3 ;
let modulo = 5%2;
console.log(aa);
console.log(modulo);


console.log(8<=9)
 
/*
 = asignacion d variable 
== 2 iguales es comparacion de valores
=== con 3 iguales comparacion de tipo de dato y de valor

*/

console.log(7 === 7);
console.log("7"=== 7);
console.log(0 === false);


// incremento y decremento 

let i = 2;
/*
i = i + 2;
i *= 3;
*/
console.log(i++);
console.log(++i)
// operador unario 

i ++;
i --;

--i;


console.log(i)

/*logicos
not ! , es decir lo que es verdadero lo vuelve falso 
or || cuando tengo 2 o mas condiciones con que una se cumpla el or validara.
and && */
