// let myDouble = 2.2;
// myDouble = myDouble + parseInt("1"); //convertir a un numero lo que sea que esté en los parentesis unless its something that cant be converted
//                                         // to number, in which case, console -> NaN (not a number)

// console.log(myDouble);

function log(message){
     console.log(message);
}
// log("Hola");

// //for extendido
let numbers = [1,2,3,4,5];
// for(let i=0; i < numbers.length; i++) log(numbers[i]);

// numbers.forEach(log)
// // Callback -> funcion que tiene como parametro otra función

// function myForEach(array, callback){
//     for (let i=0; i<array.length; i++)
//         callback(array[i]);
// }

// myForEach(numbers, log);

// numbers.forEach((n) => console.log(n));

numbers
.map((n) => (n-1))
.filter((n => (n>2)))
.forEach(log);

let s= numbers.reduce((a,n) => {
    return a+n;
}, 0); //reduce tiene un acomulador "a" con valor inicial 0

//OBJETOS
let contact = new Object();

contact.name = "pepe";
contact.phone = 872364872;
//equivalente
//JSON
let contact2 = {
    name: "luis",
    phone: "02934980",
    children: {
        name: "Pedro",
        toys: ["lego", "duplo"]
    }
};

contact3.print = function(){
    console.log(this.name +","+this.phone);
}