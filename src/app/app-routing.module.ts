import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { MitgliedschaftComponent } from "./mitgliedschaft/mitgliedschaft.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import {UeberUnsComponent} from "./ueber-uns/ueber-uns.component";

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'unterstützen', component: MitgliedschaftComponent},
  { path: 'project/:name', component: ProjectDetailComponent},
  { path: 'über-uns', component: UeberUnsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
