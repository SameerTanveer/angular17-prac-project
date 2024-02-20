import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { studentsData } from '../../data/student';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgbHighlight, ReactiveFormsModule],
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
