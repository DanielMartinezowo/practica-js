//el dato primitivo symbol es muy unico, literalmente unico
const sym1 = Symbol(id);
const sym2 = Symbol(id);

console.log(sym1===sym2);
//a pesar de que symbol contiene el mismo valor id no es lo mismo
//symbol vuelve cada objeto unico de manera que no pueda ocasionar esto con ninguna otra variable

//tambien pueden verse como propiedades ocultas en objetos
const idInterno = Symbol("id");

let usuario = {
    nombre : 'ana',
    [idInterno]: 'jjjj'
};

console.log(usuario);