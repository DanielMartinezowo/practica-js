const users = [
  {
    status: 'Alta',
    email: ['ana.lopez@gmail.com', 'ana.trabajo@gmail.com'],
    user: 'analopez',
    fullname: 'Ana López',
    contact: {
      phone: '5512345678',
      mobile: '5511122233',
    },
  },
  {
    status: 'pAlta',
    email: ['carlos.martinez@gmail.com'],
    user: 'cmartinez',
    fullname: 'Carlos Martínez',
    contact: {
      phone: '3323456789',
      mobile: null,
    },
  },
  {
    status: 'Baja',
    email: ['sofia.ramirez@gmail.com'],
    user: 'sramirez',
    fullname: 'Sofía Ramírez',
    contact: {
      phone: '8187654321',
      mobile: null,
    },
  },
  {
    status: 'baja',
    email: [],
    user: 'jperez',
    fullname: 'Juan Perez',
    contact: {
      phone: '8187654321',
      mobile: null,
    },
  },
];
/* //uso del .map
  const nameList = users.map(usuario => {
  return {
    ...usuario,
    fullname : usuario.fullname.toUpperCase()
  };
});
  console.log(nameList);
//retornar objeto completo, solo nombre en mayusculas

const emailList = users.flatMap(emails => emails.email);
console.log(emailList)
// //pasarlo a un arreglo de strings
//  /*[ 'ana.lopez@gmail.com', 'ana.trabajo@gmail.com' ,
//    'carlos.martinez@gmail.com' ,
//    'sofia.ramirez@gmail.com' ]*/

///uso de .filter */
const regEx = /alta/i;
const usersAlt = users
  .filter((usuario) => regEx.test(usuario.status))
  .map((user) => user.fullname.toUpperCase());

const emailCounts = users
  .filter((emails) => emails.email.length === 1)
  .map((user) => user.fullname.toUpperCase());
//mejora de ejercicios, filtrado de alta y contador de correos dados de baja
console.log(usersAlt);
console.log(emailCounts);

//uso de some
/* const statusDecline = users.some(usuario => usuario.status === "Baja");

console.log(statusDecline);

const numberEmpty = users.some(number => number.contact.mobile === null);
console.log(numberEmpty);
 */
