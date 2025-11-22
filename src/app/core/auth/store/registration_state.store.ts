import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { computed } from '@angular/core';

type RegistrationState = {
  selectedRole: 'client' | 'provider' | null;
  identityChecked: boolean;
  licenseChecked: boolean;
  insuranceChecked: boolean;
};

const initialState: RegistrationState = {
  selectedRole: null,
  identityChecked: false,
  licenseChecked: false,
  insuranceChecked: false,
};

export const RegistrationStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed((store) => ({
    allConditionsChecked: computed(
      () => store.identityChecked() && store.licenseChecked() && store.insuranceChecked(),
    ),
  })),

  withMethods((store) => ({
    setRole(role: 'client' | 'provider') {
      patchState(store, { selectedRole: role });
    },
    setIdentityChecked(checked: boolean) {
      patchState(store, { identityChecked: checked });
    },
    setLicenseChecked(checked: boolean) {
      patchState(store, { licenseChecked: checked });
    },
    setInsuranceChecked(checked: boolean) {
      patchState(store, { insuranceChecked: checked });
    },
    resetState() {
      patchState(store, initialState);
    },
  })),
);
