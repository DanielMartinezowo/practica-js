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

const {email : {email2}} = order;

    console.log(email2);