//function expressions y function declaration, diferencia entre ellas
//es por el hoisting, la forma en que se lee y como se accede a ella

sumar();
function sumar(){
    console.log(2*2)
}

sumar2();
const sumar2 = function(){
    console.log(2+2)
}