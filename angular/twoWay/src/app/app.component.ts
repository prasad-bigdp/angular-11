import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // val: any;
  // x:any
  // fun()
  // {
  //   const el = document.getElementById('nam') as HTMLInputElement;
  //   this.val = el.value;
    
  // }
  name!: string;
  em!: string;
  pass!: string;
  show()
  {
   
    alert(`successfully submitted \n ${this.name} \n ${this.em} \n ${this.pass}`)
  }
}
