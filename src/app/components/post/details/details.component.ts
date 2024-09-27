import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IHosting } from '../../../interfaces/post/hosting.';
import { IFeeding } from '../../../interfaces/post/feeding.';
import { IEvent } from '../../../interfaces/post/event.';
import { NavComponent } from '../../nav/nav.component';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from "../../button/button.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    ButtonComponent
],
  template: `
  <section>
    <h1>Detalhes</h1>
    @if (host) {
      <app-button [href]="back" linkText="Voltar" [imgb]=false></app-button>
      @if (host.images.length > 0) {
        <img
          class="img"
          src={{host.images[0]}}
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
      <article>
        <h3>{{host.title}}</h3>
        <span>
        Postado em {{host.createdAt | date: 'dd/MM/yyyy'}}
        </span>
        <ul >
          @if (host.bedrooms > 0) {
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> {{host.bedrooms}} quarto(s)
            </li>
          }
          @if (host.bathrooms > 0) {
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> {{host.bathrooms}} banheiro(s)
            </li>
          }
          @if (host.vacancy > 0) {
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> {{host.vacancy}} vaga(s)
            </li>
          }
          @if (host.serviceArea) {
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de Serviço
            </li>
          }
          @if (host.kitchen) {
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          }
        </ul>
        <p>{{host.description}}</p>
        <article class="articleSocial">
          @if (host.whatsApp || host.instagram) {
            @if (host.whatsApp && host.whatsApp.trim() !== '') {
                <button>
                  <a href="{{host.whatsApp}}"
                    ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
                  /></a>
                </button>
              }
              @if (host.instagram && host.instagram.trim() !== '') {       
                <button>
                  <a href="{{host.instagram}}"
                    ><img src="assets/icons/instagram.svg" alt="icone do instagram"
                  /></a>
                </button>
              }  
            }
        </article>
      </article>
      @if(host.images.length > 1) {
        <h3>Outras imagens</h3>
        @for (image of host.images; track $index) {
          @if ($index > 0) {
            <img
              class="img"
              src={{image}}
              alt="Imagem de pousada"
            />
          }
        }
      }
    }

    @if (feed) {
      <app-button [href]="back" linkText="Voltar" [imgb]=false></app-button>
      @if (feed.images.length > 0) {
        <img
          class="img"
          src={{feed.images[0]}}
          alt="Imagem de alimentação"
        />
      }
      @else {
        <img
          class="img"
          src="assets/images/noImage.jpeg"
          alt="Sem imagem"
        />
      }
      <article>
        <h3>{{feed.title}}</h3>
        <span>
        Postado em {{feed.createdAt | date: 'dd/MM/yyyy'}}
        </span>
        <ul >
          @if (feed.type) {
                <li>
                  <img src="assets/icons/check.svg" alt="ícone de check" /> {{feed.type}}
                </li>
              }
              @if (feed.wifi) {
                <li>
                  <img src="assets/icons/check.svg" alt="ícone de check" /> Wi-fi grátis
                </li>
              }
              @if (feed.parking) {
                <li>
                  <img src="assets/icons/check.svg" alt="ícone de check" /> Estacionamento
                </li>
              }
        </ul>
        <p>{{feed.description}}</p>
        <article class="articleSocial">
          @if (feed.whatsApp || feed.instagram) {
            @if (feed.whatsApp && feed.whatsApp.trim() !== '') {
                <button>
                  <a href="{{feed.whatsApp}}"
                    ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
                  /></a>
                </button>
              }
              @if (feed.instagram && feed.instagram.trim() !== '') {       
                <button>
                  <a href="{{feed.instagram}}"
                    ><img src="assets/icons/instagram.svg" alt="icone do instagram"
                  /></a>
                </button>
              }  
            }
        </article>
      </article>
      @if(feed.images.length > 1) {
        <h3>Outras imagens</h3>
        @for (image of feed.images; track $index) {
          @if ($index > 0) {
            <img
              class="img"
              src={{image}}
              alt="Imagem de alimentação"
            />
          }
        }
      }
    }

    @if (event)  {
      <app-button [href]="back" linkText="Voltar" [imgb]=false></app-button>
      @if (event.images.length > 0) {
        <img
          class="img"
          src={{event.images[0]}}
          alt="Imagem de evento"
        />
      }
      @else {
        <img
          class="img"
          src="assets/images/noImage.jpeg"
          alt="Sem imagem"
        />
      }
      <article>
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
        <p>{{event.description}}</p>
        <article class="articleSocial">
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
        </article>
      </article>
      @if(event.images.length > 1) {
        <h3>Outras imagens</h3>
        @for (image of event.images; track $index) {
          @if ($index > 0) {
            <img
              class="img"
              src={{image}}
              alt="Imagem do evento" />
          }
        }
      }
    }
  </section>`,
  styleUrl: './details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent { 
  @Input() host?: IHosting = undefined;
  @Input() feed?: IFeeding = undefined;
  @Input() event?: IEvent = undefined;
  back: string = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.host = params['host'] ? JSON.parse(params['host']) : undefined;
      this.feed = params['feed'] ? JSON.parse(params['feed']) : undefined;
      this.event = params['event'] ? JSON.parse(params['event']) : undefined;

      if(this.host) this.back = "/hospedagem";
      if(this.feed) this.back = "/alimentacao";
      if(this.event) this.back = "/eventos";
    });
  }

}
