import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholorComponent } from './scholor.component';

describe('ScholorComponent', () => {
  let component: ScholorComponent;
  let fixture: ComponentFixture<ScholorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
