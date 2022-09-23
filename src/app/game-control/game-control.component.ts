import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output("numberListener") numberEmit = new EventEmitter<number> ();
  heroNumber: number = 0;
  contoller: any;

  constructor() {}

  ngOnInit(): void {}

  gameStart() {
    this.contoller = setInterval(() => {
      this.numberEmit.emit(this.heroNumber += 1);
      // console.log(this.heroNumber);
    }, 1000);
  }
  gameStop() {
    clearInterval(this.contoller);
  }
}
