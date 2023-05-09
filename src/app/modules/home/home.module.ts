import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { TileModule } from '@lht/tile';
import { TranslateModule } from '@ngx-translate/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, TranslateModule, HomeRoutingModule,
    //  TileModule
    ],
  exports: [HomeComponent],
})
export class HomeModule {}
