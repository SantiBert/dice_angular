import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppData';
  leftDice = '../assets/img/dice2.png';
  rightDice = '../assets/img/dice1.png';
  number1:number= 0;
  number2:number= 0;

  rollDice():void {
    this.number1 = Math.round((Math.random() * 5) + 1);
    this.number2 = Math.round((Math.random() * 5) + 1);
    this.leftDice = '../assets/img/dice' + this.number1 +'.png';
    this.rightDice = '../assets/img/dice' + this.number2 +'.png';
  }

}
