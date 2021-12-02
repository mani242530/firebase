/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./it-landing.page.component";

/**
 * Routes
 */
const routes: Routes = [
  {
    path: "", // path
    component: LandingPageComponent, // component
  },
];

/**
 * Ng module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)], // imports
  exports: [RouterModule], // exports
})

/**
 * LandingPageRoutingModule
 */
export class LandingPageRoutingModule {}
