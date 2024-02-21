import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './side-bar/side-bar.component';
import { StudentsRecordsComponent } from './students-records/students-records.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes : Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: '/pages/landing',
        pathMatch:'full'
      },
      {
        path: 'landing',
        component: LandingComponent
      },
      {
        path: 'students',
        component: StudentsRecordsComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    LandingComponent,
    StudentsRecordsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AgGridAngular,
    NgbHighlight,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(
      routes
    )
  ]
})
export class PagesModule { }
