class Alumno {
  constructor(nombre, edad, nota) {
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;
  }

  estaAprobado() {
    if (this.nota >= 5) {
      return true;
    } else {
      return false;
    }
  }

  presentacion() {
    let estado;
    if (this.estaAprobado()) {
      estado = "Aprobado";
    } else {
      estado = "Suspenso";
    }
    return "Soy " + this.nombre + ", tengo " + this.edad + " años y mi nota es " + this.nota + " (" + estado + ")";
  }
}

// Crear alumnos
let alumno1 = new Alumno("Ana", 20, 7);
let alumno2 = new Alumno("Luis", 19, 4);
let alumno3 = new Alumno("Marta", 22, 9);

// Mostrar en la página
document.getElementById("salida").textContent =
  alumno1.presentacion() + "\n" +
  alumno2.presentacion() + "\n" +
  alumno3.presentacion();

  