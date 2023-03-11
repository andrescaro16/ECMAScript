const anotherNumber = 1;
const validate = anotherNumber ?? 5;

console.log(validate);

//-------------------------------------

const anotherNumber2 = null;
const validate2 = anotherNumber2 ?? 5;  //si es nulo o undefined, podemos asignar un "default"

console.log(validate2);