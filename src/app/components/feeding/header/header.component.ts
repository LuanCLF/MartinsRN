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
  <header>
    <app-nav></app-nav>
    <section>
      <article id="art1">
      <img src="assets/images/carne de sol.jpeg" alt="Imagem de um prato de carne de sol com macaxeira">
      <div>
        <h1>Alimente Sua Felicidade</h1>
        <p>Encontre restaurantes, lanchonetes, docerias e mirantes com as melhores refeições para sua família</p>
      </div>
      </article>
      <article id="art2">
          <ul>
            <li>
              <span> 01 </span>
              <div>
                <h3>Variedade</h3>
                <p>
                  Opções que agradam todos os paladares e bolsos.
                </p>
              </div>
            </li>
            <li id="li2">
              <span> 02 </span>
              <div>
                <h3>Contato Direto</h3>
                <p>Acesso ao contato de todos os estabelecimentos.</p>
              </div>
            </li>
            <li id="li3">
              <span> 03 </span>
              <div>
                <h3>Facilidade</h3>
                <p>
                  Navegação simples e intuitiva para encontrar o lugar
                  ideal.
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
