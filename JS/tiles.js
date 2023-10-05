function updateTile(tile, num) {
	tile.innerText = '';
	tile.classList.value = '';
	tile.classList.add('tile');
	if (num > 0) {
		tile.innerText = num.toString();
		if (num <= 2048) {
			tile.classList.add('x' + num.toString());
		}
	}
}

function hasEmptyTile() {
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < columns; c++) {
			if (board[r][c] == 0) {
				return true;
			}
		}
	}
	return false;
}
