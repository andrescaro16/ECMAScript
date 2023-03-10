// Pasar de array de arrays a objetos (Lo contrario a Object.entries que pasa de objetos a array de arrays)

const entries = new Map([["name", "Andrés"], ["age", 19]]);
console.log(entries);
console.log(Object.fromEntries(entries));

const entries2 = Object.fromEntries(new Map([["name", "Andrés"], ["age", 19]]));
console.log(entries2);