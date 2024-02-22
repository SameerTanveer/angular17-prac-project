import { Component } from '@angular/core';
import { studentsData } from '../../../data/student';
import { ColDef } from 'ag-grid-community';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students-records',
  templateUrl: './students-records.component.html',
  styleUrl: './students-records.component.scss'
})
export class StudentsRecordsComponent {
  gridApi: any;
  rowData : any = studentsData;
  studentDetailsForm: FormGroup;
  colDefs: ColDef[] = [
    { field: "name" },
    { field: "city" },
    { field: "state" },
    { field: "country" },
    { field: "marksInMaths" },
    { field: "marksInPhysics" },
    { field: "marksInComputer" },

  ];
  constructor(
    private fb: FormBuilder
  ){
    this.studentDetailsForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      city: this.fb.control('', [Validators.required]),
      state: this.fb.control('', [Validators.required]),
      country: this.fb.control('', [Validators.required]),
      marksInMaths: this.fb.control('', [Validators.required]),
      marksInPhysics: this.fb.control('', [Validators.required]),
      marksInComputer: this.fb.control('', [Validators.required]),
    })
  }
  onGridReady(params : any){
    this.gridApi = params?.api
  }
}
