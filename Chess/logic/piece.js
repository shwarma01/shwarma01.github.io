class Piece {
  constructor(side, position) {
    this._side = side;
    this._position = position;
    console.log("Sup");
  }

  get side() {
    return this._side;
  }

  get position() {
    return this._position;
  }
}
