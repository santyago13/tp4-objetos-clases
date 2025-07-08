// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto 
// y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  setAlto(nuevoAlto) {
    this.alto = nuevoAlto;
  }

  setAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }

  mostrarPropiedades() {
    return `Alto: ${this.alto}, Ancho: ${this.ancho}`;
  }

  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}

// Crear un rectángulo
let rect1 = new Rectangulo(10, 5);

// Mostrar en pantalla
document.writeln("<p>" + rect1.mostrarPropiedades() + "</p>");
document.writeln("<p>Perímetro: " + rect1.calcularPerimetro() + "</p>");
document.writeln("<p>Área: " + rect1.calcularArea() + "</p>");

// Modificar sus propiedades
rect1.setAlto(20);
rect1.setAncho(15);

document.writeln("<hr>");
document.writeln("<p>Después de modificar:</p>");
document.writeln("<p>" + rect1.mostrarPropiedades() + "</p>");
document.writeln("<p>Perímetro: " + rect1.calcularPerimetro() + "</p>");
document.writeln("<p>Área: " + rect1.calcularArea() + "</p>");