import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Auth } from 'src/app/layouts/auth/auth';
import { InputField } from '@shared/component/input-field/input-field';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Auth, ButtonModule, InputField, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.sass',
})
export class Login {
  private fb = inject(FormBuilder);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
}
