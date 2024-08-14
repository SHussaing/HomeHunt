import { Component } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RippleModule } from 'primeng/ripple';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RippleModule,
    HttpClientModule,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';  

  private apiUrl = 'http://localhost:5209/api/User';

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,  
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^\S*$/)]],
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z .]+$/)]], 
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z .]+$/)]],  
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]]  
    });    
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formValue = this.registerForm.value;
  
      const params = new HttpParams()
        .set('email', formValue.email)
        .set('password', formValue.password)
        .set('firstName', formValue.firstName)
        .set('lastName', formValue.lastName)
        .set('phoneNumber', formValue.phoneNumber);
  
      this.http.post(`${this.apiUrl}/createUser`, null, { params }).subscribe({
        next: (response) => {
          alert('User created successfully!'); 
          this.router.navigate(['/login']); 
        },
        error: (error) => {
          console.error('Error creating user:', error); // Log the full error response
  
          // Check if the error contains the expected message
          if (error.error && error.error.message) {
            if (error.error.message === 'EmailAlreadyExists') {
              this.errorMessage = 'This email is already registered.';
            } else if (error.error.message === 'PhoneNumberAlreadyExists') {
              this.errorMessage = 'This phone number is already registered.';
            } else {
              this.errorMessage = 'An unexpected error occurred. Please try again.';
            }
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again.';
          }
        }
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
