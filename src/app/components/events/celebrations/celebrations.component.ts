import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { IEvent, IEvents } from '../../../interfaces/post/event.';
import { PostService } from '../../../services/post.service';
import { Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-celebrations',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  template: `
  <section id="sec1">
    <h2>Eventos cadastrados</h2>
    <p><app-button href="/cadastro" linkText="Cadastre-se" [imgb]=false></app-button> para criar posts aqui</p>
    <div id="pagesBtn">
      <button  (click)="passEvents()">Prox</button>
      <button (click)="prevEvents()" >Prev</button>  
    </div>
    @if(events.length > 0) {
      <ul>
      @for (event of events; track $index) {
        <li id="liBig">
          @if (event.images.length > 0) {
            <img
              class="img"
              src={{event.images[0]}}
              alt="Imagem de pousada"
            />
          }
          @else {
            <img
              class="img"
              src="assets/images/noImage.jpeg"
              alt="Sem imagem"
            />
          }
          <div>
            <h3>{{event.title}}</h3>
            <span>
            Postado em {{event.createdAt | date: 'dd/MM/yyyy'}}
            </span>
            <ul >
              @if (event.date) {
                <li>
                  <img src="assets/icons/calendar.svg" alt="ícone de calendário" /> {{event.date | date: 'dd/MM/yyyy'}}
                </li>
              }
              @if (event.date) {
                <li>
                  <img src="assets/icons/clock.svg" alt="ícone de relógio" /> {{event.date | date: 'HH:mm'}}
                </li>
              }
              @if (event.local) {
                <li>
                  <img src="assets/icons/map.svg" alt="ícone de localização" /> {{event.local}}
                </li>
              }
            </ul>
            <div class="divSocialEvent">
              @if (event.whatsApp || event.instagram) {
                  @if (event.whatsApp && event.whatsApp.trim() !== '') {
                    <button>
                      <a href="{{event.whatsApp}}"
                        ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
                      /></a>
                    </button>
                  }
                  @if (event.instagram && event.instagram.trim() !== '') {       
                    <button>
                      <a href="{{event.instagram}}"
                        ><img src="assets/icons/instagram.svg" alt="icone do instagram"
                      /></a>
                    </button>
                  }  
                }
                <button (click)="goToDetails(event)">Saiba Mais</button>
            </div>
          </div>
        </li>
      }
    </ul>
    } @else {
      <p>Nenhum post encontrado</p>
    }
  </section>
  <section id="sec2">
  <h2 id="about">Eventos da cidade</h2> 
  
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
export class CelebrationsComponent {
  events: IEvents[] = [];
  page: number = 1;

  constructor(private posts: PostService, private cdr: ChangeDetectorRef, private router: Router, private storage: StorageService) {
  }

  ngOnInit() {
    this.getPost();
  }

  ngAfterContentInit(): void {
    this.getEvents();
  }

  getPost(){
    const storedEvents = this.storage.getPost('feed') as IEvents[];
    if (Array.isArray(storedEvents)) {
      this.events = storedEvents;
    } else {
      this.events = [];
    }
  }

  passEvents() {
    this.page++;
    this.getEvents();
  }

  prevEvents() {
    this.page-1 === 0 ? this.page = 1 : this.page--;
    this.getEvents();
  }

  getEvents() {
    this.posts.getAllEvents(this.page).subscribe({
      next: response => {
        if (Array.isArray(response)) {
          this.events = response;
          this.storage.setPost('event', this.events)
        } else {
          this.events = [];
        }
        this.cdr.markForCheck();
      },
      error: error => {
        console.error('Get events failed', error);
      }
    });
  }
  
  goToDetails(event: IEvent) {

    this.router.navigate(['/detalhes'], {
      queryParams: {
        event: JSON.stringify(event)
      }
    });
  }
}