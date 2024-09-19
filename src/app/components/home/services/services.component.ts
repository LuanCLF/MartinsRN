import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  template: `
  <section>
    <h1>Nossos Serviços</h1>
    <article id="art1">
      <figure>
        <img src="assets/images/pousada.jpg" alt="Pousada">
        <figcaption>Pousada Rancho da Serra</figcaption>
      </figure>
      <div>
      <h2>Hospedagem, Aluguel ou Compra</h2>
      <p>
        A cidade oferece uma variedade de opções de hospedagem, aluguel e compra de imóveis para atender às necessidades de qualquer família ou pessoa. Hotéis, pousadas, casas de temporada e apartamentos, garantindo o conforto e a segurança de todos os hóspedes. Existe uma grande variedade de opções para todos os gostos e bolsos.
      </p>
      <app-button href="/hospedagem"></app-button>
      </div>
    </article>
    <article id="art2">
      <figure>
        <img src="assets/images/sanduiche.jpg" alt="Refeição">
        <figcaption>Sanduíche do "Ao Gosto do Chefe"</figcaption>
      </figure>
      <div>
        <h2>Restaurantes e Lanchonetes Locais</h2>
        <p>
          A cidade oferece uma variedade de opções de restaurantes e lanchonetes para atender às necessidades de qualquer família ou pessoa. Restaurantes, lanchonetes, bares e padarias, garantindo o conforto e a segurança de todos os clientes. Existe uma grande variedade de opções para todos os gostos e bolsos.
        </p>
        <app-button href="/alimentacao"></app-button>
      </div>
    </article>
    <article id="art3">
      <figure>
        <img src="./assets/images/festival.jpg" alt="Festival gastronômico de martins">
        <figcaption>Um Restaurante no Festival Gastronômico de Martins</figcaption>
      </figure>
      <div>
        <h2>Eventos</h2>
        <p>
          A cidade oferece uma variedade de opções de eventos para atender às necessidades de qualquer família ou pessoa. Festivais, shows, feiras e competições, garantindo o conforto e a segurança de todos os participantes. Existe uma grande variedade de opções para todos os gostos e bolsos.
        </p>
        <app-button href="/eventos"></app-button>
      </div>
    </article>
  </section>
  `,
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent { }
