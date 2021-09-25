/*
Un número deficiente es un número natural que es mayor que la suma de sus divisores propios exceptuándose a sí mismo.
Consigue un programa que le solicite al usuario un numero y determine si es o no deficiente.
Ejemplo 1:
input: 24
los divisores de 24 son 1, 2, 4, 6, 8 y 12, si los sumas es 36 que es mayor que 24
output: NO ES DEFICIENTE
Ejemplo 2:
input: 15
los divisores de 15 son 1, 3 y 5, si los sumas es 9 que es menor que 15
output: ES DEFICIENTE
*/

const number = 24;
let sum = 0;

for (i = 1; i < number - 1; i++) {
  if (number % i === 0) {
    sum += i;
  }
}

if (sum >= number) {
  console.log("No es deficiente");
} else {
  console.log("Es deficiente");
}
