import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from "../../components/home/about/about.component";
import { ServicesComponent } from "../../components/home/services/services.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutComponent, ServicesComponent],
  template: `<main id="initial">
  <app-services></app-services>
  <app-about></app-about>
  </main>`,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
