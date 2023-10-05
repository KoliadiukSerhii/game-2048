let board;
let score = 0;
const rows = 4;
const columns = 4;
const HIGH_SCORE = 'highScore';
const highScore = JSON.parse(window.localStorage.getItem('highScore')) ?? 0;
document.getElementById('game-over-best').innerText = highScore;

window.onload = function () {
	setGame();
};

function setGame() {
	board = [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	];

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < columns; c++) {
			let tile = document.createElement('div');
			tile.id = r.toString() + '-' + c.toString();
			let num = board[r][c];
			updateTile(tile, num);
			document.getElementById('board').append(tile);
		}
	}

	setTwo();
	setTwo();
}

document.addEventListener('keyup', (e) => {
	if (e.code == 'ArrowLeft') {
		slideLeft();
		setTwo();
	} else if (e.code == 'ArrowRight') {
		slideRight();
		setTwo();
	} else if (e.code == 'ArrowUp') {
		slideUp();
		setTwo();
	} else if (e.code == 'ArrowDown') {
		slideDown();
		setTwo();
	}
	document.getElementById('score').innerText = score;
});

function setTwo() {
	if (!hasEmptyTile()) {
		GameOver();
		return;
	}

	let found = false;
	while (!found) {
		let r = Math.floor(Math.random() * rows);
		let c = Math.floor(Math.random() * columns);
		if (board[r][c] == 0) {
			board[r][c] = 2;
			let tile = document.getElementById(r.toString() + '-' + c.toString());
			tile.innerText = '2';
			tile.classList.add('x2');
			found = true;
		}
	}
}

function GameOver() {
	alert(highScore);
	const gameOverScreen = document.getElementById('game-over-screen');
	const gameOverScore = document.getElementById('game-over-score');
	const gameOverBestScore = document.getElementById('game-over-best');

	UpdateHighScore(score);
	alert('highScore');
	gameOverScore.textContent = score;
	gameOverBestScore.textContent = highScore;

	gameOverScreen.style.display = 'block';
}

function Restart() {
	const gameOverScreen = document.getElementById('game-over-screen');
	gameOverScreen.style.display = 'none';

	score = 0;
	document.getElementById('score').innerText = score;

	board = [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	];
	const tiles = document.querySelectorAll('.tile');
	tiles.forEach((tile) => {
		updateTile(tile, 0);
	});

	setTwo();
	setTwo();
}

function UpdateHighScore(score) {
	highScore = JSON.parse(window.localStorage.getItem('highScore'));
	alert(highScore);
	if (score > highScore) {
		window.localStorage.setItem('highScore', JSON.stringify(score));
	}
}
