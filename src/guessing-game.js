class GuessingGame {
  _min = 0;
  _max = 0;
  _guess = 0;

  setRange(min, max) {
    this._min = min;
    this._max = max;
  }

  guess() {
    this._guess = Math.round((this._max + this._min) / 2);

    return this._guess;
  }

  lower() {
    this._max = this._guess;
  }

  greater() {
    this._min = this._guess;
  }
}

module.exports = GuessingGame;
