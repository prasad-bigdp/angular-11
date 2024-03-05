import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "shekhar";
  isShekhar = false;
  value!:string;
  fun()
  {
    if (this.isShekhar) {
      this.isShekhar = false;
            document.body.classList.remove('overlay');

    }
    else
    {
      this.isShekhar = true
            document.body.classList.add('overlay');

      }
  }
}
