import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule, Routes, UrlTree } from '@angular/router';
import { Location } from '@angular/common'

import { AppComponent } from './app.component';
import { DealListingComponent } from './deal-listing/deal-listing.component';
import { DealDetailsComponent } from './deal-details/deal-details.component';
import { DealRedemptionDialogComponent } from './deal-redemption-dialog/deal-redemption-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', component: DealListingComponent },
  { path: ':id', component: DealDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // { path: '**', component: AppComponent },
  // { path: 'deals', component: DealListingComponent },
  // { path: 'deals/:id', component: DealDetailsComponent },
  // // { path: '', redirectTo: 'deals', pathMatch: 'full' },
  // { path: '**', redirectTo: 'deals', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  declarations: [
    AppComponent,
    DealListingComponent,
    DealDetailsComponent,
    DealRedemptionDialogComponent,
  ],
  providers: [],
  entryComponents: [
    AppComponent,
    // DealRedemptionDialogComponent,
  ],
  // bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private injector: Injector,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    ) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('se-web-elem-hello-world', el);
    console.log('se id: ' + this.route.snapshot.params);
    console.log('se id query params: ' + this.route.snapshot.queryParams);
    this.location
      .subscribe((data) =>
      {
      this.router.navigateByUrl(data.url as string | UrlTree);
    });

    // //using this router outlet is loaded normally on init
    this.router.navigateByUrl(this.location.path(true));
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    if (document.querySelector('app-root')) {
      appRef.bootstrap(AppComponent);
    }
  }
}
