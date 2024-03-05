import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  names = ['raj', 'shekhar', 'vani', 'leela', 'xyz'];
  products:any[] = [];
  constructor() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => { this.products = data });
  }
}
