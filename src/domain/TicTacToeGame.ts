'use strict';

import Move from './Move';

export default class TicTacToeGame {
  private row: number;
  private column: number;
  private moves: Move[];

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
    this.moves = [];
  }

  getMoves() {
    return this.moves;
  }

  getWinner() {
    return 'X';
  }

  play(player: string, move: { row: number; column: number }) {
    if (!this.isMoveOutsideBoard(move))
      this.moves.push(new Move(player, move))
  }

  private isMoveOutsideBoard(move: { row: number; column: number }) {
    return move.row > this.row || move.column > this.column || move.row < 0 || move.column < 0;
  }
}