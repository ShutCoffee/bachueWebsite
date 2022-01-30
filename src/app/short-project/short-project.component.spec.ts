import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortProjectComponent } from './short-project.component';

describe('ShortProjectComponent', () => {
  let component: ShortProjectComponent;
  let fixture: ComponentFixture<ShortProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
