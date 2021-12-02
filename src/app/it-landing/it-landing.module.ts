import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { LandingPageRoutingModule } from "./it-landing.page.routing.module";
import { LandingPageComponent } from "./it-landing.page.component";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
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
  LandingPageRoutingModule, // MANIFEST CHECK ROUTING MODULE
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  LandingPageComponent, // LandingPageComponent
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
export class LandingPageModule {}
