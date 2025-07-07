/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/


const Cuenta = {
  // propiedades
  titular: "Alex",
  saldo: 0,
  // métodos
  ingresar: function(cantidad) {
    this.saldo += cantidad;
    alert(`Has ingresado $${cantidad}. Nuevo saldo: $${this.saldo}`);
  },
  extraer: function(cantidad) {
    if (cantidad > this.saldo) {
      alert("No hay suficiente saldo para extraer esa cantidad.");
    } else {
      this.saldo -= cantidad;
      alert(`Has retirado $${cantidad}. Nuevo saldo: $${this.saldo}`);
    }
  },
  informar: function() {
    return `Titular: ${this.titular} | Saldo: $${this.saldo}`;
  }
};

do {
const opcion = prompt("¿Qué deseas hacer?\n1 - Informar\n2 - Ingresar\n3 - Extraer");
switch (opcion) {
  case "1":
    alert(Cuenta.informar());
    break;
  case "2":
    const montoIngreso = parseInt(prompt("¿Cuánto dinero deseas ingresar?"));
    if (!isNaN(montoIngreso)) {
      Cuenta.ingresar(montoIngreso);
    } else {
      alert("El valor ingresado no es válido.");
    }
    break;
  case "3":
    const montoExtraccion = parseInt(prompt("¿Cuánto dinero deseas extraer?"));
    if (!isNaN(montoExtraccion)) {
      Cuenta.extraer(montoExtraccion);
    } else {
      alert("El valor ingresado no es válido.");
    }
    break;
  default:
    alert("Opción no válida.");
    break;
} } while (confirm("¿Deseas realizar otra operación?"))