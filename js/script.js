/* richiamo le variabili del DOM e le salvo in una variabile */
const timerSecond    = document.querySelector('.timer');
const numberRandom   = document.querySelector('.number');
const memorizeNumber = document.querySelector('.memorize');
const insertNumber   = document.querySelector('.insert');
const inputNumber    = document.querySelectorAll('input');
const btnControl     = document.querySelector('.btn')
const comment        = document.querySelector('.comment')

/* timing function per lo scalare dei secondi */
let counter = 10;
const clock = setInterval(function(){
  counter --;
  timerSecond.innerHTML = counter;

  if(counter <= 0){
    clearInterval(clock);

    /* quando i secondi finiscono viene rimosso il div per memorizzare i numeri e appare quello per l'inserimento dei numeri*/
    memorizeNumber.classList.add('hide');
    insertNumber.classList.remove('hide');
  }

},1000);

/* genera numeri random e salvali in un array */
const arrayNumberRandom = [];
for ( let i = 0; i < 5; i++) {
  arrayNumberRandom.push(Math.ceil(Math.random() * 50));
}
numberRandom.innerHTML = arrayNumberRandom.join(' ');
console.log(arrayNumberRandom)

/* salva i numeri inseriti in una variabile */
btnControl.addEventListener('click', controll)

/* funzione che controlla se i numeri sono giusti o meno */
/* inputNumber è un nodeList, per questo non posso utilizzare .value. Per risolvere questo problema creo un un ciclo for dove ogni elemento della nodeList viene pushato in un nuovo array */
let arrayNumberInsert = []
let message;
let arrayNumberCorrect = []
let arrayNumberWrong = []

function controll(){
  for (let i = 0; i < inputNumber.length; i++) {
    arrayNumberInsert.push(inputNumber[i].value);
  }
  
  for (let i = 0; i < arrayNumberInsert.length; i++) {
    if (arrayNumberRandom.includes(parseInt(arrayNumberInsert[i]))){
      arrayNumberCorrect.push(arrayNumberInsert[i]);
      message = `i numeri corretti sono ${arrayNumberCorrect}`
    } else{
      arrayNumberWrong.push(arrayNumberInsert[i]);
      message = `i numeri errati sono ${arrayNumberWrong}`
    }
  }
  console.log(message)
  
  comment.innerText = message
  comment.classList.remove('hide')
}

/* stampiamo nella pagina */
















