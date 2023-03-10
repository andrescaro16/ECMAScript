// enhanced object literals

function newUser(user, age, country, uId) {
    return{
        user: user,
        age: age,
        country: country,

        //Esto es lo mismo que lo anterior más breve
        user,
        age,
        country,
        id: uId,    //ECMASCRIPT 5
    }
}

console.log(newUser("Andrés Caro", 19, "COL", 1));