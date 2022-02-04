import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMembershipComponent } from './choose-membership.component';

describe('ChooseMembershipComponent', () => {
  let component: ChooseMembershipComponent;
  let fixture: ComponentFixture<ChooseMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseMembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
