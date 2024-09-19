import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
],
  template: `
  <footer>
    
    <p>
      Site criado por <span>Luan Charlys</span>, para um projeto de faculdade, com o intuito de mostrar um pouco sobre a cidade de Martins, RN.
    </p>
    
  </footer>`,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
