import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'timeline', component: TimelinePageComponent },
  { path: 'detail/:id', component: EventPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
