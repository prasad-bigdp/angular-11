import { Component } from '@angular/core';
import { JokeService } from './joke.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  jokes:any[]=[]
  constructor(private js:JokeService)
  {
       this.js.getData().subscribe((data:any)=>this.jokes=data)
  }
}
