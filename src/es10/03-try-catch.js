try {
    hello();
} catch (error) {
    console.error(error);
}


// Ahora tenemos libertad (sin embargo es mejor manejar el error)

try{
    anotherFn();
} catch{
    console.log("Esto es un error");
}