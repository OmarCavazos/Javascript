let arr = ["b", "c", "a"].sort()

let menorAMayor = [1, 2, 10, 4, 3].sort((a, b) => a - b)
let mayorAMenor = [1, 2, 10, 4, 3].sort((a, b) => b - a)

// console.log(menorAMayor);
// console.log(mayorAMenor);

//----------------------------------------------------------


const obj = {}

const alumno1 ={
    nombre: "Brayan",
    apellido: "Martinez",
    edad: 20,
    matricula: true,
    cursos: ["mate", "progra"],
    notas: [1, 2, 3, 4, 5, 6],
}

const alumno2 ={
    nombre: "Kevin",
    apellido: "Perez",
    edad: 22,
    matricula: true, 
    cursos: ["mate", "progra", ["idioma"], {turno: "matutino"}],
    notas: [1, 2, 3, 4, 5, 6],
    promedio: function(){

    }
}

let nombre = alumno1.nombre
let curso1 = alumno1.cursos[1]

let nombre2 = alumno2['nombre']
let curso2 = alumno2 ['cursos'][3]

alumno2.nombre = "Kevin"
alumno2.promedio = "Hola"

// console.table(alumno1)
// console.table(arr)


let Kevin = alumno2

// Kevin["estudia"]=true
Kevin.estudia=false

//--------------------------------------------------------

const persona = {
    nombre: "Brandon",
    apellido: "Marlon",
    nombreCompleto: function () {
        return `${this.nombre} ${this.apellido}`
    },
    quienEsThis: () => this,
    this: this,
    // this2: function () {
    //     function(){
            // return this
    //     }
    // }
}

