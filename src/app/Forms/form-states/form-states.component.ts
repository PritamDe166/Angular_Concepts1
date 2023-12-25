import { Component } from '@angular/core';
import { EmployeeExample1} from '../../Data-Models/UserClasses';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-states',
  templateUrl: './form-states.component.html',
  styleUrls: ['./form-states.component.css']
})
export class FormStatesComponent {
   employeeDetails : EmployeeExample1;

   constructor(){
    this.employeeDetails = {
      fullName : '',
      age : 0,
      department : ''
    }
   }

   valChanged(valChangedForm : NgForm){
    console.log(valChangedForm.form);
    console.log(valChangedForm.form.controls);
   }
}
