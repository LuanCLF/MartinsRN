import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-celebrations',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <section>
  <h1 id="about">Sobre a cidade</h1> 
  
  <article>
  <figure>
    <img src="./assets/images/papangu.JPG" alt="Imagens de papangu no carnaval">
    <figcaption>Papangus no Carnaval</figcaption>
  </figure>
  <div>
    <h3>Carnaval</h3>
    <p>
    O carnaval de Martins acontece no mês de fevereiro e é conhecido por seus papangus, que são figuras mascaradas que percorrem as ruas da cidade.
    As ruas são enfeitadas com bandeirinhas e os moradores e turistas se divertem com os blocos de rua e as brincadeiras das crianças, lotando as ruas da praça central.
  </p>
  </div>
  </article>

  <article>
  <div>
    <h3>São João</h3>
    <p>
    O são joão é conhecido por suas festas juninas, com quadrilhas, comidas típicas e muita animação.
    As festas acontecem no mês de junho, em diversos bairros da cidade e são abertas ao público, com muita música, dança e alegria.
  </p>
  </div>
  <figure>
    <img src="./assets/images/quadrilha.png" alt="Quadrilha de festa junina">
    <figcaption>Quadrilha Lampião de Gás</figcaption>
  </figure>
  </article>

  <article>
  <figure>
    <img src="./assets/images/festival1.jpg" alt="Imagem de uma quadrilha de são joão no festival gastronômico">
    <figcaption>
      Apresentação de quadrilha no Festival Gastronômico
    </figcaption>
  </figure>
  <div>
    <h3>Festival Gastronômico</h3>
    <p>
    O festival gastronômico é um evento que acontece no mês de julho e reúne diversos pratos típicos da região, além de apresentações culturais e shows musicais.
    Geralmente acontece na praça central da cidade e é um evento muito aguardado em todo o estado.
    </p>
  </div>
  </article>
  
  <article>
  <div>
    <h3>Dia da Independência</h3>
    <p>
    O desfile cívico de 7 de setembro é uma tradição em Martins e reúne escolas municipais, estaduais, particulares e instituições da cidade que desfilam pela praça principal.
  </p>
  </div>
  <figure>
    <img src="./assets/images/desfile1.JPG" alt="Desfile cívico de 7 de setembro">
    <figcaption>
      Desfile Cívico de 7 de Setembro
    </figcaption>
  </figure>
  </article>

  <article>
    <figure>
      <img src="assets/images/festa padroeira1.jpeg" alt="Banda Nair Austero Soares">
      <figcaption>Apresentação da Banda Nair Austero Soares em Frente a Igreja</figcaption>
    </figure>
    <div>
      <h3>
        Festa Da Padroeira
      </h3>
      <p>
      A festa da padroeira é uma das maiores festas da cidade e geralmente começa no final de dezembro e se estende até o dia 6 de janeiro, com shows musicais, apresentações culturais e religiosas, barracas de comidas, brinquedos, produtos e muita animação.
    </p>
    </div>
  </article>

  </section>`,
  styleUrl: './celebrations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CelebrationsComponent { }
