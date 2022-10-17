// const tenis={
//     marca:"nike",
//     color:"blancas",
//     talle:33
// }

// Object.keys(tenis)
// Object.values(tenis)

// function iteradorObj(object) {
// //    for (const key in object) {
// //   console.log(object[key])
// //    }
//    for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(element)
//     }
//    }
// }




// Ejercicio
// 1 crear una funcion que reciva tres paramatros, nombre, precio y cantidad y retorne un objeto con las propiedades nombre, precio, cantidad y total


// const producto ={
//     nombre:"",
//     precio: "",
//     cantidad:"",
//     total: "",
// }

// function producto2(nombre, precio, cantidad){
//         producto.nombre = "nombre";
//         producto.precio = precio;
//         producto.cantidad = cantidad;
//         producto.total = precio * cantidad;
//         return producto
// }





// ----------------------------------------------------------------------

// 2 Aumentar La Nota
// Tenés una lista de estudiantes con su desempeño académico actual. Querés subirle 2 puntos a aquellos que su nota sea mayor a 5. Recordá que la nota tampoco puede superar al 10.

// Ejemplo:

// Estudiantes =
// [   { Estudiante: "Juan", nota: 6 },
//     { Estudiante: "Mario", nota: 8 },
//     { Estudiante: "Julia", nota: 10 },
//     { Estudiante: "Sofia", nota: 2 }]

// function subirnota(estudiante){
//     for(i=0; i < estudiante.length; i++){
        
//         if(estudiante[i].nota > 5 && estudiante[i].nota<=8){
//             estudiante[i].nota += 2;
//         }
//         if(estudiante[i].nota === 9){
//             estudiante[i].nota += 1;
//         }
//         return estudiante
//     }
// }

// console.table(Estudiantes);


// salida=[ { Estudiante: "Juan", nota: 8 },
// { Estudiante: "Mario", nota: 10 },
// { Estudiante: "Julia", nota: 10 },
// { Estudiante: "Sofia", nota: 2 },]





// ----------------------------------------------------------------------
// 3 Tenemos un Arreglo de Objetos, donde cada uno representa a una persona. Usando .filter(), creá un nuevo Arreglo con las personas que tengan más de 27 años.

// let personas = [ 
//     { nombre: 'Ana', edad: '28'},
//     { nombre: 'María', edad: '24' }, 
//     { nombre: 'José', edad: '31' }
// ];

// let personasConMasDe27 = personas.filter(persona =>{
//     return persona.edad > 27;
// })

//  //pruebaa

// console.log(personasConMasDe27);
// [{ nombre: 'Ana', edad: '28' }, { nombre: 'José', edad: '31' }]







// ----------------------------------------------------------------------
// let actoresVocales = []

// let actoresPrincipales = ['Tom Hanks', 'Johnny Depp', 'Elizabeth Taylor', 'Morgan Freeman', 'Jennifer Aniston', 'Meryl Streep', 'Natalie Portman', 'Ashton Kutcher']
// let peliculas = []

// let actoresPrincipalesPorPelicula = {
//     "Titanic": "Leonardo DiCaprio",
//     "El Padrino": "Al Pacino",
//     "Matrix": "Keanu Reeves",
//     "Iron Man": "Robert Downey Jr",
//     "Soy leyenda": "Will Smith",
//     "Bastardos sin gloria": "Brad Pitt"
// }

// let ActoresVocales2 = actoresPrincipales.filter(actores => {
//     let fullName = actores.split(" ")
//     const vocales = "aeiou"
//     return fullName[0][0].toLowerCase().startswith(...vocales) || fullName[1][0].toLowerCase().startswith(...vocales)
// })
// console.log(actoresVocales2)


// Iterá actoresPrincipales y llevá a actoresVocales aquellos cuyo nombre o apellido comience con una vocal.
// Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá sus nombres y apellidos al Arreglo actoresPrincipales.
// Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá los nombres de las películas en el Arreglo peliculas.
// Creá un Objeto vacíó llamado peliculaPorActor.
// Agregá Propiedades a este Objeto donde la clave sea el nombre del actor y el valor sea la película.
// Adaptá tu código para que pueda haber más de una película por cada actor.












// ----------------------------------------------------------------------
// Posición Adecuada
// Tenés un array de objetos con el nombre y la edad de distintas personas. Este arreglo debe ser ordenado agregando una propiedad llamada posicion. Esta propiedad ubica a las personas en su posición adecuada, de menor a mayor.

// Ejemplo:

// [ { nombre: "Alba", edad: 15 },
//   { nombre: "Estrella", edad: 30 },
//   { nombre: "Belen", edad: 20 },
//   { nombre: "Santiago", edad: 4 },
//   { nombre: "Katherine", edad: 55 }]

// Output:

// [ { nombre: 'Santiago', edad: 4, posicion: 0 },
//   { nombre: 'Alba', edad: 15, posicion: 1 },
//   { nombre: 'Belen', edad: 20, posicion: 2 },
//   { nombre: 'Estrella', edad: 30, posicion: 3 },
//   { nombre: 'Katherine', edad: 55, posicion: 4 }]












// ----------------------------------------------------------------------
// 🚀Software Factory
// Pensemos que somos una software factory (empresa de desarrollo) y tenemos un cliente que tiene varios artículos de tecnología. Este cliente nos plantea dos necesidades para su negocio:

// Conocer el valor total de cada artículo según sus cantidades (es decir, cuál es el valor total de todos sus televisores, por ejemplo).

// Imprimir una lista que separe cada artículo con su respectiva suma total de valores en sus respectivos Objetos.

// ¿Cómo realizar estos pedidos?

// Crearás una nueva Función, en la cual su argumento haga referencia a un Arreglo de productos del ecommerce (el cual nuestro cliente ya nos brinda).

// let ecommerce = [
// {nombre: "Samsung TV", precio: 6000, articulos:10}, 
// {nombre: "DELL notebook", precio: 4000, articulos:30 },
// {nombre:"Auriculares Sony", precio: 1500, articulos:15},
// {nombre:"Monitor Philips", precio:12000, articulos:20},
// {nombre:"Teclado logitech", precio: 3000, articulos:5}]
 
// La Función en general tendrá que devolver un nuevo Arreglo con Objetos que tengan el nombre de cada producto y el valor total de todos los artículos que se encuentren en la tienda.

// ¿Qué debería devolver?
// show hint
// totalArtículos(ecommerce) 
// // Debe retornar (5) [{…}, {…}, {…}, {…}, {…}]
// {Samsung TV: 60000}
// {DELL notebook: 120000}
// {Auriculares Sony: 22500}
// {Monitor Philips: 240000}
// {Teclado logitech: 15000}
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

const original = {
    nombre: "Kevin",
    pertenencias: ["cartera", "celular"]
}

let copia = {...original}

const original2 = {
    nombre: "Kevin",
    pertenencias: "cartera",
}


let copia2 = {...original2}
let copia3 = Object.assign({}, original)
let copiaJsonStr = JSON.stringify(original)
let copiaJsonParse = JSON.parse(copiaJsonStr)

let copiaMortal = JSON.parse(JSON.stringify(original))
let copy = JSON.stringify(12313)


let osvaldo = {
    nombre: "Osvaldo",
    apellido: "Ojeda",
}

let juan = {
    nombre: "Juan",
    apellido: "Garcia",
}

class Persona {
    constructor (nombre, apellido){
        this.nombre = nombre,
        this.apellido = apellido,
        this.vivo = true
    }
    
    saludar() {
        return `Hola soy ${this.nombre}`
    }
    morir(){
        this.vivo = false
        return `${this.nombre} esta en el cielo`
    }
}

function Person(nombre, apellido){
    this.nombre = nombre,
    this.apellido = apellido,
    this.vivo = true,
    this.saludar = function (){
        return `Hola soy ${this.nombre}`
    }   
    this.vivo = false
        return `${this.nombre} esta en el cielo`
}


const homero = new Persona("Homero", "Simpson")
const bart = new Persona("Bart", "Simpson")
const lisa = new Persona("Lisa", "Simpson")

// Person.prototype.morir = function () {
//     this.vivo = false
//     return `${this.nombre} esta en el cielo`
// }

// Person.tomar = function() => {
//     return "esta persona va a tomar duff"
// }



class Humano {
    constructor (nombre, edad, genero, ocupacion){
    this.nombre = nombre,
    this.edad = edad,
    this.genero = genero
    }
}

class Alumnos extends Humano {
    constructor (nombre, edad, genero, grado){
        super(nombre, edad, genero)
        this.grado = grado
    }
}

class Profesor extends Humano {
    constructor (nombre, edad, genero, materia, grado) {
        super(nombre, edad, genero, materia, grado)
        this.materia = materia,
        this.grado = grado
    }
}

let milhouse = new Alumnos("Milhouse", 10, "masculino", 4)
let crabapple = new Profesor("Crabapple", 40, "femenino", "todas", 4)
