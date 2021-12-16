import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from "@angular/material/toolbar";
import { FlexLayoutModule} from "@angular/flex-layout";
import { CatalogComponent } from './catalog/catalog.component';
import { MatListModule} from "@angular/material/list";
import { MatGridListModule} from "@angular/material/grid-list";
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { MatCardModule } from '@angular/material/card';
import { GoodsComponent } from './goods/goods.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'
//import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ItemdetailComponent,
    GoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
   // NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
