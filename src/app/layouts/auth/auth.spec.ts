import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Auth } from './auth';
import { ElementRef, ChangeDetectorRef } from '@angular/core';
import { carouselReviews } from 'public/carouselData';

describe('Auth Component', () => {
  let component: Auth;
  let fixture: ComponentFixture<Auth>;
  let mockElementRef: ElementRef;
  let mockCdr: jasmine.SpyObj<ChangeDetectorRef>;

  beforeEach(() => {
    mockElementRef = new ElementRef({
      querySelector: () => ({
        scrollTo: jasmine.createSpy('scrollTo'),
      }),
    });

    mockCdr = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);

    TestBed.configureTestingModule({
      declarations: [Auth],
      providers: [
        { provide: ElementRef, useValue: mockElementRef },
        { provide: ChangeDetectorRef, useValue: mockCdr },
      ],
    });

    fixture = TestBed.createComponent(Auth);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
    expect(component.reviews).toEqual(carouselReviews);
    expect(component.currentReview).toBe(0);
  });

  it('should scroll main element if screen width <= 767', fakeAsync(() => {
    spyOnProperty(window, 'innerWidth').and.returnValue(500);

    component.ngAfterViewInit();
    tick(3000);

    expect(mockElementRef.nativeElement.querySelector().scrollTo).toHaveBeenCalledWith({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }));

  it('should cycle through reviews automatically and stop after one full cycle', fakeAsync(() => {
    component.ngAfterViewInit();

    // cycle through all reviews
    const totalCycles = carouselReviews.length * 2000;
    tick(totalCycles);

    expect(component.cycles).toBe(1);
    expect(component.currentReview).toBe(carouselReviews.length - 1);
    expect(mockCdr.detectChanges).toHaveBeenCalled();
  }));

  it('should allow navigating directly to a review via goToReview()', () => {
    component.goToReview(2);
    expect(component.currentReview).toBe(2);
  });

  it('should clear interval on destroy', () => {
    component.ngAfterViewInit();
    spyOn(window, 'clearInterval');
    component.ngOnDestroy();
    expect(window.clearInterval).toHaveBeenCalledWith(component['intervalId']);
  });
});
