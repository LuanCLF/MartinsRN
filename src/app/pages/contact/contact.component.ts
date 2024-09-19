import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../components/contact/header/header.component';
import { ContactsComponent } from "../../components/contact/contacts/contacts.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ContactsComponent
],
  template: `
  <app-header></app-header>
  <main>
    <app-contacts></app-contacts>
  </main>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent { }
