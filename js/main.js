document.addEventListener('DOMContentLoaded', (() => {
// Variables needed for the operation of the game.
 let selectionMade = false;
  const rpsls = ['rock', 'paper', 'scissors'];
  const rock = document.querySelector('.rock'); // Variable for the rock button to play.
  const paper = document.querySelector('.paper'); // Variable for the paper button to play
  const scissors = document.querySelector('.scissors'); // Variable for the scissors button to play
  const playAgain = document.querySelector('.playAgain'); // Variable for the playAgain button.
  const youWin = document.querySelector('#you-win'); // Variable for 'you win' text.
  const youLost = document.querySelector('#you-lost'); // Variable for 'you lose' text.
  const tie = document.querySelector('#you-tie'); // Variable for 'tie' text.
  const initial = document.querySelector('.gameButtons'); // Variable for gameButtons.
 const youPick = document.querySelector('.youPick'); // Variable for 'you picked' text.
 const enemyPick = document.querySelector('.enemyPick'); // Variable for 'house picked' text.
 const rules = document.querySelector('.rules'); // Variable for rules button.

// This sets the scoreboard to 0 (or loads from localStorage) and displays it on screen when page loads
   let scores = document.querySelector('.scores');
   let savedScore = localStorage.getItem('rpslsScore');
   if (savedScore) {
       scores.innerHTML = parseInt(savedScore, 10);
   } else {
       scores.innerHTML = 0;
   }
$('.scores').slideToggle('slow'); // Hides scoreboard. I was told we're not supposed to do it, but it looks so cool.
// This Function makes user choice 'rock'.
   rock.addEventListener('click', (event) => {
     event.preventDefault();
      if (!selectionMade) {
       playGame('rock'); // Plays rock when icon is clicked.
      }
   });

// This Function makes user choice 'paper'.
  paper.addEventListener('click', (event) => {
    event.preventDefault();
     if (!selectionMade) {
      playGame('paper'); // Plays paper when icon is clicked.
     }
  });

// This Function makes user choice 'scissors'.
  scissors.addEventListener('click', (event) => {
    event.preventDefault();
     if (!selectionMade) {
      playGame('scissors'); // Plays scissors when icon is clicked.
      }
  });

 /* Function playGame takes two other Functions and assigns them to variables for later use. It also calls two other Functions
    setting a Template for the game to follow procedurally. */
  function playGame(userChoice) { // Hoisting of  Functions.
      const computerChoice = computerChooses();
      const outcome = compare(userChoice, computerChoice);
      updateResults(outcome);
      updateWebpage(userChoice, computerChoice, outcome);
  }

// Function computerChooses helps computer makes a choice at random from rpsls array.
  function computerChooses() {
     let randomChoice = rpsls[Math.floor(Math.random() * rpsls.length)];
        return randomChoice;
  }


// Function compare takes userChoiceand compares it to computerChoice and determines a result through an if statement.
  function compare(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        return 'tie';
    } else if(userChoice === 'rock' && computerChoice === 'scissors' ||
              userChoice === 'paper' && computerChoice === 'rock' ||
              userChoice === 'scissors' && computerChoice === 'paper') {
        return 'win';
    } else {
        return 'lost';
    }
  }

/* Function updateResults takes the outcome of the game and adds 1 to the scoreboard if the result is a 'win', and subtracts one if the result is a 'loss'. If you keep losing the numbers go into the negative which makes it more fun I think. Set it on a timer for better gameplay, also to show the result and computer selection simultaniously. Keep people guessing you know. */
  function  updateResults(outcome) {
    let updateScore = setInterval(() => { // Timer function.
       if (outcome === 'win') {
           scores.innerHTML++; // Adds  1 to scoreboard.
           localStorage.setItem('rpslsScore', scores.innerHTML);
           clearInterval(updateScore); // Clears timer so it doesn't start again later on.
       } else if (outcome === 'lost') {
           scores.innerHTML--; // Subtracts  1 to scoreboard.
           localStorage.setItem('rpslsScore', scores.innerHTML);
           clearInterval(updateScore); // Clears timer so it doesn't start again later on.
       } else {
           return clearInterval(updateScore); // Clears timer if its a tie so it doesn't start again later on.
       }
    },3000);
      $('.scores').slideDown('slow'); // Animation for scoreboard.
  }

/* Function updateWebpage will update the webpage to reflect the user selection,
   computer selection, the outcome of this game. */
  function updateWebpage(userChoice, computerChoice, outcome) {
     initial.classList.add('hide'); // Removes the choice buttons from screen.
     rules.classList.add('hide');  // Removes the rules button from screen.
     youPick.classList.remove('hide'); // Adds the 'you picked' words to screen.
     enemyPick.classList.remove('hide'); // Adds the 'house picked' words to screen.

  // updates the player choice on screen with a image on delay.
    let playerDisplay = setInterval(() => {
      document.querySelector(`.you-${userChoice}`).classList.remove('hide');
       clearInterval(playerDisplay);
    },800);

  // updates the computer choice on screen with image on delay.
    let enemyDisplay = setInterval(() => {
       document.querySelector(`.enemy-${computerChoice}`).classList.remove('hide');
        clearInterval(enemyDisplay);
    },1900);

    let gameEnd = setInterval(() => {
      playAgain.classList.remove('hide'); // Adds the 'playAgain' button to screen.
        if(outcome === 'win') {
          youWin.classList.remove('hide');
          document.querySelector(`.you-${userChoice}`).className = `you-${userChoice} winner mediaQueryBtn`; // Sets CSS classes. Help for animations.
          document.querySelector(`.enemy-${computerChoice}`).className = `enemy-${computerChoice} loser mediaQueryBtn`; // Sets CSS classes. Help for animations.
          clearInterval(gameEnd); // Clears timer so it doesn't start again later on.
        } else if (outcome === 'lost') {
          youLost.classList.remove('hide');
          document.querySelector(`.you-${userChoice}`).className = `you-${userChoice} loser mediaQueryBtn`; // Sets CSS classes. Help for animations.
          document.querySelector(`.enemy-${computerChoice}`).className = `enemy-${computerChoice} winner mediaQueryBtn`; // Sets CSS classes. Help for animations.
          clearInterval(gameEnd); // Clears timer so it doesn't start again later on.
        } else {
          tie.classList.remove('hide');
          document.querySelector(`.you-${userChoice}`).classList.add('tie'); // Sets CSS classes. Help for animations.
          document.querySelector(`.enemy-${computerChoice}`).classList.add('tie'); // Sets CSS classes. Help for animations.
          clearInterval(gameEnd); // Clears timer so it doesn't start again later on.
        }
    },2600);
      resetBoard(userChoice, computerChoice, outcome); // Calls next function to finish procedure of game.
  }

 /* This function resets all the text and images to the initial
    state of game, but does not remove the scores on the scoreboard. */
  function resetBoard(userChoice, computerChoice, outcome) {
 // Resets everything back to default when play again button is clicked.
    playAgain.addEventListener('click', ((event) => {
       document.querySelector(`.you-${userChoice}`).className = `you-${userChoice} hide mediaQueryBtn`;
       document.querySelector(`.enemy-${computerChoice}`).className = `enemy-${computerChoice} hide mediaQueryBtn`;
       document.querySelector(`#you-${outcome}`).classList.add('hide');
       playAgain.classList.add('hide');
       youPick.classList.add('hide');
       enemyPick.classList.add('hide');
       initial.classList.remove('hide');
       rules.classList.remove('hide');
    }));
  }
}));