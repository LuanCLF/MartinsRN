import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../components/hosting/header/header.component';
import { AccommodationComponent } from "../../components/hosting/accommodation/accommodation.component";

@Component({
  selector: 'app-hosting',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AccommodationComponent
],
  template: `
  <app-header></app-header>
  <main>
    <app-accommodation></app-accommodation>
  </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostingComponent { }
