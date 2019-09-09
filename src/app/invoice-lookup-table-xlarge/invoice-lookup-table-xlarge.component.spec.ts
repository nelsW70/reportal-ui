import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceLookupTableXlargeComponent } from './invoice-lookup-table-xlarge.component';

describe('InvoiceLookupTableXlargeComponent', () => {
  let component: InvoiceLookupTableXlargeComponent;
  let fixture: ComponentFixture<InvoiceLookupTableXlargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceLookupTableXlargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceLookupTableXlargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
