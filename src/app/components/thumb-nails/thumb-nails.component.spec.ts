import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbNailsComponent } from './thumb-nails.component';

describe('ThumbNailsComponent', () => {
  let component: ThumbNailsComponent;
  let fixture: ComponentFixture<ThumbNailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbNailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbNailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
