import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.sass',
})
export class Auth implements AfterViewInit {
  private el = inject(ElementRef);

  ngAfterViewInit() {
    if (window.innerWidth <= 767) {
      setTimeout(() => {
        const main = this.el.nativeElement.querySelector('main');
        main.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }, 3000);
    }
  }
}
