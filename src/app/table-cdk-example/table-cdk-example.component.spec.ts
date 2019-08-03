import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCdkExampleComponent } from './table-cdk-example.component';

describe('TableCdkExampleComponent', () => {
  let component: TableCdkExampleComponent;
  let fixture: ComponentFixture<TableCdkExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCdkExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCdkExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
