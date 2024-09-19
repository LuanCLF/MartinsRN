import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
],
  template: `
<section>
    <h1>Entre em Contato</h1>
    <p>
      Motivos para se comunicar conosco
    </p>
    <ul>
      <li>
        <div class="icnContact">
          <img src="/assets/icons/chat.svg" alt="ícone de chat" />
        </div>
        <div class="info">
          <h3>Informações Gerais</h3>
          <p>Para dúvidas gerais sobre o projeto</p>
        </div>
      </li>
      <li>
        <div class="icnContact">
          <img src="/assets/icons/bug.svg" alt="ícone de bug" />
        </div>
        <div class="info">
          <h3>Suporte Técnico</h3>
          <p>
            Para reportar problemas técnicos ou bugs no projeto
          </p>
        </div>
      </li>
      <li>
        <div class="icnContact">
          <img src="/assets/icons/partner.svg" alt="ícone de parceria" />
        </div>
        <div class="info">
          <h3>Parcerias</h3>
          <p>Colabore para o avanço do projeto</p>
        </div>
      </li>
    </ul>
   <h2>Formas de contato</h2>
    <ul>
      <li>
        <app-button href="https://wa.me/558487166835" imgSrc="assets/icons/whatsapp.svg" linkText="Whatsapp" target="_blank"></app-button>
      </li>
      <li>
        <app-button href="mailto:firminocharlys@gmail.com" imgSrc="assets/icons/mail.svg" linkText="E-mail" target="_blank"></app-button>
      </li>
      <li>
        <app-button href="https://www.instagram.com/luan_charlyslf/" imgSrc="assets/icons/instagram.svg" linkText="Instagram" target="_blank"></app-button>
      </li>
      <li>
        <app-button href="/contato" imgSrc="assets/icons/call.svg" linkText="(84) 9 8716-6835"></app-button>
      </li>
    </ul>
  </section>`,
  styleUrl: './contacts.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent { }
