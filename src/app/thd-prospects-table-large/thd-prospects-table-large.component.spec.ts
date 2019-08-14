import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThdProspectsTableLargeComponent } from './thd-prospects-table-large.component';

describe('ThdProspectsTableLargeComponent', () => {
  let component: ThdProspectsTableLargeComponent;
  let fixture: ComponentFixture<ThdProspectsTableLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThdProspectsTableLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThdProspectsTableLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
