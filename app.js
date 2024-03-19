const rollDice = document.querySelector(".rollDice");
/*function to change bgcolors of left and right game zone*/
function toToggleColor() {
    const rightGameZone = document.querySelector('.rightGameZone');
    const leftGameZone = document.querySelector('.leftGameZone');
    if(activePlayer === 1){
        leftGameZone.style.backgroundColor=('rgb(236, 126 , 214)');
        rightGameZone.style.backgroundColor=('rgb(244, 178, 231)');
    }
    else if(activePlayer === 2){
        rightGameZone.style.backgroundColor=('rgb(236, 126 , 214)');
        leftGameZone.style.backgroundColor=('rgb(244, 178, 231)');
    }
}
const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2');
/*function to hold the values of current scores*/
function toHoldFunction()  {
    const toHold = document.querySelector('.toHold');
    toHold.addEventListener('click',function(){
        if(activePlayer === 1 && scoreForPlayer1 === 0 ){
            return;
        }
        else if(activePlayer === 2 && scoreForPlayer2 === 0){
            return;
        }
        else if(activePlayer === 1){
            score1.textContent=`${scoreForPlayer1 + Number(score1.textContent)}`;
            activePlayer = 2;
            currentScore1.textContent = 0;
            scoreForPlayer1=0;
        }
        else if(activePlayer === 2){
            score2.textContent=`${scoreForPlayer2 + Number(score2.textContent)}`;
            activePlayer = 1
            currentScore2.textContent = 0;
            scoreForPlayer2=0;
        }
        toToggleColor();
    });  
}
let activePlayer = 1;
/*code to reset game */
const toolBoxImg = document.querySelector(".toolBoxImg");
const currentScore1 = document.querySelector(".currentScore1");
const currentScore2 = document.querySelector(".currentScore2");
let scoreForPlayer1 = 0;
currentScore1.textContent=`${scoreForPlayer1}`;
let scoreForPlayer2 = 0;
currentScore2.textContent=`${scoreForPlayer2}`;
const newGame = document.querySelector('.newGame');
function restartGame(){
    toolBoxImg.style.display=('none');
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;
    score1.textContent=0;
    score2.textContent=0;
    scoreForPlayer1 =0;
    scoreForPlayer2 = 0;
    activePlayer=1;  
}
function resetGame() {newGame.addEventListener('click',restartGame);}
/*code to check windowLogic function condition*/
function checkWinCondition() {
    if(parseInt(score1.textContent) >= 100){
        alert("PLAYER ON LEFT WON THE GAME");
        restartGame();
    }
    else if(parseInt(score2.textContent) >= 100){
        alert("PLAYER ON RIGHT WON THE GAME");
        restartGame();
    }
}
/*to set the value of current score of both players and switching players and spin dice*/
rollDice.addEventListener('click',function(){
    /* generating random dice number*/
    let diceNumber = Math.ceil(Math.random() * 6);
    console.log(diceNumber);
    toolBoxImg.style.display='flex';
    toolBoxImg.src=`dice-${diceNumber}.png`;
    if(diceNumber !== 1 && activePlayer === 1){
        scoreForPlayer1=scoreForPlayer1+diceNumber;
        currentScore1.textContent=`${scoreForPlayer1}`;
    }
    else if(diceNumber !== 1 && activePlayer === 2){
        scoreForPlayer2=scoreForPlayer2+diceNumber;
        currentScore2.textContent=`${scoreForPlayer2}`
    }
        /*function to switch players */
    function switchPlayers() {
        if(diceNumber === 1){
           if(activePlayer === 1){
             activePlayer = 2;
             scoreForPlayer1 = 0;
             currentScore1.textContent=0;
           }
           else if(activePlayer === 2){
             activePlayer = 1
             scoreForPlayer2 = 0;
             currentScore2.textContent=0;
           }
        toToggleColor();
    }
 }
    switchPlayers();
    diceNumber = Math.ceil(Math.random() * 6);
    checkWinCondition();
});
toToggleColor();
toHoldFunction();
resetGame();

