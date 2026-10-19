const prompt = require('prompt-sync')();

console.log("Hola!");

const valorIntroduit = prompt("Escriu el que vulguis: ");

console.log("Valor introduit: " + valorIntroduit);
console.log("Tipus de dada: " + typeof valorIntroduit);
console.log("Resultat Boolean: " + Boolean(valorIntroduit));