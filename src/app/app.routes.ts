import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HostingComponent } from './pages/hosting/hosting.component';
import { FeedingComponent } from './pages/feeding/feeding.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hospedagem', component: HostingComponent },
  { path: 'alimentacao', component: FeedingComponent},
  { path: 'eventos', component: EventsComponent },
  { path: 'contato', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: SingupComponent},
  { path: '**', redirectTo: '/' },
];
