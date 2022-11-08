
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

// primo punto - sintassi estesa

// let nameUppercase = students.map((element) => {
//     return element.name.toUpperCase();
// });

// sintassi abbreviata - si possono scrivere cosi tutte le seguenti (in generale con le arrow function)

let nameUppercase = students.map((element) => element.name.toUpperCase());
  
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

// let over70over120 = students.filter((element) => {
//     if(element.grades > 70 && element.id > 120){
//         return true;
//     }
//     return false;
// });

let over70over120 = students.filter(({grades, id}) => grades > 70 && id > 120);
// let nuovaArray = array da filtrare .filter ( ( {elemento oggetto 1, elemento oggetto 2} ) => condizione dei due elementi presi a parametro )


console.log(over70over120);

// seconda modalità con includes che lavora sull'array creata dal filtro precedente

let over70over120Variant = students.filter((element) => {
    if(element.id > 120 && over70.includes(element)){
        return true;
    }
    return false;
});

console.log(over70over120Variant);

// terza modalità

let thirdVariant = over70.filter((element) => {
    if(element.id > 120){
        return true;
    }
    return false;
});

console.log(thirdVariant);
