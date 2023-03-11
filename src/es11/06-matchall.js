const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Banana, Kiwi kiwi, Apple, orange... etc etc";

for (const match of fruit.matchAll(regex)){
    console.log(match);
}

/* 
[
  'Apple',
  'Apple',
  index: 0,
  input: 'Apple, Banana, Kiwi kiwi, Apple, orange... etc etc',
  groups: undefined
]
[
  'Apple',
  'Apple',
  index: 26,
  input: 'Apple, Banana, Kiwi kiwi, Apple, orange... etc etc',
  groups: undefined
] 
*/