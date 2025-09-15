import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Auth } from 'src/app/layouts/auth/auth';
import { InputField } from '@shared/component/input-field/input-field';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { passwordStructureValidator } from '@shared/validators/passwordStructure';
import { passwordMatchValidator } from '@shared/validators/passwordMatch';
import { getControlErrorMessage } from '@shared/utils/validator-messages';
import { ErrorMessagePipe } from '../../../../shared/pipes/error-message-pipe';

@Component({
  selector: 'app-provider-register',
  imports: [Auth, ButtonModule, InputField, ReactiveFormsModule, ErrorMessagePipe],
  templateUrl: './provider-register.html',
  styleUrl: './provider-register.sass',
})
export class ProviderRegister {
  private fb = inject(FormBuilder);

  registerForm: FormGroup = this.fb.group(
    {
      businessName: ['', Validators.required],
      businessEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)], passwordStructureValidator()],
      confirmPassword: ['', Validators.required],
    },
    { validators: passwordMatchValidator },
  );

  getError(controlName: string): string | null {
    const control = this.registerForm.get(controlName);
    return getControlErrorMessage(control);
  }
}
