import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholorlistComponent } from './scholorlist.component';

describe('ScholorlistComponent', () => {
  let component: ScholorlistComponent;
  let fixture: ComponentFixture<ScholorlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholorlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
