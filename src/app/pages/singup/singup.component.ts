import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavComponent } from '../../components/nav/nav.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-singup',
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
    <img src="assets/icons/signup.svg" alt="">
    <section>
        <h1>Cadastro</h1>
        <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
            <div>
              <label for="name">Nome:</label>
              <input type="text" id="name" formControlName="name" placeholder="Insira seu nome" required>
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" id="email" formControlName="email" placeholder="Insira seu email" required>
            </div>
            <div>
              <label for="password">Senha:</label>
              <input type="password" id="password" formControlName="password" placeholder="Insira sua senha" required>
            </div>
          <app-button linkText="Cadastrar"></app-button>
        </form>
    </section>
  </main>`,
  styleUrl: './singup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      console.log('Form Data:', formData);
    }
  }
}
