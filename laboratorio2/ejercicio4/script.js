// Mostrar tamaño de la ventana
document.write("tamaño de la ventana: " + window.innerWidth + " x " + window.innerHeight + "<br>");

// Mensaje de bienvenida
alert("bienvenida!");

// Preguntar nombre
let nombre = prompt("como te llamas?");
document.write("hola " + nombre + "<br>");

// Abrir y cerrar ventana
let nuevaVentana;

function abrirVentana() {
  nuevaVentana = window.open("https://www.google.com");
}

function cerrarVentana() {
  if (confirm("¿quieres cerrar la ventana?")) {
    nuevaVentana.close();
  }
}
