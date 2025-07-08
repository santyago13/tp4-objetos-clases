/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro {
  constructor(ISBN, titulo, autor, numeroPaginas) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numeroPaginas = numeroPaginas;
  }

  get ISBN() {
    return this._ISBN;
  }
  set ISBN(value) {
    this._ISBN = value;
  }

  get titulo() {
    return this._titulo;
  }
  set titulo(value) {
    this._titulo = value;
  }

  get autor() {
    return this._autor;
  }
  set autor(value) {
    this._autor = value;
  }

  get numeroPaginas() {
    return this._numeroPaginas;
  }
  set numeroPaginas(value) {
    this._numeroPaginas = value;
  }

  mostrarLibro() {
    return `El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene páginas ${this.numeroPaginas}.`;
  }
}

// Crear dos objetos Libro
const libro1 = new Libro("978-3-16-148410-0", "El Principito", "Antoine de Saint-Exupéry", 96);
const libro2 = new Libro("978-0-06-112008-4", "Matar a un ruiseñor", "Harper Lee", 281);

// Mostrar la información de los libros
document.writeln(libro1.mostrarLibro());
document.writeln("<br>");
document.writeln(libro2.mostrarLibro());


