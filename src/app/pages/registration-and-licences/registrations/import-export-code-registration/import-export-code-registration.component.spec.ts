import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportCodeRegistrationComponent } from './import-export-code-registration.component';

describe('ImportExportCodeRegistrationComponent', () => {
  let component: ImportExportCodeRegistrationComponent;
  let fixture: ComponentFixture<ImportExportCodeRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportExportCodeRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportExportCodeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
