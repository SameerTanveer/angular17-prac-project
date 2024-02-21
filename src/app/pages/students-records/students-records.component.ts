import { Component } from '@angular/core';
import { studentsData } from '../../../data/student';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-students-records',
  templateUrl: './students-records.component.html',
  styleUrl: './students-records.component.scss'
})
export class StudentsRecordsComponent {
  gridApi: any;
  rowData : any = studentsData;
  colDefs: ColDef[] = [
    { field: "name" },
    { field: "city" },
    { field: "state" },
    { field: "country" },
    { field: "marksInMaths" },
    { field: "marksInPhysics" },
    { field: "marksInComputer" },

  ];
  onGridReady(params : any){
    this.gridApi = params?.api
  }
}
