import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetaOfferComponent } from './camiseta-offer.component';

describe('CamisetaOfferComponent', () => {
  let component: CamisetaOfferComponent;
  let fixture: ComponentFixture<CamisetaOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamisetaOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisetaOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
