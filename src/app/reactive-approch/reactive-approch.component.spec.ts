import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveApprochComponent } from './reactive-approch.component';

describe('ReactiveApprochComponent', () => {
  let component: ReactiveApprochComponent;
  let fixture: ComponentFixture<ReactiveApprochComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveApprochComponent]
    });
    fixture = TestBed.createComponent(ReactiveApprochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
