import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: 'role-selection',
    loadComponent: () => import('./pages/roles/roles').then((m) => m.Roles),
  },
];
