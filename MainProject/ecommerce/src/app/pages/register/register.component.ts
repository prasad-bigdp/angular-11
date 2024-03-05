import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private as: AuthService, private router: Router) { }
  submit(un:any,email: any, password: any, form: any) {
    console.log(email, password, form)
    localStorage.setItem('data',JSON.stringify(un))
    if ((email.control.value.trim() == '') || (password.control.value.trim() == '')) {
      alert("please fill the form")
    }
    else {
    
      this.as.signup(email.control.value, password.control.value)
        .then((val) => {
          console.log(val);
          this.router.navigate([ '/login' ])
        })
        .catch((err) => console.log(err))
    }
  }
}