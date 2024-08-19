

const draggables = document.querySelectorAll(".draggable");   // Har flera element med samma klass, därför All på slutet. (Flera av samma class = Array och kan därfö använda forEach Loop)
const blank = document.getElementById("blank");          // # behövs inte då vi hämtar med getElementById
const answerPool = document.getElementById("answerPool"); 
const checkAnswer = document.getElementById("checkAnswer"); 
const answerMessage = document.getElementById("answerMessage"); 
let answer = "";                                                    // answer har inget värde, den får ett värde i blank funktionen.

checkAnswer.addEventListener('click', function (){
    const correctAnswer = "html";

    if (answer === correctAnswer) {
        answerMessage.style.display = "block";
        answerMessage.textContent = "Your answer is correct!";
        answerMessage.style.color = "yellow";
    } else {
        answerMessage.style.display = "block";
        answerMessage.textContent = "Your answer is incorrect!";
        answerMessage.style.color = "red";
    }
})


draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData('text/plain', event.target.textContent)                // event triggar dragstart som sätter igång setData. setData vill förvara data
    })
})


blank.addEventListener('dragover', function(event) {
    event.preventDefault();                                 // data, t ex HTML och inputbox har inbyggda default beteenden. Denna kod hindrar den normala standard processen.

})


blank.addEventListener('drop', function (event) {
    event.preventDefault(); 
    answer = event.dataTransfer.getData('text/plain').toLowerCase();               
    blank.value = answer
})


// .dataTransfer är ett objekt som håller minnet av objectet som dras eller släpps.. I detta fall släpps. 
// .getData är att funktionen tar emot data från dataTransfer.
// toLowerCase = Gär det lättare filtrera data när användare skriver in sina svar.