import { Injectable } from '@angular/core';
import { RegistrationState } from '../models/registration-state';

@Injectable({
  providedIn: 'root',
})
export class RegistrationStorage {
  private readonly STORAGE_KEY = 'registration_state';
  private readonly EXPIRY_KEY = 'registration_expiry';
  private readonly EXPIRY_DURATION = 30 * 60 * 1000;

  save(state: RegistrationState): void {
    try {
      const { formData, ...restState } = state;
      const { password, ...safeFormData } = formData;

      const stateToSave = {
        ...restState,
        formData: safeFormData,
      };

      sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(stateToSave));
      sessionStorage.setItem(this.EXPIRY_KEY, Date.now().toString());
    } catch (error) {
      console.error('Failed to save registration state:', error);
    }
  }

  load(): Partial<RegistrationState> | null {
    try {
      const expiryTime = sessionStorage.getItem(this.EXPIRY_KEY);

      if (expiryTime) {
        const elapsed = Date.now() - parseInt(expiryTime, 10);
        if (elapsed > this.EXPIRY_DURATION) {
          this.clear();
          return null;
        }
      }

      const stored = sessionStorage.getItem(this.STORAGE_KEY);
      if (!stored) return null;

      return JSON.parse(stored);
    } catch (error) {
      console.error('Failed to load registration state:', error);
      return null;
    }
  }

  clear(): void {
    sessionStorage.removeItem(this.STORAGE_KEY);
    sessionStorage.removeItem(this.EXPIRY_KEY);
  }

  hasStoredData(): boolean {
    return this.load() !== null;
  }
}
