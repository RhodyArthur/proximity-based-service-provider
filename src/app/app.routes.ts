import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/authentication/auth.routes').then((m) => m.authRoutes),
  },
];
