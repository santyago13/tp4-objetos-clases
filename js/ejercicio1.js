/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

const Auto = {
    //propiedad
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    color: "rojo",
    velocidad: 0,
    encendido: false,
    //metodos
    encender: function(){
        this.encendido = true;
        document.writeln("El Auto esta encendido")
    },
    apagar: function(){
        this.encendido = false;
        document.writeln("El Auto esta apagado")
    },
}

// Propiedades del Auto
console.log(Auto)
document.writeln('<h1>Objeto auto</h1>')
document.writeln(`<p>Marca: ${Auto.marca}</p>`)
document.writeln(`<p>Modelo: ${Auto.modelo}</p>`)
document.writeln(`<p>Año: ${Auto.anio}</p>`)
document.writeln(`<p>Color: ${Auto.color}</p>`)
document.writeln(`<p>Velocidad: ${Auto.velocidad}</p>`)

// usar los metodos
const autoAccion = prompt("¿Quieres encender o apagar el auto?");

if (autoAccion === "encender") {
    Auto.encender();
} else if (autoAccion === "apagar") {
    Auto.apagar();
} else {
    document.writeln("Opción no válida.<br>");
}