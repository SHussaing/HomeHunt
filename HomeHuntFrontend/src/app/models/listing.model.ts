export interface Listing {
  listingID: number;
  userID: number;
  name: string;
  price: number;
  city: string;
  houseNumber: number;
  roadNumber: number;
  blockNumber: number;
  photo: string;
  wifi: boolean;
  waterElectricity: boolean;
  views: number;
  createdAt: Date;

  // User details
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPhoneNumber: string;
}
