import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from "../../nav/nav.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent
],
  template: `<app-nav></app-nav>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { }
