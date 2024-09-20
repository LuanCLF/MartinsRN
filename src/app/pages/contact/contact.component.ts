import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactsComponent } from "../../components/contact/contacts/contacts.component";
import { NavComponent } from "../../components/nav/nav.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ContactsComponent,
    NavComponent
],
  template: `
  <header>
    <app-nav></app-nav>
  </header>
  <main>
    <app-contacts></app-contacts>
  </main>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent { }
