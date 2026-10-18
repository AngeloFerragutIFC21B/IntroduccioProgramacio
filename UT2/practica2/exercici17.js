// sense modificar.

console.log("10" + 5);
console.log("10" - 5);
console.log("10" * 2);
console.log("10" / 2);

// modificat.

console.log(Number(10) + 5 ); 
console.log(Number(10) - 5);
console.log(Number(10) * 2);
console.log(Number(10) / 2);

// L'unic resultat alterat ha estat el primer
// perque ha passat de detectar-ho com un text
// a detectar-ho com un numero.

// Els seguents resultats en el seu defecte, no han
// estat alterats. aixó és perque a JavaScript es 
// detecta quan un valor  en realitat és un altre 
// tipus de dada different  al definit, i ho canvia
// automaticament.