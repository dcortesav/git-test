// 1. Declarar una variable con un número
let miNumero = 119;

// 2. Crear una función para verificar si es par o impar
function verificarParImpar(numero) {
  if (numero % 2 === 0) {
    return "es un número par";
  } else {
    return "es un número impar";
  }
}

// 3. Ejecutar la función y mostrar el resultado en la consola
let resultado = verificarParImpar(miNumero);
console.log(`El número ${miNumero} ${resultado}.`);