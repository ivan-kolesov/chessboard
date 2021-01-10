import {COLUMNS} from './constants';

const validFen = (fen) => {
  if (typeof fen !== 'string') {
    return false;
  }

  // FEN should be at least 8 sections separated by slashes
  var chunks = fen.split('/');
  if (chunks.length < 8) {
    return false;
  }

  // check the piece sections
  for (var i = 0; i < 8; i++) {
    if (
      chunks[i] === '' ||
      chunks[i].length > 8 ||
      chunks[i].search(/[^kqrbnpKQRNBP1-8]/) !== -1
    ) {
      return false;
    }
  }

  return true;
};

const fenToPieceCode = (piece) => {
  // black piece
  if (piece.toLowerCase() === piece) {
    return 'b' + piece.toUpperCase();
  }

  // white piece
  return 'w' + piece.toUpperCase();
};

export const fenToObj = (fen) => {
  if (!validFen(fen)) {
    return false;
  }

  // cut off any move, castling, etc info from the end
  // we're only interested in position information
  fen = fen.replace(/ .+$/, '');

  var rows = fen.split('/');
  var position = {};

  var currentRow = 8;
  for (var i = 0; i < 8; i++) {
    var row = rows[i].split('');
    var colIdx = 0;

    // loop through each character in the FEN section
    for (var j = 0; j < row.length; j++) {
      // number / empty squares
      if (row[j].search(/[1-8]/) !== -1) {
        var numEmptySquares = parseInt(row[j], 10);
        colIdx = colIdx + numEmptySquares;
      } else {
        // piece
        var square = COLUMNS[colIdx] + currentRow;
        position[square] = fenToPieceCode(row[j]);
        colIdx = colIdx + 1;
      }
    }

    currentRow = currentRow - 1;
  }

  return position;
};
