import { Component, Input } from '@angular/core';
import { EpersonTemplateDrivenFormComponent } from '../eperson-template-driven-form/eperson-template-driven-form.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EPerson } from 'src/app/shared/interfaces/eperson';
@Component({
  selector: 'app-template-driven-form',
  imports: [ EpersonTemplateDrivenFormComponent, PersonTableComponent, SimpleDatatableComponent ],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  persons: EPerson[] = [];
  currentPerson: EPerson= {
    givenName: '',
    surName: '',
    age: '',
    email: '',
    education: ''
  }
  onPerson(data: EPerson){
    this.persons.push(data)
    this.currentPerson = data;
  }

}
