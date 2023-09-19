import {GetWord} from "./wordsRepo.js";

let startGameBtn = document.getElementById('startGame-writeWords');
let stopGameBtn = document.getElementById('stopGame-writeWords');
let writeWordsForm = document.getElementById("writeWords-formGame");
let input = document.getElementById('input-writeWords-Response');
let wordExample = document.getElementById('section-writeWords-WordExample');

//start and stop game

startGameBtn.onclick = function () {

    document.getElementById('c-section-writeWords_gameWrapper').classList.toggle("hidden");
    getNewWordToWrite();
}

stopGameBtn.onclick = function () {

    document.getElementById('c-section-writeWords_gameWrapper').classList.toggle("hidden");
}

// check answer
writeWordsForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!IsNullOrEmpty(input.value)) {

        if (!IsCorrectAnswer(wordExample.innerText, input.value)) {
            input.value='';
        }
        
        else{
            // alert("Bien joué!");
            document.getElementById('wellDone--Wrapper').classList.toggle("hidden");
            setTimeout(function() {
                document.getElementById('wellDone--Wrapper').classList.toggle('hidden');
            }, 1000);
            input.value='';
            getNewWordToWrite();
        }
    }
    
});

function IsNullOrEmpty(input) {
    return input === null || input === '' || (input.trim()).length === 0;
}

function IsCorrectAnswer(wordExample, input) {
    return wordExample.toLowerCase() === input.toLowerCase();
}

function getNewWordToWrite() {
    wordExample.innerText = GetWord();
}