import { Component, OnInit } from '@angular/core';
import { MembershipService } from "../services/membership.service";

@Component({
  selector: 'app-choose-membership',
  templateUrl: './choose-membership.component.html',
  styleUrls: ['./choose-membership.component.css']
})
export class ChooseMembershipComponent implements OnInit {

  public chosenMembership: string = "";

  constructor(public membershipService: MembershipService) { }

  ngOnInit(): void {
    this.chosenMembership = this.membershipService.getMembership()
  }

  chooseMembership(membership: string): void {
    this.chosenMembership = membership;
    this.membershipService.setMembership(membership);
  }
}
