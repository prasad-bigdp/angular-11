import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lifeCycle';
  c = 0;
  constructor()
  {
    console.log("constructor called")
  }
  incr()
  {
    this.c++;
  }
}
