import { Component } from '@angular/core';
import { Auth } from './layouts/auth/auth';

@Component({
  selector: 'app-root',
  imports: [Auth],
  templateUrl: './app.html',
  styleUrl: './app.sass',
})
export class App {
  protected title = 'proximity-based-service-provider';
}
