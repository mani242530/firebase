import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { Company } from '../models/contact';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.page.html',
  styleUrls: ['./new-contact.page.scss'],
})
export class NewContactPage implements OnInit {
  createContactForm: FormGroup;
  @ViewChild('createForm') createForm: FormGroupDirective;

  constructor(
    private modalController: ModalController,
    private dataService: DataService
  ) {}

  dismissModal() {
    this.modalController.dismiss();
  }

  ngOnInit(): void {
    this.createContactForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      companyName: new FormControl('', Validators.required),
      firmActivity: new FormControl('', Validators.required),
      serviceProviding: new FormControl('', Validators.required),
      landlineNumber: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
    });
  }

  submitForm() {
    this.createForm.onSubmit(undefined);
  }

  createContact(values: any) {
    // copy all the form values into the new contact
    let newContact: Company = { ...values };
    this.dataService.createContact(newContact);
    this.dismissModal();
  }
}
