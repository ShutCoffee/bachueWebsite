import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ShortNewsComponent } from './short-news/short-news.component';
import { ShortProjectComponent } from './short-project/short-project.component';
import { FooterComponent } from './footer/footer.component';
import { MitgliedschaftComponent } from './mitgliedschaft/mitgliedschaft.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule} from "@angular/forms";
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { UeberUnsComponent } from './ueber-uns/ueber-uns.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ChooseMembershipComponent } from './choose-membership/choose-membership.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {MatTabsModule} from "@angular/material/tabs";
import { SpendenComponent } from './spenden/spenden.component';
import { NewsPreviewComponent } from './news-preview/news-preview.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ShortNewsComponent,
    ShortProjectComponent,
    FooterComponent,
    MitgliedschaftComponent,
    ProjectDetailComponent,
    LatestNewsComponent,
    UeberUnsComponent,
    ProgressBarComponent,
    ChooseMembershipComponent,
    AddressFormComponent,
    PaymentFormComponent,
    ConfirmationComponent,
    SpendenComponent,
    NewsPreviewComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
