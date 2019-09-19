import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreditTableLargeComponent } from './customer-credit-table-large.component';

describe('CustomerCreditTableLargeComponent', () => {
  let component: CustomerCreditTableLargeComponent;
  let fixture: ComponentFixture<CustomerCreditTableLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCreditTableLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCreditTableLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
