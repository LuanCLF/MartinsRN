import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";

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
    <ul>
      <li>
        <img
          class="img"
          src="assets/images/pousada.jpg"
          alt="imagem de pousada"
        />
        <div>
          <h3>Pousada Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> 2 quartos
            </li>
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> 1
              banheiro
            </li>
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> 1 vaga
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de
              Serviço
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          </ul>

          <p>Pousada com quartos disponíveis.</p>

          <div class="divSocialHosting">
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/hospedagem" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/images/host2.png"
          alt="imagem de pousada"
        />
        <div>
          <h3>Pousada Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> 2 quartos
            </li>
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> 1
              banheiro
            </li>
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> 1 vaga
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de
              Serviço
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          </ul>
          <div class="divSocialHosting">
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/hospedagem" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/images/host3.png"
          alt="imagem de pousada"
        />
        <div>
          <h3>Pousada Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> 2 quartos
            </li>
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> 1
              banheiro
            </li>
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> 1 vaga
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de
              Serviço
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          </ul>
          <div class="divSocialHosting">
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/hospedagem" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/images/host4.png"
          alt="imagem de pousada"
        />
        <div>
          <h3>Pousada Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> 2 quartos
            </li>
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> 1
              banheiro
            </li>
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> 1 vaga
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de
              Serviço
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          </ul>
          <div class="divSocialHosting">
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/hospedagem" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/images/host5.png"
          alt="imagem de pousada"
        />
        <div>
          <h3>Pousada Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> 2 quartos
            </li>
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> 1
              banheiro
            </li>
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> 1 vaga
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de
              Serviço
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          </ul>
          <div class="divSocialHosting">
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/hospedagem" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/images/host1.jpg"
          alt="imagem de pousada"
        />
        <div>
          <h3>Pousada Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> 2 quartos
            </li>
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> 1
              banheiro
            </li>
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> 1 vaga
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de
              Serviço
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          </ul>
          <div class="divSocialHosting">
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/hospedagem" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/images/host2.png"
          alt="imagem de pousada"
        />
        <div>
          <h3>Pousada Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> 2 quartos
            </li>
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> 1
              banheiro
            </li>
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> 1 vaga
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de
              Serviço
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          </ul>
          <div class="divSocialHosting">
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/hospedagem" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/images/host3.png"
          alt="imagem de pousada"
        />
        <div>
          <h3>Pousada Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> 2 quartos
            </li>
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> 1
              banheiro
            </li>
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> 1 vaga
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de
              Serviço
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          </ul>
          <div class="divSocialHosting">
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/hospedagem" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/images/host4.png"
          alt="imagem de pousada"
        />
        <div>
          <h3>Pousada Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> 2 quartos
            </li>
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> 1
              banheiro
            </li>
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> 1 vaga
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de
              Serviço
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          </ul>
          <div class="divSocialHosting">
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/hospedagem" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/images/host5.png"
          alt="imagem de pousada"
        />
        <div>
          <h3>Pousada Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> 2 quartos
            </li>
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> 1
              banheiro
            </li>
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> 1 vaga
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de
              Serviço
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          </ul>
          <div class="divSocialHosting">
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/hospedagem" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/images/host1.jpg"
          alt="imagem de pousada"
        />
        <div>
          <h3>Pousada Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> 2 quartos
            </li>
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> 1
              banheiro
            </li>
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> 1 vaga
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de
              Serviço
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          </ul>
          <div class="divSocialHosting">
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/hospedagem" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/images/host2.png"
          alt="imagem de pousada"
        />
        <div>
          <h3>Pousada Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> 2 quartos
            </li>
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> 1
              banheiro
            </li>
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> 1 vaga
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de
              Serviço
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          </ul>
          <div class="divSocialHosting">
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/hospedagem" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/images/host3.png"
          alt="imagem de pousada"
        />
        <div>
          <h3>Pousada Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> 2 quartos
            </li>
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> 1
              banheiro
            </li>
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> 1 vaga
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de
              Serviço
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          </ul>
          <div class="divSocialHosting">
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/hospedagem" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/images/host4.png"
          alt="imagem de pousada"
        />
        <div>
          <h3>Pousada Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> 2 quartos
            </li>
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> 1
              banheiro
            </li>
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> 1 vaga
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de
              Serviço
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          </ul>
          <div class="divSocialHosting">
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/hospedagem" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/images/host5.png"
          alt="imagem de pousada"
        />
        <div>
          <h3>Pousada Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/bed.svg" alt="ícone de cama" /> 2 quartos
            </li>
            <li>
              <img src="assets/icons/shower.svg" alt="ícone de chuveiro" /> 1
              banheiro
            </li>
            <li>
              <img src="assets/icons/car.svg" alt="ícone de carro" /> 1 vaga
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Área de
              Serviço
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Cozinha
            </li>
          </ul>
          <div class="divSocialHosting">
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/hospedagem"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/hospedagem" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
    </ul>
  </section>  `,
  styleUrl: './accommodation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccommodationComponent { }
