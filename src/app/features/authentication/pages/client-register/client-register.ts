import { Component, inject } from '@angular/core';
import { Auth } from 'src/app/layouts/auth/auth';
import { InputField } from '@shared/component/input-field/input-field';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getControlErrorMessage } from '@shared/utils/validator-messages';
import { passwordMatchValidator } from '@shared/validators/passwordMatch';
import { passwordStructureValidator } from '@shared/validators/passwordStructure';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-client-register',
  imports: [Auth, InputField, ButtonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './client-register.html',
  styleUrl: './client-register.sass',
})
export class ClientRegister {
  private fb = inject(FormBuilder);

  registerForm: FormGroup = this.fb.group(
    {
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
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
