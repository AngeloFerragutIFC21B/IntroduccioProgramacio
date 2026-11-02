// Cas A
{ let hora = 9;
if (hora < 10 || hora > 18) {
console.log("Accés denegat");
}
}
/*
Mostrara "Acces denegat" perque un dels valors
és cumpleix (el primer).
*/

// Cas B
{ let hora = 15;
let capDeSetmana = false;
if (hora < 10 || hora > 18 || capDeSetmana) {
console.log("Accés denegat");
}
}
/*
No mostrara el missatge perque ningun dels
valors és cumpleix.
*/

// Cas C
{ let hora = 17;
let capDeSetmana = true;
if (hora < 10 && hora > 18 && capDeSetmana) {
console.log("Accés denegat");
}
}
/*
No mostrara el missatge perque no tots els
valors és cumpleixen.
*/
