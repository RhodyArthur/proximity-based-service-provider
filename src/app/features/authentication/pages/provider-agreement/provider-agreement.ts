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
  errorMessage = signal('');

  identityChecked = this.store.identityChecked;
  licenseChecked = this.store.licenseChecked;
  insuranceChecked = this.store.insuranceChecked;

  allConditionsChecked = this.store.allConditionsChecked;

  navigateToRegister() {
    if (this.allConditionsChecked()) {
      this.errorMessage.set('');
      this.router.navigate(['auth/provider-registration']);
    } else {
      this.errorMessage.set('Kindly check all conditions before proceding');
    }
  }

  goBack() {
    this.location.back();
  }
}
