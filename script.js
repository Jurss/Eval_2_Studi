let newGame = document.getElementById('game');
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