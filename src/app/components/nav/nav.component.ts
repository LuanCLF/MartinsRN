import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <nav>
    
      <ul id="acess">
        <ng-container *ngIf="!loggedIn(); else loggedInTemplate">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/cadastro">Registrar</a>
          </li>
        </ng-container>
        <ng-template #loggedInTemplate>
          <li>
            <a href="/perfil">Perfil</a>
          </li>
          <li>
            <a href="#" (click)="logout()">Sair</a>
          </li>
        </ng-template>
      </ul>
    
      <div id="divMenu" (mouseover)="showMenu = true" (mouseout)="hideMenu()">
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
            <a href="/eventos">Eventos <span></span></a>
          </li>
          <li>
            <a href="/contato">Contato <span></span></a>
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

  constructor(private userService: UserService) {}

  hideMenu() {
    setTimeout(() => (this.showMenu = false), 500);
  }

  loggedIn() {
    return this.userService.isLoggedIn();
  }

  logout() {
    this.userService.logout();
  }
 }
