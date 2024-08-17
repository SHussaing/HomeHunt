import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { Listing } from '../../models/listing.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner'; // Import ProgressSpinnerModule
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listing-list',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    CardModule,
    FormsModule,
    SliderModule,
    DropdownModule,
    CheckboxModule,
    ProgressSpinnerModule // Add ProgressSpinnerModule to imports
  ],
  providers: [ListingService],
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.scss']
})
export class ListingListComponent implements OnInit {
  listings: Listing[] = [];
  filteredListings: Listing[] = [];
  loading: boolean = true; // Add a loading property

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
    this.listingService.getListings().subscribe({
      next: (data) => {
        this.listings = data;
        this.applyFilters(); // Apply initial filters
        this.loading = false; // Stop loading when data is received
      },
      error: (err) => {
        console.error('Error fetching listings:', err);
        this.loading = false; // Stop loading even if there's an error
      }
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

  onFilterChange(): void {
    this.applyFilters();
  }

  resetFilters(): void {
    this.priceRange = [0, 10000];
    this.selectedCity = '';
    this.hasWifi = false;
    this.hasWaterElectricity = false;
    this.selectedSortOrder = 'latest';
    this.applyFilters();
  }
}
