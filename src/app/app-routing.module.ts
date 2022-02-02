import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { MitgliedschaftComponent } from "./mitgliedschaft/mitgliedschaft.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'unterstützen', component: MitgliedschaftComponent},
  { path: 'project/:name', component: ProjectDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
