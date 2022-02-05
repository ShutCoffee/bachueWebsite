import { Injectable } from '@angular/core';
import { Mitgliedschaft } from "../models/mitgliedschaft.model";

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  private membership: Mitgliedschaft = new Mitgliedschaft('')

  constructor() { }

  public setMembership(membership: string): void {
    this.membership.memberKind = membership;
  }

  public getMembership(): string {
    return this.membership.memberKind;
  }

}
