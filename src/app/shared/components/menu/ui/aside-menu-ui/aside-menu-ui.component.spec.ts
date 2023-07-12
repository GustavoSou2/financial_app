import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideMenuUiComponent } from './aside-menu-ui.component';

describe('AsideMenuUiComponent', () => {
  let component: AsideMenuUiComponent;
  let fixture: ComponentFixture<AsideMenuUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideMenuUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideMenuUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
