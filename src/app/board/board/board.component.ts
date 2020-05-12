import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  size = 8;
  board = [];
  karakter = '#';
  firstCard = null
  secondCard = null
  constructor() {
    let generator = this.nextLetter(this.size);
    	for(let x = 0; x < 8; x++) {
        let boardXArray = [];
        for(let y = 0; y < 8; y++) {
          boardXArray[y] = [this.karakter, generator(), 0, (x * 8) + y];
        }
        this.board[x] = boardXArray;
      }
      this.print(this.board)
  }


  
  ngOnInit(): void {

  }

  init() {
    console.log("init")
    for(let x = 0; x < 8; x++) {
      for(let y = 0; y < 8; y++) {
        document.getElementById((x * 8) + y+'').innerHTML = this.karakter
      }
    }
  }

  clicked(card) {
    if(this.isThirdCard()) {
      //doe hier iets mee TODO
      this.toggleCard(this.firstCard);
      this.toggleCard(this.secondCard);
      this.firstCard = null;
      this.secondCard = null;
      this.turnCard(card[3]);
    } else {
      this.turnCard(card[3]);
      
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
      this.board[Math.floor(element[3]/8)][element[3]%8][2] = 1;
      document.getElementById(element[3]).innerHTML = "" + this.board[Math.floor(element[3]/8)][element[3]%8][1];
    } else {
      this.board[Math.floor(element[3]/8)][element[3]%8][2] = 0;
      document.getElementById(element[3]).innerHTML = "" + this.karakter;
    }
  }


  isThirdCard(): boolean {
    if(this.firstCard !== null && this.secondCard !== null) {
      return true
    }
    return false
  }

  checkCards(): boolean {
    if(this.firstCard !== null && this.secondCard !== null) {
      if(this.firstCard[2] === this.secondCard[2]) {
        return true;
      }
    }
    return false;
  }

  turnCard(cardNumber) {
    if(this.firstCard === null) {
      this.firstCard = this.board[Math.floor(cardNumber/8)][cardNumber%8];
      this.toggleCard(this.firstCard);
    } else {
      this.secondCard = this.board[Math.floor(cardNumber/8)][cardNumber%8];
      this.toggleCard(this.secondCard);
    }
  }
} 
