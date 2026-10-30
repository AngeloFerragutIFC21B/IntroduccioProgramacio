const prompt = require('prompt-sync')();

console.log("Hola!");
console.log("");

let grausCelcius = prompt("Quina temperatura fa?: ");

if (grausCelcius < 10) {
    console.log("Fa fred.");
} else if (grausCelcius >= 10 && grausCelcius < 25 ) {
    console.log("Tempreatura moderada.");
} else {
    console.log("Fa calor.");
}