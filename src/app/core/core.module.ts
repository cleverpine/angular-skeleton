import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '@shared/shared.module';
import { AppConfigService, PROD } from './services/app-config.service';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './services/auth.service';

export function getBasePath(appConfig: AppConfigService) {
  return appConfig.getBasePath();
}

export function isProd(appConfig: AppConfigService) {
  return appConfig.isProd();
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

export function initializeApp(
  appConfigService: AppConfigService,
  authService: AuthService,
  translate: TranslateService
) {
  return async () => {
    await appConfigService.loadConfig();
    const keycloakUrl = appConfigService.getSsoServerUrl();
    const keycloakRealm = appConfigService.getSsoServerRealm();
    const keycloakClientId = appConfigService.getSsoServerClientId();
    authService.init(keycloakUrl, keycloakClientId, keycloakRealm);
    authService.login();
    translate.setDefaultLang('en');
    await translate.use('en').toPromise();
  }
}

@NgModule({
  declarations: [
    NotFoundPageComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    NotFoundPageComponent,
    LayoutComponent,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [
        AppConfigService,
        AuthService,
        TranslateService,
      ],
      multi: true,
    },
    {
      provide: PROD,
      useFactory: isProd,
      deps: [AppConfigService],
      multi: false,
    },
  ],
})
export class CoreModule { }
