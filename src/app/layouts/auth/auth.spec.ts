// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { Auth } from './auth';
// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';

// describe('AuthComponent (zoneless)', () => {
//   let component: Auth;
//   let fixture: ComponentFixture<Auth>;
//   let mockElementRef: any;

//   beforeEach(async () => {
//     mockElementRef = {
//       nativeElement: {
//         querySelector: jasmine.createSpy().and.returnValue({
//           scrollTo: jasmine.createSpy('scrollTo')
//         })
//       }
//     };

//     await TestBed.configureTestingModule({
//       declarations: [Auth],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
//       providers: [
//         { provide: ElementRef, useValue: mockElementRef }
//       ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(Auth);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should scroll main element if screen width <= 767', async () => {
//     spyOnProperty(window, 'innerWidth', 'get').and.returnValue(500);

//     component.ngAfterViewInit();

//     // wait instead of tick()
//     await new Promise((resolve) => setTimeout(resolve, 3000));

//     expect(
//       mockElementRef.nativeElement.querySelector().scrollTo
//     ).toHaveBeenCalledWith({
//       top: window.innerHeight,
//       behavior: 'smooth'
//     });
//   });

//   it('should cycle through reviews once then stop auto-rotation', async () => {
//     component.reviews = [{}, {}, {}] as any; // 3 dummy reviews
//     component.ngAfterViewInit();

//     // wait a bit more than 2s * 3 (one loop)
//     await new Promise((resolve) => setTimeout(resolve, 7000));

//     expect(component.cycles).toBe(1);
//     // confirm interval cleared — no extra cycles after waiting again
//     await new Promise((resolve) => setTimeout(resolve, 3000));
//     expect(component.cycles).toBe(1);
//   });
// });
