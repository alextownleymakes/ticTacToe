/* FEATURE PLANS 

    settings menu, slide in div with player count and turn alternation, sound off or on 

*/

/*
Rules: 
    Needs a counter to track number of computer moves, or number of moves in general
    Computer makes random first move
    Computer's second move blocks first player win OR random/strategic if no block needed
    Computer prioritizes own win over block
    Computer analyzes potential wins to make sure other cells are not occupied. If occupied, check other conditions
    At the beginning of the move, computer checks for potential self win
        IF (potential self win) {
            make relevant move
        } ELSE IF (potential player win) {
            block player
        } ELSE {
            if (computer is second && first move) {
                play in center
            } else { 
                play in free corner
            }
        }
*/
// 012 01- 0-2 -12
// 345 34- 3-5 -45
// 678 67- 6-8 -78
// 036 03- 0-6 -36
// 147 14- 1-7 -47
// 258 25- 2-8 -58
// 048 04- 0-4 -48
// 246 24- 2-6 -46

// var x0 = exesAndOhs[0];
// var x1 = exesAndOhs[1];
// var x2 = exesAndOhs[2];
// var x3 = exesAndOhs[3];
// var x4 = exesAndOhs[4];
// var x5 = exesAndOhs[5];
// var x6 = exesAndOhs[6];
// var x7 = exesAndOhs[7];
// var x8 = exesAndOhs[8];

var exesAndOhs = [0,0,1,0,4,1,0,0,0];
var winCondit;

var win0 = [exesAndOhs[0],exesAndOhs[1],exesAndOhs[2]];
var win1 = [exesAndOhs[3],exesAndOhs[4],exesAndOhs[5]];
var win2 = [exesAndOhs[6],exesAndOhs[7],exesAndOhs[8]];
var win3 = [exesAndOhs[0],exesAndOhs[3],exesAndOhs[6]];
var win4 = [exesAndOhs[1],exesAndOhs[4],exesAndOhs[7]];
var win5 = [exesAndOhs[2],exesAndOhs[5],exesAndOhs[8]];
var win6 = [exesAndOhs[0],exesAndOhs[4],exesAndOhs[8]];
var win7 = [exesAndOhs[2],exesAndOhs[4],exesAndOhs[6]];
var winConditions = [win0,win1,win2,win3,win4,win5,win6,win7];
let testString = winConditions[1].reduce((a, b) => a + b, 0);
console.log(winConditions[5]);
// console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0)

function checkForPlayerWinPoss() {
    let winCheck = 0;
    for  ( i = 0; winCheck !== 2; i++) {
        winCheck = winConditions[i].reduce((a, b) => a + b, 0);
        winNum = winConditions[i];
        winCondit = i;
    }
    console.log(winCondit);
    findOpenPosition(winCondit);
}

function findOpenPosition(place) {
    tempArray = winConditions[place];
    let changeVar;
    console.log(tempArray);
    for (i = 0; tempArray[i] == 1; i++) {
        console.log(i);
        console.log(tempArray[i]);
        if (tempArray[i] == 0) {
            console.log(tempArray[i]);
            changeVar = i;
        }
    }
    console.log(changeVar);
    tempArray[changeVar] = 4;
    winConditions[place] = tempArray;
    console.log(exesAndOhs);
}

    
checkForPlayerWinPoss(winConditions);

// for ( i = 0; i == 9; i++ ) {
//     if (win0 == 2) {
//         for (var j = 0; i < array.length; i++) {
//             if (array[i] == 0) return true;
//         }
//     }
// }

// function computerIntelligentPlay(); {
//     if (potentialSelfWin) {
//         makeRelevantMove;
//     } else if (potentialPlayerWin) {
//         for  ( i = 0; i == 9; i ++) {
            
//         }
//     } else {
//         if (computerIsSecond && firstMove) {
//             play in center
//         } else { 
//             play in freeCorner
//         }
//     }
// }



// function computerIntelligentPlay() {
//     // completely randomized square selection
//     var computerPlayLocation = (Math.floor(Math.random()*9));
//         if (exesAndOhs[computerPlayLocation] > 0) {
//             computerPlay();
//         } else { 
//             // establishes computer move
//                 document.getElementById(computerPlayLocation).style.backgroundColor="#61aad4";
//                 exesAndOhs[computerPlayLocation]+= 2;
//             // changes variable state to indicate player turn
//             playerTurn-2;
//         }
//     //re-enables click
//     document.getElementById('ClickDisable').style.visibility = "hidden";
//         determineWinner();
// }




