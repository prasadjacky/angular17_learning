import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import { themeMaterial } from 'ag-grid-community';
import { SnowApps } from './snow-apps';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'rise-snow-apps',
  standalone: true,
  imports: [AgGridAngular, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './snow-apps.component.html',
  styleUrl: './snow-apps.component.scss'
})
export class SnowAppsComponent {
  gridApi: any;
  apiResponse: any = []
  coulmnDefs: ColDef[] = [
    {field: "UseCase"},
    {field: "Details"},
    {field: "Contact"}
  ];
  constructor(
    private http: HttpClient
  ) { }
  onGridReady(params: any) {
    this.gridApi = params?.api
    this.http.get("https://rise-scheduler.mrshmc.com/api/common/getAllUsecases", { withCredentials: true }).subscribe(res => {
      this.apiResponse = res as any
      console.log(this.apiResponse);
    }, err => {
      console.log(err);
    });
    this.http.get("https://rise-scheduler.mrshmc.com/api/common/getAllUsecases", { withCredentials: true }).subscribe({
      next(res) {
        console.log(res);
        // this.apiResponse = res as any      
      },
      error: (e) => console.error(e),
      complete: () => {
        console.info('complete')
      }
    });
  }
  // getAllSnowApps(): Observable<SnowApps[]>{

  // }
}
