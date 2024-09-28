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
  <header>
    <nav>
    <app-button [href]="back" linkText="Voltar" [imgb]=false></app-button>
    </nav>
  </header>
  <section>
    @if (host) {
      <h1>{{host.title}}</h1>
      <article class="art1">

          <div>
            @if (host.images.length > 0) {
              <img
                class="img imgP"
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
          </div>

          <article class="artDetails">

            <span>
            Postado em {{host.createdAt | date: 'dd/MM/yyyy'}}
            </span>

            <ul >
              @if (host.bedrooms > 0) {
                <li>
                  Quartos: {{host.bedrooms}}
                </li>
              }
              @if (host.bathrooms > 0) {
                <li>
                  Banheiros: {{host.bathrooms}}
                </li>
              }
              @if (host.vacancy > 0) {
                <li>
                  Vagas p/ Veículo: {{host.vacancy}}
                </li>
              }
              @if (host.serviceArea) {
                <li>
                  Área de Serviço <img src="assets/icons/check.svg" alt="ícone de check" /> 
                </li>
              }
              @if (host.kitchen) {
                <li>
                  Cozinha <img src="assets/icons/check.svg" alt="ícone de check" />
                </li>
              }
            </ul>
            <p>Descrição: {{host.description}}</p>

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

        </article>
        <article class="art2">
        @if(host.images.length > 1) {
          <h3>Outras imagens</h3>
          <ul>
          @for (image of host.images; track $index) {
            @if ($index > 0) {
             <li>
             <img
                class="img"
                src={{image}}
                alt="Imagem da hospedagem" />
             </li>
            }
          }
        </ul>
        }
      </article>
    }

    @if (feed) {
      <h1>{{feed.title}}</h1>
      <article class="art1">
        <div>
          @if (feed.images.length > 0) {
            <img
              class="img imgP"
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
        </div>
        <article class="artDetails">
          <span>
          Postado em {{feed.createdAt | date: 'dd/MM/yyyy'}}
          </span>
          <ul >
            @if (feed.type) {
                  <li>
                    Tipo: {{feed.type}}
                  </li>
                }
                @if (feed.wifi) {
                  <li>
                    Wi-fi <img src="assets/icons/check.svg" alt="ícone de check" />
                  </li>
                }
                @if (feed.parking) {
                  <li>
                    Estacionamento <img src="assets/icons/check.svg" alt="ícone de check" />
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

      </article>
      <article class="art2">
        @if(feed.images.length > 1) {
          <h3>Outras imagens</h3>
          <ul>
          @for (image of feed.images; track $index) {
            @if ($index > 0) {
             <li>
             <img
                class="img"
                src={{image}}
                alt="Imagem do estabelecimento" />
             </li>
            }
          }
        </ul>
        }
      </article>
    }

    @if (event)  {
      <h1>{{event.title}}</h1>
      <article class="art1">

        <div>
          @if (event.images.length > 0) {
          <img
            class="img imgP"
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
        </div>

        <article class="artDetails">
          
          <span>
          Postado em {{event.createdAt | date: 'dd/MM/yyyy'}}
          </span>

          <ul >
            @if (event.date) {
                <li>
                  Dia: {{event.date | date: 'dd/MM/yyyy'}}
                </li>
              }
              @if (event.date) {
                <li>
                  Horário: {{event.date | date: 'HH:mm'}}
                </li>
              }
              @if (event.local) {
                <li>
                  Local: {{event.local}}
                </li>
              }
          </ul>
          <p>Descrição: {{event.description}}</p>

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

      </article>
      <article class="art2">
        @if(event.images.length > 1) {
          <h3>Outras imagens</h3>
          <ul>
          @for (image of event.images; track $index) {
            @if ($index > 0) {
             <li>
             <img
                class="img"
                src={{image}}
                alt="Imagem do evento" />
             </li>
            }
          }
        </ul>
        }
      </article>
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
