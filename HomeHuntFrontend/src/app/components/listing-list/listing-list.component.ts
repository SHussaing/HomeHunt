import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { Listing } from '../../models/listing.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Add CommonModule if needed for directives like ngFor, ngIf, etc.
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way data binding
import { SliderModule } from 'primeng/slider'; // PrimeNG Slider module
import { DropdownModule } from 'primeng/dropdown'; // PrimeNG Dropdown module
import { CheckboxModule } from 'primeng/checkbox'; // PrimeNG Checkbox module
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listing-list',
  standalone: true,
  imports: [
    HttpClientModule,  // Correctly import HttpClientModule
    CommonModule,       // Import CommonModule if using Angular directives like *ngFor or *ngIf
    CardModule,         // Import CardModule for the PrimeNG card component
    FormsModule,        // Import FormsModule for two-way data binding with ngModel
    SliderModule,       // Import SliderModule for the PrimeNG slider component
    DropdownModule,     // Import DropdownModule for the PrimeNG dropdown component
    CheckboxModule      // Import CheckboxModule for the PrimeNG checkbox component
  ],
  providers: [ListingService],  // Ensure the service is provided
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.scss']
})
export class ListingListComponent implements OnInit {
  listings: Listing[] = [];
  filteredListings: Listing[] = [];
  
  // Filter Properties
  priceRange: number[] = [0, 10000];
  selectedCity: string = '';
  hasWifi: boolean = false;
  hasWaterElectricity: boolean = false;
  selectedSortOrder: string = 'latest';

  // Dropdown options
  cities: { label: string, value: string }[] = [];

  sortOptions: { label: string, value: string }[] = [
    { label: 'Latest to Oldest', value: 'latest' },
    { label: 'Oldest to Latest', value: 'oldest' }
  ];

  constructor(private listingService: ListingService,
              private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.listingService.getListings().subscribe(data => {
      this.listings = data;
      this.applyFilters(); // Apply initial filters
    });

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

  applyFilters(): void {
    this.filteredListings = this.listings
      .filter(listing => this.priceRange[0] <= listing.price && listing.price <= this.priceRange[1])
      .filter(listing => !this.selectedCity || listing.city === this.selectedCity)
      .filter(listing => !this.hasWifi || listing.wifi)
      .filter(listing => !this.hasWaterElectricity || listing.waterElectricity)
      .sort((a, b) => {
        if (this.selectedSortOrder === 'latest') {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        } else {
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        }
      });
  }

  // Method to handle changes in filters
  onFilterChange(): void {
    this.applyFilters();
  }
}
