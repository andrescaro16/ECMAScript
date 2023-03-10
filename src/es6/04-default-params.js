function newUser(name, age, country) {
    var name = name || "Andrés";
    var age = age || 19;
    var country = country || "COL";
    console.log(name, age, country);
}

newUser();
newUser("Oscar", 15, "MX");


function newAdmin(name = "Andrés", age = 19, country = "COL") {
    console.log(name, age, country);
}

newAdmin();
newAdmin("Oscar", 15, "MX");