import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TimelinePageComponent } from "./timeline-page/timeline-page.component";
import { EventPageComponent } from "./event-page/event-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PhotoUploadComponent } from "./upload-photo/photo-upload.component";
import { DiscoverComponent } from "./discover-page/discover.component";
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "timeline", component: TimelinePageComponent },
  { path: "detail/:id", component: EventPageComponent },
  { path: "upload", component: PhotoUploadComponent },
  { path: "discover", component: DiscoverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
