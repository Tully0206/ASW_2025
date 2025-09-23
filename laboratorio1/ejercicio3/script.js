// pedir la edad al usuario
let edad = prompt("Por favor, ingresa tu edad:");
edad = parseInt(edad); // Convierte la entrada a un número entero

// usar if...else para verificar si es mayor o menor de edad
if (edad >= 18) {
    alert("Eres mayor de edad.");
} else {
    alert("Eres menor de edad.");
}

// crear un bucle for que muestre los números del 1 al 10 en la consola
console.log("Números del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// usar un bucle while para pedir contraseñas
let contrasena = "";
while (contrasena !== "1234") {
    contrasena = prompt("Ingresa la contraseña:");
}
alert("¡Contraseña correcta! Acceso concedido.");