import { Routes } from '@angular/router';
import { ListingListComponent } from './components/listing-list/listing-list.component';
import { LoginComponent } from './components/login/login.component';
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
    }
];
