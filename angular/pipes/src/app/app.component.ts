import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  price = 25;
  name = "PRASAD"
  num = 26;
  dt = new Date();
  title="Radhe Shyam"
  obj = {
    name:"raj"
  }
}
