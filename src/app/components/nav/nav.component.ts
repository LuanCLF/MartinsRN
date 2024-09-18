import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <nav>
      <div (mouseover)="showMenu = true" (mouseout)="hideMenu()">
        <button id="menu-burger">☰</button>
        <ul [class.show]="showMenu">
          <li>
            <a href="/">Página Inicial <span></span></a>
          </li>
          <li>
            <a href="/hospedagem">Hospedagem <span></span></a>
          </li>
          <li>
            <a href="/alimentacao">Alimentação <span></span></a>
          </li>
          <li>
            <a href="#">Eventos <span></span></a>
          </li>
          <li>
            <a href="/Contato">Contato <span></span></a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  showMenu = false;

  hideMenu() {
    setTimeout(() => (this.showMenu = false), 500);
  }
 }
