import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import * as fromUser from './+state/user/user.reducer';
import { UserEffects } from './+state/user/user.effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forRoot([UserEffects]),
    NgbModule,
    // NgbModule
  ],
  providers: [
    HttpClientModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
