import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UtilsService } from '../../../services/utils.service';
import { PostService } from '../../../services/post.service';
import { ICreateFeeding } from '../../../interfaces/post/feeding.';

@Component({
  selector: 'app-feed-post',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  template: ` <button
      type="button"
      class="open-modal-btn"
      (click)="openModal()"
    >
      Adicionar Post
    </button>

    <div
      class="modal"
      [class.show]="isModalOpen"
      (click)="onModalClick($event)"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title">Alimentação</h1>
            <button type="button" class="close-btn" (click)="closeModal()">
              ×
            </button>
          </div>
          <div class="modal-body">
            <form [formGroup]="feedForm" (ngSubmit)="onSubmit()">
              <div>
                <div>
                  <label for="feedtitle">Título:</label>
                  <input
                    type="text"
                    id="feedtitle"
                    formControlName="title"
                    placeholder="Título do post"
                    required
                  />
                  <span id="invalidfeedtitle">Min 3 letras, max 50 letras</span>
                </div>
                <div>
                  <label for="feedwhatsApp">WhatsApp:</label>
                  <input
                    type="text"
                    id="feedwhatsApp"
                    formControlName="whatsApp"
                    placeholder="WhatsApp"
                    required
                  />
                  <span id="invalidfeedwhatsapp">WhatsApp inválido</span>
                </div>
                <div>
                  <label for="feedinstagram">Instagram:</label>
                  <input
                    type="text"
                    id="feedinstagram"
                    formControlName="instagram"
                    placeholder="Instagram"
                    required
                  />
                  <span id="invalidfeedinstagram">Instagram inválido</span>
                </div>
                <div>
                  <label for="feedtype">Tipo:</label>
                  <input
                    type="text"
                    id="feedtype"
                    formControlName="type"
                    placeholder="Tipo"
                    required
                  />
                  <span id="invalidfeedtype">Min 3 letras, max 50 letras</span>
                </div>
                <div>
                  <label for="feeddescription">Descrição:</label>
                  <input
                    id="feeddescription"
                    formControlName="description"
                    placeholder="Descrição"
                    required
                  />
                  <span id="invalidfeeddescription"
                    >Min 3 letras, max 150 letras</span
                  >
                </div>
                <div class="checkbox">
                  <label for="feedwifi">Wi-Fi:</label>
                  <input type="checkbox" id="feedwifi" formControlName="wifi" />
                  <span id="invalidfeedwifi"> Campo obrigatório </span>
                </div>
                <div class="checkbox">
                  <label for="feeddelivery">Delivery:</label>
                  <input
                    type="checkbox"
                    id="feeddelivery"
                    formControlName="delivery"
                  />
                  <span id="invalidfeeddelivery"> Campo obrigatório </span>
                </div>
                <div class="checkbox">
                  <label for="feedparking">Estacionamento:</label>
                  <input
                    type="checkbox"
                    id="feedparking"
                    formControlName="parking"
                  />
                  <span id="invalidfeedparking"> Campo obrigatório </span>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="close-btn" (click)="closeModal()">
                  Fechar
                </button>
                <button
                  type="submit"
                  class="save-btn"
                  #submitButton
                  [disabled]="isSubmitting"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>`,
  styleUrls: ['./feedPost.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedPostComponent {
  feedForm: FormGroup;
  isModalOpen = false;
  isSubmitting = false;

  @ViewChild('submitButton') submitButton!: ElementRef<HTMLButtonElement>;

  constructor(
    private fb: FormBuilder,
    private utils: UtilsService,
    private postService: PostService,
    private cdr: ChangeDetectorRef
  ) {
    this.feedForm = this.fb.group({
      title: [
        ' ',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          this.utils.noWhitespaceValidator,
        ],
      ],
      whatsApp: [
        ' ',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          this.utils.noWhitespaceValidator,
        ],
      ],
      instagram: [
        ' ',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          this.utils.noWhitespaceValidator,
        ],
      ],
      description: [
        ' ',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(150),
          this.utils.noWhitespaceValidator,
        ],
      ],
      type: [
        ' ',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z ]*$'),
          this.utils.noWhitespaceValidator,
        ],
      ],
      wifi: [false],
      delivery: [false],
      parking: [false],
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.cdr.detectChanges();
  }

  onModalClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.closeModal();
    }
  }

  onSubmit() {
    const title = this.feedForm.get('title')!;
    const whatsApp = this.feedForm.get('whatsApp')!;
    const instagram = this.feedForm.get('instagram')!;
    const description = this.feedForm.get('description')!;
    const type = this.feedForm.get('type')!;
    const wifi = this.feedForm.get('wifi')!;
    const delivery = this.feedForm.get('delivery')!;
    const parking = this.feedForm.get('parking')!;

    if (title.invalid) this.invalidField('title', true);
    else this.invalidField('title', false);

    if (whatsApp.invalid) this.invalidField('whatsApp', true);
    else this.invalidField('whatsApp', false);

    if (instagram.invalid) this.invalidField('instagram', true);
    else this.invalidField('instagram', false);

    if (description.invalid) this.invalidField('description', true);
    else this.invalidField('description', false);

    if (type.invalid) this.invalidField('type', true);
    else this.invalidField('type', false);

    if (wifi.invalid) this.invalidField('wifi', true);
    else this.invalidField('wifi', false);

    if (delivery.invalid) this.invalidField('delivery', true);
    else this.invalidField('delivery', false);

    if (parking.invalid) this.invalidField('parking', true);
    else this.invalidField('parking', false);

    if (this.feedForm.valid) {
      const post: ICreateFeeding = {
        title: this.utils.removeWhitespace(title.value),
        description: this.utils.removeWhitespace(description.value),
        whatsApp: this.utils.removeWhitespace(whatsApp.value),
        instagram: this.utils.removeWhitespace(instagram.value),
        type: this.utils.removeWhitespace(type.value),
        wifi: `${wifi.value}`,
        delivery: `${delivery.value}`,
        parking: `${parking.value}`,
      };

      this.isSubmitting = true;
      this.submitButton.nativeElement.style.cursor = 'wait';

      this.postService.addFeedingPost(post).subscribe({
        next: () => {
          console.log('Post registration successful', { post });
        },
        error: (error) => {
          if (error.conflict)
            console.error({ status: error.status }, error.message);
          else console.error('Post registration failed');
        },
        complete: () => {
          this.isSubmitting = false;
          this.submitButton.nativeElement.style.cursor = 'pointer';
          this.closeModal();
        },
      });
    }
  }

  invalidField(field: string, bool: boolean, message?: string) {
    const input = document.getElementById(`feed${field}`)!;
    const invalidSpan = document.getElementById(`invalidfeed${field.toLowerCase()}`)!;
    input.style.border = bool ? '1px solid var(--red-2)' : '1px solid var(--gray-2)';
    invalidSpan.style.display = bool ? 'block' : 'none';
    if (message) invalidSpan.innerText = message;
  }
}
