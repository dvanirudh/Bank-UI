import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  login(): void {

    if (!this.username || !this.password) {
      alert('Enter credentials');
      return;
    }

    const body = new HttpParams()
      .set('username', this.username)
      .set('password', this.password);

    this.http.post(
      'http://localhost:8081/auth/login',
      body.toString(),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      }
    ).subscribe({

      next: (res: any) => {

        const token = res.access_token || res.token;

        if (!token) {
          alert('No token received');
          return;
        }

        this.authService.setToken(token);

        // optional decode
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          localStorage.setItem('roles', JSON.stringify(payload.realm_access?.roles || []));
        } catch (e) {}

        this.router.navigate(['/bank-portal']);
      },

      error: (err) => {
        console.error('Login failed', err);
        alert('Invalid login');
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}