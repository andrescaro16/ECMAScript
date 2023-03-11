// # vuelve el método privado y solo se podrá acceder desde la propia clase

class user{
    constructor(name, age){
        this.name = name;
        this.age = age;
    };

    #speak(){
        return "Hello";
    };

    greeting(){
        return `${this.speak()} ${this.name}`;
    };

    get #uAge (){
        return this.age;
    }

    set #uAge(n){
        this.age = n;
    }
};

const Andrew = new user("Andrew", 15);
console.log(Andrew.uAge);
console.log(Andrew.uAge=20);