import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceUserComponent } from './trace-user.component';

describe('TraceUserComponent', () => {
  let component: TraceUserComponent;
  let fixture: ComponentFixture<TraceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
