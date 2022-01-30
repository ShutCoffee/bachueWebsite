import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { MitgliedschaftComponent } from "./mitgliedschaft/mitgliedschaft.component";

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'mitgliedschaft', component: MitgliedschaftComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
