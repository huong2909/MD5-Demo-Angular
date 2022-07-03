import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-form-student',
  templateUrl: './template-form-student.component.html',
  styleUrls: ['./template-form-student.component.scss']
})
export class TemplateFormStudentComponent implements OnInit {
  student = {
    studentCode: '001',
    studentName: 'Trịnh Thị Hương',
    studentAddress: 'Hà Nam',
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(createStudentForm: NgForm) {
    console.log(createStudentForm);
  }
}
