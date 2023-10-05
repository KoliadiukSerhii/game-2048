function filterZero(row) {
	return row.filter((num) => num != 0);
}

function slide(row) {
	row = filterZero(row);
	for (let i = 0; i < row.length - 1; i++) {
		if (row[i] == row[i + 1]) {
			row[i] *= 2;
			row[i + 1] = 0;
			score += row[i];
		}
	}
	row = filterZero(row);
	while (row.length < columns) {
		row.push(0);
	}
	return row;
}

function slideLeft() {
	for (let r = 0; r < rows; r++) {
		let row = board[r];
		row = slide(row);
		board[r] = row;
		for (let c = 0; c < columns; c++) {
			let tile = document.getElementById(r.toString() + '-' + c.toString());
			let num = board[r][c];
			updateTile(tile, num);
		}
	}
}

function slideRight() {
	for (let r = 0; r < rows; r++) {
		let row = board[r];
		row.reverse();
		row = slide(row);
		board[r] = row.reverse();
		for (let c = 0; c < columns; c++) {
			let tile = document.getElementById(r.toString() + '-' + c.toString());
			let num = board[r][c];
			updateTile(tile, num);
		}
	}
}

function slideUp() {
	for (let c = 0; c < columns; c++) {
		let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
		row = slide(row);
		for (let r = 0; r < rows; r++) {
			board[r][c] = row[r];
			let tile = document.getElementById(r.toString() + '-' + c.toString());
			let num = board[r][c];
			updateTile(tile, num);
		}
	}
}

function slideDown() {
	for (let c = 0; c < columns; c++) {
		let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
		row.reverse();
		row = slide(row);
		row.reverse();
		for (let r = 0; r < rows; r++) {
			board[r][c] = row[r];
			let tile = document.getElementById(r.toString() + '-' + c.toString());
			let num = board[r][c];
			updateTile(tile, num);
		}
	}
}
