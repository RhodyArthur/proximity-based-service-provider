import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-role-selection',
  imports: [ButtonModule],
  templateUrl: './role-selection.html',
  styleUrl: './role-selection.sass',
})
export class RoleSelection {
  private router = inject(Router);
  selectedRole = signal<'client' | 'provider' | null>(null);

  roles = [
    {
      key: 'client' as const,
      label: 'Client',
      description: 'Get experts solution to your problems',
      icon: './assets/client.svg',
    },
    {
      key: 'provider' as const,
      label: 'Provider',
      description: 'Render your services to our clients',
      icon: './assets/provider.svg',
    },
  ];

  selectRole(role: 'client' | 'provider') {
    this.selectedRole.set(role);
  }

  navigateToNext() {
    if (this.selectedRole() === 'client') {
      this.router.navigate(['/']);
    } else if (this.selectedRole() === 'provider') {
      this.router.navigate(['/auth/provider-agreement']);
    }
  }
}
