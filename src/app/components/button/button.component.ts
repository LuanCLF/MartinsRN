import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <button>
    @if (imgb) {
      <a [href]="href" [target]="target">
      {{ linkText }}
      <img [src]="imgSrc" [alt]="imgAlt">
    </a>
    }
    @else {
      <a [href]="href" [target]="target">
      {{ linkText }}
    </a>
    }
  </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() href: string = '';
  @Input() imgSrc: string = 'assets/icons/arrow-right.svg';
  @Input() imgAlt: string = 'Icon de seta';
  @Input() linkText: string = 'Mais informações';
  @Input() target: string = '_self';
  @Input() imgb: boolean = true;
}
