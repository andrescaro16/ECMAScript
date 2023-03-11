const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));

// Devuelve array de objetos con estado y valor de cada promesa (haya sido resuelta o no)
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

// Se resuelve si y solo si todas las promesas fueron resueltas
Promise.all([promise1, promise2, promise3])
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))