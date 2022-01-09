import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppMainDrawerComponent } from './main-drawer/main-drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainDrawerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
