// pedir el nombre y la edad al usuario
let nombre = prompt("Ingresa tu nombre:");
let edad = prompt("Ingresa tu edad:");
edad = parseInt(edad); // Convierte la entrada a un número

// muestra un saludo personalizado
alert("Hola " + nombre + ", tienes " + edad + " años.");

// verifica la edad para dar o denegar el acceso
if (edad > 18) {
    alert("Puedes entrar.");
} else {
    alert("Acceso denegado.");
}