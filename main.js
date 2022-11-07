// // Esercizio 1 - forEach

// let myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// let newArray = [];

// console.log(myArray.length);

// let min = parseInt(prompt("Inserisci numero minimo"));

// let max = parseInt(prompt("Inserisci numero minimo"));

// if(min >= 0 && max <= (myArray.length) - 1){

//     myArray.forEach((element, index) => {
//         if(index >= min && index <= max){
//             newArray.push(element)
            
//         }
//     })

// }
// else{
//     alert(`Number must be between 0 and ${myArray.length - 1}`)
// }

// console.log(newArray);

// // Esercizio 1 - filter

// let myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];


// console.log(myArray.length);

// let min = parseInt(prompt("Inserisci numero minimo"));

// let max = parseInt(prompt("Inserisci numero minimo"));

// if(min >= 0 && max <= (myArray.length) - 1){

//     let newArray = myArray.filter((element, index) => {
//         if(index >= min && index <= max){

//             return true;

//         }
//         return false;
      
        
//     });
//     console.log(newArray);

// }
// else{
//     alert(`Number must be between 0 and ${myArray.length - 1}`)
// }

// Esercizio 2

let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];

// primo punto

let nameUppercase = students.map((element) => {
    return element.name.toUpperCase();
});
  
console.log(nameUppercase);

// secondo punto

let over70 = students.filter((element) => {
    if(element.grades > 70){
        return true;
    }
    return false;
});

console.log(over70);

// prima modalità per filtrare con 2 "parametri"

let over70over120 = students.filter((element) => {
    if(element.grades > 70 && element.id > 120){
        return true;
    }
    return false;
});

console.log(over70over120);

// seconda modalità con includes che lavora sull'array creata dal filtro precedente

let over70over120Variant = students.filter((element) => {
    if(element.id > 120 && over70.includes(element)){
        return true;
    }
    return false;
});

console.log(over70over120Variant);



