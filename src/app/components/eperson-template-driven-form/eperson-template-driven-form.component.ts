import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from 'src/app/shared/interfaces/eperson';


@Component({
  selector: 'app-eperson-template-driven-form',
  imports: [
      FormsModule,
      MatSelectModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule,
      CommonModule
  ],
  templateUrl: './eperson-template-driven-form.component.html',
  styleUrl: './eperson-template-driven-form.component.css'
})


export class EpersonTemplateDrivenFormComponent {
  @Output() person = new EventEmitter<EPerson>()
  @ViewChild('eForm', {static:false}) form:NgForm | undefined;

  onSubmit(value: EPerson){
    console.log(value)
    this.person.emit(value)
  }

  onSetValue(){
    this.form?.setValue({
      givenName:"John",
      surName:"Doe",
      age: 30,
      email:"jhon@aueb.gr",
      education:"Bachelor's degree"
    });
    this.form?.form.controls['givenName'].setValue("aaa")
  }
}
