import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainDrawerComponent } from './main-drawer.component';

describe('AppMainDrawerComponent', () => {
  let component: AppMainDrawerComponent;
  let fixture: ComponentFixture<AppMainDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMainDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
