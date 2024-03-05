import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count: number = 0;
  isDisabled = false;
  evenFlag = true;
  isEven ="Even";
  checkEvenOdd()
  {
    if (this.count % 2 == 1) { this.isEven = "odd"; this.evenFlag = false; }
    else { this.isEven = "Even";this.evenFlag=true }
  }
  incr() {
    if (this.count >= 20) {
      this.isDisabled=true
    }
    else {
       this.count++;
    }
   this.checkEvenOdd()

  }
  decr() {
    this.count--;
  this.checkEvenOdd();}
  reset() { this.count = 0; }
}
