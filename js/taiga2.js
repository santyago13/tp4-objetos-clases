// Ejercicio 2: Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades
//  nombre y nota. Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes.
//  Usa prompt para ingresar los datos de los estudiantes.

const Estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 7 },
  { nombre: "Sofía", nota: 9 }
];

function calcularNotaMedia(estudiantes) {
  let suma = 0;
  for (let i = 0; i < estudiantes.length; i++) {
    suma += estudiantes[i].nota;
  }
  return suma / estudiantes.length;
}

// Ejemplo de uso:
alert("La nota media es: " + calcularNotaMedia(Estudiantes));

