import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColorSettingsComponent } from './card-color-settings.component';

describe('CardColorSettingsComponent', () => {
  let component: CardColorSettingsComponent;
  let fixture: ComponentFixture<CardColorSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardColorSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardColorSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
