import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreditComponent } from './customer-credit.component';

describe('CustomerCreditComponent', () => {
  let component: CustomerCreditComponent;
  let fixture: ComponentFixture<CustomerCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
