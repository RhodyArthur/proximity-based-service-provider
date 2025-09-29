import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: 'role-selection',
    loadComponent: () => import('./pages/roles/roles').then((m) => m.Roles),
  },
  {
    path: 'provider-agreement',
    loadComponent: () =>
      import('./pages/provider-agreement/provider-agreement').then((m) => m.ProviderAgreement),
  },
  {
    path: 'provider-registration',
    loadComponent: () =>
      import('./pages/provider-register/provider-register').then((m) => m.ProviderRegister),
  },
  {
    path: 'client-registration',
    loadComponent: () =>
      import('./pages/client-register/client-register').then((m) => m.ClientRegister),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./pages/forgot-password/forgot-password').then((m) => m.ForgotPassword),
  },
  {
    path: 'password-reset',
    loadComponent: () =>
      import('./pages/password-reset/password-reset').then((m) => m.PasswordReset),
  },
];
