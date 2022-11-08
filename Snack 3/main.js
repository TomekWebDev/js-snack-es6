const roadBikes = [
    {
        nome: "Pinnarello Dogma F12",
        peso: 9
    },
    {
        nome: "Trek Emonda",
        peso: 8
    },
    {
        nome: "Trek Madone",
        peso: 7
    },
    {
        nome: "Cinelli Stratofaster",
        peso: 6.9
    }
];


// let pesi = roadBikes.map(({peso}) => console.log(pesi));


// function findTheObjectWithSmallestProperty(){

//     let pesi = roadBikes.map((element) => element.peso);

//     console.log(pesi);

//     let minWeight = Math.min(...pesi);

//     console.log(minWeight);

//     let lightestBike = roadBikes.filter(({element, peso}) => peso === minWeight)

//     console.log(lightestBike);

//     document.getElementById("result").innerHTML = `${lightestBike[0].nome} che pesa ${lightestBike[0].peso} kg`

// }

// findTheObjectWithSmallestProperty();


// Metodo con for e variabile interna che controlla progressivamente se la proprietà in esame è la minore

let limit = 100;
let lighterModel;

for(i = 0; i < roadBikes.length; i++){
    let {peso, nome} = roadBikes[i];
    console.log(peso);
    if(peso < limit){
        limit = peso;
        lighterModel = nome;
    }
}

console.log(limit, lighterModel);

document.getElementById("result").innerHTML = `${lighterModel} che pesa ${limit} kg`

