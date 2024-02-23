import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPressHoldButton } from './angular-press-hold-button.component';

describe('AngularPressHoldButton', () => {
  let component: AngularPressHoldButton;
  let fixture: ComponentFixture<AngularPressHoldButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularPressHoldButton],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularPressHoldButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
