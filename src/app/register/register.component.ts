import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {

    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      phoneNumber: [''],
      address: [''],
      aadharNumber: [''],
      role: ['']
    });
  }

  goBack() {
    this.router.navigate(['/login']);
  }

  register() {

    console.log(this.registerForm.value);

    this.http.post(
      'http://localhost:8081/user/users',
      this.registerForm.value
    ).subscribe({
      next: (response) => {
        console.log('Success', response);
        alert('User Registered Successfully');
      },
      error: (error) => {
        console.error('Error', error);
        alert('Registration Failed');
      }
    });
  }
}