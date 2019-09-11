import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLookupComponent } from './inventory-lookup.component';

describe('InventoryLookupComponent', () => {
  let component: InventoryLookupComponent;
  let fixture: ComponentFixture<InventoryLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
