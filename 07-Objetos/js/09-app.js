
//el uso de seal es parecido al de freeze con la diferencia que
//se pueden modificar los valores de propiedades ya existentes
const producto = {
    nombre : 'manzana',
    categoria : 'frutas',
    precio : 'precio',
    disponible : true
}
Object.seal(producto);

producto.disponible = false;
