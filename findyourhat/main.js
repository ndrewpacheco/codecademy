const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field) {
    this._field = field;
    this._currentCoord = [0, 0];
  }

  print() {
    console.log("The Field: ");
    console.log(this._field.join("\n"));
  }

  playTurn() {
    let answer;
    while (!answer) {
      this.print();
      answer = prompt("Which way (l,r,d,u)?").toLowerCase();
      switch (answer) {
        case "l":
          this._currentCoord[0] -= 1;
          break;
        case "r":
          this._currentCoord[0] += 1;
          break;
        case "d":
          this._currentCoord[1] += 1;
          break;
        case "u":
          this._currentCoord[1] -= 1;
          // code block
          break;
        default:
          answer = null;
          console.log("Invalid answer, try again");
      }
    }
  }

  playGame() {
    let endGame = false;
    while (!endGame) {
      this.playTurn();
      if (this._field[this._currentCoord[1]][this._currentCoord[0]] === hat) {
        console.log("you win!!");
        break;
      } else if (
        this._currentCoord.some((n) => n < 0 || n > 2) ||
        this._field[this._currentCoord[1]][this._currentCoord[0]] == hole
      ) {
        console.log("you lose");
        endGame = true;
        break;
      }
      this._field[this._currentCoord[1]][this._currentCoord[0]] = pathCharacter;
    }
  }
}

const myField = new Field([
  ["*", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
]);

myField.playGame();
