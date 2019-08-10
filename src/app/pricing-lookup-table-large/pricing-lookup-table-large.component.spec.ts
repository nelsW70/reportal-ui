import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingLookupTableLargeComponent } from './pricing-lookup-table-large.component';

describe('PricingLookupTableLargeComponent', () => {
  let component: PricingLookupTableLargeComponent;
  let fixture: ComponentFixture<PricingLookupTableLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingLookupTableLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingLookupTableLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
