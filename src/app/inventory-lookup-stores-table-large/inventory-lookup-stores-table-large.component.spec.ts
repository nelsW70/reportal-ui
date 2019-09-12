import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLookupStoresTableLargeComponent } from './inventory-lookup-stores-table-large.component';

describe('InventoryLookupStoresTableLargeComponent', () => {
  let component: InventoryLookupStoresTableLargeComponent;
  let fixture: ComponentFixture<InventoryLookupStoresTableLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryLookupStoresTableLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryLookupStoresTableLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
