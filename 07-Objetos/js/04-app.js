//destructuring en objetos
//sirve para acceder a cierta 
const producto = {
    nombre : 'manzana',
    categoria : 'frutas',
    precio : 'precio',
    disponible : true
}

const {nombre, disponible} = producto;
console.log(nombre);