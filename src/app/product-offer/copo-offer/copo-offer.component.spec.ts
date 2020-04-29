import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopoOfferComponent } from './copo-offer.component';

describe('CopoOfferComponent', () => {
  let component: CopoOfferComponent;
  let fixture: ComponentFixture<CopoOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopoOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopoOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
