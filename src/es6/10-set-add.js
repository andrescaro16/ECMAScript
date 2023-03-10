let array = [1,2,3,4,5,5];

const list = new Set(array);

list.add("item 1");
list.add("item 2").add("item 3");

console.log(list);