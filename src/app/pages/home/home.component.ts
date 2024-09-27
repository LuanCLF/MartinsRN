import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from '../../components/home/about/about.component';
import { ServicesComponent } from '../../components/home/services/services.component';
import { HeaderComponent } from '../../components/home/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AboutComponent, ServicesComponent],
  template: `
  <app-header></app-header>
  <main id="initial">
    <app-services></app-services>
    <app-about></app-about>
  </main>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
}
