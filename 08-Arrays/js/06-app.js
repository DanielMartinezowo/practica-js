//usando el spread operator para agregar valores a un string
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
    let productosdentro;
    productosdentro = [...carrito, producto];
    //recordatorio de mandar a traer otro 
    productosdentro = [...productosdentro, {nombre : 'taza', marca : 'cosco', precio : '8'}];
    
    

    console.table(productosdentro);