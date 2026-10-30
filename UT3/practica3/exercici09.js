const prompt = require('prompt-sync')();

console.log("Hola!");
console.log("");

let anys = prompt("Quina es la teva edat?: ");

if (anys >= 18) {
    console.log("Ets major d'edat."); 
} else {
    console.log("Ets menor d'edat");
}