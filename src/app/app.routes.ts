import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Card } from './card/card';
import { Business } from './pages/business/business';
import { Home } from './page/home/home';
import { Aerospace } from './pages/aerospace/aerospace';
import { Software } from './pages/software/software';
import { Banking } from './pages/banking/banking';
import { Healthcare } from './pages/healthcare/healthcare';
import { Insurance } from './pages/insurance/insurance';
import { Industrial } from './pages/industrial/industrial';
import { Data } from './pages/data/data';
import { Cloud } from './pages/cloud/cloud';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'contact', component: Contact },
    { path: 'product', component: Card },
    { path: 'business', component: Business },
    { path: 'Home', component: Home },
    { path: 'aerospace', component: Aerospace },
    { path: 'software', component: Software },
    { path: 'banking', component: Banking },
    { path: 'healthcare', component: Healthcare },
    { path: 'insurance', component: Insurance },
    { path: 'industrial', component: Industrial },
    { path: 'data', component: Data },
    { path: 'cloud', component: Cloud }
];
