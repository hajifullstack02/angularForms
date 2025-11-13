import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-approch',
  templateUrl: './template-approch.component.html',
  styleUrls: ['./template-approch.component.css']
})
export class TemplateApprochComponent {

 optionsList = [
    {
      name: 'Yes',
      value: 1,
    },
    {
      name: 'No',
      value: 2,
    },
  ];
  btnClick(registrationForm: NgForm) {
    console.log(registrationForm);
  }
}
