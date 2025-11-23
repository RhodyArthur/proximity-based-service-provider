import { Component, inject } from '@angular/core';
import { Auth } from 'src/app/layouts/auth/auth';
import { InputField } from '@shared/component/input-field/input-field';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getControlErrorMessage } from '@shared/utils/validator-messages';
import { passwordMatchValidator } from '@shared/validators/passwordMatch';
import { passwordStructureValidator } from '@shared/validators/passwordStructure';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { RegistrationStore } from '@core/auth/store/registration_state.store';

@Component({
  selector: 'app-client-register',
  imports: [Auth, InputField, ButtonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './client-register.html',
  styleUrl: './client-register.sass',
})
export class ClientRegister {
  private fb = inject(FormBuilder);
  private location = inject(Location);
  private registrationStore = inject(RegistrationStore);

  registerForm: FormGroup = this.fb.group(
    {
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), passwordStructureValidator]],
      confirmPassword: ['', Validators.required],
    },
    { validators: passwordMatchValidator },
  );

  constructor() {
    // Load saved form data on init
    const savedData = this.registrationStore.formData();
    if (Object.keys(savedData).length > 0) {
      // Don't patch password for security
      const { password, ...safeData } = savedData;
      this.registerForm.patchValue(safeData);
    }

    // Save form data on changes (debounced in real implementation)
    this.registerForm.valueChanges.subscribe((value) => {
      const { confirmPassword, ...dataToSave } = value;
      this.registrationStore.saveFormData(dataToSave);
    });
  }

  getError(controlName: string): string | null {
    const control = this.registerForm.get(controlName);
    return getControlErrorMessage(control);
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
    });

    // After successful registration:
    // this.registrationStore.resetState();
    // this.router.navigate(['/dashboard']);
  }

  goBack() {
    this.location.back();
  }
}
