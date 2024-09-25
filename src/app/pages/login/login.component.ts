import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavComponent } from "../../components/nav/nav.component";
import { ButtonComponent } from "../../components/button/button.component";
import {  HttpClientModule } from '@angular/common/http';
import { apirUrl } from '../../services/variables';
import { IUserLogin } from '../../interfaces/user.';
import { UserService } from '../../services/user.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavComponent,
    ButtonComponent,
    HttpClientModule
  ],
  template: `
  <header>
    <app-nav></app-nav>
  </header>
  <main>
    <img src="assets/icons/login.svg" alt="">
    <section>
      <h1>Login</h1>
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" formControlName="email" placeholder="Insira seu email" required> 
          <span id="invalidEmail"></span>
        </div>
        <div>
          <label for="password">Senha:</label>
          <input type="password" id="password" formControlName="password" placeholder="Insira sua senha" required>
          <span id="invalidPassword"></span>
        </div>
        <button type="submit" #submitButton [disabled]="isSubmitting">
          Acessar minha conta
        </button>
      </form>
    </section>
  </main>
  `,
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm: FormGroup;
  apiurl = apirUrl
  isSubmitting = false;

  @ViewChild('submitButton') submitButton!: ElementRef<HTMLButtonElement>;

  constructor(private fb: FormBuilder, private userService: UserService, private utils: UtilsService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
    
  }

  onSubmit() {
    const email = this.loginForm.get('email')!;
    const password = this.loginForm.get('password')!;

    if (email.invalid) this.emailInvalid(true, "Email inválido");
    else this.emailInvalid(false);

    if (password.invalid) this.passwordInvalid(true, "Min 6 e max 20 caracteres");
    else this.passwordInvalid(false);
    
    if (this.loginForm.valid) {
      const user: IUserLogin = {
        email: this.utils.removeWhitespace(email.value),
        password: this.utils.removeWhitespace(password.value)
      }

      this.isSubmitting = true;
      this.submitButton.nativeElement.style.cursor = 'wait';

      this.userService.auth(user).subscribe({
        next: response => {
          console.log('Login success', response);
          this.submitButton.nativeElement.style.cursor = 'pointer';  
          this.isSubmitting = false;
        },
        error: error => {
          if (error.conflict) {
            if (error.status === 404) this.emailInvalid(true, error.message);
            else if (error.status === 401) this.passwordInvalid(true, error.message);
          }
          console.error('Login failed', error);
          this.submitButton.nativeElement.style.cursor = 'pointer';
          this.isSubmitting = false;
        }
      });
    
    }
  }

  emailInvalid(bool:boolean, message?: string){
    const emailInput = document.getElementById('email')!;
    const invalidSpan = document.getElementById('invalidEmail')!;
    emailInput.style.border = bool ? '1px solid var(--red-2)' : 'none';
    invalidSpan.style.display = bool ?  'block' : 'none';
    if(message) invalidSpan.innerText = message;
  }

  passwordInvalid(bool:boolean, message?: string){
    const passwordInput = document.getElementById('password')!;
    const invalidSpan = document.getElementById('invalidPassword')!;
    passwordInput.style.border = bool ? '1px solid var(--red-2)' : 'none';
    invalidSpan.style.display = bool ?  'block' : 'none';
    if(message) invalidSpan.innerText = message;
  }
}
