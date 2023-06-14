console.log('main.js loaded');

// alert en prompt melding gemaakt //

alert("welkom bij het spel whack-a-mole");

const name = prompt('Wat is je naam', '');

const result = confirm('Weet je zeker dat je het spel wilt spelen');
if (result) { //Als je OK klikt
  alert('het spel wordt gestart');
} else { //als je het er niet mee eens bent
  alert('het spel wordt gestopt');
}

// variabelen aangemaakt //

const minimumTime = 500;
const maximumTime = 1250;


let playerPoints = 0;

const playerPointsElement = document.querySelector('.player-points');

const allTiles = document.querySelectorAll('.tile');

console.log(allTiles);

getRandomNumber(1, 50);

// functions aangemaakt met min en max//


function getRandomNumber (min,max){
   /*let random = Math.random();
    console.log(random);
    console.log(min);
    console.log(max);
    console.log(Math.floor(random));
    console.log(max - min + 1);
    console.log(Math.floor(random *(max- min + 1)));*/
    return Math.floor(Math.random() * (max - min + 1) + min );
}

// functions aangemaakt  voor clicken//

allTiles.forEach(function(tile){
   // console.log(tile);
    tile.addEventListener('click', function(){
        tileClicked(tile);
    });
});

// functions aangemaakt clicken en playerpunten //


function tileClicked(tile){
    //console.log(tile);
    if(tile.classList.contains('active')){
        playerPoints = playerPoints + 1;
    }
    else{
        playerPoints = playerPoints - 2;
    }
    console.log(playerPoints);
    tile.classList.remove('active'); 
    playerPointsElement.textContent = playerPoints;
}


// functions aangemaakt //


function activateRandomTile(){
    const currentActiveTile = document.querySelector('.tile.active');
    if(currentActiveTile){
        currentActiveTile.classList.remove('active');
    }
    let randomTileNumber = getRandomNumber(0, allTiles.length - 1);
    const selectedTile = allTiles[randomTileNumber];
    selectedTile.classList.add('active');

    startGame();
}


// functions aangemaakt start game //


function startGame(){
    const randomTime = getRandomNumber(minimumTime, maximumTime);

    setTimeout(activateRandomTile, randomTime);
}

startGame();





