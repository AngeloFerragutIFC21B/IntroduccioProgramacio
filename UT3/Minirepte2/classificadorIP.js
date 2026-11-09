const prompt = require('prompt-sync')();

console.log("=== CLASSIFICADOR D'ADRECES IP ===")
console.log()

let oct1 = Number(prompt("Diguem el primer octet de la IP: "));
let oct2 = Number(prompt("Diguem el segon octet de la IP: "));
let oct3 = Number(prompt("Diguem el tercer octet de la IP: "));
let oct4 = Number(prompt("Diguem el quart octet de la IP: "));
let verificacio = true;
let classe;
let adreca;
let tipus;

if (oct1 > 255 || oct1 < 0) {
    console.log("Adreça no vàlida: cada octet ha d'estar entre 0 i 255.");
    verificacio = false;
} else if (oct2 > 255 || oct2 < 0) {
    console.log("Adreça no vàlida: cada octet ha d'estar entre 0 i 255.");
    verificacio = false;
} else if (oct3 > 255 || oct3 < 0) {
    console.log("Adreça no vàlida: cada octet ha d'estar entre 0 i 255.");
    verificacio = false;
} else if (oct4 > 255 || oct4 < 0) {
    console.log("Adreça no vàlida: cada octet ha d'estar entre 0 i 255.");
    verificacio = false;
}

if (verificacio == true) {
    adreca = oct1 + "." + oct2 + "." + oct3 + "." + oct4
    console.log("Adreça: " + adreca);

    if (oct1 >= 1 && oct1 <= 126) {
    classe = "A";
    console.log("Classe: " + classe);
    } else if (oct1 >= 128 && oct1 <= 191) {
    classe = "B";
    console.log("Classe: " + classe);
    } else if (oct1 >= 192 && oct1 <= 223) {
    classe = "C";
    console.log("Classe: " + classe);
    } else if (oct1 >= 224 && oct1 <= 239) {
    classe = "D (multicast)";
    console.log("Classe: " + classe);
    } else if (oct1 >= 240 && oct1 <= 255) {
    classe = "E (Experimental)";
    console.log("Classe: " + classe);
    } else if (oct1 === 0) {
        classe = "Reservada";
         console.log("Classe: " + classe);
    } else {
     classe = "Loopback";
    console.log("Classe: " + classe);
    }

    switch (classe) {
        case "A":
            console.log("Màscara per defecte: 255.0.0.0");   
            tipus = (oct1 == 10) ? "Privada" : "Publica";
            console.log("Tipus: " + tipus);
            break;
        case "B": 
            console.log("Màscara per defecte: 255.255.0.0");
            tipus = (oct1 == 172 && oct2 >= 16 && oct2 <= 31) ? "Privada" : "Publica";
            console.log("Tipus: " + tipus);
            break;
        case "C": 
            console.log("Màscara per defecte: 255.255.255.0");
            tipus = (oct1 == 192 && oct2 == 168) ? "Privada" : "Publica";
            console.log("Tipus: " + tipus);
            break;
        default:
            console.log("Màscara per defecte: No en té (adreça especial)");
            break;
    }
}