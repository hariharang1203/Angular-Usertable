import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramecomponentComponent } from './framecomponent.component';

describe('FramecomponentComponent', () => {
  let component: FramecomponentComponent;
  let fixture: ComponentFixture<FramecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FramecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FramecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
