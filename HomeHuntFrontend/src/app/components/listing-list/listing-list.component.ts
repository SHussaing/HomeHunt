import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { Listing } from '../../models/listing.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Add CommonModule if needed for directives like ngFor, ngIf, etc.
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-listing-list',
  standalone: true,
  imports: [
    HttpClientModule,  // Correctly import HttpClientModule
    CommonModule,       // Import CommonModule if using Angular directives like *ngFor or *ngIf
    CardModule          // Import CardModule for the PrimeNG card component
  ],
  providers: [ListingService],  // Ensure the service is provided
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.scss']
})
export class ListingListComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingService: ListingService) {}

  ngOnInit(): void {
    this.listingService.getListings().subscribe(data => {
      this.listings = data;
    });
  }
}
