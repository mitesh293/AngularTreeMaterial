import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjGridViweComponent } from './ej-grid-viwe.component';

describe('EjGridViweComponent', () => {
  let component: EjGridViweComponent;
  let fixture: ComponentFixture<EjGridViweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjGridViweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjGridViweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
