import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLookupDistributionComponent } from './inventory-lookup-distribution.component';

describe('InventoryLookupDistributionComponent', () => {
  let component: InventoryLookupDistributionComponent;
  let fixture: ComponentFixture<InventoryLookupDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryLookupDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryLookupDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
