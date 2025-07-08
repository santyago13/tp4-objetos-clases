/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna
propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y
cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
  constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
    this.DNI = this.generaDNI();
  }

  mostrarGeneracion() {
    let generacion = "";
    let rasgo = "";
    const anio = this.anioNacimiento;
    if (anio >= 1994 && anio <= 2010) {
      generacion = "Generación Z";
      rasgo = "Irreverencia";
    } else if (anio >= 1981 && anio <= 1993) {
      generacion = "Generación Y (Millennials)";
      rasgo = "Frustración";
    } else if (anio >= 1969 && anio <= 1980) {
      generacion = "Generación X";
      rasgo = "Obsesión por el éxito";
    } else if (anio >= 1949 && anio <= 1968) {
      generacion = "Baby Boom";
      rasgo = "Ambición";
    } else if (anio >= 1930 && anio <= 1948) {
      generacion = "Silent Generation";
      rasgo = "Austeridad";
    } else {
      generacion = "Desconocida";
      rasgo = "No definido";
    }
    return `Pertenece a la ${generacion}. Rasgo característico: ${rasgo}.`;
  }

  esMayorDeEdad() {
    return this.edad >= 18
      ? `${this.nombre} es mayor de edad.`
      : `${this.nombre} NO es mayor de edad.`;
  }

  mostrarDatos() {
    return `Nombre: ${this.nombre}<br>
Edad: ${this.edad}<br>
DNI: ${this.DNI}<br>
Sexo: ${this.sexo}<br>
Peso: ${this.peso} kg<br>
Altura: ${this.altura} m<br>
Año de nacimiento: ${this.anioNacimiento}`;
  }

  generaDNI() {
    return Math.floor(10000000 + Math.random() * 90000000);
  }
}

// Ejemplo de uso:
const persona1 = new Persona("Ana", 25, "M", 60, 1.65, 1998);
const persona2 = new Persona("Luis", 30, "H", 75, 1.8, 1993);

document.writeln("<p>" + persona1.mostrarDatos() + "</p>");
document.writeln("<p>" + persona1.mostrarGeneracion() + "</p>");
document.writeln("<p>" + persona1.esMayorDeEdad() + "</p>");

document.writeln("<hr>");
document.writeln("<p>" + persona2.mostrarDatos() + "</p>");
document.writeln("<p>" + persona2.mostrarGeneracion() + "</p>");
document.writeln("<p>" + persona2.esMayorDeEdad() + "</p>");
