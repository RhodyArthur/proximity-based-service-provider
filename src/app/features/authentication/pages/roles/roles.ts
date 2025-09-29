import { Component } from '@angular/core';
import { Auth } from 'src/app/layouts/auth/auth';
import { RoleSelection } from '@features/authentication/components/role-selection/role-selection';

@Component({
  selector: 'app-roles',
  imports: [Auth, RoleSelection],
  templateUrl: './roles.html',
  styleUrl: './roles.sass',
})
export class Roles {}
