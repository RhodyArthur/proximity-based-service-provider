import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { computed } from '@angular/core';
import { RegistrationState } from '../models/registration-state';
import { RegistrationFormData } from '../models/registration-form-data';

const initialState: RegistrationState = {
  selectedRole: null,
  providerAgreement: null,
  formData: {},
  isLoading: false,
  error: null,
};

export const RegistrationStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed((store) => ({
    canProceedFromAgreement: computed(() => {
      const agreement = store.providerAgreement();
      if (!agreement) return false;

      return agreement.identityChecked && agreement.licenseChecked && agreement.insuranceChecked;
    }),

    isProviderPath: computed(() => store.selectedRole() === 'provider'),
    isClientPath: computed(() => store.selectedRole() === 'client'),

    hasUnsavedData: computed(() => {
      return store.selectedRole() !== null || Object.keys(store.formData()).length > 0;
    }),
  })),

  withMethods((store) => ({
    setRole(role: 'client' | 'provider') {
      patchState(store, {
        selectedRole: role,
        providerAgreement:
          role === 'provider'
            ? { identityChecked: false, licenseChecked: false, insuranceChecked: false }
            : null,
      });
    },

    clearRole() {
      patchState(store, {
        selectedRole: null,
        providerAgreement: null,
      });
    },

    updateAgreement(
      updates: Partial<{
        identityChecked: boolean;
        licenseChecked: boolean;
        insuranceChecked: boolean;
      }>,
    ) {
      const current = store.providerAgreement();
      if (!current) return;

      patchState(store, {
        providerAgreement: { ...current, ...updates },
      });
    },

    saveFormData(data: Partial<RegistrationFormData>) {
      const current = store.formData();
      patchState(store, {
        formData: { ...current, ...data },
      });
    },

    clearFormData() {
      patchState(store, { formData: {} });
    },

    // UI state
    setLoading(loading: boolean) {
      patchState(store, { isLoading: loading });
    },

    setError(error: string | null) {
      patchState(store, { error });
    },

    resetState() {
      patchState(store, initialState);
    },
  })),
);
