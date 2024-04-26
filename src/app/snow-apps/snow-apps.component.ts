import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi } from 'ag-grid-community'

@Component({
  selector: 'rise-snow-apps',
  standalone: true,
  imports: [AgGridModule, HttpClientModule],
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
    this.http.get("http://localhost:8080/api/common/getAllUsecases", { withCredentials: true }).subscribe(res => {
      this.apiResponse = res as any
      console.log(this.apiResponse);
    }, err => {
      console.log(err);
    });
  }
}
