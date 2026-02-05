const users = [
  {
    status: "Alta",
    email: ["ana.lopez@gmail.com", "ana.trabajo@gmail.com"],
    user: "analopez",
    fullname: "Ana López",
    contact: {
      phone: "5512345678",
      mobile: "5511122233",
    },
      },
  {
    status: "Alta",
    email: ["carlos.martinez@gmail.com"],
    user: "cmartinez",
    fullname: "Carlos Martínez",
    contact: {
      phone: "3323456789",
      mobile: null,
    },
  },
  {
    status: "Baja",
    email: ["sofia.ramirez@gmail.com"],
    user: "sramirez",
    fullname: "Sofía Ramírez",
    contact: {
      phone: "8187654321",
      mobile: null,
    },
  },
];
/*uso del .map
const nameList = users.map(usuario => usuario.fullname.toUpperCase());
console.log(nameList);
const emailList = users.map(emails => emails.email);
console.log(emailList)*/


/*uso de .filter
const usersAlt = users.filter(usuario => usuario.status.includes("Alta"))
.map(user => user.fullname.toUpperCase());

const emailCounts = users.filter(emails => emails.email.length <= 1)
.map(user => user.fullname.toUpperCase());;

console.log(usersAlt);

console.log(emailCounts);*/

//uso de some
const statusDecline = users.some(usuario => usuario.status === "Alta");

console.log(statusDecline);

const numberEmpty = users.some(number => number.contact.mobile === null);
console.log(numberEmpty);
