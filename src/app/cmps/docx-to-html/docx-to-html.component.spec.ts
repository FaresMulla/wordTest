import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocxToHtmlComponent } from './docx-to-html.component';

describe('DocxToHtmlComponent', () => {
  let component: DocxToHtmlComponent;
  let fixture: ComponentFixture<DocxToHtmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocxToHtmlComponent]
    });
    fixture = TestBed.createComponent(DocxToHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
