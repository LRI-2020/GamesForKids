import {GetWord} from "./wordsRepo.js";

let startGameBtn = document.getElementById('startGame-writeWords');
let stopGameBtn = document.getElementById('stopGame-writeWords');
let writeWordsForm = document.getElementById("writeWords-formGame");
let input = document.getElementById('input-writeWords-Response');
let wordExample = document.getElementById('section-writeWords-WordExample');
let backToMenuBtn = document.getElementById('btn-backToMenu__writeWords');

//Start Game when page load;
getNewWordToWrite();

// check answer when form submitted
writeWordsForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!IsNullOrEmpty(input.value)) {

        if (!IsCorrectAnswer(wordExample.innerText, input.value)) {
            input.value='';
        }
        
        else{
            // display well done;
            document.getElementById('wellDone--Wrapper').classList.toggle("hidden");
            setTimeout(function() {
                document.getElementById('wellDone--Wrapper').classList.toggle('hidden');
            }, 1000);
            input.value='';
            getNewWordToWrite();
        }
    }
    
});


//back to menu btn

backToMenuBtn.onclick = ()=> window.location="../../";

function IsNullOrEmpty(input) {
    return input === null || input === '' || (input.trim()).length === 0;
}

function IsCorrectAnswer(wordExample, input) {
    return wordExample.toLowerCase() === input.toLowerCase();
}

function getNewWordToWrite() {
    wordExample.innerText = GetWord();
}