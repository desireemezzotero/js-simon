/* richiamo le variabili del DOM e le salvo in una variabile */
const timerSecond    = document.querySelector('.timer');
const numberRandom   = document.querySelector('.number');
const memorizeNumber = document.querySelector('.memorize');
const insertNumber   = document.querySelector('.insert');
const inputNumber    = document.querySelector('input');
const btnControl     = document.querySelector('.btn')

/* timing function per lo scalare dei secondi */
let counter = 1;
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
function controll(){
  for (let i = 0; i < inputNumber.lenght; i++) {
    if (inputNumber[i].insert(arrayNumberRandom.lenght)) {
      message = 'correct'; 
      console.log(message)
    }
  }
}













