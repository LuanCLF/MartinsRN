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
import { ICreateEvent } from '../../../interfaces/post/event.';

@Component({
  selector: 'app-event-post',
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
            <h1 class="modal-title">Eventos</h1>
            <button type="button" class="close-btn" (click)="closeModal()">
              ×
            </button>
          </div>
          <div class="modal-body">
            <form [formGroup]="eventForm" (ngSubmit)="onSubmit()">
              <div>
                <div>
                  <label for="eventtitle">Título:</label>
                  <input
                    type="text"
                    id="eventtitle"
                    formControlName="title"
                    placeholder="Título do post"
                    required
                  />
                  <span id="invalideventtitle">Min 3 letras, max 50 letras</span>
                </div>
                <div>
                  <label for="eventwhatsApp">WhatsApp:</label>
                  <input
                    type="text"
                    id="eventwhatsApp"
                    formControlName="whatsApp"
                    placeholder="WhatsApp"
                    required
                  />
                  <span id="invalideventwhatsapp">Min 3 letras, max 50 letras</span>
                </div>
                <div>
                  <label for="eventinstagram">Instagram:</label>
                  <input
                    type="text"
                    id="eventinstagram"
                    formControlName="instagram"
                    placeholder="Instagram"
                    required
                  />
                  <span id="invalideventinstagram">Min 3 letras, max 50 letras</span>
                </div>
                <div>
                  <label for="eventdescription">Descrição:</label>
                  <input
                    type="text"
                    id="eventdescription"
                    formControlName="description"
                    placeholder="Descrição"
                    required
                  />
                  <span id="invalideventdescription">Min 3 letras, max 150 letras</span>
                </div>
                <div>
                  <label for="eventdate">Data:</label>
                  <input
                    type="datetime-local"
                    id="eventdate"
                    formControlName="date"
                    placeholder="Data"
                    required
                  />
                  <span id="invalideventdate">Data inválida</span>
                  </div>
                <div>
                  <label for="eventlocal">Local:</label>
                  <input
                    type="text"
                    id="eventlocal"
                    formControlName="local"
                    placeholder="Local"
                    required
                  />
                  <span id="invalideventlocal">Min 3 letras, max 50 letras</span>
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
   styleUrls: ['./eventPost.component.css'],
   changeDetection: ChangeDetectionStrategy.OnPush,
 })
export class EventPostComponent {
  eventForm: FormGroup;
  isModalOpen = false;
  isSubmitting = false;

  @ViewChild('submitButton') submitButton!: ElementRef<HTMLButtonElement>;

  constructor(
    private fb: FormBuilder,
    private utils: UtilsService,
    private postService: PostService,
    private cdr: ChangeDetectorRef
  ) {
    this.eventForm = this.fb.group({
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
      date: [
        ' ',
        [
          Validators.required,
          this.utils.noWhitespaceValidator,
        ],
      ],
      local: [
        ' ',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          this.utils.noWhitespaceValidator,
        ],
      ],
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
    const title = this.eventForm.get('title')!;
    const whatsApp = this.eventForm.get('whatsApp')!;
    const instagram = this.eventForm.get('instagram')!;
    const description = this.eventForm.get('description')!;
    const date = this.eventForm.get('date')!;
    const local = this.eventForm.get('local')!;
   
    if(title.invalid) this.invalidField('title', true);
    else this.invalidField('title', false);

    if (whatsApp.invalid) this.invalidField('whatsApp', true);
    else this.invalidField('whatsApp', false);

    if (instagram.invalid) this.invalidField('instagram', true);
    else this.invalidField('instagram', false);

    if (description.invalid) this.invalidField('description', true);
    else this.invalidField('description', false);

    if (date.invalid || this.utils.invalidDate(date.value)) this.invalidField('date', true);
    else this.invalidField('date', false);

    if (local.invalid) this.invalidField('local', true);
    else this.invalidField('local', false);

    if (this.eventForm.valid) {
      const post: ICreateEvent = {
        title: this.utils.removeWhitespace(title.value),
        description: this.utils.removeWhitespace(description.value),
        whatsApp: this.utils.removeWhitespace(whatsApp.value),
        instagram: this.utils.removeWhitespace(instagram.value),
        date: new Date(date.value),
        local: this.utils.removeWhitespace(local.value),
      };

      this.isSubmitting = true;
      this.submitButton.nativeElement.style.cursor = 'wait';

      this.postService.addEventPost(post).subscribe({
        next: () => {
          console.log('Post registration successful', { post });
        },
        error: (error) => {
          if (error.conflict) console.error({ status: error.status }, error.message);
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
    const input = document.getElementById(`event${field}`)!;
    const invalidSpan = document.getElementById(`invalidevent${field.toLowerCase()}`)!;
    input.style.border = bool ? '1px solid var(--red-2)' : '1px solid var(--gray-2)';
    invalidSpan.style.display = bool ? 'block' : 'none';
    if (message) invalidSpan.innerText = message;
  }
}
