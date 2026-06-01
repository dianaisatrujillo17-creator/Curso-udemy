var user = "DIANA"
var persona = {
    nombre : "DIANA",
    sexo : "FEMENINO"
}

var miObjeto = {
    //clave : valor
    nombre : "ITSI",
    edad : 2020,
    importante : true,
    texto : `Usuario ${user}`,
    miFuncion : (a,b) => a + b,
    otroObjeto : persona,
    fecha : new Date()
}

var {nombre} = miObjeto //Desestructuración de un objeto

var otraFuncion = (text,{otroObjeto}) => {
    console.log(otroObjeto.sexo)
    console.log(text)
}

otraFuncion(miObjeto.texto,miObjeto)