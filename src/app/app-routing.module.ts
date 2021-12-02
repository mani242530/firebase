import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   {
//     path: 'home',
//     loadChildren: () =>
//       import('./home/home.module').then((m) => m.HomePageModule),
//   },
//   {
//     path: 'contact-details/:id',
//     loadChildren: () =>
//       import('./contact-details/contact-details.module').then(
//         (m) => m.ContactDetailsPageModule
//       ),
//   },
//   {
//     path: 'update-contact/:id',
//     loadChildren: () =>
//       import('./update-contact/update-contact.module').then(
//         (m) => m.UpdateContactPageModule
//       ),
//   },
// ];

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  {
    path: 'splash',
    loadChildren: () =>
      import('./it-splash/it-splash.module').then((m) => m.SplashPageModule),
  },
  {
    path: 'get-started',
    loadChildren: () =>
      import('./it-get-started/it-get-started.module').then(
        (m) => m.GetStartedPageModule
      ),
  },
  {
    path: 'select-language',
    loadChildren: () =>
      import('./it-select-language/it-select-language.module').then(
        (m) => m.SelectLanguagePageModule
      ),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./it-signin/it-signin.module').then((m) => m.SignInPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./it-signup/it-signup.module').then((m) => m.SignUpPageModule),
  },
  {
    path: 'verification',
    loadChildren: () =>
      import('./it-verification/it-verification.module').then(
        (m) => m.VerificationPageModule
      ),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./it-payment/it-payment.module').then((m) => m.PaymentPageModule),
  },
  {
    path: 'select-vehicle',
    loadChildren: () =>
      import('./it-select-vehicle/it-select-vehicle.module').then(
        (m) => m.SelectVehiclePageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./it-home/it-home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'listing',
    loadChildren: () =>
      import('./it-listing/it-listing.module').then((m) => m.ListingPageModule),
  },
  {
    path: 'listing-detail',
    loadChildren: () =>
      import('./it-listing-detail/it-listing-detail.module').then(
        (m) => m.ListingDetailPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
