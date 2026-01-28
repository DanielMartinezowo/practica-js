//congelar objetos
const producto = {
    nombre : 'manzana',
    categoria : 'frutas',
    precio : 'precio',
    disponible : true
}
Object.freeze(producto);

producto.disponible = false;
