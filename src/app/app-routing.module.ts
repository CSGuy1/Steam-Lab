import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageLayoutComponent } from './Layouts/home-page/home-page-layout.component';
import { ProjectsPageLayoutComponent } from './Layouts/projects-page/projects-page-layout.component';
import { SchedulePageLayoutComponent } from './Layouts/schedule-page/schedule-page-layout.component';
import { UpcomingEventsPageLayoutComponent } from './Layouts/upcoming-events-page/upcoming-events-page-layout.component';
import { VideosPageLayoutComponent } from './Layouts/videos-page/videos-page-layout.component';

const routes: Routes = [
  { path: '', component: HomePageLayoutComponent },
  { path: 'Home', component: HomePageLayoutComponent },
  { path: 'Projects', component: ProjectsPageLayoutComponent },
  { path: 'Schedule', component: SchedulePageLayoutComponent },
  { path: 'Videos', component: VideosPageLayoutComponent },
  { path: 'Upcoming-Events', component: UpcomingEventsPageLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
