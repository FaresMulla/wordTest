import { Component, OnInit } from '@angular/core';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
var expressions = require('angular-expressions');
var assign = require('lodash/assign');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myjson = {
    students: [
      {
        studentName: 'فارس',
        fatherName: 'محمد',
        familyName: 'ملا',
        gender: 1,
        identityNumber: '300258741',
        grade: 'الخامس ب',
        teacherName: 'فاتنة خير',
        teacherGender: 2,
        teacherNote:
          'أنت طالب مجتهد ومتفوق ومنتظم في الحضور والمذاكرة والواجبات والاختبارات. أتمنى لك مزيداً من التقدم والنجاح.',
        absencesCount: '6',
        lateCount: '0',
        overallAverage: 91,
        subjects: [
          {
            subjectName: 'اللغة العربيّة',
            teacherOfSubject: 'فادي خير',
            studentScore: 100,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'الرياضيّات',
            teacherOfSubject: 'فادية الزلّط',
            studentScore: 95,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'العلوم',
            teacherOfSubject: 'نادية معدّي',
            studentScore: 80,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'الدراسات الاجتماعيّة',
            teacherOfSubject: 'جنان فرهود',
            studentScore: 71,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'اللغة الإنجليزيّة',
            teacherOfSubject: 'ريم ملا',
            studentScore: 85,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'التربيّة الإسلاميّة',
            teacherOfSubject: 'سميرة خشاب',
            studentScore: 97,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'التربيّة الفنيّة',
            teacherOfSubject: 'فاتنة خير',
            studentScore: 88,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
        ],
      },
      {
        studentName: 'أحمد',
        fatherName: 'يوسف',
        familyName: 'الصالح',
        gender: 1,
        identityNumber: '301568493',
        grade: 'الخامس ب',
        teacherName: 'ماجد المطير',
        teacherGender: 1,
        teacherNote:
          'أحمد يبذل جهداً جيداً في دراسته. يحتاج لبعض التركيز في المواضيع الأكثر تحديًا. أتمنى له التقدم المستمر.',
        absencesCount: '3',
        lateCount: '2',
        overallAverage: 87,
        subjects: [
          {
            subjectName: 'اللغة العربيّة',
            teacherOfSubject: 'فادي خير',
            studentScore: 90,
            verbalEvaluation: 'جيد جدًا',
            encouragementSentence: 'استمر في العمل الجاد!',
          },
          {
            subjectName: 'الرياضيّات',
            teacherOfSubject: 'فادية الزلّط',
            studentScore: 82,
            verbalEvaluation: 'جيد',
            encouragementSentence:
              'احاول الاستعانة بأمثلة إضافية لتفهم الأفكار بشكل أفضل.',
          },
          {
            subjectName: 'العلوم',
            teacherOfSubject: 'نادية معدّي',
            studentScore: 78,
            verbalEvaluation: 'جيد',
            encouragementSentence:
              'تقدمت كثيراً هذا العام، وأنا متأكد من أنك ستتقدم أكثر.',
          },
          {
            subjectName: 'الدراسات الاجتماعيّة',
            teacherOfSubject: 'جنان فرهود',
            studentScore: 70,
            verbalEvaluation: 'مقبول',
            encouragementSentence:
              'حاول البحث أكثر عن الموضوعات لفهمها بشكل أعمق.',
          },
          {
            subjectName: 'اللغة الإنجليزيّة',
            teacherOfSubject: 'ريم ملا',
            studentScore: 89,
            verbalEvaluation: 'جيد جدًا',
            encouragementSentence: 'أنت تتحسن في اللغة الإنكليزية بسرعة!',
          },
          {
            subjectName: 'التربيّة الإسلاميّة',
            teacherOfSubject: 'سميرة خشاب',
            studentScore: 92,
            verbalEvaluation: 'جيد جدًا',
            encouragementSentence: 'استمر في استقاء العلم النافع.',
          },
          {
            subjectName: 'التربيّة الفنيّة',
            teacherOfSubject: 'فاتنة خير',
            studentScore: 85,
            verbalEvaluation: 'جيد',
            encouragementSentence: 'أرى تحسناً ملحوظاً في أعمالك الفنية!',
          },
        ],
      },
      {
        studentName: 'يوسف',
        fatherName: 'عبد الرحمن',
        familyName: 'الخليل',
        gender: 1,
        identityNumber: '305684721',
        grade: 'الخامس ب',
        teacherName: 'عمر الحسن',
        teacherGender: 1,
        teacherNote: 'يوسف طالب نشيط ولديه طموح لتعلم المزيد.',
        absencesCount: '1',
        lateCount: '2',
        overallAverage: 88,
        subjects: [
          {
            subjectName: 'اللغة العربيّة',
            teacherOfSubject: 'فادي خير',
            studentScore: 100,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'الرياضيّات',
            teacherOfSubject: 'فادية الزلّط',
            studentScore: 95,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'العلوم',
            teacherOfSubject: 'نادية معدّي',
            studentScore: 80,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'الدراسات الاجتماعيّة',
            teacherOfSubject: 'جنان فرهود',
            studentScore: 71,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'اللغة الإنجليزيّة',
            teacherOfSubject: 'ريم ملا',
            studentScore: 85,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'التربيّة الإسلاميّة',
            teacherOfSubject: 'سميرة خشاب',
            studentScore: 97,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'التربيّة الفنيّة',
            teacherOfSubject: 'فاتنة خير',
            studentScore: 88,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
        ],
      },
      {
        studentName: 'سارة',
        fatherName: 'عبد الله',
        familyName: 'الجابر',
        gender: 2,
        identityNumber: '302456985',
        grade: 'الخامس ب',
        teacherName: 'هناء السيد',
        teacherGender: 2,
        teacherNote: 'سارة متفوقة ودائماً مبتسمة في الصف.',
        absencesCount: '0',
        lateCount: '0',
        overallAverage: 94,
        subjects: [
          {
            subjectName: 'اللغة العربيّة',
            teacherOfSubject: 'فادي خير',
            studentScore: 100,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'الرياضيّات',
            teacherOfSubject: 'فادية الزلّط',
            studentScore: 95,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'العلوم',
            teacherOfSubject: 'نادية معدّي',
            studentScore: 80,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'الدراسات الاجتماعيّة',
            teacherOfSubject: 'جنان فرهود',
            studentScore: 71,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'اللغة الإنجليزيّة',
            teacherOfSubject: 'ريم ملا',
            studentScore: 85,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'التربيّة الإسلاميّة',
            teacherOfSubject: 'سميرة خشاب',
            studentScore: 97,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'التربيّة الفنيّة',
            teacherOfSubject: 'فاتنة خير',
            studentScore: 88,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
        ],
      },
      {
        studentName: 'خالد',
        fatherName: 'فهد',
        familyName: 'المنصور',
        gender: 1,
        identityNumber: '309872156',
        grade: 'الخامس ب',
        teacherName: 'حسين العلي',
        teacherGender: 1,
        teacherNote:
          'خالد لديه القدرة على التقدم أكثر إذا بذل المزيد من الجهد.',
        absencesCount: '4',
        lateCount: '1',
        overallAverage: 85,
        subjects: [
          {
            subjectName: 'اللغة العربيّة',
            teacherOfSubject: 'فادي خير',
            studentScore: 100,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'الرياضيّات',
            teacherOfSubject: 'فادية الزلّط',
            studentScore: 95,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'العلوم',
            teacherOfSubject: 'نادية معدّي',
            studentScore: 80,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'الدراسات الاجتماعيّة',
            teacherOfSubject: 'جنان فرهود',
            studentScore: 71,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'اللغة الإنجليزيّة',
            teacherOfSubject: 'ريم ملا',
            studentScore: 85,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'التربيّة الإسلاميّة',
            teacherOfSubject: 'سميرة خشاب',
            studentScore: 97,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'التربيّة الفنيّة',
            teacherOfSubject: 'فاتنة خير',
            studentScore: 88,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
        ],
      },
      {
        studentName: 'فارس',
        fatherName: 'محمد',
        familyName: 'ملا',
        gender: 1,
        identityNumber: '300258741',
        grade: 'الخامس ب',
        teacherName: 'فاتنة خير',
        teacherGender: 2,
        teacherNote:
          'أنت طالب مجتهد ومتفوق ومنتظم في الحضور والمذاكرة والواجبات والاختبارات. أتمنى لك مزيداً من التقدم والنجاح.',
        absencesCount: '6',
        lateCount: '0',
        overallAverage: 91,
        subjects: [
          {
            subjectName: 'اللغة العربيّة',
            teacherOfSubject: 'فادي خير',
            studentScore: 100,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'الرياضيّات',
            teacherOfSubject: 'فادية الزلّط',
            studentScore: 95,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'العلوم',
            teacherOfSubject: 'نادية معدّي',
            studentScore: 80,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'الدراسات الاجتماعيّة',
            teacherOfSubject: 'جنان فرهود',
            studentScore: 71,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'اللغة الإنجليزيّة',
            teacherOfSubject: 'ريم ملا',
            studentScore: 85,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'التربيّة الإسلاميّة',
            teacherOfSubject: 'سميرة خشاب',
            studentScore: 97,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
          {
            subjectName: 'التربيّة الفنيّة',
            teacherOfSubject: 'فاتنة خير',
            studentScore: 88,
            verbalEvaluation: 'ممتاز',
            encouragementSentence: 'أتمنى لك مزيداً من التقدم والنجاح.',
          },
        ],
      },
    ],
  };

  ngOnInit(): void {}
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (loadEvent: any) => {
      const content = loadEvent.target.result;
      // const keysToUpdate = ['encouragementSentence'];
      // const updatedJson = this.updateJsonFormat(this.myjson, keysToUpdate);

      // Use content (ArrayBuffer) with Docxtemplater here
      this.createDocxFromTemplate(file, content);
    };
    reader.readAsArrayBuffer(file);
    event.target.value = null;
  }

  private createDocxFromTemplate(file: any, data: any) {
    const zip = new PizZip(data);
    const doc = new Docxtemplater(zip, {
      parser: angularParser,
      paragraphLoop: true,
    });

    doc.setData(this.myjson);

    try {
      doc.render();
    } catch (error) {
      console.error('Error during template render:', error);
      return;
    }

    const output = doc.getZip().generate({ type: 'blob' });

    saveAs(output, 'شهادات.docx'); // שמירה של הקובץ המוכן
  }
}

function angularParser(tag: any) {
  tag = tag
    .replace(/^\.$/, 'this')
    .replace(/(’|‘)/g, "'")
    .replace(/(“|”)/g, '"');
  const expr = expressions.compile(tag);
  return {
    get: function (scope: any, context: any) {
      let obj = {};
      const scopeList = context.scopeList;
      const num = context.num;
      for (let i = 0, len = num + 1; i < len; i++) {
        obj = assign(obj, scopeList[i]);
      }
      return expr(scope, obj);
    },
  };
}
