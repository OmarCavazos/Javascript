function sumar(n1, n2){
    return n1 + n2;
}

function matematica (n1, n2) {
    return sumar(n1, n2)
}

function restar(n1, n2){
    return n1-n2
}

function math(fn, n1, n2){
    return fn(n1, n2)
}

function areaCircle(r){
    return Math.PI*r**2
}

function vol(r, h, fn){
    return fn(r)*h
}

function vol2(r, h){
    return Math.PI*r**2*h
}