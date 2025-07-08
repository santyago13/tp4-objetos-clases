/*
7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros
 el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas
/*
7- Nos piden realizar una agenda telefónica de contactos.
...
*/

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Agenda {
    constructor(tamano = 10) {
        this.tamano = tamano;
        this.contactos = [];
    }

    aniadirContacto(contacto) {
        if (this.agendaLlena()) {
            alert("La agenda está llena. No se puede añadir más contactos.");
            return;
        }
        if (this.existeContacto(contacto)) {
            alert("El contacto ya existe.");
            return;
        }
        this.contactos.push(contacto);
        alert("Contacto añadido.");
    }

    existeContacto(contacto) {
        return this.contactos.some(c => c.nombre.toLowerCase() === contacto.nombre.toLowerCase());
    }

    listarContactos() {
        if (this.contactos.length === 0) {
            alert("La agenda está vacía.");
            return;
        }
        let lista = "Contactos:\n";
        this.contactos.forEach(c => {
            lista += `Nombre: ${c.nombre}, Teléfono: ${c.telefono}\n`;
        });
        alert(lista);
        console.log(lista);
    }

    buscarContacto(nombre) {
        const encontrado = this.contactos.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
        if (encontrado) {
            alert(`Teléfono de ${nombre}: ${encontrado.telefono}`);
            console.log(`Teléfono de ${nombre}: ${encontrado.telefono}`);
        } else {
            alert("Contacto no encontrado.");
        }
    }

    eliminarContacto(contacto) {
        const index = this.contactos.findIndex(c => c.nombre.toLowerCase() === contacto.nombre.toLowerCase());
        if (index !== -1) {
            this.contactos.splice(index, 1);
            alert("Contacto eliminado.");
        } else {
            alert("Contacto no encontrado.");
        }
    }

    agendaLlena() {
        return this.contactos.length >= this.tamano;
    }

    huecosLibres() {
        alert(`Huecos libres: ${this.tamano - this.contactos.length}`);
    }
}

// Menú interactivo
const agenda = new Agenda();

let opcion;
do {
    opcion = prompt(
        "Agenda Telefónica\n" +
        "1. Añadir contacto\n" +
        "2. Existe contacto\n" +
        "3. Listar contactos\n" +
        "4. Buscar contacto\n" +
        "5. Eliminar contacto\n" +
        "6. Agenda llena\n" +
        "7. Huecos libres\n" +
        "0. Salir\n" +
        "Elige una opción:"
    );

    switch (opcion) {
        case "1":
            const nombre1 = prompt("Nombre del contacto:");
            const telefono1 = prompt("Teléfono del contacto:");
            agenda.aniadirContacto(new Contacto(nombre1, telefono1));
            break;
        case "2":
            const nombre2 = prompt("Nombre del contacto a buscar:");
            const existe = agenda.existeContacto(new Contacto(nombre2, ""));
            alert(existe ? "El contacto existe." : "El contacto NO existe.");
            break;
        case "3":
            agenda.listarContactos();
            break;
        case "4":
            const nombre4 = prompt("Nombre del contacto a buscar:");
            agenda.buscarContacto(nombre4);
            break;
        case "5":
            const nombre5 = prompt("Nombre del contacto a eliminar:");
            agenda.eliminarContacto(new Contacto(nombre5, ""));
            break;
        case "6":
            alert(agenda.agendaLlena() ? "La agenda está llena." : "La agenda NO está llena.");
            break;
        case "7":
            agenda.huecosLibres();
            break;
        case "0":
            alert("Saliendo...");
            break;
        default:
            alert("Opción no válida.");
    }
} while (opcion !== "0");
