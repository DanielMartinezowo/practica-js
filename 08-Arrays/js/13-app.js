const USERS = [
  {
    id: 1,
    status: "Alta",
    email: ["ana.lopez@gmail.com", "ana.trabajo@gmail.com"],
    fullname: "Ana López",
    contact: { phone: "5512345678", mobile: "5511122233" },
    profile: { type: "color", data: { bg: "#2D6CDF", color: "#FFFFFF" } },
  },
  {
    id: 2,
    status: "Alta",
    email: ["carlos.martinez@gmail.com"],
    fullname: "Carlos Martínez",
    contact: { phone: "3323456789", mobile: null },
    profile: { type: "color", data: { bg: "#16A34A", color: "#FFFFFF" } },
  },
  {
    id: 3,
    status: "Baja",
    email: ["sofia.ramirez@gmail.com"],
    fullname: "Sofía Ramírez",
    contact: { phone: "8187654321", mobile: null },
    profile: { type: "color", data: { bg: "#DC2626", color: "#FFFFFF" } },
  },
  {
    id: 4,
    status: "Alta",
    email: ["luis.gomez@gmail.com"],
    fullname: "Luis Gómez",
    contact: { phone: "5519988776", mobile: "5512233445" },
    profile: { type: "color", data: { bg: "#9333EA", color: "#FFFFFF" } },
  },
  {
    id: 5,
    status: "Baja",
    email: ["maria.torres@gmail.com"],
    fullname: "María Torres",
    contact: { phone: "5544332211", mobile: null },
    profile: { type: "color", data: { bg: "#0EA5E9", color: "#FFFFFF" } },
  },
  {
    id: 6,
    status: "Alta",
    email: ["jorge.hernandez@gmail.com"],
    fullname: "Jorge Hernández",
    contact: { phone: "3311223344", mobile: "3319988776" },
    profile: { type: "color", data: { bg: "#22C55E", color: "#FFFFFF" } },
  },
  {
    id: 7,
    status: "Alta",
    email: ["paola.mendoza@gmail.com"],
    fullname: "Paola Mendoza",
    contact: { phone: "8111223344", mobile: null },
    profile: { type: "color", data: { bg: "#F59E0B", color: "#000000" } },
  },
  {
    id: 8,
    status: "Baja",
    email: ["ricardo.nunez@gmail.com"],
    fullname: "Ricardo Núñez",
    contact: { phone: "2223344556", mobile: null },
    profile: { type: "color", data: { bg: "#EF4444", color: "#FFFFFF" } },
  },
  {
    id: 9,
    status: "Alta",
    email: ["laura.castillo@gmail.com"],
    fullname: "Laura Castillo",
    contact: { phone: "6645566778", mobile: "6649988776" },
    profile: { type: "color", data: { bg: "#3B82F6", color: "#FFFFFF" } },
  },
  {
    id: 10,
    status: "Alta",
    email: ["diego.vargas@gmail.com"],
    fullname: "Diego Vargas",
    contact: { phone: "9987766554", mobile: null },
    profile: { type: "color", data: { bg: "#14B8A6", color: "#FFFFFF" } },
  },
];
const emailCounts = USERS.every(emails => emails.email.length >= 1);
console.log(emailCounts);

const dataVF = USERS.every(datas => ('profile'in datas)
&&('data'in datas.profile)&&('bg'in datas.profile.data));
console.log(dataVF);