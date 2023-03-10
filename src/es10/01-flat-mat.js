// flat
const array = [1,2,3,4,5,6,7,8, [1,2,8,24,56,[45,2,5,8,12]]];
console.log(array.flat(3));

// flat map
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value * 2]));