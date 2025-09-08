import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Auth } from 'src/app/layouts/auth/auth';
import { InputField } from '@shared/component/input-field/input-field';

@Component({
  selector: 'app-provider-register',
  imports: [Auth, ButtonModule, InputField],
  templateUrl: './provider-register.html',
  styleUrl: './provider-register.sass',
})
export class ProviderRegister {}
