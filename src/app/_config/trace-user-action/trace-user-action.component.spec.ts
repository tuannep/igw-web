import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceUserActionComponent } from './trace-user-action.component';

describe('TraceUserActionComponent', () => {
  let component: TraceUserActionComponent;
  let fixture: ComponentFixture<TraceUserActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceUserActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceUserActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
