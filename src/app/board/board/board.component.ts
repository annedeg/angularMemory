import { Component, OnInit, Inject } from '@angular/core';
import { TimerServiceService } from 'src/app/timer-service.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  started = false
  size = 2;
  board = [];
  karakter = '#';
  firstCard = null
  secondCard = null
  foundColor = "#ff33f2"
  cardsLeft = this.size * this.size;
  currentTime;
  startTime;
  constructor(private timerService: TimerServiceService) {
    let generator = this.nextLetter(this.size);
    for (let x = 0; x < this.size; x++) {
      let boardXArray = [];
      for (let y = 0; y < this.size; y++) {
        boardXArray[y] = [this.karakter, generator(), 0, (x * 8) + y];
      }
      this.board[x] = boardXArray;
    }
    this.print(this.board)
  }

  ngOnInit() {
    this.timerService.sharedCurrentTime.subscribe(time => this.currentTime = time);
  }

  

  init() {
    console.log("init")
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        document.getElementById((x * 8) + y + '').innerHTML = this.karakter
      }
    }
  }

  clicked(card) {
    if (!this.started) {
      this.startTime = this.currentTime;
      this.started = true;
    } else {
      console.log(this.startTime)
      if (card[2] < 2) {
        if (this.isThirdCard()) {
          //doe hier iets mee TODO
          this.toggleCard(this.firstCard);
          this.toggleCard(this.secondCard);
          this.firstCard = null;
          this.secondCard = null;
          this.turnCard(card[3]);
        } else {
          this.turnCard(card[3]);
        }

        if (this.checkCards()) {
          this.cardsLeft -= 2;
          this.foundCard(this.firstCard[3])
          this.foundCard(this.secondCard[3])
          this.firstCard = null;
          this.secondCard = null;
        }
      }
      if (this.cardsLeft === 0) {
        //GAME OVER
        console.log(this.currentTime - this.startTime)
      }
    }
  }

  print(asdf) {
    console.log(asdf)
  }

  nextLetter = function (size) {
    var letterArray = "AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz".substring(0, size * size).split('');
    var idx = 0;
    letterArray = this.shuffle(letterArray);
    return function () {
      var letter = letterArray[idx++];
      return letter;
    }
  }
  // knuth array shuffle
  // from https://bost.ocks.org/mike/shuffle/ 
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  toggleCard(element): void {
    // Draai de kaart om, als de letter getoond wordt, toon dan de achterkant en
    // vice versa. switch dus van active naar inactive of omgekeerd.
    if (element[2] === 0) {
      this.board[Math.floor(element[3] / 8)][element[3] % 8][2] = 1;
      document.getElementById(element[3]).innerHTML = "" + this.board[Math.floor(element[3] / 8)][element[3] % 8][1];
    } else {
      this.board[Math.floor(element[3] / 8)][element[3] % 8][2] = 0;
      document.getElementById(element[3]).innerHTML = "" + this.karakter;
    }
  }


  isThirdCard(): boolean {
    if (this.firstCard !== null && this.secondCard !== null) {
      return true
    }
    return false
  }

  checkCards(): boolean {
    if (this.firstCard !== null && this.secondCard !== null) {
      if (this.firstCard[1] === this.secondCard[1] && this.firstCard[3] !== this.secondCard[3]) {
        return true;
      }
    }
    return false;
  }

  turnCard(cardNumber) {
    if (this.firstCard === null) {
      this.firstCard = this.board[Math.floor(cardNumber / 8)][cardNumber % 8];
      this.toggleCard(this.firstCard);
    } else {
      this.secondCard = this.board[Math.floor(cardNumber / 8)][cardNumber % 8];
      this.toggleCard(this.secondCard);
    }
  }


  foundCard(cardNumber) {
    this.board[Math.floor(cardNumber / 8)][cardNumber % 8][2] = 2;
    this.updateColor(cardNumber, this.foundColor);
  }

  updateColor(cardNumber, color) {
    document.getElementById(cardNumber).style.backgroundColor = color;
  }
} 
