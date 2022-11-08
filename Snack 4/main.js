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

let newArray = [];

for(i = 0; i < teams.length; i++){
    let {nome, fouls} = teams[i];
    let obj = {...teams.fouls, nome, fouls}

    newArray.push(obj)
}

console.log(newArray);



