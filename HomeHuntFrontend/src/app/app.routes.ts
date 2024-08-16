import { Routes } from '@angular/router';
import { ListingListComponent } from './components/listing-list/listing-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateListingComponent } from './components/create-listing/create-listing.component';
export const routes: Routes = [
    {
        path: '',
        component: ListingListComponent,
        title: 'Home Hunt | Listings'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Home Hunt | Login'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Home Hunt | Register'
    },
    {
        path: 'create-listing',
        component: CreateListingComponent,
        title: 'Home Hunt | Create Listing'
    }
];
