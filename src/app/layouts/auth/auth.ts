import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { carouselReviews } from 'public/carouselData';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.sass',
})
export class Auth implements AfterViewInit {
  private el = inject(ElementRef);
  reviews = carouselReviews;
  currentReview: number = 0;

  ngAfterViewInit() {
    if (window.innerWidth <= 767) {
      setTimeout(() => {
        const main = this.el.nativeElement.querySelector('main');
        main.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }, 3000);
    }
  }

  goToReview(index: number) {
    this.currentReview = index;
  }
}
