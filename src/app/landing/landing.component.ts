import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'rise-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbHighlight, HttpClientModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  filter: FormControl;
  usecases: Array<any> = []
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.filter = this.fb.control("", { nonNullable: true });
  }
  ngOnInit(): void {
    this.http.get("https://rise-scheduler.mrshmc.com/api/common/getAllUsecases", { withCredentials: true }).subscribe(res => {
      this.usecases = res as any
      console.log(this.usecases);
    }, err => {
      console.log(err);
    });
  }
  callPost(event: any) {
    console.log(event)
    // this.http.get("https://rise-scheduler.mrshmc.com/api/common/getAllUsecases",{ withCredentials: true }).subscribe(res => {      
    //   this.usecases = res as any
    //   console.log(this.usecases);
    // },err => {
    //   console.log(err);
    // });
  }
}
