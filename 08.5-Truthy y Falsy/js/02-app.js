/* Falsy es un valor que se considera false/falso
cuando es evaluado bajo un contexto booleano, comportandose como false */
/* document.all es el único objeto en todo el lenguaje que se comporta como falsy */

const valFals = [false, 0, "", null, undefined, NaN, "document.all"];
console.table(valFals);

/* en javascript podemos hacer converciones explicitas, es decir forzar a un tipo de dato
se convierta en otro */
const number = 42;             // 42
number.constructor.name;       // "Number"

const text = String(number);   // "42"
text.constructor.name;         // "String"

/* tambien se pueden realizar conversiones implicitas
se puede decir que ocurren de forma automatica */

// Se fuerza un texto a número (de forma explícita)
Number("42");    // 42
// Se fuerza un texto a número (de forma implícita)
+"42"      // 42
// Se concatenan (unen) dos strings ("22" + "22")
"22" + String(22);  // "2222"

// Se convierte el número a texto y se concatena (se une)
"22" + 22   // "2222"
