import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThdProspectsComponent } from './thd-prospects.component';

describe('ThdProspectsComponent', () => {
  let component: ThdProspectsComponent;
  let fixture: ComponentFixture<ThdProspectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThdProspectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThdProspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
