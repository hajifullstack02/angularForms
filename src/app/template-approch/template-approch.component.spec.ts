import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateApprochComponent } from './template-approch.component';

describe('TemplateApprochComponent', () => {
  let component: TemplateApprochComponent;
  let fixture: ComponentFixture<TemplateApprochComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateApprochComponent]
    });
    fixture = TestBed.createComponent(TemplateApprochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
