import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-vehicle',
  templateUrl: './it-select-vehicle.page.component.html',
  styleUrls: ['./it-select-vehicle.page.component.scss'],
})
export class SelectVehiclePageComponent implements OnInit {
  vehicleTypes = [
    'LCV',
    'Trailer',
    'Truck (Taurus)',
    'Open Trucks',
    '20ft Container (CBT and Open)',
    '32ft Container Single Excel',
    '20ft Container (Import and Export)',
    '40ft Container (Import and Export)',
    '32ft Container Multi Axle Excel',
  ];
  constructor() {}

  ngOnInit() {}
}
