const prompt = require('prompt-sync')();

console.log("Hola!");

let nom = prompt("Diguem el teu nom: ");
let edat = prompt("Diguem la teva edat: ");

edat = Number(edat);

let edatProximAny = edat + 1;

console.log("Hola " + nom + "! tens " + edat + " anys.");
console.log("L'any que ve en tendràs " + edatProximAny);