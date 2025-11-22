import { Component, computed, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Auth } from 'src/app/layouts/auth/auth';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RegistrationStore } from '@core/auth/store/registration_state.store';

@Component({
  selector: 'app-provider-agreement',
  imports: [Auth, ButtonModule, FormsModule, Checkbox],
  templateUrl: './provider-agreement.html',
  styleUrl: './provider-agreement.sass',
})
export class ProviderAgreement {
  private router = inject(Router);
  private location = inject(Location);
  store = inject(RegistrationStore);
  errorMessage = '';

  get agreement() {
    return this.store.providerAgreement();
  }

  get canProceed() {
    return this.store.canProceedFromAgreement();
  }

  onCheckboxChange(
    field: 'identityChecked' | 'licenseChecked' | 'insuranceChecked',
    checked: boolean,
  ) {
    this.store.updateAgreement({ [field]: checked });
  }

  navigateToRegister() {
    if (this.canProceed) {
      this.errorMessage = '';
      this.router.navigate(['auth/provider-registration']);
    } else {
      this.errorMessage = 'Kindly check all conditions before proceeding';
    }
  }

  goBack() {
    this.location.back();
  }
}
