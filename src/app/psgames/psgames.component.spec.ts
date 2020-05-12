import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsgamesComponent } from './psgames.component';

describe('PsgamesComponent', () => {
  let component: PsgamesComponent;
  let fixture: ComponentFixture<PsgamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
