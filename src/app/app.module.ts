import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layouts/home-page/header/header.component';
import { HomePageLayoutComponent } from './Layouts/home-page/home-page-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageLayoutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
