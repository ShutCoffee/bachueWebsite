import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { MitgliedschaftComponent } from "./mitgliedschaft/mitgliedschaft.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import {UeberUnsComponent} from "./ueber-uns/ueber-uns.component";
import {ChooseMembershipComponent} from "./choose-membership/choose-membership.component";
import {AddressFormComponent} from "./address-form/address-form.component";
import {PaymentFormComponent} from "./payment-form/payment-form.component";
import {ConfirmationComponent} from "./confirmation/confirmation.component";
import {SpendenComponent} from "./spenden/spenden.component";
import {NewsComponent} from "./news/news.component";

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'mitgliedschaft', component: MitgliedschaftComponent,
  children: [
    { path: 'mitgliedschaft', component: ChooseMembershipComponent},
    { path: 'adresse', component: AddressFormComponent},
    { path: 'bezahlung', component: PaymentFormComponent},
    { path: 'bestaetigung', component: ConfirmationComponent}
  ]},
  { path: 'project/:name', component: ProjectDetailComponent},
  { path: 'über-uns', component: UeberUnsComponent},
  { path: 'spenden', component: SpendenComponent},
  { path: 'news', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
