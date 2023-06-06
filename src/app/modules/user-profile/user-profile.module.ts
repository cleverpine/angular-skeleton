import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [UserProfileComponent, UserDetailsComponent],
  imports: [CommonModule, UserProfileRoutingModule, TranslateModule],
  exports: [UserProfileComponent],
})
export class UserProfileModule {}
