const teams = [
    {
        nome: "Milan",
        points: 0,
        fouls: 0
    },
    {
        nome: "Inter",
        points: 0,
        fouls: 0
    },
    {
        nome: "Juve",
        points: 0,
        fouls: 0
    },
    {
        nome: "Atalanta",
        points: 0,
        fouls: 0
    },
]

let maxPoints = 90;
let maxFouls = 100;

let newValue = Math.random() * 3;

for(i = 0; i < teams.length; i++){
    teams[i].points = Math.random() * 10; // da sostituire con numero random o input
    teams[i].fouls = Math.round(Math.random()*3); // da sostituire con numero random o input
}

console.log(teams);

// let newArray = [];

// for(i = 0; i < teams.length; i++){
//     let {nome, fouls} = teams[i];
//     let obj = {...teams.nome, nome, fouls}

//     newArray.push(obj)
// }

// console.log(newArray);

/**

in questo ciclo ad ogni giro destruttura un oggetto per volta in nome e falli,
e li salva provvisoriamente.

lo SPREAD (...array.proprietà) va a prendere l'oggetto che riconosce grazie alla proprietà
che gli passi. 
Le proprietà che specifichi dopo (nome, fouls) sono quelle che vengono salvate nel nuovo oggetto.

il nuovo oggetto viene pushato nella nuova array


**/

//tentativo con map() di fare la stessa cosa passando solo i parametri che voglio io
// c'è un modo di scrivere map in cui gli dico:
// prendi queste due proprietà dall'oggetto che sto mappando e usale 
// per creare un oggetto per la nuova array che abbia SOLO quelle due proprietà

let arrayNuova = teams.map((element, nome, fouls) => element, {nome, fouls})

console.log(arrayNuova);