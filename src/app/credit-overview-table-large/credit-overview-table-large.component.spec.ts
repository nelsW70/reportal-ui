import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditOverviewTableLargeComponent } from './credit-overview-table-large.component';

describe('CreditOverviewTableLargeComponent', () => {
  let component: CreditOverviewTableLargeComponent;
  let fixture: ComponentFixture<CreditOverviewTableLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditOverviewTableLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditOverviewTableLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
