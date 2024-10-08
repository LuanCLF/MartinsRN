import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";
import { IFeeding, IFeedings } from '../../../interfaces/post/feeding.';
import { PostService } from '../../../services/post.service';
import { Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-establishments',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
],
  template: `
  <section>
    <h2>
      Os melhores estabelecimentos para você
    </h2>
    <p><app-button href="/cadastro" linkText="Cadastre-se" [imgb]=false></app-button> para criar posts aqui</p>
    <div id="pagesBtn">
      <button #attFeeds [disabled]="isSubmitFeeds"  (click)="getfeedings()">Atualizar</button>
      <button  (click)="passFeeds()">Prox</button>
      <button (click)="prevFeeds()" >Prev</button>  
    </div>
    @if(feeds.length > 0) {
      <ul >
      @for (feed of feeds; track $index) {
        <li id="liBig">
          @if (feed.images.length > 0) {
            <img
              class="img"
              src={{feed.images[0]}}
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
            <div class="divSocialHosting">
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
                <button (click)="goToDetails(feed)">Saiba Mais</button>
            </div>
          </div>
        </li>
      }
    </ul>
    } @else {
      <p>Nenhum post encontrado</p>
    }
  </section>`,
  styleUrl: './establishments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstablishmentsComponent { 
  feeds: IFeedings[] = [];
  page: number = 1;
  isSubmitFeeds: boolean = false;

  @ViewChild('attFeeds') submitButton!: ElementRef<HTMLButtonElement>;

  constructor(private posts: PostService, private cdr: ChangeDetectorRef, private router: Router, private storage: StorageService) {
  }

  async ngOnInit() {
    await this.getPost();
  }

  async getPost(){
    const storedFeeds = this.storage.getPost('feed') as IFeedings[];
    if (Array.isArray(storedFeeds)) {
      this.feeds = storedFeeds;
    } else {
      this.feeds = [];
    }
  }

  passFeeds() {
    this.page++;
    this.getfeedings();
  }

  prevFeeds() {
    this.page-1 === 0 ? this.page = 1 : this.page--;
    this.getfeedings();
  }

  async getfeedings() {
    this.isSubmitFeeds = true;
    this.submitButton.nativeElement.style.cursor = 'wait';
    this.posts.getAllFeedings(this.page).subscribe({
      next: response => {
        if (Array.isArray(response)) {
          this.feeds = response;
          this.storage.setPost('feed', this.feeds)
        } else {
          this.feeds = [];
        }
      },
      error: error => {
        console.error('Get feedings failed', error);
      },
      complete: () => {
        this.isSubmitFeeds = false;
        this.submitButton.nativeElement.style.cursor = 'pointer';
        this.cdr.markForCheck();
      }
    });
  }

  goToDetails(feed: IFeeding) {

    this.router.navigate(['/detalhes'], {
      queryParams: {
        feed: JSON.stringify(feed)
      }
    });
  }
}
