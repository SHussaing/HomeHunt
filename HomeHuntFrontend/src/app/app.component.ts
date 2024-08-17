import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ListingListComponent } from './components/listing-list/listing-list.component';
import { AuthService } from './services/auth.service'; 
import { Router, NavigationEnd } from '@angular/router';
import { NgIf } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, ListingListComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  title = 'HomeHuntFrontend';
  isLoggedIn: boolean = false;
  userFullName: string = ''; 
  showLogout: boolean = false; // To control the visibility of the logout button

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.checkLoginStatus();

    // Listen to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.checkLoginStatus();
        }
      }
    });
  }

  checkLoginStatus(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      const userDetails = this.authService.getUserDetails();
      if (userDetails) {
        this.userFullName = `${userDetails.firstName} ${userDetails.lastName}`;
      }
    }
  }

  toggleLogout(): void {
    this.showLogout = !this.showLogout;
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.showLogout = false;
    this.cdr.detectChanges();
    this.router.navigate(['/']);
  }
}
