import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavComponent } from "../../components/nav/nav.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavComponent,
    ButtonComponent
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
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" formControlName="password" placeholder="Insira sua senha" required>
        </div>
        <button type="submit">
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

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('Form Data:', formData);
    }
  }
}
