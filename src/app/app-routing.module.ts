import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageLayoutComponent } from './Layouts/home-page/home-page-layout.component';

const routes: Routes = [
  { path: '', component: HomePageLayoutComponent },
  { path: 'Home', component: HomePageLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
