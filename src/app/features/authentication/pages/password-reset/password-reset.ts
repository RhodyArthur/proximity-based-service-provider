import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputField } from '@shared/component/input-field/input-field';
import { getControlErrorMessage } from '@shared/utils/validator-messages';
import { passwordMatchValidator } from '@shared/validators/passwordMatch';
import { passwordStructureValidator } from '@shared/validators/passwordStructure';
import { ButtonModule } from 'primeng/button';
import { Auth } from 'src/app/layouts/auth/auth';

@Component({
  selector: 'app-password-reset',
  imports: [ButtonModule, Auth, RouterLink, ReactiveFormsModule, InputField],
  templateUrl: './password-reset.html',
  styleUrl: './password-reset.sass',
})
export class PasswordReset {
  private fb = inject(FormBuilder);

  resetForm: FormGroup = this.fb.group(
    {
      password: ['', [Validators.required, Validators.minLength(8)], passwordStructureValidator()],
      confirmPassword: ['', Validators.required],
    },
    { validators: passwordMatchValidator },
  );

  getError(controlName: string): string | null {
    const control = this.resetForm.get(controlName);
    return getControlErrorMessage(control);
  }
}
