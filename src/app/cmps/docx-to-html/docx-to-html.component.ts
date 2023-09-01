import { Component } from '@angular/core';
import * as PizZip from 'pizzip';
import * as Docxtemplater from 'docxtemplater';
import * as htmlToText from 'html-to-text';

@Component({
  selector: 'app-docx-to-html',
  templateUrl: './docx-to-html.component.html',
  styleUrls: ['./docx-to-html.component.scss'],
})
export class DocxToHtmlComponent {
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    // this.convertDocxToHtml(file);
  }

  // convertDocxToHtml(file: File) {
  //   const reader = new FileReader();
  //   reader.onload = (loadEvent: any) => {
  //     const content = loadEvent.target.result;
  //     const zip = new PizZip(content);
  //     const doc = new Docxtemplater(zip);

  //     // Set data and render the document
  //     const data = { /* your data here */ };
  //     doc.setData(data);
  //     doc.render();

  //     // Generate the output buffer
  //     const outputBuffer = doc.getZip().generate({ type: 'nodebuffer' });

  //     // Convert the output buffer to HTML
  //     const htmlContent = htmlToText.fromString(outputBuffer.toString('utf8'), {
  //       wordwrap: 130,
  //       ignoreImage: true // Optionally ignore images
  //     });

  //     // Now you have the HTML content with styling and formatting
  //     console.log(htmlContent);
  //   };

  //   reader.readAsArrayBuffer(file);
  // }
}
