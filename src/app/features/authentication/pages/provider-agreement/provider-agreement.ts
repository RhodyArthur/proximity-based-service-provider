import { Component, computed, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Auth } from 'src/app/layouts/auth/auth';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-provider-agreement',
  imports: [Auth, ButtonModule, FormsModule, Checkbox],
  templateUrl: './provider-agreement.html',
  styleUrl: './provider-agreement.sass',
})
export class ProviderAgreement {
  identityChecked = signal(false);
  licenseChecked = signal(false);
  insuranceChecked = signal(false);
  errorMessage = signal('');
  private router = inject(Router);
  private location = inject(Location);

  conditions = computed(
    () => this.identityChecked() && this.licenseChecked() && this.insuranceChecked(),
  );

  navigateToRegister() {
    if (this.conditions()) {
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
