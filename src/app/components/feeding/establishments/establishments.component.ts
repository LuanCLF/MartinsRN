import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";

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
    <ul>
      <li>
        <img
          class="img"
          src="assets/icons/knife-fork-g.svg"
          alt="Imagem de um garfo e uma faca"
        />
        <div>
          <h3>Restaurante Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Comida caseira
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Wi-fi grátis
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Estacionamento
            </li>
          </ul>

          <p>
            Comida caseira e ambiente aconchegante, venha conhecer o melhor.
          </p>

          <div class="divSocialHosting">
            <button>
              <a href="/alimentacao"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/alimentacao"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/alimentacao" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/icons/knife-fork-g.svg"
          alt="Imagem de um garfo e uma faca"
        />
        <div>
          <h3>Restaurante Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Comida caseira
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Wi-fi grátis
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Estacionamento
            </li>
          </ul>

          <p>
            Comida caseira e ambiente aconchegante, venha conhecer o melhor.
          </p>

          <div class="divSocialHosting">
            <button>
              <a href="/alimentacao"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/alimentacao"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/alimentacao" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
      <li>
        <img
          class="img"
          src="assets/icons/knife-fork-g.svg"
          alt="Imagem de um garfo e uma faca"
        />
        <div>
          <h3>Restaurante Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Comida caseira
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Wi-fi grátis
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Estacionamento
            </li>
          </ul>

          <p>
            Comida caseira e ambiente aconchegante, venha conhecer o melhor.
          </p>

          <div class="divSocialHosting">
            <button>
              <a href="/alimentacao"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/alimentacao"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/alimentacao" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li><li>
        <img
          class="img"
          src="assets/icons/knife-fork-g.svg"
          alt="Imagem de um garfo e uma faca"
        />
        <div>
          <h3>Restaurante Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Comida caseira
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Wi-fi grátis
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Estacionamento
            </li>
          </ul>

          <p>
            Comida caseira e ambiente aconchegante, venha conhecer o melhor.
          </p>

          <div class="divSocialHosting">
            <button>
              <a href="/alimentacao"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/alimentacao"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/alimentacao" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li><li>
        <img
          class="img"
          src="assets/icons/knife-fork-g.svg"
          alt="Imagem de um garfo e uma faca"
        />
        <div>
          <h3>Restaurante Palt PO</h3>
          <ul>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Comida caseira
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Wi-fi grátis
            </li>
            <li>
              <img src="assets/icons/check.svg" alt="ícone de check" /> Estacionamento
            </li>
          </ul>

          <p>
            Comida caseira e ambiente aconchegante, venha conhecer o melhor.
          </p>

          <div class="divSocialHosting">
            <button>
              <a href="/alimentacao"
                ><img src="assets/icons/whatsapp.svg" alt="ícone do whatsapp"
              /></a>
            </button>
            <button>
              <a href="/alimentacao"
                ><img src="assets/icons/instagram.svg" alt="icone do instagram"
              /></a>
            </button>
            <app-button href="/alimentacao" linkText="Saiba Mais"></app-button>
          </div>
        </div>
      </li>
    </ul>
  </section>`,
  styleUrl: './establishments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstablishmentsComponent { }
