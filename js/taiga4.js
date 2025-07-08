// Ejercicio 4:  Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números).
// Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones
//  del alumno. Calcula la calificación más alta del alumno y clasifica al alumno según su calificación más alta
//  (A para 9-10, B para 7-8, C para 5-6, D para 0-4).

const alumno = {
    //propiedades
    nombre: "Santiago",
    curso: "6º de Secundaria",
    calificaciones: [],
    //metodos
    agregarCalificacion: function(calificacion) {
        this.calificaciones.push(calificacion);
    },
    calcularCalificacionMasAlta: function() {
        if (this.calificaciones.length === 0) return null;
        return Math.max(...this.calificaciones);
    },
    clasificarAlumno: function() {
        const calificacionMasAlta = this.calcularCalificacionMasAlta();
        if (calificacionMasAlta === null) return "Sin calificaciones";
        if (calificacionMasAlta >= 9) return "A";
        if (calificacionMasAlta >= 7) return "B";
        if (calificacionMasAlta >= 5) return "C";
        return "D";
    }
}

// Ejemplo de uso
const calificacion = parseFloat(prompt("Ingrese una calificación para el alumno:"));
alumno.agregarCalificacion(calificacion);
document.writeln(`Calificación más alta del alumno: ${alumno.calcularCalificacionMasAlta()}`);
document.writeln(`Clasificación del alumno: ${alumno.clasificarAlumno()}`);
