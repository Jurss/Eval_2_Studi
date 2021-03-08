let newGame = document.getElementById('new_game');
let bgPlayer = document.getElementById('player1');
let playerName1 = document.getElementById('player_name1');
let playerName2 = document.getElementById('player_name2');
let globalScorePlayer1 = document.getElementById('global_score_1');
let globalScorePlayer2 = document.getElementById('global_score_2');
let name1 = '';
let name2 = '';
let insertImage = document.createElement('img');
let redPoint1 = document.getElementById('red_point_1');
let redPoint2 = document.getElementById('red_point_2');
let hold = document.getElementById('hold');
let currentScorePlayer1 = document.getElementById('current_score_1');
let currentScorePlayer2 = document.getElementById('current_score_2');
let current_score = 0;
let turnOn = 0;

redPoint1.style.display = 'none';
redPoint2.style.display = 'none';

playerName1.innerHTML += 'Player1';
playerName2.innerHTML += 'Player2';

newGame.addEventListener('click', () => {
    name1 = prompt('Quel est le nom du joueur 1 ?');
    name2 = prompt('Quel est le nom du joueur 2 ?');

    playerName1.innerHTML = name1;
    playerName2.innerHTML = name2;

    redPoint1.style.display = 'block';
    redPoint2.style.display = 'none';

    rollDice(); // call function  who launches the dice
})

function rollDice() {

    let imgDice = document.getElementById('de');
    let roll = document.getElementById('roll_dice');
    let diceFace = ['Images/de_1.png', 'Images/de_2.png', 'Images/de_3.png', 'Images/de_4.png', 'Images/de_5.png', 'Images/de_6.png', ];
    let diceValue;
    let dice1 = document.getElementById('de_1');
    insertImage.src = diceFace[0];
    dice1.innerHTML = '';
    dice1.appendChild(insertImage);



    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    roll.addEventListener('click', () => {
        diceValue = getRandomInt(6);
        if (diceValue == 0) {
            insertImage.src = diceFace[0];
            dice1.innerHTML = '';
            dice1.appendChild(insertImage);
            current_score = 0;
            currentScorePlayer1.innerHTML = '' + current_score;
            currentScorePlayer2.innerHTML = '' + current_score;
            turnOn++;

        } else if (diceValue == 1) {
            insertImage.src = diceFace[1];
            dice1.innerHTML = '';
            dice1.appendChild(insertImage);
            current_score += (diceValue + 1)
        } else if (diceValue == 2) {
            insertImage.src = diceFace[2];
            dice1.innerHTML = '';
            dice1.appendChild(insertImage);
            current_score += (diceValue + 1)
        } else if (diceValue == 3) {
            insertImage.src = diceFace[3];
            dice1.innerHTML = '';
            dice1.appendChild(insertImage);
            current_score += (diceValue + 1)
        } else if (diceValue == 4) {
            insertImage.src = diceFace[4];
            dice1.innerHTML = '';
            dice1.appendChild(insertImage);
            current_score += (diceValue + 1)
        } else if (diceValue == 5) {
            insertImage.src = diceFace[5];
            dice1.innerHTML = '';
            dice1.appendChild(insertImage);
            current_score += (diceValue + 1)
        }
        if (turnOn % 2 === 0) {
            currentScorePlayer1.innerHTML = '' + current_score;
            redPoint1.style.display = 'block';
            redPoint2.style.display = 'none';

        } else if (turnOn % 2 !== 0) {
            redPoint1.style.display = 'none';
            redPoint2.style.display = 'block';
            currentScorePlayer2.innerHTML = '' + current_score;
        }


    })
}
hold.addEventListener('click', () => {
    if (turnOn % 2 === 0) {
        let num = parseInt(globalScorePlayer1.lastChild.nodeValue, 10)
        num = num + current_score
        globalScorePlayer1.innerHTML = '' + num
        current_score = 0;
        num = 0;
        currentScorePlayer1.innerHTML = '0';
        redPoint1.style.display = 'none';
        redPoint2.style.display = 'block';
        turnOn++;
    } else {
        let num = parseInt(globalScorePlayer2.lastChild.nodeValue, 10)
        num = num + current_score
        globalScorePlayer2.innerHTML = '' + num
        current_score = 0;
        num = 0;
        currentScorePlayer2.innerHTML = '0';
        redPoint1.style.display = 'block';
        redPoint2.style.display = 'none';
        turnOn++;
    }
})