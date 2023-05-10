import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchThemeButtonComponent } from './switch-theme-button.component';

describe('SwitchThemeButtonComponent', () => {
  let component: SwitchThemeButtonComponent;
  let fixture: ComponentFixture<SwitchThemeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchThemeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchThemeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
