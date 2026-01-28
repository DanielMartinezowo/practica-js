//destructuring con arreglos

const numeros = [10,20,30,40,50,60];

//utilizando el spread operator sacamos los datos a partir de la posicion 2
const [primero, ...tercero] = numeros;

console.log(tercero);