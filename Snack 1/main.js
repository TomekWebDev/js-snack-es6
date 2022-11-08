// Esercizio 1 - forEach

// let myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// let newArray = [];

// console.log(myArray.length);

// let min = parseInt( prompt("Inserisci numero minimo"));

// let max = parseInt( prompt("Inserisci numero minimo"));

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

// Esercizio 1 - filter

let myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];


console.log(myArray.length);

let min = parseInt(prompt("Inserisci numero minimo"));

let max = parseInt(prompt("Inserisci numero minimo"));

if(min >= 0 && max <= (myArray.length) - 1){

    let newArray = myArray.filter((element, index) => {
        if(index >= min && index <= max){

            return true;

        }
        return false;
      
        
    });
    console.log(newArray);

}
else{
    alert(`Number must be between 0 and ${myArray.length - 1}`)
}