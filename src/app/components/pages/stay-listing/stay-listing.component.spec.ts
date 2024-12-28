import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayListingComponent } from './stay-listing.component';

describe('StayListingComponent', () => {
  let component: StayListingComponent;
  let fixture: ComponentFixture<StayListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StayListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
