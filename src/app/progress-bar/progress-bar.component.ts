import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  currentStep: string | undefined = "";
  statusMitgliedschaft: string = "";
  statusAdresse: string = "";
  statusBezahlung: string = "";
  statusBestaetigung: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentStep = this.router.url.split('/').pop();
    this.correctDisplay();
  }

  private correctDisplay() {
    if(this.currentStep === "mitgliedschaft") {
      this.statusMitgliedschaft = "active";
      this.statusAdresse = "";
      this.statusBezahlung = "";
      this.statusBestaetigung = "";
    } else if (this.currentStep === "adresse") {
      this.statusMitgliedschaft = "completed";
      this.statusAdresse = "active";
      this.statusBezahlung = "";
      this.statusBestaetigung = "";
    } else if (this.currentStep === "bezahlung") {
      this.statusMitgliedschaft = "completed";
      this.statusAdresse = "completed";
      this.statusBezahlung = "active";
      this.statusBestaetigung = "";
    } else if (this.currentStep === "bestaetigung") {
      this.statusMitgliedschaft = "completed";
      this.statusAdresse = "completed";
      this.statusBezahlung = "completed";
      this.statusBestaetigung = "completed";
    }
  }


}
