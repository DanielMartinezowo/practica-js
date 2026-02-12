/* En resumen, un callback es pasar una “función B” por parámetro a una “función A”, 
de modo que la función A puede ejecutar esa función B de forma genérica desde su código. */

const funcionB = function(){
	console.log("Función B ejecutada.");
};
 
const funcionA = function(callback){
	callback();
};
 
funcionA(funcionB); // Función B ejecutada