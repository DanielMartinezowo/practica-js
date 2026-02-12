const empleados = [
  { id: 1, nombre: "Ana", puesto: "Dev", salario: 6000, skills: ["JS", "React"] },
  { id: 2, nombre: "Beto", puesto: "Diseñador", salario: 2500, skills: ["Figma"] },
  { id: 3, nombre: "Carla", puesto: "Dev", salario: 6000, skills: ["Python", "AWS"] },
  { id: 4, nombre: "Daniel", puesto: "Manager", salario: 7000, skills: ["Agile"] },
  { id: 5, nombre: "Elena", puesto: "Dev", salario: 3500, skills: ["JS", "Node"] }
];

/* const filtrodev = empleados.filter(e => e.skills.includes('JS')&& e.salario>=4000)
.map(user => user.nombre) */

//const filtrodev = obtenerNombresDevs(empleados); */


//usando una funcion clasica
function namesDevs(listaEmpleados) {
  return listaEmpleados
    .filter(function(e) {
      return e.skills.includes('JS') && e.salario >= 4000;
    })
    .map(function(user) {
      return user.nombre;
    });
}
const filtrodev = namesDevs(empleados);
console.log(filtrodev);