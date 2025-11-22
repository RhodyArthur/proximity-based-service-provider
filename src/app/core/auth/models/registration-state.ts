import { ProviderAgreementState } from './provider-agreement-state';
import { RegistrationFormData } from './registration-form-data';
import { UserRole } from './user-role';

export interface RegistrationState {
  selectedRole: UserRole | null;

  providerAgreement: ProviderAgreementState | null;

  formData: Partial<RegistrationFormData>;

  isLoading: boolean;
  error: string | null;
}
