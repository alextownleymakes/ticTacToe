// VARIABLES

var exesAndOhs = [0,0,0,0,0,0,0,0,0];
var playerTurn = 0;
var delay = 1500;
var oneOrTwo;
var clickedSquare;

// FUNCTIONS

// Hides the game until game type is selected
function hideGame() {
    document.getElementById('GameplayDisable').style.visibility = "visible";
}

// Sets the backgrounds of the divs where game type is selected
function setGametypeBackground() {

        document.getElementById('200').style.backgroundImage = "url(rb/images/computer.png)";
        document.getElementById('100').style.backgroundImage = "url(rb/images/twoPlayers.png)";
}

// Picks between one and two players, and does some visual work to reflect that
function playerOrComputer() {
    $('.vs-choice').on('click', function() {
        document.getElementById('GameplayDisable').style.visibility = "hidden";
        document.getElementById('GametypeDisable').style.visibility = "visible";
         document.getElementById('GameplayDisable').style.top = "0px";
        oneOrTwo = this.id;
        console.log(oneOrTwo);
    if (oneOrTwo == 100) {
        document.getElementById('computerTurn').innerHTML = "PLAYER TWO";
        document.getElementById('200').style.backgroundImage = "url()";
        document.getElementById('100').style.backgroundImage = "url()";
        document.getElementById('300').style.backgroundImage = "url(rb/images/twoPlayers.png)";
        document.getElementById('vsText').innerHTML = "vs player";
        document.getElementById('playerText').innerHTML = "";
        document.getElementById('computerText').innerHTML = "";
    } else {
        document.getElementById('computerTurn').innerHTML = "COMPUTER";
        document.getElementById('200').style.backgroundImage = "url()";
        document.getElementById('100').style.backgroundImage = "url()";
        document.getElementById('300').style.backgroundImage = "url(rb/images/computer.png)";
        document.getElementById('vsText').innerHTML = "vs computer";
        document.getElementById('playerText').innerHTML = "";
        document.getElementById('computerText').innerHTML = "";

    }
    });
}

//////// THE GAMEPLAY
function gamePlay(callback) {
    
    // Telling the player whose turn it is first
    determineWinner();
    // Click function
    $('.blocks').on('click', function() {
        // Debug, checking player moves
        console.log (exesAndOhs[0] + ',' + 
                exesAndOhs[1] + ',' + 
                exesAndOhs[2] + ',' + 
                exesAndOhs[3] + ',' + 
                exesAndOhs[4] + ',' + 
                exesAndOhs[5] + ',' + 
                exesAndOhs[6] + ',' + 
                exesAndOhs[7] + ',' + 
                exesAndOhs[8]);

        //sets a variable that equals the id of the clicked square
        clickedSquare = (this.id);
        
        // determines if there is already a winner or tie and stops the game while announcing winner
        if (playerTurn == 10) {
        alert('RED WINS! Refresh the page to start again!');
        } else if (playerTurn == 11) {
        alert('BLUE WINS! Refresh the page to start again!');
        } else if (playerTurn == 12) {
        alert('It\'s a tie! Refresh the page to start again!');
        } else {

        // If there's not a winner, allow the player to make a move - First decides if one or two player

            // One player
            if (oneOrTwo == 100) {
                if (playerTurn == 0) {
                    playerOneMove();
                } else {
                    playerTwoMove();
                }

            // Two player
            } else {
                if (playerTurn == 0) {
                    playerOneMove();
                } else {
                    computerMove();
                }
            }
        }
    });
}







///////// THE MOVES

// PLAYER ONE MOVE
function playerOneMove() {

    // Making player pick an empty square to play in
    if (exesAndOhs[clickedSquare] > 0) {
    alert ('Pick a different square to play in!');

    // Play if square is empty
    } else {
        document.getElementById(clickedSquare).style.backgroundColor="#ffe676";
        exesAndOhs[clickedSquare]++;
        if (oneOrTwo == 100) {
            playerTurn++;
            determineWinner();
        } else {
            playerTurn+3;
            computerMove();
        }
    }
}


// PLAYER TWO MOVE
    function playerTwoMove() {

        // Making player pick an empty square to play in
        if (exesAndOhs[clickedSquare] > 0) {
        alert ('Pick a different location');

        // Play if square is empty
        } else {
            document.getElementById(clickedSquare).style.backgroundColor="#61aad4";
            exesAndOhs[clickedSquare]+= 2;
            playerTurn--
            determineWinner();
        }
    }


// COMPUTERS MOVE
    function computerMove() {
        document.getElementById('ClickDisable').style.visibility = "visible";
        determineWinner();
        document.getElementById('computerTurn').style.backgroundColor="#61aad4";
        document.getElementById('playerTurn').style.backgroundColor="#fff";
        if (playerTurn < 5) {
            setTimeout(function() {
                computerPlay();
            }, delay);
        } else {
            determineWinner();
        }
    }




// COMPUTER PLAY - ZERO INTELLIGENCE
    function computerPlay() {
        // completely randomized square selection
        var computerPlayLocation = (Math.floor(Math.random()*9));
            if (exesAndOhs[computerPlayLocation] > 0) {
                computerPlay();
            } else { 
                // establishes computer move
                    document.getElementById(computerPlayLocation).style.backgroundColor="#61aad4";
                    exesAndOhs[computerPlayLocation]+= 2;
                // changes variable state to indicate player turn
                playerTurn-2;
            }
        //re-enables click
        document.getElementById('ClickDisable').style.visibility = "hidden";
            determineWinner();
    }

/////// WINNING CONDITIONS

// CHECK FOR TIE
    function checkNums(thenums) {
        return thenums > 0;
    }
    function tieCheck(theArray) {
        return (theArray.every(checkNums));
    }
  
// DETERMINES THE WINNER

function determineWinner() {
    if (
        (exesAndOhs[0]==1) && (exesAndOhs[1]==1) && (exesAndOhs[2]==1) || 
        (exesAndOhs[3]==1) && (exesAndOhs[4]==1) && (exesAndOhs[5]==1) ||
        (exesAndOhs[6]==1) && (exesAndOhs[7]==1) && (exesAndOhs[8]==1) || 
        (exesAndOhs[0]==1) && (exesAndOhs[3]==1) && (exesAndOhs[6]==1) ||
        (exesAndOhs[1]==1) && (exesAndOhs[4]==1) && (exesAndOhs[7]==1) || 
        (exesAndOhs[2]==1) && (exesAndOhs[5]==1) && (exesAndOhs[8]==1) ||
        (exesAndOhs[0]==1) && (exesAndOhs[4]==1) && (exesAndOhs[8]==1) || 
        (exesAndOhs[6]==1) && (exesAndOhs[4]==1) && (exesAndOhs[2]==1)) {
            playerOneWins();
    } else if 
       (
        (exesAndOhs[0]==2) && (exesAndOhs[1]==2) && (exesAndOhs[2]==2) || 
        (exesAndOhs[3]==2) && (exesAndOhs[4]==2) && (exesAndOhs[5]==2) ||
        (exesAndOhs[6]==2) && (exesAndOhs[7]==2) && (exesAndOhs[8]==2) || 
        (exesAndOhs[0]==2) && (exesAndOhs[3]==2) && (exesAndOhs[6]==2) ||
        (exesAndOhs[1]==2) && (exesAndOhs[4]==2) && (exesAndOhs[7]==2) || 
        (exesAndOhs[2]==2) && (exesAndOhs[5]==2) && (exesAndOhs[8]==2) ||
        (exesAndOhs[0]==2) && (exesAndOhs[4]==2) && (exesAndOhs[8]==2) || 
        (exesAndOhs[6]==2) && (exesAndOhs[4]==2) && (exesAndOhs[2]==2)) {
            playerTwoWins();
    } else if (tieCheck(exesAndOhs) == true) {
        itsATie();
    } else  {
    // announces the turn of each player after making a move
      if (playerTurn == 0) {
        document.getElementById('playerTurn').style.backgroundColor="#ffe676";
        document.getElementById('computerTurn').style.backgroundColor="#fff";
      } else if (playerTurn == 1) {
        document.getElementById('computerTurn').style.backgroundColor="#61aad4";
        document.getElementById('playerTurn').style.backgroundColor="#fff";
      } else if (playerTurn == 2) {
        document.getElementById('computerTurn').style.backgroundColor="#61aad4";
        document.getElementById('playerTurn').style.backgroundColor="#fff";
      }
    }
}
//////// WIN CONDITIONS
function playerOneWins() {
    document.getElementById('resetButton').style.backgroundColor = "#ffe676";
    document.getElementById('winnerAnnounced').style.color = "#ffe676";
    if (oneOrTwo == 100) {
        document.getElementById('winnerAnnounced').innerHTML = "PLAYER ONE WINS!";
    } else {
        document.getElementById('winnerAnnounced').innerHTML = "YOU WIN!";
    }
    document.getElementById('gameEnd').style.visibility = "visible";
    playerTurn=10;
}

function playerTwoWins() {
    document.getElementById('resetButton').style.backgroundColor = "#61aad4";
    document.getElementById('winnerAnnounced').style.color = "#61aad4";
    if (oneOrTwo == 100) {
        document.getElementById('winnerAnnounced').innerHTML = "PLAYER TWO WINS!";
    } else {
        document.getElementById('winnerAnnounced').innerHTML = "COMPUTER WINS!";
    }
    document.getElementById('gameEnd').style.visibility = "visible";
    playerTurn=11;
}

function itsATie() {
    document.getElementById('winnerAnnounced').innerHTML = "IT'S A TIE!";
    document.getElementById('resetButton').style.backgroundColor = "#fff";
    document.getElementById('winnerAnnounced').style.color = "#fff";
    document.getElementById('gameEnd').style.visibility = "visible";
    document.getElementById('playerTurn').style.backgroundColor="#fff";
    document.getElementById('computerTurn').style.backgroundColor="#fff";
    playerturn = 12;
}


// OUTPUT



$(document).ready(setGametypeBackground());
$(document).ready(hideGame());
$(document).ready(playerOrComputer());
$(document).ready(gamePlay());