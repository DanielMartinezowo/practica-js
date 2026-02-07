/*Buscar el producto con sku FRU-002 y validar si se puede vender.
Mostrar un console log si: el producto no existe, si esta inactivo, no hay stock*/

const products = [
  {
    id: 1,
    sku: 'FRU-001',
    name: 'Manzana Roja',
    price: 10,
    stock: 120,
    isActive: true,
  },
  {
    id: 2,
    sku: 'FRU-002',
    name: 'Pera Verde',
    price: 12,
    stock: 0,
    isActive: true,
  },
  {
    id: 3,
    sku: 'FRU-003',
    name: 'Plátano',
    price: 8,
    stock: 200,
    isActive: false,
  },
];


const productF = products.find((findSku)=> findSku.sku === 'FRU-002');
console.log(`el producto: ${productF.sku} existe`);

  if(productF.isActive===true){
    console.log('se encuentra activo');
  }else{
    console.log('no se encuentra activo');
  }
  if(productF.stock >0){
    console.log('tiene stock');
  }else{
    console.log('no hay en stock');
  }
  