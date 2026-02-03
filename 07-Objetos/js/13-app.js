// segundo ejercicio de ivon
const order = {
  id: 'ORD-1',
  client: {
    name: 'suki',
    email: {
      email1: 'sukisuki@mail.com',
      email2: "pulga@mail.com",
      email3: "queso@mail.com"
    },
  },
};
  const nuevoemail= Object.entries(order.client.email).reduce((nuevo, [clave, valor]) => {
    if(valor==='sukisuki@mail.com'){
      nuevo[clave] = '12132@gmail.com';
    }else{
     nuevo[clave] = valor
    }
    return nuevo;
  }, {});

<<<<<<< HEAD
=======
console.log(`al usuario, ${order.client.name}, actualizo su primero correo:`, nuevoemail);
>>>>>>> 526047f78127c9bc18dcf30a958567f9c2b763d4
