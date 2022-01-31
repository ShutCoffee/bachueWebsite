import { Component, OnInit } from '@angular/core';
import {Mitgliedschaft} from "../models/mitgliedschaft.model";

@Component({
  selector: 'app-mitgliedschaft',
  templateUrl: './mitgliedschaft.component.html',
  styleUrls: ['./mitgliedschaft.component.css']
})
export class MitgliedschaftComponent implements OnInit {

  public mitgliedschaft: Mitgliedschaft =  new Mitgliedschaft("active", 0);
  public alert = "";
  validation: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  checkContribution() {
    if(this.mitgliedschaft.memberKind == "active") {
      if(this.mitgliedschaft.yearlyContribution < 30) {
        this.alert = "Der Mindestbetrag ist 30.- pro Jahr."
        this.validation = "is-invalid"
      } else {
        this.alert = "";
        this.validation = ""
      }
    }
    if(this.mitgliedschaft.memberKind == "passive") {
      if(this.mitgliedschaft.yearlyContribution < 50) {
        this.alert = "Der Mindestbetrag ist 50.- pro Jahr."
        this.validation = "is-invalid"
      } else {
        this.alert = "";
        this.validation = ""
      }
    }
    if(this.mitgliedschaft.memberKind == "gönner") {
      if(this.mitgliedschaft.yearlyContribution < 500) {
        this.alert = "Der Mindestbetrag ist 500.- pro Jahr."
        this.validation = "is-invalid"
      } else {
        this.alert = "";
        this.validation = ""
      }
    }
    if(this.mitgliedschaft.memberKind == "spende") {
        this.alert = "";
        this.validation = ""
    }
  }
}
