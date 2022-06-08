// Numeri da 1 a 100
// Per i multipli di 3 stampi Fizz 
// al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia 
// multipli di 3 che di 5 stampi FizzBuzz.
// Stampare in console.

// Scorrere i numeri da 1 a 100
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
     
    console.log(message);
}
