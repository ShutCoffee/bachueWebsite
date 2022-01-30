
export class Mitgliedschaft {
  memberKind: string;
  yearlyContribution: number;

  constructor(memberKind: string, yearlyContribution: number) {
    this.memberKind = memberKind;
    this.yearlyContribution = yearlyContribution;
  }
}
