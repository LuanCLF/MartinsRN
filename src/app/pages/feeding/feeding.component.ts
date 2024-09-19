import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../components/feeding/header/header.component';
import { EstablishmentsComponent } from "../../components/feeding/establishments/establishments.component";

@Component({
  selector: 'app-feeding',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    EstablishmentsComponent
],
  template: `
  <app-header></app-header>
  <main>
    <app-establishments></app-establishments>
  </main>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedingComponent { }
