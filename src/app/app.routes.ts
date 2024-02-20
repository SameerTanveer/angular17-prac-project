import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StudentsRecordsComponent } from './students-records/students-records.component';

export const routes: Routes = [
    {
        path:'home',
        component: LandingComponent
    },
    {
        path: 'students',
        component: StudentsRecordsComponent 
    }
];
