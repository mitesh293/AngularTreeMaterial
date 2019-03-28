import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayoptionComponent } from './displayoption.component';

describe('DisplayoptionComponent', () => {
  let component: DisplayoptionComponent;
  let fixture: ComponentFixture<DisplayoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
