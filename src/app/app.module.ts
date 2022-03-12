import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Universal components/header/header.component';
import { CarouselComponent } from './Layouts/home-page/Carousel/carousel.component';
import { HomePageLayoutComponent } from './Layouts/home-page/home-page-layout.component';
import { ProjectsPageLayoutComponent } from './Layouts/projects-page/projects-page-layout.component';
import { SchedulePageLayoutComponent } from './Layouts/schedule-page/schedule-page-layout.component';
import { UpcomingEventsPageLayoutComponent } from './Layouts/upcoming-events-page/upcoming-events-page-layout.component';
import { VideosPageLayoutComponent } from './Layouts/videos-page/videos-page-layout.component';
import { FooterComponent } from './Universal components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageLayoutComponent,
    HeaderComponent,
    ProjectsPageLayoutComponent,
    SchedulePageLayoutComponent,
    UpcomingEventsPageLayoutComponent,
    VideosPageLayoutComponent,
    CarouselComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
