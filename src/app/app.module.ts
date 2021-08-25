import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AuthenticateComponent } from './component/authenticate/authenticate.component';
import { JwtInterceptor } from './config/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './config/interceptors/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastComponent } from './toast/toast.component';
import { FormsHeaderComponent } from './projects/forms/forms-header/forms-header.component';
import { FormsFooterComponent } from './projects/forms/forms-footer/forms-footer.component';
import { StorageCountPipe } from './shared/storage-count.pipe';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    ToastComponent,
    FormsHeaderComponent,
    FormsFooterComponent,
    StorageCountPipe
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
    // ngrx 32 kb only
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forRoot([UserEffects]),
    NgbModule, // 67 kb
    BrowserAnimationsModule, // 70 kb
  ],
  providers: [
    HttpClientModule,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
