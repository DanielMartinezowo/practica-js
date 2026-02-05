/*Imprime el nombre y la ciudad de la persona.
Cambia la edad de la persona a 26.
Agrega un nuevo hobby "cocinar" al array de hobbies.
Imprime solo los nombres de los hobbies .*/
 
 
const persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Ciudad de México",
  hobbies: [{nombre:"leer",
  tiempo:1},{nombre:"correr",
  tiempo:10}, {nombre:"programar",
  tiempo:53}]
};
persona["edad"] = 26;
const nuevoHobbie = {nombre:"cocinar", tiempo:50}
persona.hobbies.push(nuevoHobbie)
const nombresHob = persona.hobbies.map(item => item.nombre);

console.log(nombresHob);