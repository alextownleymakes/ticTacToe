// VARIABLES

var exesAndOhs = [0,0,0,0,0,0,0,0,0];
var playerTurn = 0;

// FUNCTIONS

function xoRotation() {
  $('.blocks').on('click', function() {
    console.log(exesAndOhs[0] + ',' + 
                exesAndOhs[1] + ',' + 
                exesAndOhs[2] + ',' + 
                exesAndOhs[3] + ',' + 
                exesAndOhs[4] + ',' + 
                exesAndOhs[5] + ',' + 
                exesAndOhs[6] + ',' + 
                exesAndOhs[7] + ',' + 
                exesAndOhs[8]);

    //sets a variable that equals the id of the clicked square
    let tempName = (this.id);

    // determines if there is already a winner and stops the game
    if (playerTurn == 10) {
      alert('Refresh the page to start again!');
    } else {

      // determines whose turn it is 
      if (playerTurn == 0) {

        // disables playing in already played square
        if (exesAndOhs[tempName] > 0) {
          alert ('Pick a different location');
        } else {
          
          // rotates between x's and o's
          if (exesAndOhs[tempName] == 0) {
            document.getElementById(tempName).style.backgroundImage="url(images/x.png)";
            exesAndOhs[tempName]++;
          } else if (exesAndOhs[tempName] == 1) {
            document.getElementById(tempName).style.backgroundImage="url(images/o.png)";
            exesAndOhs[tempName]++;
          } else {
            document.getElementById(tempName).style.backgroundImage="url()";
            exesAndOhs[tempName] = 0;
          } 

        // changes variable state to indicate player turn
        playerTurn++
        } 

      } else {

          // disables playing in already played square
          if (exesAndOhs[tempName] > 0) {
            alert ('Pick a different location');
          } else {
            
            // rotates between x's and o's
            if (exesAndOhs[tempName] == 0) {
              document.getElementById(tempName).style.backgroundImage="url(images/o.png)";
              exesAndOhs[tempName]+= 2;
            } else if (exesAndOhs[tempName] == 1) {
              document.getElementById(tempName).style.backgroundImage="url(images/x.png)";
              exesAndOhs[tempName]++;
            } else {
              document.getElementById(tempName).style.backgroundImage="url()";
              exesAndOhs[tempName] = 0;
            } 
            
          // changes variable state to indicate player turn
          playerTurn--
          } 
      }
    };

    if (
        (exesAndOhs[0]==1) && (exesAndOhs[1]==1) && (exesAndOhs[2]==1) || 
        (exesAndOhs[3]==1) && (exesAndOhs[4]==1) && (exesAndOhs[5]==1) ||
        (exesAndOhs[6]==1) && (exesAndOhs[7]==1) && (exesAndOhs[8]==1) || 
        (exesAndOhs[0]==1) && (exesAndOhs[3]==1) && (exesAndOhs[6]==1) ||
        (exesAndOhs[1]==1) && (exesAndOhs[4]==1) && (exesAndOhs[7]==1) || 
        (exesAndOhs[2]==1) && (exesAndOhs[5]==1) && (exesAndOhs[8]==1) ||
        (exesAndOhs[0]==1) && (exesAndOhs[4]==1) && (exesAndOhs[8]==1) || 
        (exesAndOhs[6]==1) && (exesAndOhs[4]==1) && (exesAndOhs[2]==1)) {
          alert('X\'S WIN!');
          playerTurn=10;
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
          alert('O\'s WINS!');
          playerTurn=10;
    } else {
    }
    console.log(exesAndOhs[0] + ',' + 
                exesAndOhs[1] + ',' + 
                exesAndOhs[2] + ',' + 
                exesAndOhs[3] + ',' + 
                exesAndOhs[4] + ',' + 
                exesAndOhs[5] + ',' + 
                exesAndOhs[6] + ',' + 
                exesAndOhs[7] + ',' + 
                exesAndOhs[8]);
  });
}




// OUTPUT

$(document).ready(xoRotation);
