import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { studentsData } from '../../src/data/student';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import {NgbHighlight } from '@ng-bootstrap/ng-bootstrap'
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgbHighlight, ReactiveFormsModule, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prac-proj-angular';
  students: Array<any> = studentsData;
  filter: FormControl;
  isSidebarExpanded: boolean = true;
  constructor(
    private form: FormBuilder
  ){
    this.filter = this.form.control('', { nonNullable: true });

  }
}
