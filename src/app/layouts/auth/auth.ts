import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject } from '@angular/core';
import { carouselReviews } from 'public/carouselData';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.sass',
})
export class Auth implements AfterViewInit {
  private el = inject(ElementRef);
  private cdr = inject(ChangeDetectorRef);
  reviews = carouselReviews;
  currentReview: number = 0;
  cycles: number = 0;
  private intervalId!: number;

  ngAfterViewInit() {
    if (window.innerWidth <= 767) {
      setTimeout(() => {
        const main = this.el.nativeElement.querySelector('main');
        main.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }, 3000);
    }

    this.intervalId = window.setInterval(() => {
      this.currentReview = (this.currentReview + 1) % this.reviews.length;
      this.cdr.detectChanges();

      if (this.currentReview === this.reviews.length - 1) {
        this.cycles++;
        if (this.cycles >= 1) {
          clearInterval(this.intervalId);
        }
      }
    }, 2000);
  }

  goToReview(index: number) {
    this.currentReview = index;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
