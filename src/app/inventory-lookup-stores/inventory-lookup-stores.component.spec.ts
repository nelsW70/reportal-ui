import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLookupStoresComponent } from './inventory-lookup-stores.component';

describe('InventoryLookupStoresComponent', () => {
  let component: InventoryLookupStoresComponent;
  let fixture: ComponentFixture<InventoryLookupStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryLookupStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryLookupStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
