import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private as: AuthService, private router:Router) {
  
  }
  login(email: any, password: any) {
    this.as.login(email.control.value, password.control.value)
      .then((val) => {
        console.log(val);
        alert("successfully logged in")
      })
    .catch((val)=>alert("email or password not matched"))
  }
}
