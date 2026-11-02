const prompt = require('prompt-sync')();

console.log("Hola!");
console.log("");

let numUsuari = prompt("Diguem un número del 1 al 4: ");

if (numUsuari == 1) {
    console.log("Talla XS")
} else if (numUsuari == 2) {
    console.log("Talla S");
} else if (numUsuari == 3) {
    console.log("Talla M");
} else if (numUsuari == 4) {
    console.log("Talla L");
} else {
    console.log("Talla no dispomnible");
}