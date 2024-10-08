import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
  <button type="button" class="open-modal-btn" (click)="openModal()">Add img</button>

<div class="modal" [class.show]="isModalOpen" (click)="onModalClick($event)">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Escolha uma imagem para adicionar ao post</h3>
        <button type="button" class="close-btn" (click)="closeModal()">×</button>
      </div>
      <div class="modal-body">
          <form [formGroup]="imageForm" (ngSubmit)="onSubmit()">
            <div>
              <label for="imageInputAdd">Escolha um arquivo, de preferência .jpg/.png</label>
              <input type="file" id="imageInputAdd" (change)="onFileChange($event)">
            </div>
            <div>
              <button type="submit" #submitImageBtn  [disabled]="isSubmitImage">Adicionar</button>
            </div>
          </form>
      </div>
      </div>
      </div>
  `,
  styleUrl: './image.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  @Input() id: string = '';
  @Input() category: string = '';
  isModalOpen = false;
  imageForm: FormGroup;
  selectedFile: File | null = null;
  isSubmitImage = false;

  @ViewChild('submitImageBtn') submitImageBtn!: ElementRef<HTMLButtonElement>;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private postService: PostService) {
    this.imageForm = this.fb.group({
      image: ['', Validators.required],
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

    onSubmit() {
     this.addImage();
  }

   addImage() {
    this.isSubmitImage = true;
    this.submitImageBtn.nativeElement.style.cursor = 'wait';
    if (this.selectedFile) {
      this.postService.addImagePost(this.selectedFile, this.id, this.category).subscribe({
        next: response => {
          console.log(response);
        },
        error: error => {
          console.log(error);
        },
        complete: () => {
          this.isSubmitImage = false;
          this.submitImageBtn.nativeElement.style.cursor = 'pointer';
          this.closeModal();
        }
      });
    } else {
      this.isSubmitImage = false;
      this.submitImageBtn.nativeElement.style.cursor = 'pointer';
      this.closeModal();
    }
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
}