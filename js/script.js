// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// let number = 0;
// let result = 0;

// for (let i = 0; i < 5; i++) {
//     number = prompt("Inserisci un numero");
//     while(isNaN(number)){
//         number = prompt("Errore :Inserisci un numero");
//     }
//     result += parseInt(number);
// }

// let i = 0;

// while(i < 5) {
//     number = prompt("Inserisci un numero");
//     while (isNaN(number)) {
//         number = prompt("Errore :Inserisci un numero");
//     }
//     result += parseInt(number); 
//     i++;
// }

// alert("Il risultato è: " + result);

// ***********************************************************

// JSnack 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// let parola1 = prompt("Inserisci una parola:")
// let parola2 = prompt("Inserisci un'altra parola:")

// if(parola1.length == parola2.length){
//     document.body.innerHTML += `<div>${parola1}</div>`
//     document.body.innerHTML += `<div>${parola2}</div>`
//     console.log(parola1, parola2);
// } else if (parola1.length > parola2.length){
//     document.body.innerHTML += `<div>${parola1}</div>`
//     console.log(parola1);
// } else {
//     document.body.innerHTML += `<div>${parola2}</div>`
//     console.log(parola2);

// }

// ***********************************************************

//     JSnack 3
// Stampa le potenze di 2 fino a 1000.

let N = 2;

document.body.innerHTML += `<div>${N}</div>`

while(N <= 1000){
    N = N * 2
    document.body.innerHTML += `<div>${N}</div>`
}