/*
La diferencia entre == i === es que el == 
es una comparació mentres que === es una 
igualtat estricta.
*/

console.log(5 == "5"); // true, perque al comparar-los son el mateix caractrer tot i que no siguin del mateix tipus
console.log(5 === "5"); // false, perque son el mateix caracter pero no son estrictament iguals
console.log(0 == false); // true, perque son el mateix aun aixi sent diferent caracters
console.log(0 === false); // false, perque no son exactament iguals tot i que siguin el mateix diferent escrit

/*
És recomenable per a fer comparacións exactes 
i estrictes.
*/