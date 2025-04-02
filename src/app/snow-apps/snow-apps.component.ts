import { HttpClient } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild } from '@angular/core';
import type { ColDef, ModelUpdatedEvent } from 'ag-grid-community';
import { themeAlpine, themeBalham, themeMaterial, themeQuartz } from 'ag-grid-community';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SnowApps } from './snow-apps';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  AllCommunityModule,
  ClientSideRowModelModule,
  ModuleRegistry,
  QuickFilterModule,
  RowApiModule,
  ValidationModule
} from 'ag-grid-community';
import { AllEnterpriseModule, LicenseManager } from "ag-grid-enterprise";
import { AgGridAngular } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
ModuleRegistry.registerModules([AllCommunityModule, 
  AllEnterpriseModule, 
  RowApiModule,
  QuickFilterModule,
  ClientSideRowModelModule,
  ValidationModule]);
LicenseManager.setLicenseKey("[TRIAL]_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-078795}_is_granted_for_evaluation_only___Use_in_production_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_purchasing_a_production_key_please_contact_info@ag-grid.com___You_are_granted_a_{Single_Application}_Developer_License_for_one_application_only___All_Front-End_JavaScript_developers_working_on_the_application_would_need_to_be_licensed___This_key_will_deactivate_on_{30 April 2025}____[v3]_[0102]_MTc0NTk2NzYwMDAwMA==39b1546fe2d969966a31bbc6b46371db");
@Component({
  selector: 'rise-snow-apps',
  standalone: true,
  imports: [AgGridAngular, FormsModule, CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './snow-apps.component.html',
  styleUrl: './snow-apps.component.scss'
})
export class SnowAppsComponent implements OnInit {
  gridApi: any;
  public displayedRows: number = 10;
  public quickFilterText: string = "";

  public columnDefs: ColDef[] = [
    { field: "UseCase" },
    { headerName: "Details", field: "Details" },
    { headerName: "Contact", field: "Contact" },
  ];
  public rowData: any[] | null = null;
  @ViewChild("myGrid") grid!: AgGridAngular;
  themes = [
    { label: "themeQuartz", theme: themeQuartz },
    { label: "themeBalham", theme: themeBalham },
    { label: "themeMaterial", theme: themeMaterial },
    { label: "themeAlpine", theme: themeAlpine },
  ];
  theme = themeMaterial;

  defaultColDef: ColDef = {
    editable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
  };

  constructor(
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    this.http.get("https://rise-scheduler.mrshmc.com/api/common/getAllUsecases", { withCredentials: true }).subscribe(res => {
      this.rowData = res as Array<any>
      console.log(this.rowData);
    });
  }
  onModelUpdated(params: ModelUpdatedEvent) {
    this.displayedRows = params.api.getDisplayedRowCount();
  }
  onGridReady(params: any) {
    // this.gridApi = params?.api
    // this.http.get("https://rise-scheduler.mrshmc.com/api/common/getAllUsecases", { withCredentials: true }).subscribe(res => {
    //   this.rowData = res as any
    //   console.log(this.rowData);
    // }, err => {
    //   console.log(err);
    // });
    // this.http.get("https://rise-scheduler.mrshmc.com/api/common/getAllUsecases", { withCredentials: true }).subscribe({
    //   next(res) {
    //     console.log(res);
    //     console.log(typeof res)
    //     let allData = res as Array<any>
    //     allData.forEach(element => {
    //       console.log(element);
    //     });
    //     // this.apiResponse = res as any      
    //   },
    //   error: (e) => console.error(e),
    //   complete: () => {
    //     console.info('complete')
    //   }
    // });

  }
  // getAllSnowApps(): Observable<SnowApps[]>{

  // }
}
