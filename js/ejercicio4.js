/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos,
 el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    return `Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: $${this.precio.toFixed(2)}`;
  }
}

// Crear un array para almacenar los productos
let productos = [];
// Crear instancias de Producto y agregarlas al array
productos.push(new Producto(1, "Producto A", 10.99));
productos.push(new Producto(2, "Producto B", 20.49));
productos.push(new Producto(3, "Producto C", 15.75));
// Mostrar los datos de cada producto
productos.forEach(producto => { 
  document.writeln("<p>" + producto.imprimeDatos() + "</p>");
});