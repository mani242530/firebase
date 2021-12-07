import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  FormControl,
  Validators,
} from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { AccountSuccessModalComponent } from '../it-modal/account-success/account-success.component';
import * as location from '../json/location';
import { Company } from '../models/contact';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './it-signup.page.component.html',
  styleUrls: ['./it-signup.page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  myModal: any;
  newCompany: Company = new Company();

  createCompanyForm: FormGroup;
  @ViewChild('createForm') createForm: FormGroupDirective;

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

  locations = [];

  constructor(
    public modalController: ModalController,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.locations = location.locationData;
    this.initializeForm();
  }

  initializeForm(): void {
    this.createCompanyForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      companyName: new FormControl('', Validators.required),
      firmActivity: new FormControl('', Validators.required),
      serviceProviding: new FormControl('', Validators.required),
      landlineNumber: new FormControl(''),
      mobileNumber: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
    });
  }

  createCompany(values: any) {
    // copy all the form values into the new contact
    const newCompany: Company = { ...values };
    console.log(newCompany);
    this.dataService.createContact(newCompany);
    this.presentModal();
  }

  async presentModal() {
    this.myModal = await this.modalController.create({
      component: AccountSuccessModalComponent,
      swipeToClose: true,
      backdropDismiss: true,
    });
    return await this.myModal.present();
  }
}
