import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    public translateService: TranslateService
  ) {
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translateService.setDefaultLang('en');

    // if (this.translateService.getBrowserLang() !== undefined) {
    //   this.translateService.use(this.translateService.getBrowserLang());
    // } else {
    //   this.translateService.use("en"); // Set your language here
    // }
  }

  signOut() {
    this.router.navigate(['/get-started']);
  }
}
