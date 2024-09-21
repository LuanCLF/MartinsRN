import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from '../../nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavComponent],
  template: `
    <header>
      <app-nav></app-nav>
      <section>
        <article id="art1">
          <img src="/assets/images/pousada.jpg" alt="Imagem da pousada Rancho da Serra" />
          <div>
            <h1>Encontre Seu Lugar</h1>
            <p>
              Descubra hotéis, chalés, pousadas e casas de temporada para curtir sua viagem, e também casas para compra e aluguel
            </p>
          </div>
        </article>
        <article id="art2">
          <ul>
            <li>
              <span> 01 </span>
              <div>
                <h3>Variedade</h3>
                <p>Opções confortáveis para todos os gostos.</p>
              </div>
            </li>
            <li>
              <span> 02 </span>
              <div>
                <h3>Contato Direto</h3>
                <p>Fale diretamente com os proprietários sem intermediários.</p>
              </div>
            </li>
            <li>
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
export class HeaderComponent {}
