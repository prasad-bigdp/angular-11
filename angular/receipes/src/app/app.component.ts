import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  receipes: any[] = []
  constructor()
  {
    fetch('https://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => (this.receipes = data.recipes));
  }

}
