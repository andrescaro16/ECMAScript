// Generator
function* iterate(array) {
    for (let value of array){
        yield value;
    }
}

const it = iterate(["Oscar", "Andrés", "David", "Ulises"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);