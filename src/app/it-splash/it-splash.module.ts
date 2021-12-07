import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { SplashPageComponent } from "./it-splash.page.component";
import { SplashPageRoutingModule } from "./it-splash.routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "../services/data.service";

const routes: Routes = [
  {
    path: "",
    component: SplashPageComponent,
  },
];

/**
 * MODULES
 */
const MODULES = [
  FormsModule,
  IonicModule,
  CommonModule, // COMMON MODULE
  RouterModule.forChild(routes),
  SplashPageRoutingModule, // SplashPageRoutingModule
  FontAwesomeModule,
  TranslateModule
  // TranslateModule.forRoot({
  //   loader: {
  //     provide: TranslateLoader,
  //     useFactory: HttpLoaderFactory,
  //     deps: [HttpClient],
  //   },
  // }),
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  SplashPageComponent, // SplashPageComponent
];

/**
 * PROVIDERS
 */
const PROVIDERS = [DataService];

/**
 * Ng module
 */
@NgModule({
  imports: MODULES,
  exports: COMPONENTS,
  declarations: COMPONENTS,
  providers: PROVIDERS,
})
export class SplashPageModule {}

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, "i18n/", ".json");
// }
