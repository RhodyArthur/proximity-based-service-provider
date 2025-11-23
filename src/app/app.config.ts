import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import MyPreset from '../mypreset';
import { provideHttpClient } from '@angular/common/http';
import {
  RegistrationStore,
  RegistrationStoreInstance,
} from '@core/auth/store/registration_state.store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: (registrationStore: RegistrationStoreInstance) => {
        return () => {
          registrationStore.initFromStorage();
        };
      },
      deps: [RegistrationStore],
      multi: true,
    },
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
        preset: MyPreset,
      },
    }),
  ],
};
