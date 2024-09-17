import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `<header id="menu">
    <nav>
      <div (mouseover)="showMenu = true" (mouseout)="hideMenu()">
        <button id="menu-burger">☰</button>
        <ul [class.show]="showMenu">
          <li>
            <a href="#">Página Inicial <span></span></a>
          </li>
          <li>
            <a href="#">Hospedagem <span></span></a>
          </li>
          <li>
            <a href="#">Gastronomia <span></span></a>
          </li>
          <li>
            <a href="#">Eventos <span></span></a>
          </li>
          <li>
            <a href="#">Contato <span></span></a>
          </li>
        </ul>
      </div>
    </nav>
    <section>
      <h1>MARTINS</h1>
      <p>Conheça a serra mais fria do alto oeste potiguar</p>
      <app-button href="#about" linkText="Saiba Mais Sobre a Cidade"></app-button>
      <article>
        <ul>
          <li>
            <img src="assets/icons/handbag.svg" alt="icone de mala de viagem"> <span>Cidade Turistica</span>
          </li>
          <li>
            <img src="assets/icons/local.svg" alt="icone de ponteiro de local"> <span>Localização Incrível</span>
          </li>
          <li>
            <img src="assets/icons/knife-fork.svg" alt="icone de prato de comida"> <span>Gastronomia Regional</span>
          </li>
          <li>
            <img src="assets/icons/thermometer.svg" alt="icone de termômetro"> <span>Clima Agradável</span>
          </li>
        </ul>
      </article>
    </section>
  </header>`,
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  showMenu = false;

  hideMenu() {
    setTimeout(() => (this.showMenu = false), 500);
  }
}
