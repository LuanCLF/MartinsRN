import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HostingComponent } from './pages/hosting/hosting.component';
import { FeedingComponent } from './pages/feeding/feeding.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hospedagem', component: HostingComponent },
  {path: "alimentacao", component: FeedingComponent},
  { path: '**', redirectTo: '/' },
];
