import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardetComponent } from './cardet.component';

describe('CardetComponent', () => {
  let component: CardetComponent;
  let fixture: ComponentFixture<CardetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
