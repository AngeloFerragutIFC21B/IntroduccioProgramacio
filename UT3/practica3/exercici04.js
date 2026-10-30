let a = 4;
let b = 4;
let c = ++a;
let d = b++;

console.log(a); // 5
console.log(b); // 5
console.log(c); // 5
console.log(d); // 4

/* 
La difernecia entre ++a i a++ es que ++a
es un prefixe, el que fa es mostrar la variable
abans de sumar-li 1. En canvi a++ es un sufixe,
el que vol dir que mostrara la variable ja amb
la suma.
*/
