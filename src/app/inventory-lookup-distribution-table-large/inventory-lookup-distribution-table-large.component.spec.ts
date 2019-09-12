import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLookupDistributionTableLargeComponent } from './inventory-lookup-distribution-table-large.component';

describe('InventoryLookupDistributionTableLargeComponent', () => {
  let component: InventoryLookupDistributionTableLargeComponent;
  let fixture: ComponentFixture<InventoryLookupDistributionTableLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryLookupDistributionTableLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryLookupDistributionTableLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
