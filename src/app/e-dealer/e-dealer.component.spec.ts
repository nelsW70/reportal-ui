import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDealerComponent } from './e-dealer.component';

describe('EDealerComponent', () => {
  let component: EDealerComponent;
  let fixture: ComponentFixture<EDealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
