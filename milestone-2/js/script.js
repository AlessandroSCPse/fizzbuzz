// Numeri da 1 a 100
// Per ogni numero, data una ul nel DOM, 
// aggiungete un elemento html li con il 
// numero o la stringa corretta (seguendo 
// le regole della Milestone 1).

// Scorrere i numeri da 1 a 100
// Per ogni numero creiamo una li la stringa appropriata
// Appendo la li creata alla ul
const mainList = document.querySelector('.list');

for(let i = 1; i <= 100; i++) {
    let message;

    // Per ogni numero
    // stampiamo in console la stringa appropriata:
    // multiplo di 3 e 5 stampo FizzBuzz
    // multiplo di 5 stampo Buzz
    // multiplo di 3 stampo Fizz
    // altrimenti stampo il numero
    // ATTENZIONE: la prima if non va toccata altrimenti il programma non funziona
    if(i % 3 === 0 && i % 5 === 0) {
        message = 'FizzBuzz';
    } else if(i % 5 === 0) {
        message = 'Buzz';
    } else if (i % 3 === 0) {
        message = 'Fizz';
    } else {
        message = i;
    }

    // Per ogni numero creiamo una li la stringa appropriata
    // Appendo la li creata alla ul
    const newLi = `<li>${message}</li>`;
    mainList.innerHTML += newLi;
}
