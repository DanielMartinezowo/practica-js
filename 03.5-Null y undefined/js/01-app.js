//el uso de let y null es bastante parecido ya que ambos determinan que no tiene valor la variable
//null la establecemos a decision propia ya que siempre vamos a estar esperando ese valor
let edad = null;

//normalmente con undefined esperamos que tenga un valor despues
let nombre;


//los valores son similares pero no totalmente iguales, a la hora de compararlos podemos notar la diferencia
console.log(null == undefined);
// true un error comun ya que se convierten los valores en uno comun para poder compararlos
console.log(null === undefined);
// false es lo correcto ya que se espera el mismo valor, siendo que null es un tipo de dato object y undefined no