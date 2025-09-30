let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function probar() {
  let entrada = document.getElementById("entrada").value;
  let mensaje = document.getElementById("mensaje");
  intentos++;

  if (entrada == numeroSecreto) {
    mensaje.textContent = "¡Adivinaste en " + intentos + " intento(s)!";
  } else if (intentos >= 7) {
    mensaje.textContent = "perdiste, el nUmero era " + numeroSecreto;
  } else if (entrada < numeroSecreto) {
    mensaje.textContent = "el numero es mayor. Intento " + intentos + "/7";
  } else {
    mensaje.textContent = "el numero es menor. Intento " + intentos + "/7";
  }
}
