const prompt = require('prompt-sync')();

console.log("=== CLASSIFICADOR D'ADRECES IP ===")
console.log()

let oct1 = Number(prompt("Diguem el primer octet de la IP: "));
let oct2 = Number(prompt("Diguem el segon octet de la IP: "));
let oct3 = Number(prompt("Diguem el tercer octet de la IP: "));
let oct4 = Number(prompt("Diguem el quart octet de la IP: "));
let verifcacio = true

if (oct1 > 255 || oct1 < 0) {
    console.log("Adreça no vàlida: cada octet ha d'estar entre 0 i 255.")
    let verifcacio = false
} else if (oct2 > 255 || oct2 < 0) {
    console.log("Adreça no vàlida: cada octet ha d'estar entre 0 i 255.")
    let verifcacio = false
} else if (oct3 > 255 || oct3 < 0) {
    console.log("Adreça no vàlida: cada octet ha d'estar entre 0 i 255.")
    let verifcacio = false
} else if (oct4 > 255 || oct4 < 0) {
    console.log("Adreça no vàlida: cada octet ha d'estar entre 0 i 255.")
    let verifcacio = false
} else {
    console.log("Adreça: " + oct1 + "." + oct2 + "." + oct3 + "." + oct4)
}
