/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

const auto = {
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
        document.writeln("El auto esta encendido")
    },
    apagar: function(){
        this.encendido = false;
        document.writeln("El auto esta apagado")
    },
}

// Propiedades del auto
console.log(auto)
document.writeln('<h1>Objeto auto</h1>')
document.writeln(`<p>Marca: ${auto.marca}</p>`)
document.writeln(`<p>Modelo: ${auto.modelo}</p>`)
document.writeln(`<p>Año: ${auto.anio}</p>`)
document.writeln(`<p>Color: ${auto.color}</p>`)
document.writeln(`<p>Velocidad: ${auto.velocidad}</p>`)

// usar los metodos
const autoAccion = prompt("¿Quieres encender o apagar el auto?");

if (autoAccion === "encender") {
    auto.encender();
} else if (autoAccion === "apagar") {
    auto.apagar();
} else {
    document.writeln("Opción no válida.<br>");
}