import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitgliedschaftComponent } from './mitgliedschaft.component';

describe('MitgliedschaftComponent', () => {
  let component: MitgliedschaftComponent;
  let fixture: ComponentFixture<MitgliedschaftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitgliedschaftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MitgliedschaftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
