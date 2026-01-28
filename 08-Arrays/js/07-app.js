//eliminar o modififcar objetos de un array utilizando splice 

const meses = ["enero", "febrero", "marzo","abril","mayo"];
//eliminamos
meses.splice(1, 1);

console.log(meses);


//modificamos de la siguiente manera 
meses.splice(1,0, "otro mes");

console.log(meses);