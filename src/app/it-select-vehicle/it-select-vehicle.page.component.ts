import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-vehicle',
  templateUrl: './it-select-vehicle.page.component.html',
  styleUrls: ['./it-select-vehicle.page.component.scss'],
})
export class SelectVehiclePageComponent implements OnInit {
  vehicleTypes = [
    'APP.VEHICLE_TYPE.LCV',
    'APP.VEHICLE_TYPE.TRAILER',
    'APP.VEHICLE_TYPE.TRUCK',
    'APP.VEHICLE_TYPE.OPEN_TRUCK',
    'APP.VEHICLE_TYPE.20_FT_CBT',
    'APP.VEHICLE_TYPE.32_FT_SINGLE_EXCEL',
    'APP.VEHICLE_TYPE.20_FT_IMPORT_EXPORT',
    'APP.VEHICLE_TYPE.40_FT_IMPORT_EXPORT',
    'APP.VEHICLE_TYPE.32_FT_MULTI_AXLE',
  ];
  constructor() {}

  ngOnInit() {}
}
