import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RippleModule } from 'primeng/ripple';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RippleModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  private apiUrl = 'http://localhost:5209/api/User'; 

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    // Create query parameters
    let params = new HttpParams();
    params = params.append('email', this.email);
    params = params.append('password', this.password);
    
    // Send the HTTP POST request with query parameters
    this.http.post<any>(`${this.apiUrl}/authenticate`, {}, { params: params }).subscribe(
      response => {
        if (response && response.userId) {
          // Save the user details in sessionStorage
          sessionStorage.setItem('userId', response.userId);
          sessionStorage.setItem('firstName', response.firstName);
          sessionStorage.setItem('lastName', response.lastName);
          
          // Navigate to the desired route
          this.router.navigate(['/']);
        } else {
          // Handle login failure
          console.error('Authentication failed');
        }
      },
      error => {
        // Handle error (e.g., show error message)
        console.error('Login error', error);
        alert('Invalid email or password');
      }
    );
  }
}
