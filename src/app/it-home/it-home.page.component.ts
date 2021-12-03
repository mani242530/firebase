import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import * as location from '../json/location';

@Component({
  selector: 'app-home',
  templateUrl: './it-home.page.component.html',
  styleUrls: ['./it-home.page.component.scss'],
})
export class HomePageComponent implements OnInit {
  locations;

  searchCompanyForm: FormGroup;
  @ViewChild('searchForm') createForm: FormGroupDirective;
  constructor() {
    this.locations = location.locationData;
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.searchCompanyForm = new FormGroup({
      from: new FormControl(''),
      to: new FormControl(''),
    });
  }
}
