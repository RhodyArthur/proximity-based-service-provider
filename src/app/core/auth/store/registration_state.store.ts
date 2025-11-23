import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { RegistrationState } from '../models/registration-state';
import { RegistrationFormData } from '../models/registration-form-data';
import { RegistrationStorage } from '../services/registration-storage';

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

  withMethods((store, storageService = inject(RegistrationStorage)) => ({
    initFromStorage() {
      const savedState = storageService.load();
      if (savedState) {
        patchState(store, savedState);
      }
    },

    _syncToStorage() {
      const currentState: RegistrationState = {
        selectedRole: store.selectedRole(),
        providerAgreement: store.providerAgreement(),
        formData: store.formData(),
        isLoading: store.isLoading(),
        error: store.error(),
      };
      storageService.save(currentState);
    },

    setRole(role: 'client' | 'provider') {
      patchState(store, {
        selectedRole: role,
        providerAgreement:
          role === 'provider'
            ? { identityChecked: false, licenseChecked: false, insuranceChecked: false }
            : null,
      });
      this._syncToStorage();
    },

    clearRole() {
      patchState(store, {
        selectedRole: null,
        providerAgreement: null,
      });
      this._syncToStorage();
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
      this._syncToStorage();
    },

    saveFormData(data: Partial<RegistrationFormData>) {
      const current = store.formData();
      patchState(store, {
        formData: { ...current, ...data },
      });
      this._syncToStorage();
    },

    clearFormData() {
      patchState(store, { formData: {} });
      this._syncToStorage();
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
      storageService.clear();
    },
  })),
);

export type RegistrationStoreInstance = InstanceType<typeof RegistrationStore>;
