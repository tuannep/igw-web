import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceSftpFileComponent } from './trace-sftp-file.component';

describe('TraceSftpFileComponent', () => {
  let component: TraceSftpFileComponent;
  let fixture: ComponentFixture<TraceSftpFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceSftpFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceSftpFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
