/* 
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna
 propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y
 cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
*/

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    let generacion;
    let rasgoCaracteristico;

    if (this.anioNacimiento >= 2010) {
      generacion = "Generación Z";
      rasgoCaracteristico = "Nativos digitales";
    } else if (this.anioNacimiento >= 1995) {
      generacion = "Millennials";
      rasgoCaracteristico = "Adaptabilidad tecnológica";
    } else if (this.anioNacimiento >= 1981) {
      generacion = "Generación X";
      rasgoCaracteristico = "Independencia y pragmatismo";
    } else if (this.anioNacimiento >= 1965) {
      generacion = "Baby Boomers";
      rasgoCaracteristico = "Optimismo y trabajo duro";
    } else {
      generacion = "Silent Generation";
      rasgoCaracteristico = "Disciplina y sacrificio";
    }

    return `${this.nombre} pertenece a la ${generacion} y su rasgo característico es: ${rasgoCaracteristico}.`;
  }
}

// Crear instancias de Persona
let persona1 = new Persona("Juan", 25, "12345678A", "H", 70, 1.75, 1998);
let persona2 = new Persona("Ana", 30, "87654321B", "M", 60, 1.65, 1993);
let persona3 = new Persona("Luis", 45, "11223344C", "H", 80, 1.8, 1978);
// Crear un array para almacenar las personas
let personas = [persona1, persona2, persona3];
// Mostrar los datos de cada persona
personas.forEach((persona) => {
  document.writeln(
    `<p>${persona.mostrarGeneracion()} (Edad: ${persona.edad}). (DNI: ${
      persona.dni
    }). (Peso: ${persona.peso}). (Altura: ${
      persona.altura
    }). (Año de nacimiento: ${persona.anioNacimiento})</p>`
  );
});
