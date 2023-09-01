import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFixComponent } from './test-fix.component';

describe('TestFixComponent', () => {
  let component: TestFixComponent;
  let fixture: ComponentFixture<TestFixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestFixComponent]
    });
    fixture = TestBed.createComponent(TestFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
