const nombre = prompt("Cual es tu nombre?")
const genero = prompt("Eres hombre o mujer?")
const fechausuario= prompt("Cual es tu fecha de nacimiento?")

var fecha = new Date(fechausuario)


function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    console.log("esta es tu edad "+edad)
    return edad;
}

var edadusuario = calcularEdad(fechausuario)

if(genero=="hombre"&& edadusuario>=65){
    alert("se puede jubilar")
}
else if(genero=="mujer"&& edadusuario>=60){
    alert("se puede jubilar")
}
else if(genero=="hombre"&& edadusuario<65){
    alert("no se puede jubilar, le faltan estos años: "+ 65-edadusuario)
}
else if(genero=="mujer"&& edadusuario<60){
    alert("no se puede jubilar, le faltan estos años: "+ 60-edadusuario)
}

