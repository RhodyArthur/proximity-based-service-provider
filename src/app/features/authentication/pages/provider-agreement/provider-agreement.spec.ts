import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAgreement } from './provider-agreement';

describe('ProviderAgreement', () => {
  let component: ProviderAgreement;
  let fixture: ComponentFixture<ProviderAgreement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderAgreement],
    }).compileComponents();

    fixture = TestBed.createComponent(ProviderAgreement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
