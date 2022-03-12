import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageLayoutComponent } from './Layouts/home-page/home-page-layout.component';
import { ProjectsPageLayoutComponent } from './Layouts/projects-page/projects-page-layout.component';
import { SchedulePageLayoutComponent } from './Layouts/schedule-page/schedule-page-layout.component';
import { UpcomingEventsPageLayoutComponent } from './Layouts/upcoming-events-page/upcoming-events-page-layout.component';
import { VideosPageLayoutComponent } from './Layouts/videos-page/videos-page-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageLayoutComponent,
    HeaderComponent,
    ProjectsPageLayoutComponent,
    SchedulePageLayoutComponent,
    UpcomingEventsPageLayoutComponent,
    VideosPageLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
