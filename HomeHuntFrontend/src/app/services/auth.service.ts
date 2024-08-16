import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Check if a session exists in sessionStorage
  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      const userId = sessionStorage.getItem('userId');
      return !!userId; // Returns true if userId exists, otherwise false
    }
    return false;
  }

  // Get current user details from sessionStorage
  getUserDetails() {
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      const userId = sessionStorage.getItem('userId');
      const firstName = sessionStorage.getItem('firstName');
      const lastName = sessionStorage.getItem('lastName');

      if (userId && firstName && lastName) {
        return { userId, firstName, lastName };
      }
    }
    return null;
  }

  // Clear the session (for logout)
  logout(): void {
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      sessionStorage.clear(); // Clear all sessionStorage data
    }
  }
}
