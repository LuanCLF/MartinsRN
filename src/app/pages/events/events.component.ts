import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../components/events/header/header.component';
import { CelebrationsComponent } from "../../components/events/celebrations/celebrations.component";

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CelebrationsComponent],
  template: `
   <app-header></app-header>
   <main>
    <app-celebrations></app-celebrations>
   </main> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {}
