import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcomponentComponent } from './eventcomponent.component';

describe('EventcomponentComponent', () => {
  let component: EventcomponentComponent;
  let fixture: ComponentFixture<EventcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
