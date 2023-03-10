// --------------[Destructuring]----------------

// arrays destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, b);


// object destructuring
let user = {
    username: "Andrés",
    age: 19,
};
let {username, age} = user;
console.log(username, age);


// -------------[Spread Operator]---------------

let person = {
    name: "Andrés",
    age: 19,
};
let country = "COL";
let data = {id: 1, ...person, country};
console.table(data);


// ------------------[Rest]---------------------

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 3, 6, 9);