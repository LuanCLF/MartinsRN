import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilsService } from '../../../services/utils.service';
import { ICreateHosting } from '../../../interfaces/post/hosting.';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-host-post',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  template: `
<button type="button" class="open-modal-btn" (click)="openModal()">Adicionar Post</button>

<div class="modal" [class.show]="isModalOpen" (click)="onModalClick($event)">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title">Hospedagem</h1>
        <button type="button" class="close-btn" (click)="closeModal()">×</button>
      </div>
      <div class="modal-body">
      <form [formGroup]="hostForm" (ngSubmit)="onSubmit()">
          <div>
          
            <div>
              <label for="hosttitle">Título:</label>
              <input
                type="text"
                id="hosttitle"
                formControlName="title"
                placeholder="Título do post"
                required
              />
              <span id="invalidhosttitle">Min 3 letras, max 50 letras</span>
            </div>
            <div>
              <label for="hostwhatsApp">WhatsApp:</label>
              <input
                type="text"
                id="hostwhatsApp"
                formControlName="whatsApp"
                placeholder="WhatsApp"
                required
              />
              <span id="invalidhostwhatsapp">WhatsApp inválido</span>
            </div>
            <div>
              <label for="hostinstagram">Instagram:</label>
              <input
                type="text"
                id="hostinstagram"
                formControlName="instagram"
                placeholder="Instagram"
                required
              />
              <span id="invalidhostinstagram">Instagram inválido</span>
            </div>
            <div>
              <label for="hostbedrooms">Quartos:</label>
              <input
                type="number"
                id="hostbedrooms"
                formControlName="bedrooms"
                placeholder="Quartos"
                required
              />
              <span id="invalidhostbedrooms">Número inválido</span>
            </div>
            <div>
              <label for="hostbathroom">Banheiros:</label>
              <input
                type="number"
                id="hostbathroom"
                formControlName="bathroom"
                placeholder="Banheiros"
                required
              />
              <span id="invalidhostbathroom">Número inválido</span>
            </div>
            <div>
              <label for="hostvacancy">Vagas:</label>
              <input
                type="number"
                id="hostvacancy"
                formControlName="vacancy"
                placeholder="Vagas de garagem"
                required
              />
              <span id="invalidhostvacancy">Número inválido</span>
            </div>
            <div  class="checkbox">
              <label for="hostserviceArea">Área de serviço:</label>
              <input
                type="checkbox"
                id="hostserviceArea"
                formControlName="serviceArea"
              />
              <span id="invalidhostservicearea">Campo obrigatório</span>
            </div>
            <div class="checkbox">
              <label for="hostkitchen">Cozinha:</label>
              <input
                type="checkbox"
                id="hostkitchen"
                formControlName="kitchen"
              />
              <span id="invalidhostkitchen">Campo obrigatório</span>
            </div>
            <div>
              <label for="hostdescription">Descrição:</label>
              <input
                id="hostdescription"
                formControlName="description"
                placeholder="Descrição"
                required
              />
              <span id="invalidhostdescription">Min 3 letras, max 150 letras</span>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="close-btn" (click)="closeModal()">Fechar</button>
            <button type="submit" class="save-btn" #submitButton [disabled]="isSubmitting">Salvar</button>
        </div>   
      </form>
      </div>
    </div>
  </div>
</div>`,
  styleUrls: ['./hostPost.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostPostComponent {
  hostForm: FormGroup;
  isModalOpen = false;
  isSubmitting = false;

  @ViewChild('submitButton') submitButton!: ElementRef<HTMLButtonElement>;

  constructor(private fb: FormBuilder, private utils: UtilsService, private postService: PostService, private cdr: ChangeDetectorRef) {
    this.hostForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), this.utils.noWhitespaceValidator]],
      whatsApp: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), this.utils.noWhitespaceValidator]],
      instagram: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), this.utils.noWhitespaceValidator]],
      bedrooms: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      bathroom: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      vacancy: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      serviceArea: [false],
      kitchen: [false],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150), this.utils.noWhitespaceValidator]],
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
    const title = this.hostForm.get('title')!;
    const whatsApp = this.hostForm.get('whatsApp')!;
    const instagram = this.hostForm.get('instagram')!;
    const bedrooms = this.hostForm.get('bedrooms')!;
    const bathroom = this.hostForm.get('bathroom')!;
    const vacancy = this.hostForm.get('vacancy')!;
    const serviceArea = this.hostForm.get('serviceArea')!;
    const kitchen = this.hostForm.get('kitchen')!;
    const description = this.hostForm.get('description')!;

    if (title.invalid ) this.invalidField("title", true);
    else this.invalidField("title", false);

    if (whatsApp.invalid ) this.invalidField("whatsApp", true);
    else this.invalidField("whatsApp", false);

    if (instagram.invalid ) this.invalidField("instagram", true);
    else this.invalidField("instagram", false);

    if (bedrooms.invalid ) this.invalidField("bedrooms", true);
    else this.invalidField("bedrooms", false);

    if (bathroom.invalid ) this.invalidField("bathroom", true);
    else this.invalidField("bathroom", false);

    if (vacancy.invalid ) this.invalidField("vacancy", true);
    else this.invalidField("vacancy", false);

    if (serviceArea.invalid ) this.invalidField("serviceArea", true);
    else this.invalidField("serviceArea", false);

    if (kitchen.invalid ) this.invalidField("kitchen", true);
    else this.invalidField("kitchen", false);

    if (description.invalid ) this.invalidField("description", true);
    else this.invalidField("description", false);


    if (this.hostForm.valid) {
      const post: ICreateHosting = {
        title: this.utils.removeWhitespace(title.value),
        bedrooms: bedrooms.value,
        bathrooms: bathroom.value,
        vacancy: vacancy.value,
        serviceArea: `${serviceArea.value}`,
        kitchen: `${kitchen.value}`,
        description: this.utils.removeWhitespace(description.value),
        whatsApp: this.utils.removeWhitespace(whatsApp.value),
        instagram: this.utils.removeWhitespace(instagram.value),
      }; 

      this.isSubmitting = true;
      this.submitButton.nativeElement.style.cursor = 'wait';

      this.postService.addHostPost(post).subscribe({
        next: () => {
          console.log('Post registration successful', {post});
        },
        error: (error) => {
          if (error.conflict) console.error({status: error.status}, error.message);
          else console.error('Post registration failed');
        },
        complete: () => {
          this.isSubmitting = false;
          this.submitButton.nativeElement.style.cursor = 'pointer';
          this.closeModal();
        }
      })
    }
  }

  invalidField(field: string, bool: boolean, message?: string) {
    const input = document.getElementById(`host${field}`)!;
    const invalidSpan = document.getElementById(`invalidhost${field.toLowerCase()}`)!;
    input.style.border = bool ? '1px solid var(--red-2)' : '1px solid var(--gray-2)';
    invalidSpan.style.display = bool ? 'block' : 'none';
    if (message) invalidSpan.innerText = message;
  }
}