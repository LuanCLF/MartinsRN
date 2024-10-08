import { CommonModule } from '@angular/common';
import {  ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";
import { IHosting, IHostings } from '../../../interfaces/post/hosting.';
import { PostService } from '../../../services/post.service';
import { Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-accommodation',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
],
  template: `
  <section>
    <h2>Junte-se a nossa comunidade</h2>
    <p><app-button href="/cadastro" linkText="Cadastre-se" [imgb]=false></app-button> para criar posts aqui</p>
    <div id="pagesBtn">
      <button #attHosts [disabled]="isSubmitHosts"  (click)="getHostings()">Atualizar</button>
      <button  (click)="passHosts()">Prox</button>
      <button (click)="prevHosts()" >Prev</button>  
    </div>
    @if(hosts.length > 0) {
      <ul>
      @for (host of hosts; track $index) {
        <li id="liBig">
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
          <div>
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
            <div class="divSocialHosting">
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
                <button (click)="goToDetails(host)">Saiba Mais</button>
            </div>
          </div>
        </li>
      }
    </ul>
    } @else {
      <p>Nenhum post encontrado</p>
    }
  </section>  `,
  styleUrl: './accommodation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccommodationComponent { 
  hosts: IHostings[] = [];
  page: number = 1;
  isSubmitHosts: boolean = false;

  @ViewChild('attHosts') submitButton!: ElementRef<HTMLButtonElement>;

  constructor(private posts: PostService, private cdr: ChangeDetectorRef, private router: Router, private storage: StorageService) {
  }

   ngOnInit() {
     this.getPost();
  }

    getPost(){
    const storedHosts = this.storage.getPost('host') as IHostings[];


    if (Array.isArray(storedHosts)) {
      this.hosts = storedHosts;
    } else {
      this.hosts = [];
    }
  }

  passHosts() {
    this.page++;
    this.getHostings();
  }

  prevHosts() {
    this.page-1 === 0 ? this.page = 1 : this.page--;
    this.getHostings();
  }

    getHostings() {
      this.isSubmitHosts = true;
      this.submitButton.nativeElement.style.cursor = 'wait';
      this.posts.getAllHostings(this.page).subscribe({
        next: response => {
          if (Array.isArray(response)) {
            this.hosts = response;
            this.storage.setPost('host', this.hosts)
          } else {
            this.hosts = [];
          }
        },
        error: error => {
          console.error('Get hostings failed', error);
        },
        complete: () => {
          this.isSubmitHosts = false;
          this.submitButton.nativeElement.style.cursor = 'pointer';
          this.cdr.markForCheck(); 
        }
      });
  }

  goToDetails(host: IHosting) {

    this.router.navigate(['/detalhes'], {
      queryParams: {
        host: JSON.stringify(host)
      }
    });
  }
}
