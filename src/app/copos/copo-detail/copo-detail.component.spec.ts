import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopoDetailComponent } from './copo-detail.component';

describe('CopoDetailComponent', () => {
  let component: CopoDetailComponent;
  let fixture: ComponentFixture<CopoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
