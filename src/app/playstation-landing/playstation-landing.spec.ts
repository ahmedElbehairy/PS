import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystationLanding } from './playstation-landing';

describe('PlaystationLanding', () => {
  let component: PlaystationLanding;
  let fixture: ComponentFixture<PlaystationLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaystationLanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaystationLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
