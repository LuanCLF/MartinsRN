import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { NavComponent } from "../../nav/nav.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent, NavComponent],
  template: `<header id="menu">
    <app-nav></app-nav>
    <section>
      <h1>MARTINS</h1>
      <p>Conheça a serra mais fria do alto oeste potiguar</p>
      <app-button
        href="#about"
        linkText="Saiba Mais Sobre a Cidade"
      ></app-button>
      <article>
        <ul>
          <li>
            <img src="assets/icons/handbag.svg" alt="icone de mala de viagem" />
            <span>Cidade Turistica</span>
          </li>
          <li>
            <img
              src="assets/icons/local.svg"
              alt="icone de ponteiro de local"
            />
            <span>Localização Incrível</span>
          </li>
          <li>
            <img
              src="assets/icons/knife-fork.svg"
              alt="icone de prato de comida"
            />
            <span>Gastronomia Regional</span>
          </li>
          <li>
            <img src="assets/icons/thermometer.svg" alt="icone de termômetro" />
            <span>Clima Agradável</span>
          </li>
        </ul>
      </article>
    </section>
  </header>`,
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
}
