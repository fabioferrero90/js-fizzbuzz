// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

// Inizio il ciclo for 
for( let i = 1 ; i <= 100; i++ ){
  //Da questo momento ogni esecuzione di questo codice avverrà con un valore "i" progressivo da 1 a 100
  let message = i
  //Controllo che il numero sia divisibile per 5 e per 3 altrimenti vado avanti
  if ((i % 3) === 0 && (i % 5) === 0){
    message = "FizzBuzz"
    //Controllo che il numero sia divisibile per 3
  } else if ((i % 3) === 0){
    message = "Fizz"
    //Controllo che il numero sia divisibile per 5
  } else if ((i % 5) === 0){
    message = "Buzz"
  }
    //Stampo il messaggio in console
  console.log(message)
}
// Fine del ciclo for

