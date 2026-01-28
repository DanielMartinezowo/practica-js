//desplazar elementos de un array a la hora de agregar otro elemento

const carrito = [];

//definimos el objeto 
 const producto = {
    nombre : 'aifon',
    marca : 'aifon',
    precio : 800
 }
 const producto2 = {
    nombre : 'mac',
    marca : 'aifon',
    precio : 2000
 }
  const producto3 = {
    nombre : 'xbox',
    marca : 'microsoft',
    precio : 400
 }
 

 //para agregarlo al final del arreglo es con
 carrito.push(producto);

 carrito.push(producto2)

//ahora si queremos agregarlo al principio y desplazar los demas elementos del arreglo es con
carrito.unshift(producto3)

 console.table(carrito);