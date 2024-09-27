import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
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
                <input type="file" (change)="onFileChange($event)">
            </div>
            <div>
              <button type="submit">Adicionar</button>
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
    if (!this.selectedFile) {
      console.log('No file selected');
      return;
    }

    this.postService.addImagePost(this.selectedFile, this.id, this.category).subscribe({
      next: response => {
        console.log({ response });
      },
      error: error => {
        console.log(error);
      }
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
}