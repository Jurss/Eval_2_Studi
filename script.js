// Add the player name when the user starts a game

let newGame = document.getElementById('new_game');
let playerName1 = document.getElementById('player_name1');
let playerName2 = document.getElementById('player_name2');
let name1 = '';
let name2 = '';


playerName1.innerHTML += 'Player1';
playerName2.innerHTML += 'Player2';

newGame.addEventListener('click', () => {
        name1 = prompt('Quel est le nom du joueur 1 ?');
        name2 = prompt('Quel est le nom du joueur 2 ?');

        playerName1.innerHTML = name1;
        playerName2.innerHTML = name2;
    })
    //END :: Add the player name when the user starts a game


//Add img dice on HTML followingresult ROLL DICE
let imgDice = document.getElementById('de');
let roll = document.getElementById('roll_dice');
let diceFace = ['Images/de_1.png', 'Images/de_2.png', 'Images/de_3.png', 'Images/de_4.png', 'Images/de_5.png', 'Images/de_6.png', ];
let dice1 = document.getElementById('de_1');
let dice2 = document.getElementById('de_2');
let dice3 = document.getElementById('de_3');
let dice4 = document.getElementById('de_4');
let dice5 = document.getElementById('de_5');
let dice6 = document.getElementById('de_6');

let insertImage = document.createElement('img');
insertImage.src = diceFace[0];
dice1.innerHTML = '';
dice1.appendChild(insertImage);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

roll.addEventListener('click', () => {
        let diceValue = getRandomInt(6);
        let insertImage = document.createElement('img');
        console.log(diceValue);

        if (diceValue == 0) {
            insertImage.src = diceFace[0];
            dice1.innerHTML = '';
            dice1.appendChild(insertImage);

        } else if (diceValue == 1) {
            insertImage.src = diceFace[1];
            dice1.innerHTML = '';
            dice1.appendChild(insertImage);
        } else if (diceValue == 2) {
            insertImage.src = diceFace[2];
            dice1.innerHTML = '';
            dice1.appendChild(insertImage);
        } else if (diceValue == 3) {
            insertImage.src = diceFace[3];
            dice1.innerHTML = '';
            dice1.appendChild(insertImage);
        } else if (diceValue == 4) {
            insertImage.src = diceFace[4];
            dice1.innerHTML = '';
            dice1.appendChild(insertImage);
        } else if (diceValue == 5) {
            insertImage.src = diceFace[5];
            dice1.innerHTML = '';
            dice1.appendChild(insertImage);
        }
    })
    // END :: Add img dice on HTML followingresult ROLL DICE