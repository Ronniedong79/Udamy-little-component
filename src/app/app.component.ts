import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @Output('nemberEven') firedEvenNumber = new EventEmitter<number> ();
  // @Output('nemberOdd') firedOddNumber = new EventEmitter<number> ();
  numberEvens: number[] = [];
  numberOdds: number[] = [];

  numberEmit (firedNumber: number) {
    if (firedNumber % 2 == 0) {
      this.numberEvens.push(firedNumber);
    } else {
      this.numberOdds.push(firedNumber);
    }
  }


}
