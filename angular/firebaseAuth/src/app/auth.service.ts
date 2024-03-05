import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth, private router: Router) {}
  async signup(email: string, password: string) {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      return userCredential;
    } catch (error:any) {
      console.error('Signup error:', error.message);
      throw new Error(error.message);
    }
  }

  async login(email: string, password: string) {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      return userCredential;
    } catch (error:any) {
      console.error('Login error:', error.message);
      throw new Error(error.message);
    }
  }

  async logout() {
    await this.auth.signOut();
    this.router.navigate(['/login']); // Redirect to login after logout
  }
}
