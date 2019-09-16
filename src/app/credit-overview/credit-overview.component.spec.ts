import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditOverviewComponent } from './credit-overview.component';

describe('CreditOverviewComponent', () => {
  let component: CreditOverviewComponent;
  let fixture: ComponentFixture<CreditOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
