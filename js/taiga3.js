// Ejercicio 3: Crea un objeto libro que tenga propiedades título, autor, año y género. Luego,
// escribe una función que reciba un array de libros y un género y devuelva un array con los
// libros de ese género usando filter. Usa prompt para ingresar los datos de los libros y el género.

const libros = {
    //propiedades
    titulo: "",
    autor: "",
    year: "",
    genero: "",
    //metodos
    pedirDatos: function() {
        this.titulo = prompt("Ingresa el título del libro:");
        this.autor = prompt("Ingresa el autor del libro:");
        this.year = prompt("Ingresa el año de publicación del libro:");
        this.genero = prompt("Ingresa el género del libro:");
    },
    mostrarDatos: function() {
        document.writeln(`<p>Título: ${this.titulo}</p>`);
        document.writeln(`<p>Autor: ${this.autor}</p>`);
        document.writeln(`<p>Año: ${this.year}</p>`);
        document.writeln(`<p>Género: ${this.genero}</p>`);
    }
}

const librosArray = [];
const cantidad = parseInt(prompt("¿Cuántos libros deseas ingresar?"));
for (let i = 0; i < cantidad; i++) {
    libros.pedirDatos();
    librosArray.push({ titulo: libros.titulo, autor: libros.autor, year: libros.year, genero: libros.genero });
}
const generoBuscado = prompt("Ingresa el género que deseas buscar:");
const librosFiltrados = librosArray.filter(libro => libro.genero.toLowerCase() === generoBuscado.toLowerCase());
document.writeln(`<h2>Libros del género "${generoBuscado}":</h2>`);
if (librosFiltrados.length > 0) {   
    librosFiltrados.forEach(libro => {
        document.writeln(`<p>Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.year}</p>`);
    });
} else {
    document.writeln(`<p>No se encontraron libros del género "${generoBuscado}".</p>`);
}