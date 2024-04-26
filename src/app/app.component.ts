import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'rise-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, NgbHighlight, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rise-app';
  filter: FormControl;
  countries: Array<any> = [
    {
      name: 'Russia',
      flag: 'f/f3/Flag_of_Russia.svg',
      area: 17075200,
      population: 146989754,
    },
    {
      name: 'Canada',
      flag: 'c/cf/Flag_of_Canada.svg',
      area: 9976140,
      population: 36624199,
    },
    {
      name: 'United States',
      flag: 'a/a4/Flag_of_the_United_States.svg',
      area: 9629091,
      population: 324459463,
    },
    {
      name: 'China',
      flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
      area: 9596960,
      population: 1409517397,
    },
  ];
  constructor(
    private fb: FormBuilder
  ) {
    this.filter = this.fb.control("", { nonNullable: true });
  }
}
