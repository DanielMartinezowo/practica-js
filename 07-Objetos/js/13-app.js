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
    if(valor==='pulga@mail.com'){
      nuevo[clave] = '12132@gmail.com';
    }else{
     nuevo[clave] = valor
    }
    return nuevo;
  }, {});

console.log(`al usuario, ${order.client.name}, actualizo su primer correo:`, nuevoemail);