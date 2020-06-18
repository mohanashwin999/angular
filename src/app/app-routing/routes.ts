import { HomeComponent } from './../home/home.component';
import { ContactComponent } from './../contact/contact.component';
import { AboutComponent } from './../about/about.component';
import { MenuComponent } from './../menu/menu.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contactus', component: ContactComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];

