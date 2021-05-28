const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const startScreen = document.getElementById('overlay');

let missed = 0;

const phrases = [
    "Javascript is an awesome programming language",
    "This website contains CSS and HTML",
    "This application was created by Maartje",
    "You will lose a heart if you guess an incorrect letter",
    "Rabbits are very cute and funny pets"
]

startButton.addEventListener('click', (e) =>{
      
    startScreen.style.display = 'none';
    let randomPhrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(randomPhrase); 
});

function getRandomPhraseAsArray(arr){
    const i= Math.floor(Math.random() * arr.length)
    const randomPhrase = arr[i];
    const phraseAsArray = randomPhrase.split("");
    return phraseAsArray;

}

function addPhraseToDisplay(arr){
    for(let i = 0; i < arr.length; i++){
        const li = document.createElement('li');
        const ul = document.getElementById('phrase').firstElementChild;
        const character= arr[i];
        li.textContent = character;

        if(character !== " "){
            li.className = 'letter';
        }else{
            li.className = 'space'
        }    

        ul.appendChild(li);        
    }
}

function checkLetter(button){
    const lis = document.querySelectorAll('#phrase li');
    let match = null;
    const chosenLetter = button.textContent;
        for(let i = 0; i< lis.length; i++){
        const li = lis[i];
        
        if(chosenLetter === li.textContent.toLowerCase()){
            li.className += " " +  'show';
            match = chosenLetter;
        }
    }return match;
    
}

qwerty.addEventListener('click', (e) =>{
    const button = e.target;
   if(button.className === 'keyrow' || button.className === 'chosen'){
        return;
    }else{
        button.className = 'chosen';
        const letter = checkLetter(button);
        const lives = document.querySelector('#scoreboard ol');

        if(letter === null){
            lives.lastElementChild.display = "none";
            missed +=1;
        }
    }
 checkWin()
})



function checkWin(){
    let lettersToBeGuessed = document.querySelectorAll('.letter');
    let guessedLetters = document.querySelectorAll('.show');
   
    const headline = document.querySelector('.title');
    
    if(lettersToBeGuessed.length === guessedLetters.length){
        console.log("you win")
        startScreen.className += " " + 'win';
        startScreen.style.display ="";
        headline.textContent = 'You won!';
        startScreen.display = 'flex';
        resetGame();
    
    }
    if(missed > 4){
        startScreen.className += " " + 'lose';
        startScreen.style.display ="";
        headline.textContent = 'You lost!';
        console.log("you lose");
        resetGame();
    }
}

function resetGame(){
    startButton.textContent = "Restart Game";
    missed = 0;
    //nieuwe hartjes
    const lives = document.querySelector('#scoreboard ol');
    for(let i = 0; i<lives.length; i++){
        lives.lastElementChild.display = "";
    }
    
        
    const oldLetters = phrase.querySelectorAll('li');
    console.log(oldLetters);
    for(let i = 0; i<oldLetters.length; i++){
        let parent = oldLetters.parentNode;
        log.console(parent);
        parent.removeChild(parent.lastElementChild);
    }
    const letters = document.querySelectorAll('#phrase li'); 
    for(let i = 0; i< letters.length; i++){
        if(letters[i].className === "letter show"){
        letters[i].className = "letter";
        }
    }

    const buttons = document.getElementsByTagName('button');
    for(let i = 0; i< buttons.length; i++){
        buttons[i].className = "";
    }
  


}



