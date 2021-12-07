import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { HomePageComponent } from "./it-home.page.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HomePageRoutingModule } from "./it-home.routing.module";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
];

/**
 * MODULES
 */
const MODULES = [
  CommonModule,
  FormsModule,
  IonicModule,
  RouterModule.forChild(routes),
  FontAwesomeModule,
  HomePageRoutingModule,
  TranslateModule
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  HomePageComponent, // HomePageComponent
];

/**
 * PROVIDERS
 */
const PROVIDERS = [];

/**
 * Ng module
 */
@NgModule({
  imports: MODULES,
  exports: COMPONENTS,
  declarations: COMPONENTS,
  providers: PROVIDERS,
})
export class HomePageModule {}
