import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { studentsData } from '../../../data/student';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  students: Array<any> = studentsData;
  filter: FormControl;
  constructor(
    private form: FormBuilder
  ){
    this.filter = this.form.control('', { nonNullable: true });

  }
  
}
