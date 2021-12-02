import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { Observable, BehaviorSubject } from 'rxjs';
import { Company } from '../models/contact';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './it-listing.page.component.html',
  styleUrls: ['./it-listing.page.component.scss'],
})
export class ListingPageComponent implements OnInit {
  companys: any;
  showLoading = true;

  // @ViewChild(CdkVirtualScrollViewport, { static: true })
  // viewport: CdkVirtualScrollViewport;

  constructor(
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private dataService: DataService
  ) {
    this.showLoading = true;
    this.dataService.getContacts().subscribe((data: any) => {
      this.showLoading = false;
      this.companys = data;
    });
  }

  async ngOnInit() {}

  trackByFn(_, item) {
    return item.id;
  }
}
