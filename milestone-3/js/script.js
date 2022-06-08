// Numeri da 1 a 100
// Per ogni numero, dato un container nel DOM, 
// appendi un elemento html con il numero o la stringa corretta.
// Applica uno stile differente a seconda del 
// valore dell'indice per i multipli di 3, 
// per i multipli di 5 e per i valori che 
// sono sia multipli di 3 che di 5 
// (seguendo le regole della Milestone 1).

// Prima di fare il ciclo che riempie il container
// lo seleziono cosi ce l'ho a disposizione nel ciclo

// -----------------

// Esempio con selezione del container nel ciclo:
// 1- Container vuoto
// 	lo seleziona -> aggiunge il box 1
// 2- Container ha 1 box
// 	lo seleziona -> aggiunge il numero 2
// 3- Container ha 2
// 	lo seleziona -> aggiunge il numero 3

// ----------------

// // Esempio con selezione del container fuori dal ciclo:
// 1- Container è vuoto
// 	aggiungi il box 1 al container
// 2- Container ha 1 box
// 	aggiungi il box 2 al container

const boxesContainer = document.querySelector('.boxes-container');

// Scorro i numeri da 1 a 100
for(let i = 1; i <= 100; i++) {
    // Per ogni numero:
    // Creare un nuovo box con testo e eventuale classe per lo sfondo
    // Aggiungo il box al boxes-container
    // multiplo di 3 e 5 stampo FizzBuzz
    // multiplo di 5 stampo Buzz
    // multiplo di 3 stampo Fizz
    // altrimenti stampo il numero
    // ATTENZIONE: la prima if non va toccata altrimenti il programma non funziona
    let message;
    let boxColorClass;
    
    if(i % 3 === 0 && i % 5 === 0) {
        message = 'FizzBuzz';
        boxColorClass = 'fizzbuzz';
    } else if(i % 5 === 0) {
        message = 'Buzz';
        boxColorClass = 'buzz';
    } else if (i % 3 === 0) {
        message = 'Fizz';
        boxColorClass = 'fizz';
    } else {
        message = i;
        boxColorClass = '';
    }

    // Creo un nuovo box
    const newBox = `<div class="box ${boxColorClass}">${message}</div>`;
    // Aggiungo il box al container
    boxesContainer.innerHTML += newBox;
}