/*
9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido".
 Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido".
  Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 
*/

class Animal {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido() {
        document.writeln(`${this.nombre} emite un sonido.`);
    }
}

class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    emitirSonido() {
        document.writeln(`<p>El nombre del perro es: ${this.nombre}, su edad es: ${this.edad} y su sonido es Guau.</p>`);
    }
}
class Gato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    emitirSonido() {
        document.writeln(`<p>El nombre del gato es: ${this.nombre}, su edad es: ${this.edad} y su sonido es Miau.</p>`);
    }
}

let perro = new Perro("Casche", 5);
let gato = new Gato("Michi", 3);

perro.emitirSonido();
gato.emitirSonido();