import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuUiComponent } from './top-menu-ui.component';

describe('TopMenuUiComponent', () => {
  let component: TopMenuUiComponent;
  let fixture: ComponentFixture<TopMenuUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMenuUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
