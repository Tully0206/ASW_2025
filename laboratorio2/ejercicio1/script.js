// Ejemplo con var
var a = 10;
if (true) {
  var a = 20;
  console.log("Dentro del if con var:", a);
}
console.log("Fuera del if con var:", a);

// Ejemplo con let
let b = 10;
if (true) {
  let b = 20;
  console.log("Dentro del if con let:", b);
}
console.log("Fuera del if con let:", b);

// Ejemplo con const
const c = 30;
console.log("Constante c:", c);

// const no se puede cambiar, pero se pueden modificar arrays u objetos
const numeros = [1, 2, 3];
numeros.push(4);
console.log("Array con const modificado:", numeros);
