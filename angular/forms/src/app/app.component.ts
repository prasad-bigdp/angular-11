import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
  submit(f:any)
  {
    alert("form submiteed successfully")
    console.log(f.form.value)
    localStorage.setItem("formDetails",JSON.stringify(f.form.value))

  }
}
