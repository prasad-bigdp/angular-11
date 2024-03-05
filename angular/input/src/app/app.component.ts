import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  img1 = '../../assets/book1.jpeg';
  title1 = 'Book1';
  img2 = '../../assets/book2.jpeg';
  title2 = 'Book2';
  img3 = '../../assets/book3.jpeg';
  title3 = 'Book3';
  img4 = '../../assets/book4.jpeg';
  title4 = 'Book4';
  c = 0;
  incr()
  {
    this.c++;
  }
}
