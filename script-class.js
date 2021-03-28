function palla(){
  // creare oggetto palla caratterizzato da nome, peso e colore
// e loggare l'intera struttura.
// chiedere all'utente il colore della palla e valorizzare il campo
// corrispondente
// loggare poi l'oggetto risultante
  var palla = {
    "nome": "nicola",
    "peso": 90,
    "colore": "giallo"
  }

  palla["cognome"] = "milani"; //pushata nuova chiave + valore
  palla["nome"] = "ugo"; //sostituito vlaore a chiave esistente
  palla["colore"] = prompt("dimmi colore");
  console.log(palla);
  console.log(palla["nome"][0],palla["nome"][1],palla["nome"][2]);

  for(var key in palla){ //ciclo per estrarre tutte le chiavi:valori
    var value = palla[key]; //seleziono valori corrispondenti a key
    console.log(key,value);
  }

}


function triangle(){
  // richiedere all'utente base e altezza di un triangolo rettangolo
// valorizzare un oggetto con le dimensioni del triangolo
// loggare triangolo e relativa area
  var triangolo = {
    "base" : parseInt(prompt("dimmi base")),
    "altezza" : parseInt(prompt("dimmi altezza"))
  }

  var area = triangolo["base"]*triangolo["altezza"]/2;
  triangolo["area"] = area;
  console.log(triangolo);
  console.log(area);

}


function zucchina(){
  // Crea un array di 10 oggetti che rappresentano una
// zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

  var zucchine = [
    {
      "var" : "peruviana",
      "lunghezza" : 10,
      "peso" : 20
    },
    {
      "var" : "messicana",
      "lunghezza" : 14,
      "peso" : 25
    },
    {
      "var" : "brasiliana",
      "lunghezza" : 20,
      "peso" : 30
    },
    {
      "var" : "argentina",
      "lunghezza" : 50,
      "peso" : 200
    },
    {
      "var" : "colombiana",
      "lunghezza" : 100,
      "peso" : 320
    }
  ]

  console.log("peso totale: ",getPesoSum(zucchine), " kg"); //function esterna
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine

  var short = [];
  var long = [];
  for(var i=0;i<zucchine.length;i++){
    var zucchina = zucchine[i];
    var zucchinaLength = zucchina["lunghezza"];
    if(zucchinaLength<15){
      short.push(zucchina);
    } else {
      long.push(zucchina);
    }
  }

  console.log("peso corte ",getPesoSum(short));  //function esterna
  console.log("peso lunghe ",getPesoSum(long));  //function esterna

}

function getPesoSum(array){
  var sum = 0;
  for(var i=0;i<array.length;i++){
    var elem = array[i];
    var elemWeight = elem["peso"];
    sum = sum + elemWeight;
  }
  return sum;
}


function reverseWord(word){
  // Scrivi una funzione che accetti una stringa come
  // argomento e la ritorni girata (es. Ciao -> oaiC)
  var splittedStr = word.split("");
  console.log(splittedStr);
  var reversedArray = splittedStr.reverse();
  console.log(reversedArray);
  var joinedArray = reversedArray.join("");
  console.log(joinedArray);
  return joinedArray;
}

function reverseWordCycle(word){
  var str = word;
  var reversedArray =[];
  var wordReverse = "";
   for(var i=(str.length-1);i>=0;i--){
    var letter = str[i];
    console.log(letter);
    reversedArray.push(letter);
    wordReverse += letter;
  }
  console.log(reversedArray);
  console.log(wordReverse);
  return wordReverse;
}


function alternateArray(){
  // Scrivi una funzione che fonda due array (aventi lo stesso
  // numero di elementi) prendendo alternativamente gli
  // elementi da uno e dall'altro
  // es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
  var total = [ ["a","b","c"],[1,2,3] ];
  var array = [];

  for(var i=0;i<3;i++){
    var letter = total[0][i];
    var number = total[1][i];
    array.push(letter);
    array.push(number);
  }
  console.log(array);
}

function splitter(min,max,array){
//   Scrivi una funzione che accetti tre argomenti:
// un array e due numeri ("a" più piccolo di "b" e "b" grande al
// massimo quanto il numero di elementi dell'array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra "a" e "b"
  var arraySplitted = [];

  for(var i=min;i<=max;i++){

    var value = array[i];
    arraySplitted.push(value);

  }
  return arraySplitted;
}


function esArraySplitter() {
    var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    var indMin = 3;
    var indMax = 7;
    var splitted = splitter(indMin, indMax, arr);

    console.log(splitted);
}

function bicycle(){
  // Creare un array di oggetti: ogni oggetto descriverà
// una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
  let bicycles = [
    {
      name:"Cinzia",
      "peso": 9
    },
    {
      name:"Paola",
      "peso": 80
    },
    {
      name:"Anna",
      "peso": 50
    }
  ];

  let lighter = {
    name : "massimo",
    "peso" : Number.MAX_VALUE
  }

  for(let i=0;i<bicycles.length;i++){

    const bicycle = bicycles[i];
    const {name,peso} = bicycle;

                       // bicycle["peso"]
    if(lighter["peso"] > peso){
      lighter = bicycle;
    }

  }

  console.log(lighter);

}



function teams(){
    // Creare un array di oggetti di squadre di calcio.
    // Ogni squadra avrà diverse proprietà:
    // nome, punti fatti, falli subiti.
    // Nome sarà l'unica proprietà da compilare,
    // le altre saranno tutte settate a 0.
    // Generare numeri random al posto degli 0 nelle proprietà:
   // punti fatti e falli subiti.
   // Usando la destrutturazione creiamo un nuovo array
    // i cui elementi contengono solo nomi e falli subiti
    // e stampiamo tutto in console.
    const teams = [
      {
        nome: "Mavericks",
        punti: 0,
        falli:0
      },
      {
        nome: "Bucks",
        punti: 0,
        falli:0
      },
      {
        nome: "Lakers",
        punti: 0,
        falli:0
      },
    ]


    for(let i=0;i<teams.length;i++){
      const team = teams[i];
      const rndPoint = getRndNumber(1,99);
      team["punti"] = rndPoint;
      const rndFouls = getRndNumber(1,99);
      team["falli"] = rndFouls;
    }

    console.log("modified ", teams);

    let newTeams = [];
    for(let i = 0;i<teams.length;i++){
      const team = teams[i];
      let {nome,falli} = team;
      let newTeam = {nome,falli};
      newTeams.push(newTeam);
    }

    console.log(newTeams);

}

function getRndNumber(min,max){
  const minRnd = min;
  const maxRnd = max-minRnd+1;
  const rndNum = Math.floor(Math.random()*maxRnd)+minRnd;
  // console.log(rndNum);
  return rndNum;
}

// SVOLGIMENTO CON DESTRUTTURAZIONE ARRAY [punti,falli]
function teamsBonus(){
  const teams = [
    {
      nome: "Mavericks",
      punti: 0,
      falli:0
    },
    {
      nome: "Bucks",
      punti: 0,
      falli:0
    },
    {
      nome: "Lakers",
      punti: 0,
      falli:0
    },
  ]

  for(let i =0 ; i<teams.length;i++){
    const team = teams[i];
    [team["punti"],team["falli"] ]= getRndCouple(1,100);
  }
  console.log(teams);
}




function getRndCouple(min,max){
  const minRnd = min;
  const maxRnd = max-minRnd+1;
  const rndNum1 = Math.floor(Math.random()*maxRnd)+minRnd;
  const rndNum2 = Math.floor(Math.random()*maxRnd)+minRnd;

  return [rndNum1,rndNum2];
}


function init(){
  // palla();
  // triangle();
  //zucchina();
  // reverseWord("ciao");
  // reverseWordCycle("ciao");
  // alternateArray();
  // esArraySplitter();
  // bicycle();
  // teams();
  teamsBonus();

}


$(document).ready(init);
