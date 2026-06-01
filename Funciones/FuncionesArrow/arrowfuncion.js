var acceso = true

var accesoU = (a,nombre) => {
    console.log(`Usuario ${nombre} en ejecución`)
    return a
}

accesoU(acceso, "ITSI") == true
? console.log("Usuario permitido")
: console.log("Usuario denegado")
var acceso = true
