// Ejercicio 2: Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades
//  nombre y nota. Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes.
//  Usa prompt para ingresar los datos de los estudiantes.

const estudiantes = [];

const cantidad = parseInt(prompt("¿Cuántos estudiantes deseas ingresar?"));

for (let i = 0; i < cantidad; i++) {
  const nombre = prompt(`Nombre del estudiante ${i + 1}:`);
  
  let nota;
  do {
    nota = parseFloat(prompt(`Nota de ${nombre} (0-10):`));
  } while (isNaN(nota) || nota < 0 || nota > 10);
  
  estudiantes.push({
    nombre: nombre,
    nota: nota
  });
}

function calcularMedia(arr) {
  const suma = arr.reduce((total, estudiante) => total + estudiante.nota, 0);
  return arr.length > 0 ? suma / arr.length : 0;
}

const media = calcularMedia(estudiantes);

console.log("Estudiantes ingresados:");
for (const est of estudiantes) {
  console.log(`${est.nombre}: ${est.nota}`);
}
console.log(`La nota media es: ${media.toFixed(2)}`);

alert(`La nota media es: ${media.toFixed(2)}`);

