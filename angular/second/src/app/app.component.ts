import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  n = 'prasad';
  img =
    'https://fdn.gsmarena.com/imgroot/news/23/09/samsung-galaxy-s24-design-renders/inline/-1200/gsmarena_002.jpg';
  title = 'Samsung S24';
  price = '79,999';c=0
  isNotAvailable = true;
  fun()
  {
    alert("button clicked")
  }
  incr()
  {

  }
}
