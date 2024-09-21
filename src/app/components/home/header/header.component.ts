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
      <article id="art1">
        <img id="imgMap" src="assets/images/maps.png" alt="Imagem da cidade no google maps">
        <div>
          <h1>MARTINS</h1>
          <p>Conheça a serra mais fria do alto oeste potiguar</p>
          <app-button
            href="#about"
            linkText="Saiba Mais Sobre a Cidade"
          ></app-button>
        </div>
      </article>
      <article id="art2">
        <ul>
            <li>
              <img src="assets/icons/handbag.svg" alt="icone de mala de viagem" />
              <div>
                <h3>Cidade Turistica</h3>
                <p>
                  Diversas opções de lazer, cultura e gastronomia
                </p>
              </div>
            </li>
            <li>
              <img
                src="assets/icons/local.svg"
                alt="icone de ponteiro de local"
              />
              <div>
                <h3>Localização Incrível</h3>
                <p>
                  Vistas incríveis e paisagens naturais, com um aquapark a 5km da cidade
                </p>
              </div>
            </li>
            <li>
              <img src="assets/icons/thermometer.svg" alt="icone de termômetro" />
              <div>
                <h3>Clima Agradável</h3>
                <p>
                  Temperaturas amenas e uma cidade arborizada
                </p>
              </div>
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
