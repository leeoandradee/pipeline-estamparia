import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoposComponent } from './copos.component';

describe('CoposComponent', () => {
  let component: CoposComponent;
  let fixture: ComponentFixture<CoposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
