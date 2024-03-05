import { Component, EventEmitter, Output } from '@angular/core';
EventEmitter

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() prasad= new EventEmitter();
  count = 0; value!: string
  send() {
    this.prasad.emit(this.value)
  }
  incr() { this.count++; }
  decr() { this.count--; }
  reset() {
    this.count =0;
  }
}
