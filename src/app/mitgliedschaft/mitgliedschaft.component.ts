import { Component, OnInit } from '@angular/core';
import {Mitgliedschaft} from "../models/mitgliedschaft.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mitgliedschaft',
  templateUrl: './mitgliedschaft.component.html',
  styleUrls: ['./mitgliedschaft.component.css']
})
export class MitgliedschaftComponent implements OnInit {

  public mitgliedschaft: Mitgliedschaft =  new Mitgliedschaft("active", 0);
  public alert = "";
  validation: string = "";
  currentStep: string | undefined = "";
  nextButton: string = "";
  backButton: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentStep = this.router.url.split('/').pop();
    this.configureButtons();
  }

  private configureButtons(): void {
    if(this.currentStep === "mitgliedschaft") {
      this.nextButton = "adresse";
      this.backButton = "";
    } else if (this.currentStep === "adresse") {
      this.nextButton = "bezahlung";
      this.backButton = "mitgliedschaft";
    } else if (this.currentStep === "bezahlung") {
      this.nextButton = "bestaetigung";
      this.backButton = "adresse";
    } else if (this.currentStep === "bestaetigung") {
      this.nextButton = "";
      this.backButton = "bezahlung";
    }
  }

}
