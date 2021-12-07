import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  templateUrl: './it-select-language.page.component.html',
  styleUrls: ['./it-select-language.page.component.scss'],
})
export class SelectLanguagePageComponent implements OnInit {
  languages = [
    {
    id: 'en',
    name: 'ENGLISH',
    },
    {
    id: 'hi',
    name: 'हिंदी',
    },
    {
    id: 'ma',
    name: 'मराठी',
    },
    {
    id: 'gu',
    name: 'ગુજરાતી',
    },
    {
    id: 'tn',
    name: 'தமிழ்',
    },
    {
    id: 'tl',
    name: 'తెలుగు',
    },
    {
    id: 'ka',
    name: 'ಕೆನಡಾ',
    },
    {
    id: 'ml',
    name: 'മലയാളം',
    },
  ];
  constructor(public translateService: TranslateService) {}

  ngOnInit() {}

  selectLanguage(language){
   this.translateService.use(language)
  }
}
