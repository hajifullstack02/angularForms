import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretiveDemoComponent } from './diretive-demo.component';

describe('DiretiveDemoComponent', () => {
  let component: DiretiveDemoComponent;
  let fixture: ComponentFixture<DiretiveDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretiveDemoComponent]
    });
    fixture = TestBed.createComponent(DiretiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
