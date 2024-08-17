import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';
import { AuthService } from '../../services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  standalone: true,
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule,
    FileUploadModule,
    RouterModule,
    HttpClientModule
  ],
})
export class CreateListingComponent implements OnInit {
  listingForm!: FormGroup;
  cities: { label: string, value: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    
    this.listingForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      city: ['', Validators.required],
      houseNumber: ['', [Validators.required, Validators.pattern('^[0-9]{1,4}$')]],
      roadNumber: ['', [Validators.required, Validators.pattern('^[0-9]{1,4}$')]],
      blockNumber: ['', [Validators.required, Validators.pattern('^[0-9]{1,4}$')]],
      photo: [null, Validators.required],
      wifi: [false],
      waterElectricity: [false]
    });
    
    // Load cities from JSON file
    this.loadCities();
  }

  loadCities(): void {
    this.http.get<{ label: string, value: string }[]>('cities.json')
      .subscribe({
        next: (data) => {
          this.cities = data;
        },
        error: (err) => {
          console.error('Error loading cities:', err);
        }
      });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.listingForm.patchValue({
        photo: file
      });
    }
  }

  onSubmit(): void {
    if (this.listingForm.valid) {
      const formData: FormData = new FormData();
      const userId = sessionStorage.getItem('userId');  // Get userId from session storage
  
      if (userId) {
        formData.append('UserId', userId);
      }
      formData.append('Name', this.listingForm.value.name);
      formData.append('Price', this.listingForm.value.price.toString());
      formData.append('City', this.listingForm.value.city);
      formData.append('HouseNumber', this.listingForm.value.houseNumber.toString());
      formData.append('RoadNumber', this.listingForm.value.roadNumber.toString());
      formData.append('BlockNumber', this.listingForm.value.blockNumber.toString());
  
      if (this.listingForm.value.photo) {
        formData.append('Photo', this.listingForm.value.photo);
      }
      formData.append('Wifi', this.listingForm.value.wifi ? 'true' : 'false');
      formData.append('WaterElectricity', this.listingForm.value.waterElectricity ? 'true' : 'false');
  
      // Make the HTTP POST request to the backend API
      this.http.post('http://localhost:5209/api/Listings', formData)
        .subscribe({
          next: (response) => {
            console.log('Listing created successfully:', response);
            this.router.navigate(['/']);  // Redirect to a home page
          },
          error: (error) => {
            console.error('Error creating listing:', error);
          }
        });
    } else {
      console.error('Form is invalid');
    }
  }
}
