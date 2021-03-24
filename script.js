// ESERCIZIO 1
// Generatore di "nomi cognomi" casuali: prendendo una
// lista di nomi e una lista di cognomi, Gatsby vuole
// generare una falsa lista di invitati.
function nameListGenerator (){
  var names = ['Michele', 'Fabio', 'Roberto'];
  var lastnames = ['Forghieri', 'Papagni', 'Marazzini'];
  var fullnames = [];

  for (var i = 0; i < 5; i++) {
    var namesRnd = names[Math.floor(Math.random()*3)];
    var lastnamesRnd = lastnames[Math.floor(Math.random()*3)];
    var fullname = namesRnd + " " + lastnamesRnd;

    console.log(fullname);
    fullnames.push(fullname);
  }

  console.log(fullnames);
}
// richiamo funzione
// $(document).ready(nameListGenerator);



// ESERCIZIO 2
// <!-- creare 2 array di lunghezza uguale, partendo da array di lunghezze diverse -->
function sameArray(){

  var arr1 = [12,3,45,6];
  var arr2 = [166, 7,8,9,23,67,89];
  var arrMin = "SONO UGUALI";
  var arrMax = "SONO UGUALI";

  if (arr1.length < arr2.length) {
    arrMin = arr1;
    arrMax = arr2;
  } else if (arr1.length > arr2.length) {
    arrMax = arr1;
    arrMin = arr2;
  }

  console.log("l'array più piccolo: " ,arrMin);

  while (arrMin.length < arrMax.length) {
    var numRnd = Math.ceil(Math.random()*10);
    arrMin.push(numRnd);
  }

  console.log("Array con lunghezza uguale : ",arr1,arr2);
}
// richiamo funzione
// $(document).ready(sameArray);



// ESERCIZIO 3
// Chiedere all'utente un valore limite, poi richiedere all'utente una serie di valori
// finche' la somma non supera il valore limite e stampare i valori forniti dall'utente
function sumPromptNumbers(){
  var bigNum = parseInt(prompt("Dimmi il numero da raggiungere"));
  var sum = 0;
  console.log("Numero da raggiungere ",bigNum);

  while (sum <= bigNum){
    var partialNum = parseInt(prompt("Dimmi i numeri per raggiungere"));
    sum = sum + partialNum;
    if ( sum <= bigNum){
      var message = "Somma parziale : "
    } else {
      var message = "Somma totale : "
    }
    console.log("Numero random" , partialNum, message, sum);
  }
}
// richiamo funzione
// $(document).ready(sumPromptNumbers);



// ESERCIZIO 4
// Crea due tag div con due id diversi.
// Un div avrà il testo colorato di rosso mentre l'altro di verde.
// Partendo da un array di numeri, stampiamo nell'id rosso i numeri
// dispari e in verde i numeri pari.
function oddPairGreenRed(){
  var numbersDiv = [15, 20, 1, 3, 22];
  var insertDispari = document.getElementById("rosso");
  var insertPari = document.getElementById("verde");

  for (i=0;i<numbersDiv.length;i++){

    if (numbersDiv[i] % 2 == 1){
      insertDispari.innerHTML += numbersDiv[i] + "<br>";
    } else {
      insertPari.innerHTML += numbersDiv[i] + "<br>";
    }

  }
}
// richiamo funzione
// $(document).ready(oddPairGreenRed);



// ESERCIZIO 4-BONUS
// Crea due tag div con due id diversi.
// Un div avrà il testo colorato di rosso mentre l'altro di verde.
// Partendo da un array di numeri GENERATI CASUALMENTE, stampiamo nell'id rosso i numeri
// dispari e in verde i numeri pari.
function randomGenerator(min,max,totLength){
  var array = [];
  var minRnd = min;
  var maxRnd = max-min+1;

  while(array.length<totLength){
    var numRnd = Math.floor(Math.random()*maxRnd)+minRnd;

    if(!array.includes(numRnd)){
      array.push(numRnd);
    }

  }
  return array;
}

function oddPairGreenRedBonus(){
  var numbersDiv = randomGenerator(1,99,10);
  var insertDispari = document.getElementById("rosso");
  var insertPari = document.getElementById("verde");

  for (i=0;i<numbersDiv.length;i++){

    if (numbersDiv[i] % 2 == 1){
      $("body").append('<div id="rosso">'+numbersDiv[i]+'</div>');
    } else {
      $("body").append('<div id="verde">'+numbersDiv[i]+'</div>');
    }

  }
}
// richiamo funzione
// $(document).ready(oddPairGreenRedBonus);



// OBJECTS EXERCISE
// Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// // schermo attraverso il for in tutte le proprietà.
function init(){
  var student = {
    "nome" : "gino",
    "cognome" : "paoli",
    "eta" : "80"
  }
  console.log(student);
  for(var key in student){
    var value = student[key];
    console.log(key,value);
  }
}

$(document).ready(init);
