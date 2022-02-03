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
    LatestNewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
