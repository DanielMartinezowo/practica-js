const products = [
  {
    id: 1,
    sku: 'FRU-001',
    name: 'Manzana Roja',
    category: 'frutas',
    price: 10,
    currency: 'MXN',
    stock: 120,
    isActive: true,
    supplier: {
      id: 10,
      name: 'Frutas del Valle',
    },
  },
  {
    id: 2,
    sku: 'FRU-002',
    name: 'Pera Verde',
    category: 'frutas',
    price: 12,
    currency: 'MXN',
    stock: 0,
    isActive: true,
    supplier: {
      id: 11,
      name: 'Campo Fresco',
    },
  },
  {
    id: 3,
    sku: 'FRU-003',
    name: 'Plátano',
    category: 'frutas',
    price: 8,
    currency: 'MXN',
    stock: 200,
    isActive: false,
    supplier: {
      id: 10,
      name: 'Frutas del Valle',
    },
  },
];
 
 const productAct = products.find((product) => product.isActive === true && product.stock === 0);
 const pricenew = productAct.price = 14;
 console.log(productAct);