import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Company } from '../models/contact';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './it-listing-detail.page.component.html',
  styleUrls: ['./it-listing-detail.page.component.scss'],
})
export class ListingDetailPageComponent implements OnInit {
  id: number;
  company: Company;
  sub1: Subscription;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.sub1 = this.dataService.getContactById(id).subscribe((data) => {
      // if the contact doesn't exists, return to home page
      if (!data) {
        this.router.navigate(['/listing']);
      } else {
        this.company = data;
      }
    });
  }

  ngOnDestroy() {}
}
