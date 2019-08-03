import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingLookupComponent } from './pricing-lookup.component';

describe('PricingLookupComponent', () => {
  let component: PricingLookupComponent;
  let fixture: ComponentFixture<PricingLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
