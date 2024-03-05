import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private as:AuthService,private route:Router) {console.log("login started")}
 
  login(email: any, password: any) {
  
    this.as
      .login(email.control.value, password.control.value)
      .then((val) => {
        console.log(val);
        alert('successfully logged in');
        this.route.navigateByUrl('/dashboard')
      })
      .catch((val) => alert('email or password not matched'));
  }
}
