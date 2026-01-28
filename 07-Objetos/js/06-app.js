//acceder por destructuring a objetos anidados
const producto = {
    nombre : 'manzana',
    categoria : 'frutas',
    precio : 'precio',
    disponible : true,
    informacion : {
        peso : '3kg',
        altura : '180cm',
        color : 'verde'
    }
}


    const {informacion : {peso}} = producto;

    console.log(peso);