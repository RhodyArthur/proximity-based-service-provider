import { Component, inject } from '@angular/core';
import { Auth } from 'src/app/layouts/auth/auth';
import { InputField } from '@shared/component/input-field/input-field';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { getControlErrorMessage } from '@shared/utils/validator-messages';

@Component({
  selector: 'app-forgot-password',
  imports: [Auth, InputField, ButtonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.sass',
})
export class ForgotPassword {
  private fb = inject(FormBuilder);

  protected form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  getError(controlName: string): string | null {
    const control = this.form.get(controlName);
    return getControlErrorMessage(control);
  }
}
