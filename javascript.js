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

