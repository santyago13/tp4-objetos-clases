/*
10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion,
 el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el
 cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/

class Avion {
    constructor(nombre, capacidad, destino) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.pasajeros = [];
    }

    abordar(pasajero) {
        if (this.pasajeros.length < this.capacidad) {
            this.pasajeros.push(pasajero);
            document.writeln(`<p>Pasajero ${pasajero} abordó el avión ${this.nombre}.</p>`);
        } else {
            document.writeln(`<p>El avión ${this.nombre} está lleno. No puede abordar ${pasajero}.</p>`);
        }
    }

    info() {
        return `Avión: ${this.nombre}, Destino: ${this.destino}, Capacidad: ${this.capacidad}, Pasajeros: [${this.pasajeros.join(", ")}]`;
    }
}

class Aeropuerto {
    constructor(nombreAeropuerto) {
        this.nombreAeropuerto = nombreAeropuerto;
        this.aviones = [];
    }

    agregarAvion(avion) {
        this.aviones.push(avion);
        document.writeln(`Avión ${avion.nombre} agregado al aeropuerto.`);
    }

    buscarAvion(nombreAvion) {
        const avion = this.aviones.find(a => a.nombre.toLowerCase() === nombreAvion.toLowerCase());
        if (avion) {
            document.writeln(avion.info());
            return avion;
        } else {
            document.writeln(`No se encontró el avión con nombre "${nombreAvion}".`);
            return null;
        }
    }
}

// Crear aeropuerto y aviones
const aeropuerto = new Aeropuerto("Aeropuerto Internacional");

const avion1 = new Avion("Condor", 2, "Madrid");
const avion2 = new Avion("Albatros", 3, "París");
const avion3 = new Avion("Fenix", 1, "Roma");

aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

// Buscar un avión y abordar pasajeros
const avionBuscado = aeropuerto.buscarAvion("Albatros");
if (avionBuscado) {
    avionBuscado.abordar("Juan");
    avionBuscado.abordar("Ana");
    avionBuscado.abordar("Luis");
    avionBuscado.abordar("Extra");
}



