const prompt = require('prompt-sync')();

const KB = 1024;
const MB = (KB * 1024);
const GB = (MB * 1024); 

console.log("=========== CONVERSOR D'UNITATS ===========");
console.log();

let bytesUsu = prompt("Diguem la mida del fitxer en bytes: ");

bytesUsu = Number(bytesUsu);

let resuKB = (bytesUsu / KB);
let resuMB = (bytesUsu / MB);
let resuGB = (bytesUsu / GB);

console.log();

console.log("Mida en Kilobytes: " + `${resuKB.toFixed(2)}`);
console.log("Mida en Megabytes: " + `${resuMB.toFixed(2)}`);
console.log("Mida en Gigabytes: " + `${resuGB.toFixed(2)}`);
console.log();

let bytesUsu2 = prompt("Diguem la mida del fitxer en Gigabytes: ");
console.log();

bytesUsu2 = Number(bytesUsu2);
let resuB = (bytesUsu2 * GB);

console.log(bytesUsu2 + " GB són " + resuB + " bytes " );
console.log();

let bytesUsu3 = prompt("Diguem la mida del fitxer a decarregar en Gigabytes: ");
console.log();

let mbpsUsu = prompt("Diguem la velocitat de connexió en Mbps: ");
console.log();

bytesUsu3 = Number(bytesUsu3);
mbpsUsu = Number(mbpsUsu);

let resuB2 = (bytesUsu3 * GB);
let resuB3 = (resuB2 * 8);
let resuMbps = (mbpsUsu * 1000000);
let segonsDes = (resuB3 / resuMbps)
let minutsDes = (segonsDes / 60)

console.log("Temps de descarrega aproximat: " + `${segonsDes.toFixed(2)}` + " segons " + "(" + `${minutsDes.toFixed(2)}` + " minuts)")