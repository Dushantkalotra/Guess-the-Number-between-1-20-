'use strict';

/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `Correct Number!`;

document.querySelector(`.number`).textContent= 13;
document.querySelector(`.score`).textContent= 20;

console.log(document.querySelector(`.guess`).value);
document.querySelector(`.guess`).value = 23;
*/

let secretNumber = Math.trunc(Math.random()*20) + 1;


let score = 20;
let highscore = 0;

let displayMessage = function(message){
     document.querySelector(`.message`).textContent = message;

}


document.querySelector(`.check`).addEventListener(`click`, function () {
    const guess =Number( document.querySelector(`.guess`).value);
    console.log(guess);
    
    if(!guess) {
        displayMessage(`No Number!`);
        // document.querySelector(`.message`).textContent = `no Number!`;
    }
    else if(guess === secretNumber){
        displayMessage(`Correct Number!`);
        // document.querySelector(`.message`).textContent = `Correct Number!`;

        document.querySelector(`body`).style.backgroundColor = `green`;
        document.querySelector(`.number`).textContent = secretNumber;

        if(score > highscore){
            highscore = score;
            document.querySelector(`.highscore`).textContent = highscore;
        }
    }

    else if(guess !== secretNumber){
         if(score > 1){
            displayMessage(guess > secretNumber ? `Too High!`: `Too Low!`);
            // document.querySelector(`.message`).textContent = guess > secretNumber ? `Too High!`: `Too Low!`;
        score--;
        document.querySelector(`.score`).textContent = score;
        }
        else{
            displayMessage(`You lost the game!`);
            // document.querySelector(`.message`).textContent = `You lost the game!`;
            document.querySelector(`.score`).textContent = 0;

            document.querySelector(`body`).style.backgroundColor = `red`;
            document.querySelector(`.number`).textContent = secretNumber;
        }

    }



    // else if(guess >secretNumber){
    //     if(score > 1){
    //         document.querySelector(`.message`).textContent = `Too High!`;
    //     score--;
    //     document.querySelector(`.score`).textContent = score;
    //     }
    //     else{
    //         document.querySelector(`.message`).textContent = `You lost the game!`;
    //         document.querySelector(`.score`).textContent = 0;

    //         document.querySelector(`body`).style.backgroundColor = `red`;
    //         document.querySelector(`.number`).textContent = secretNumber;
    //     }
    // }
    // else if(guess <secretNumber){
    //     if(score > 1){
    //          document.querySelector(`.message`).textContent = `Too Low!`;
    //     score--;
    //     document.querySelector(`.score`).textContent = score;
    //     }
    //     else{
    //         document.querySelector(`.message`).textContent = `You lost the game!`;
    //         document.querySelector(`.score`).textContent = 0;

    //         document.querySelector(`body`).style.backgroundColor = `red`;
    //         document.querySelector(`.number`).textContent = secretNumber;
    //     }
       
    // }


})

document.querySelector(`.again`).addEventListener(`click`, function () {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage(`Start guessing...`);
    // document.querySelector(`.message`).textContent = `Start guessing...`;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.guess`).value = ``;
})