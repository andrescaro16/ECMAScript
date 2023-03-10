// Declaración
class user {};
// Instancia
//const newUser = new User();


class user {
    // Métodos
    greeting(){
        return "Hello!";
    }
};

const andres = new user();
console.log(andres.greeting());

const julian = new user();
console.log(julian.greeting());


// Constructor
class user{
    constructor(){
        console.log("Nuevo usuario");
    }
    greeting(){
        return "Hello!";
    }
};

const david = new user();


// this
class user {
    
    constructor(name){
        this.name = name;
    };

    // metodos
    speak(){
        return "Hello";
    };
    greeting(){
        return `${this.speak()} ${this.name}`;
    };
};

const ana = new user("Ana");
console.log(ana.greeting());


// setters and getters
class user{
    constructor(name, age){
        this.name = name;
        this.age = age;
    };

    speak(){
        return "Hello";
    };

    greeting(){
        return `${this.speak()} ${this.name}`;
    };

    get uAge (){
        return this.age;
    }

    set uAge(n){
        this.age = n;
    }
};

const Andrew = new user("Andrew", 15);
console.log(Andrew.uAge);
console.log(Andrew.uAge=20);