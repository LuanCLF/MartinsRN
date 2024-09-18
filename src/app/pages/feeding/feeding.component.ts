import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../components/feeding/header/header.component';

@Component({
  selector: 'app-feeding',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent
  ],
  template: `
  <app-header></app-header>
  <main>
  </main>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedingComponent { }
