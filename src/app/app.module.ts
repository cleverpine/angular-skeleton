import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { UserProfileModule } from './modules/user-profile/user-profile.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    UserProfileModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
