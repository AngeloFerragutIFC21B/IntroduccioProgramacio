const prompt = require('prompt-sync')();

console.log("Hola!");
console.log("");

let numUsuari = prompt("Intenta adivinar el número: ");

if (numUsuari == 7) {
    console.log("Has endevinat el número!");
} else {
    console.log("No has encertat. Torna-ho a provar!");
}