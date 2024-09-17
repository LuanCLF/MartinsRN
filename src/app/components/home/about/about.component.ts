import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `  <section>
  <h1 id="about">Sobre a cidade</h1> 
  
  <article id="art1">
  <figure>
    <img src="./assets/images/martins.jpg" alt="Pôr do Sol do Diadema">
    <figcaption>Pôr do Sol do Diadema</figcaption>
  </figure>
  <p>
  Localizado no interior do estado do Rio Grande do Norte, Brasil, a aproximadamente 370 km da capital, Natal. Conhecida como a “Princesa Serrana” e “Campos do Jordão do Rio Grande do Norte”, Martins é famosa por seu clima agradável, especialmente em contraste com as regiões vizinhas.
  </p>
  </article>

  <article id="art2">
  <p>
  A cidade é um destino turístico popular, destacando-se pelo turismo de aventura e pela segunda maior caverna de mármore do país, a Casa de Pedra, com 100 metros de comprimento. Além disso, Martins realiza um festival gastronômico de rua nos mês julho, considerado o maior do estado. Outro evento cultural importante é a festa da padroeira Nossa Senhora da Conceição, que ocorre entre o final de dezembro e o início de janeiro.
  </p>
  <ul>
    <li>
      <figcaption>
        <img src="./assets/images/casa de pedra.jpeg" alt="Casa de Pedra">
        <figcaption>Casa de Pedra</figcaption>
      </figcaption>
    </li>
    <li class="imgf">
      <figcaption>
        <img src="./assets/images/caldeirao.png" alt="Festival Gastronômico">
        <figcaption>Festival Gastronômico</figcaption>
      </figcaption>
    </li>
    <li class="imgf">
      <figcaption>
        <img src="./assets/images/festa.jpeg" alt="Festa da Padroeira">
        <figcaption>Festa da Padroeira</figcaption>
      </figcaption>
    </li>
  </ul>
  </article>

  <article id="art3">
  <figure>
    <img src="./assets/images/igreja centro.jpg" alt="Igreja Matriz">
    <figcaption>Igreja Matriz</figcaption>
  </figure>
  <p>
  Martins foi fundada em 1841 e possui uma rica história, com várias mudanças de nome ao longo dos anos até se estabelecer como Martins em 1890, em homenagem a Francisco Martins de Roriz, fundador da capela de Nossa Senhora da Conceição.
  </p>
  </article>

  </section>`,
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent { }
