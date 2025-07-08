// Ejercicio 1: Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (un array de strings).
// Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona.
//  Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos de la persona y el nuevo hobby.

const persona = {
    //propiedades
    nombre: "",
    edad: "",
    hobbies: [],
    //Funciones
    pedirNombre: function(){
        this.nombre = prompt("Ingresa un nombre")
    },

    pedirEdad: function(){
        this.edad = prompt("Ingresa una edad")
    },

    pedirHobbies: function(){
        const hobby = prompt("Ingresa un hobby");
        this.hobbies.push(hobby);
    },

    mostrarDatos: function(){
        document.writeln(`<p>Nombre: ${this.nombre}</p>`);
        document.writeln(`<p>Edad: ${this.edad}</p>`);
        document.writeln(`<p>Hobbies: ${this.hobbies}</p>`);
    }
}

// Bucle para pedir datos
persona.pedirNombre();
persona.pedirEdad();

do {
    persona.pedirHobbies();
} while (confirm("¿Deseas ingresar otro hobby?"));

// Mostrar datos finales
persona.mostrarDatos();


