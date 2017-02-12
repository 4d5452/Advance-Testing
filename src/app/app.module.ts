import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { BannerComponent as BannerInlineComponent } from './banner-inline.component';
import { BannerComponent } from './banner.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    BannerComponent,
    BannerInlineComponent
 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
