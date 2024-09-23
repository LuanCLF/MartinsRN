import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NavComponent } from '../../components/nav/nav.component';
import { ButtonComponent } from '../../components/button/button.component';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserRegister } from '../../interfaces/user.';
import { UtilsService } from '../../services/utils.service';
import { table } from 'console';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavComponent,
    ButtonComponent,
    HttpClientModule,
  ],
  template: ` <header>
      <app-nav></app-nav>
    </header>
    <main>
      <img src="assets/icons/signup.svg" alt="" />
      <section>
        <h1>Cadastro</h1>
        <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
          <div>
            <label for="name">Nome:</label>
            <input
              type="text"
              id="name"
              formControlName="name"
              placeholder="Seu nome"
              required
            />
            <span id="invalidName">Min 3 letras, max 150 letras</span>
          </div>
          <div>
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              formControlName="email"
              placeholder="Seu email"
              required
            />
            <span id="invalidEmail"></span>
          </div>
          <div>
            <label for="password">Senha:</label>
            <input
              type="password"
              id="password"
              formControlName="password"
              placeholder="No mínimo 6 dígitos"
              required
            />
            <span id="invalidPassword" >Min 6 e max 20 caracteres</span>
          </div>
          <button type="submit" #submitButton [disabled]="isSubmitting">Cadastrar</button>
        </form>
      </section>
    </main>`,
  styleUrl: './singup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingupComponent {
  signupForm: FormGroup;
  isSubmitting = false;

  @ViewChild('submitButton') submitButton!: ElementRef<HTMLButtonElement>;

  constructor(private fb: FormBuilder, private userService: UserService, private utils: UtilsService) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150), Validators.pattern('^[a-zA-Z ]*$'), this.utils.noWhitespaceValidator]],
      email: ['', [Validators.required, Validators.email, this.utils.noWhitespaceValidator]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), this.utils.noWhitespaceValidator]],
    });
  }

  onSubmit() {
    const name = this.signupForm.get('name')!;
    const email = this.signupForm.get('email')!;
    const password = this.signupForm.get('password')!;

    if (name.invalid || name.value.trim() === 0 ) this.nameInvalid(true);
    else this.nameInvalid(false);

    if (email.invalid || email.value.trim() === 0) this.emailInvalid(true, "Email inválido");
    else this.emailInvalid(false);

    if (password.invalid || password.value.trim() === 0) this.passwordInvalid(true);
    else this.passwordInvalid(false);

    if (this.signupForm.valid) {
      const user: UserRegister = {
        name: name.value,
        email: email.value,
        password: password.value,
      };

      this.isSubmitting = true;
      this.submitButton.nativeElement.style.cursor = 'wait';

      this.userService.register(user).subscribe({
        next: () => {
          console.log('User registered');
          this.submitButton.nativeElement.style.cursor = 'pointer';  
          this.isSubmitting = false;
        },
        error: (error) => {
          if (error.conflict) this.emailInvalid(true, error.message);
          else console.error('User registration failed');
          this.submitButton.nativeElement.style.cursor = 'pointer';  
          this.isSubmitting = false;
        },
      });
    }
  }

  nameInvalid(bool: boolean){
    const nameInput = document.getElementById('name')!;
    const invalidSpan = document.getElementById('invalidName')!;
    nameInput.style.border = bool ? '1px solid var(--red-2)' : 'none';
    invalidSpan.style.display = bool ?  'block' : 'none';
  }

  emailInvalid(bool:boolean, message?: string){
    const emailInput = document.getElementById('email')!;
    const invalidSpan = document.getElementById('invalidEmail')!;
    emailInput.style.border = bool ? '1px solid var(--red-2)' : 'none';
    invalidSpan.style.display = bool ?  'block' : 'none';
    if(message) invalidSpan.innerText = message;
  }

  passwordInvalid(bool:boolean){
    const passwordInput = document.getElementById('password')!;
    const invalidSpan = document.getElementById('invalidPassword')!;
    passwordInput.style.border = bool ? '1px solid var(--red-2)' : 'none';
    invalidSpan.style.display = bool ?  'block' : 'none';
  }
}
