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
  template: `
  <app-nav></app-nav>
  <header>
  <section>
        <article id="art1">
          <img src="assets/images/desfile.JPG" alt="Imagem de cavaleiros no desfile cívico de Martin RN" />
          <div>
            <h1>
              Os Melhores Eventos
            </h1>
            <p>
              Acompanhe os melhores eventos da região, e fique por dentro de tudo que acontece em Martin RN.
            </p>
          </div>
        </article>
        <article id="art2">
          <ul>
            <li>
              <span> 01 </span>
              <div>
                <h3>
                  Eventos Especiais
                </h3>
                <p>
                  Mais de 5 grandes eventos por ano, com muita festa e alegria.
                </p>
              </div>
            </li>
            <li id="li2">
              <span> 02 </span>
              <div>
                <h3>
                  Cidade Decorada
                </h3>
                <p>
                  A cidade reflete aquilo que está acontecendo, e se enfeita para a festa.
                </p>
              </div>
            </li>
            <li id="li3">
              <span> 03 </span>
              <div>
                <h3>
                  Organização e Segurança
                </h3>
                <p>
                  Eventos organizados e seguros, para que você possa aproveitar sem preocupação.
                </p>
              </div>
            </li>
          </ul>
        </article>
      </section>
  </header>
  `,
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { }
