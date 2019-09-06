import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceLookupTableLargeComponent } from './invoice-lookup-table-large.component';

describe('InvoiceLookupTableLargeComponent', () => {
  let component: InvoiceLookupTableLargeComponent;
  let fixture: ComponentFixture<InvoiceLookupTableLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceLookupTableLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceLookupTableLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
