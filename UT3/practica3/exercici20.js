const prompt = require('prompt-sync')();

console.log("Hola!");
console.log("");

let edatUsu = Number(prompt("Quina es la teva edat?: "));
console.log("");
let entrada  = prompt("Tens entrada (si o no)?: ");
console.log("");

if (edatUsu >= 18 && entrada == "si") {
    console.log("Accés permès");
} else {
    console.log("Accés denegat");
}