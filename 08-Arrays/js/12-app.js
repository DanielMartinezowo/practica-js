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

users.forEach((user)=>{
    if(user.contact.mobile !== null){
        console.log(user);
    }
}) 

users.forEach((namesUsers)=>{
      console.log(`Usuarios: ${namesUsers.fullname}, Status: ${namesUsers.status}`)
})

  const numeros = [1, 5, 8, 20];
  console.log(numeros.join('|'));

  const selectedUsers = ["Ana López", "Carlos Martínez", "Sofía Ramírez"];
  const selectedPt1 = selectedUsers.slice(0, 2).join(',');
  console.log(`${selectedPt1} y ${selectedUsers[2]}`);