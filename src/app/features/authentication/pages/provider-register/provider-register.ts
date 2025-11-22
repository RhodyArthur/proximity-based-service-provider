import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Auth } from 'src/app/layouts/auth/auth';
import { InputField } from '@shared/component/input-field/input-field';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { passwordStructureValidator } from '@shared/validators/passwordStructure';
import { passwordMatchValidator } from '@shared/validators/passwordMatch';
import { getControlErrorMessage } from '@shared/utils/validator-messages';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RegistrationStore } from '@core/auth/store/registration_state.store';

@Component({
  selector: 'app-provider-register',
  imports: [Auth, ButtonModule, InputField, ReactiveFormsModule, RouterLink],
  templateUrl: './provider-register.html',
  styleUrl: './provider-register.sass',
})
export class ProviderRegister {
  private fb = inject(FormBuilder);
  private location = inject(Location);
  private registrationStore = inject(RegistrationStore);

  registerForm: FormGroup = this.fb.group(
    {
      businessName: ['', Validators.required],
      businessEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), passwordStructureValidator]],
      confirmPassword: ['', Validators.required],
    },
    { validators: passwordMatchValidator },
  );

  constructor() {
    const savedData = this.registrationStore.formData();
    if (Object.keys(savedData).length > 0) {
      const { password, ...safeData } = savedData;
      this.registerForm.patchValue(safeData);
    }

    // Auto-save on changes
    this.registerForm.valueChanges.subscribe((value) => {
      const { confirmPassword, ...dataToSave } = value;
      this.registrationStore.saveFormData(dataToSave);
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    // TODO: API call in next phase
    console.log('Registration data:', {
      ...this.registerForm.value,
      role: this.registrationStore.selectedRole(),
      agreement: this.registrationStore.providerAgreement(),
    });

    // After successful registration:
    // this.registrationStore.resetState();
    // this.router.navigate(['/dashboard']);
  }

  getError(controlName: string): string | null {
    const control = this.registerForm.get(controlName);
    return getControlErrorMessage(control);
  }

  goBack() {
    this.location.back();
  }
}
